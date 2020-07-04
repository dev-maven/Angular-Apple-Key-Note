import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetInheritedFactory, EventEmitter, Injector, ɵɵdirectiveInject, ɵɵdefinePipe, Pipe, ChangeDetectorRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelementStart, ɵɵlistener, ɵɵpipe, ɵɵelementEnd, ɵɵproperty, ɵɵpipeBind1, ɵɵsanitizeHtml, Component, Input, Output, ViewChild, ɵɵdefineDirective, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, merge, fromEvent } from 'rxjs';
import { share, map, distinctUntilChanged, tap, takeUntil, filter } from 'rxjs/operators';
import { __extends } from 'tslib';
import { DomSanitizer } from '@angular/platform-browser';
import { AsyncPipe, CommonModule } from '@angular/common';

var debug = false;
var hasShadow = 'attachShadow' in Element.prototype && 'getRootNode' in Element.prototype;
var hasSelection = !!(hasShadow && document.createElement('div').attachShadow({ mode: 'open' }).getSelection);
var hasShady = window.ShadyDOM && window.ShadyDOM.inUse;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var useDocument = !hasShadow || hasShady || (!hasSelection && !isSafari);
var validNodeTypes = [Node.ELEMENT_NODE, Node.TEXT_NODE, Node.DOCUMENT_FRAGMENT_NODE];
function isValidNode(node) {
    return validNodeTypes.includes(node.nodeType);
}
function findNode(s, parentNode, isLeft) {
    var nodes = parentNode.childNodes || parentNode.children;
    if (!nodes) {
        return parentNode; // found it, probably text
    }
    for (var i = 0; i < nodes.length; ++i) {
        var j = isLeft ? i : (nodes.length - 1 - i);
        var childNode = nodes[j];
        if (!isValidNode(childNode)) {
            continue;
        }
        debug && console.debug('checking child', childNode, 'IsLeft', isLeft);
        if (s.containsNode(childNode, true)) {
            if (s.containsNode(childNode, false)) {
                debug && console.info('found child', childNode);
                return childNode;
            }
            debug && console.info('descending child', childNode);
            return findNode(s, childNode, isLeft);
        }
        debug && console.info(parentNode, 'does NOT contain', childNode);
    }
    return parentNode;
}
var addInternalListener = (function () {
    if (hasSelection || useDocument) {
        // getSelection exists or document API can be used
        document.addEventListener('selectionchange', function (ev) {
            document.dispatchEvent(new CustomEvent('-shadow-selectionchange'));
        });
        return function () { };
    }
    var withinInternals = false;
    var handlers = [];
    document.addEventListener('selectionchange', function (ev) {
        if (withinInternals) {
            return;
        }
        document.dispatchEvent(new CustomEvent('-shadow-selectionchange'));
        withinInternals = true;
        window.setTimeout(function () {
            withinInternals = false;
        }, 0);
        handlers.forEach(function (fn) { return fn(ev); });
    });
    return function (fn) { return handlers.push(fn); };
})();
var wasCaret = false;
var resolveTask = null;
addInternalListener(function (ev) {
    var s = window.getSelection();
    if (s.type === 'Caret') {
        wasCaret = true;
    }
    else if (wasCaret && !resolveTask) {
        resolveTask = Promise.resolve(true).then(function () {
            wasCaret = false;
            resolveTask = null;
        });
    }
});
function containsNextElement(s, node, walkForward) {
    var start = node;
    while (node = walkFromNode(node, walkForward)) {
        // walking (left) can contain our own parent, which we don't want
        if (!node.contains(start)) {
            break;
        }
    }
    if (!node) {
        return false;
    }
    // we look for Element as .containsNode says true for _every_ text node, and we only care about
    // elements themselves
    return node instanceof Element && s.containsNode(node, true);
}
function getSelectionDirection(s, leftNode, rightNode) {
    if (s.type !== 'Range') {
        return undefined; // no direction
    }
    var measure = function () { return s.toString().length; };
    var initialSize = measure();
    debug && console.info("initial selection: \"" + s.toString() + "\"");
    if (initialSize === 1 && wasCaret && leftNode === rightNode) {
        // nb. We need to reset a single selection as Safari _always_ tells us the cursor was dragged
        // left to right (maybe RTL on those devices).
        // To be fair, Chrome has the same bug.
        debug && console.debug('resetting size=1');
        s.extend(leftNode, 0);
        s.collapseToEnd();
        return undefined;
    }
    var updatedSize;
    // Try extending forward and seeing what happens.
    s.modify('extend', 'forward', 'character');
    updatedSize = measure();
    debug && console.info("forward selection: \"" + s.toString() + "\"");
    if (updatedSize > initialSize || containsNextElement(s, rightNode, true)) {
        debug && console.info('got forward >, moving right');
        s.modify('extend', 'backward', 'character');
        return true;
    }
    else if (updatedSize < initialSize || !s.containsNode(leftNode)) {
        debug && console.info('got forward <, moving left');
        s.modify('extend', 'backward', 'character');
        return false;
    }
    // Maybe we were at the end of something. Extend backwards.
    // TODO(samthor): We seem to be able to get away without the 'backwards' case.
    s.modify('extend', 'backward', 'character');
    updatedSize = measure();
    debug && console.info("backward selection: \"" + s.toString() + "\"");
    if (updatedSize > initialSize || containsNextElement(s, leftNode, false)) {
        debug && console.info('got backwards >, moving left');
        s.modify('extend', 'forward', 'character');
        return false;
    }
    else if (updatedSize < initialSize || !s.containsNode(rightNode)) {
        debug && console.info('got backwards <, moving right');
        s.modify('extend', 'forward', 'character');
        return true;
    }
    // This is likely a select-all.
    return undefined;
}
function walkFromNode(node, walkForward) {
    if (!walkForward) {
        return node.previousSibling || node.parentNode || null;
    }
    while (node) {
        if (node.nextSibling) {
            return node.nextSibling;
        }
        node = node.parentNode;
    }
    return null;
}
function walkTextFromNode(node, isLeft, s) {
    for (; node; node = walkFromNode(node, isLeft)) {
        if (node.nodeType !== Node.TEXT_NODE) {
            continue;
        }
        var t = node.textContent;
        if (isLeft) {
            if (s.length < t.length) {
                return { node: node, offset: s.length };
            }
            var prefix = s.substr(0, t.length);
            if (prefix !== t) {
                console.debug('unexpected string prefix', prefix, 'expected', t);
            }
            s = s.substr(t.length);
        }
        else {
            if (s.length < t.length) {
                return { node: node, offset: t.length - s.length };
            }
            var suffix = s.substr(s.length - t.length);
            if (suffix !== t) {
                console.debug('unexpected string suffix', suffix, 'expected', t);
            }
            s = s.substr(0, s.length - t.length);
        }
    }
    return null; // too far
}
function initialSpace(node) {
    if (node.nodeType !== Node.TEXT_NODE) {
        return 0;
    }
    return /^\s*/.exec(node.textContent)[0].length;
}
function ignoredTrailingSpace(node) {
    if (node.nodeType !== Node.TEXT_NODE) {
        return 0;
    }
    var trailingSpaceCount = /\s*$/.exec(node.textContent)[0].length;
    if (!trailingSpaceCount) {
        return 0;
    }
    return trailingSpaceCount - 1; // always allow single last
}
var cachedRange = new Map();
function getRange(root) {
    if (hasSelection || useDocument) {
        var s = (useDocument ? document : root).getSelection();
        return s.rangeCount ? s.getRangeAt(0) : null;
    }
    var thisFrame = cachedRange.get(root);
    if (thisFrame) {
        return thisFrame;
    }
    var initialText = window.getSelection().toString();
    var result = internalGetShadowSelection(root);
    var rs = result.range && result.range.toString() || null;
    if (rs !== null && rs !== initialText) {
        // TODO: sometimes triggers on single-char hack etc
        if (rs.replace(/\s/g, '') !== initialText.replace(/\s/g, '')) {
            // nb. selection eats initial/ending space, range does not: if whitespace is the only
            // difference, then ignore
            console.warn('invalid range, initial text:', initialText);
            console.warn('vs', rs, result.mode, result.range);
        }
    }
    cachedRange.set(root, result.range);
    window.setTimeout(function () {
        cachedRange.delete(root);
    }, 0);
    debug && console.debug('getRange got', result);
    return result.range;
}
var fakeSelectionNode = document.createTextNode('');
function internalGetShadowSelection(root) {
    var range = document.createRange();
    var s = window.getSelection();
    // if (!s.containsNode(root.host, true)) {
    //   return {range: null, mode: 'none'};
    // }
    // TODO: inserting fake nodes isn't ideal, but containsNode doesn't work on nearby adjacent
    // text nodes (in fact it returns true for all text nodes on the page?!).
    // insert a fake 'before' node to see if it's selected
    root.insertBefore(fakeSelectionNode, root.childNodes[0]);
    var includesBeforeRoot = s.containsNode(fakeSelectionNode);
    fakeSelectionNode.remove();
    if (includesBeforeRoot) {
        return { range: null, mode: 'outside-before' };
    }
    // insert a fake 'after' node to see if it's selected
    root.appendChild(fakeSelectionNode);
    var includesAfterRoot = s.containsNode(fakeSelectionNode);
    fakeSelectionNode.remove();
    if (includesAfterRoot) {
        return { range: null, mode: 'outside-after' };
    }
    var measure = function () { return s.toString().length; };
    var initialSelectionContent = s.toString();
    if (!(s.type === 'Caret' || s.type === 'Range')) {
        return { range: null, mode: 'outside-after' };
    }
    var initialCaret = (s.type === 'Caret');
    var leftNode = findNode(s, root, true);
    var rightNode;
    var isNaturalDirection = undefined;
    if (s.type === 'Range') {
        rightNode = findNode(s, root, false); // get right node here _before_ getSelectionDirection
        isNaturalDirection = getSelectionDirection(s, leftNode, rightNode);
        // isNaturalDirection means "going right"
    }
    if (s.type === 'Caret') {
        // we might transition to being a caret, so don't check initial value
        s.extend(leftNode, 0);
        var at = measure();
        s.collapseToEnd();
        range.setStart(leftNode, at);
        range.setEnd(leftNode, at);
        return { range: range, mode: 'caret' };
    }
    else if (isNaturalDirection === undefined) {
        if (s.type !== 'Range') {
            throw new TypeError('unexpected type: ' + s.type);
        }
        // This occurs when we can't move because we can't extend left or right to measure the
        // direction we're moving in. Good news though: we don't need to _change_ the selection
        // to measure it, so just return immediately.
        range.setStart(leftNode, 0);
        range.setEnd(rightNode, rightNode.length);
        return { range: range, mode: 'all' };
    }
    var size = measure();
    var offsetLeft, offsetRight;
    // only one newline/space char is cared about
    var validRightLength = rightNode.length - ignoredTrailingSpace(rightNode);
    if (isNaturalDirection) {
        // walk in the opposite direction first
        s.extend(leftNode, 0);
        offsetLeft = measure() + initialSpace(leftNode); // measure doesn't include initial space
        // then in our actual direction
        s.extend(rightNode, validRightLength);
        offsetRight = validRightLength - (measure() - size);
        // then revert to the original position
        s.extend(rightNode, offsetRight);
    }
    else {
        // walk in the opposite direction first
        s.extend(rightNode, validRightLength);
        offsetRight = validRightLength - measure();
        // then in our actual direction
        s.extend(leftNode, 0);
        offsetLeft = measure() - size + initialSpace(leftNode); // doesn't include initial space
        // then revert to the original position
        s.extend(leftNode, offsetLeft);
    }
    if (debug) {
        if (leftNode === rightNode) {
            console.info('got string', leftNode.textContent.substr(offsetLeft, offsetRight - offsetLeft));
        }
        else {
            console.info('>>> string', leftNode.textContent.substr(offsetLeft));
            console.info('<<< string', rightNode.textContent.substr(0, offsetRight));
        }
    }
    range.setStart(leftNode, offsetLeft);
    range.setEnd(rightNode, offsetRight);
    return {
        mode: isNaturalDirection ? 'right' : 'left',
        range: range,
    };
}

var isSafari$1 = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var SelectionHelper = /** @class */ (function () {
    function SelectionHelper() {
    }
    SelectionHelper.prototype.get = function (container) {
        if (!container) {
            document.getSelection().removeAllRanges();
            return null;
        }
        var canvas = document.querySelector('pe-editor-canvas');
        var range = getRange(canvas.shadowRoot);
        if (!range) {
            return null;
        }
        var preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(container);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        var start = preSelectionRange.toString().length;
        return {
            start: start,
            end: start + range.toString().length,
            range: range,
            container: container,
            parentElement: range.endContainer.parentElement,
        };
    };
    SelectionHelper.prototype.restore = function (savedSelection) {
        if (!savedSelection) {
            return;
        }
        var doc = savedSelection.container.ownerDocument;
        var win = doc.defaultView;
        var range = doc.createRange();
        range.setStart(savedSelection.container, 0);
        range.collapse(true);
        var nodeStack = [savedSelection.container];
        var node;
        var foundStart = false;
        var stop = false;
        var charIndex = 0;
        while (!stop && (node = nodeStack.pop())) {
            if (node.nodeType == 3) {
                var nextCharIndex = charIndex + node.length;
                if (!foundStart &&
                    savedSelection.start >= charIndex &&
                    savedSelection.start <= nextCharIndex) {
                    range.setStart(node, savedSelection.start - charIndex);
                    foundStart = true;
                }
                if (foundStart &&
                    savedSelection.end >= charIndex &&
                    savedSelection.end <= nextCharIndex) {
                    range.setEnd(node, savedSelection.end - charIndex);
                    stop = true;
                }
                charIndex = nextCharIndex;
            }
            else {
                var i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }
        var selection = win.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    };
    SelectionHelper.prototype.findParentTag = function (selection, tagName, className, searchDepth) {
        if (searchDepth === void 0) { searchDepth = 10; }
        var parentTag = null;
        if (!selection || !selection.anchorNode || !selection.focusNode) {
            return null;
        }
        var boundNodes = [
            selection.anchorNode,
            selection.focusNode,
        ];
        boundNodes.forEach(function (parent) {
            var searchDepthIterable = searchDepth;
            while (searchDepthIterable > 0 && parent.parentNode) {
                if (!tagName || parent.tagName === tagName) {
                    parentTag = parent;
                    if (className &&
                        parent.classList &&
                        !parent.classList.contains(className)) {
                        parentTag = null;
                    }
                    if (parentTag) {
                        break;
                    }
                }
                parent = parent.parentNode;
                searchDepthIterable--;
            }
        });
        return parentTag;
    };
    return SelectionHelper;
}());

/* tslint:disable:member-ordering */
var TextEditorSelection = /** @class */ (function () {
    function TextEditorSelection(selectionHelper) {
        this.selectionHelper = selectionHelper;
        this.savedValueSubject = new BehaviorSubject(null);
        this.savedValue$ = this.savedValueSubject.asObservable().pipe(share());
    }
    Object.defineProperty(TextEditorSelection.prototype, "savedValue", {
        get: function () {
            return this.savedValueSubject.value;
        },
        set: function (selection) {
            this.savedValueSubject.next(selection);
        },
        enumerable: true,
        configurable: true
    });
    TextEditorSelection.prototype.saveSelection = function (selection) {
        this.savedValue = selection;
    };
    TextEditorSelection.prototype.getSelection = function (container) {
        return this.selectionHelper.get(container);
    };
    TextEditorSelection.prototype.restore = function () {
        this.selectionHelper.restore(this.savedValue);
    };
    TextEditorSelection.prototype.expandToTag = function (element) {
        // const selection = this.savedValue.data;
        // selection.removeAllRanges();
        // const range = document.createRange();
        // range.selectNodeContents(element);
        // selection.addRange(range);
    };
    TextEditorSelection.prototype.findParentTag = function (tagName) {
        if (!this.savedValue) {
            return null;
        }
        var parentElement = this.savedValue.range.endContainer.parentElement;
        while (parentElement && parentElement.tagName !== tagName && parentElement.tagName !== 'DIV') {
            parentElement = parentElement.parentElement;
        }
        return parentElement;
    };
    TextEditorSelection.ɵfac = function TextEditorSelection_Factory(t) { return new (t || TextEditorSelection)(ɵɵinject(SelectionHelper)); };
    TextEditorSelection.ɵprov = ɵɵdefineInjectable({ token: TextEditorSelection, factory: TextEditorSelection.ɵfac });
    return TextEditorSelection;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextEditorSelection, [{
        type: Injectable
    }], function () { return [{ type: SelectionHelper }]; }, null); })();

var ExecCommand;
(function (ExecCommand) {
    ExecCommand["CreateLink"] = "createLink";
    ExecCommand["Unlink"] = "unlink";
    ExecCommand["Bold"] = "bold";
    ExecCommand["Italic"] = "italic";
    ExecCommand["Underline"] = "underline";
    ExecCommand["FontName"] = "fontName";
    ExecCommand["FontSize"] = "fontSize";
    ExecCommand["ForeColor"] = "foreColor";
    ExecCommand["InsertHTML"] = "insertHTML";
    ExecCommand["InsertText"] = "insertText";
    ExecCommand["JustifyLeft"] = "justifyLeft";
    ExecCommand["JustifyRight"] = "justifyRight";
    ExecCommand["JustifyCenter"] = "justifyCenter";
    ExecCommand["JustifyFull"] = "justifyFull";
    ExecCommand["InsertOrderedList"] = "insertOrderedList";
    ExecCommand["InsertUnorderedList"] = "insertUnorderedList";
})(ExecCommand || (ExecCommand = {}));

var BaseTransform = /** @class */ (function () {
    function BaseTransform() {
    }
    BaseTransform.prototype.execCommand = function (command, value) {
        document.execCommand(command, false, value);
    };
    Object.defineProperty(BaseTransform.prototype, "isSelectionExist", {
        get: function () {
            return window.getSelection().type.toLowerCase() !== 'none';
        },
        enumerable: true,
        configurable: true
    });
    return BaseTransform;
}());

var BoldTransform = /** @class */ (function (_super) {
    __extends(BoldTransform, _super);
    function BoldTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoldTransform.prototype.toggle = function () {
        this.execCommand(ExecCommand.Bold);
    };
    Object.defineProperty(BoldTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.Bold);
        },
        enumerable: true,
        configurable: true
    });
    BoldTransform.ɵfac = function BoldTransform_Factory(t) { return ɵBoldTransform_BaseFactory(t || BoldTransform); };
    BoldTransform.ɵprov = ɵɵdefineInjectable({ token: BoldTransform, factory: BoldTransform.ɵfac });
    return BoldTransform;
}(BaseTransform));
var ɵBoldTransform_BaseFactory = ɵɵgetInheritedFactory(BoldTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(BoldTransform, [{
        type: Injectable
    }], null, null); })();

var ColorTransform = /** @class */ (function (_super) {
    __extends(ColorTransform, _super);
    function ColorTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ColorTransform.prototype, "value", {
        get: function () {
            return document.queryCommandValue(ExecCommand.ForeColor);
        },
        set: function (value) {
            this.execCommand(ExecCommand.ForeColor, value);
        },
        enumerable: true,
        configurable: true
    });
    ColorTransform.ɵfac = function ColorTransform_Factory(t) { return ɵColorTransform_BaseFactory(t || ColorTransform); };
    ColorTransform.ɵprov = ɵɵdefineInjectable({ token: ColorTransform, factory: ColorTransform.ɵfac });
    return ColorTransform;
}(BaseTransform));
var ɵColorTransform_BaseFactory = ɵɵgetInheritedFactory(ColorTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ColorTransform, [{
        type: Injectable
    }], null, null); })();

var ExternalLinkTransform = /** @class */ (function (_super) {
    __extends(ExternalLinkTransform, _super);
    function ExternalLinkTransform(selection) {
        var _this = _super.call(this) || this;
        _this.selection = selection;
        return _this;
    }
    Object.defineProperty(ExternalLinkTransform.prototype, "value", {
        get: function () {
            if (!this.selection.savedValue) {
                return null;
            }
            var parentElement = this.getParentLinkElement();
            return parentElement && parentElement.hasAttribute('href') ? parentElement.getAttribute('href') : null;
        },
        set: function (value) {
            value ? this.link(value) : this.unlink();
        },
        enumerable: true,
        configurable: true
    });
    ExternalLinkTransform.prototype.link = function (link) {
        // const anchorTag = this.selection.findParentTag('A');
        // if (anchorTag) {
        //   this.selection.expandToTag(anchorTag);
        // }
        this.execCommand(ExecCommand.CreateLink, this.getLinkWithHttps(link));
        // Update selection
        this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
        var parentElement = this.getParentLinkElement();
        parentElement.setAttribute('target', '_blank');
        // this.execCommand(ExecCommand.CreateLink);
    };
    ExternalLinkTransform.prototype.getParentLinkElement = function () {
        var parentElement = this.selection.savedValue.parentElement;
        while (parentElement && parentElement.tagName !== 'A') {
            parentElement = parentElement.parentElement;
        }
        return parentElement;
    };
    ExternalLinkTransform.prototype.getLinkWithHttps = function (link) {
        return ((link.indexOf('://') === -1) && (link.indexOf('mailto:') === -1)) ? "https://" + link : link;
    };
    ExternalLinkTransform.prototype.unlink = function () {
        this.execCommand(ExecCommand.Unlink);
    };
    ExternalLinkTransform.ɵfac = function ExternalLinkTransform_Factory(t) { return new (t || ExternalLinkTransform)(ɵɵinject(TextEditorSelection)); };
    ExternalLinkTransform.ɵprov = ɵɵdefineInjectable({ token: ExternalLinkTransform, factory: ExternalLinkTransform.ɵfac });
    return ExternalLinkTransform;
}(BaseTransform));
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExternalLinkTransform, [{
        type: Injectable
    }], function () { return [{ type: TextEditorSelection }]; }, null); })();

var FontFamilyTransform = /** @class */ (function (_super) {
    __extends(FontFamilyTransform, _super);
    function FontFamilyTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FontFamilyTransform.prototype, "value", {
        get: function () {
            var fontName = document.queryCommandValue(ExecCommand.FontName);
            return fontName ? fontName.replace(/['"]+/g, '') : null;
        },
        set: function (value) {
            this.execCommand(ExecCommand.FontName, value);
        },
        enumerable: true,
        configurable: true
    });
    FontFamilyTransform.ɵfac = function FontFamilyTransform_Factory(t) { return ɵFontFamilyTransform_BaseFactory(t || FontFamilyTransform); };
    FontFamilyTransform.ɵprov = ɵɵdefineInjectable({ token: FontFamilyTransform, factory: FontFamilyTransform.ɵfac });
    return FontFamilyTransform;
}(BaseTransform));
var ɵFontFamilyTransform_BaseFactory = ɵɵgetInheritedFactory(FontFamilyTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(FontFamilyTransform, [{
        type: Injectable
    }], null, null); })();

var FontSizeTransform = /** @class */ (function (_super) {
    __extends(FontSizeTransform, _super);
    function FontSizeTransform(selection) {
        var _this = _super.call(this) || this;
        _this.selection = selection;
        return _this;
    }
    Object.defineProperty(FontSizeTransform.prototype, "value", {
        get: function () {
            if (!this.selection.savedValue) {
                return null;
            }
            var parentElement = this.selection.savedValue.parentElement;
            while (parentElement && parentElement.tagName !== 'SPAN' && !parentElement.style.fontSize) {
                parentElement = parentElement.parentElement;
            }
            var size = parentElement ? parentElement.style.fontSize : null;
            return size ? parseInt(size, 10) : null;
        },
        set: function (value) {
            if (!this.selection.savedValue) {
                throw new Error('There is no selection');
            }
            document.execCommand('fontSize', false, '1');
            var fontElements = this.selection.savedValue.container.getElementsByTagName('font');
            Array.from(fontElements).forEach(function (el) {
                if (el.getAttribute('size') !== '1') {
                    return;
                }
                el.removeAttribute('size');
                el.style.fontSize = value + "px";
            });
        },
        enumerable: true,
        configurable: true
    });
    FontSizeTransform.ɵfac = function FontSizeTransform_Factory(t) { return new (t || FontSizeTransform)(ɵɵinject(TextEditorSelection)); };
    FontSizeTransform.ɵprov = ɵɵdefineInjectable({ token: FontSizeTransform, factory: FontSizeTransform.ɵfac });
    return FontSizeTransform;
}(BaseTransform));
/*@__PURE__*/ (function () { ɵsetClassMetadata(FontSizeTransform, [{
        type: Injectable
    }], function () { return [{ type: TextEditorSelection }]; }, null); })();

var ItalicTransform = /** @class */ (function (_super) {
    __extends(ItalicTransform, _super);
    function ItalicTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalicTransform.prototype.toggle = function () {
        this.execCommand(ExecCommand.Italic);
    };
    Object.defineProperty(ItalicTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.Italic);
        },
        enumerable: true,
        configurable: true
    });
    ItalicTransform.ɵfac = function ItalicTransform_Factory(t) { return ɵItalicTransform_BaseFactory(t || ItalicTransform); };
    ItalicTransform.ɵprov = ɵɵdefineInjectable({ token: ItalicTransform, factory: ItalicTransform.ɵfac });
    return ItalicTransform;
}(BaseTransform));
var ɵItalicTransform_BaseFactory = ɵɵgetInheritedFactory(ItalicTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ItalicTransform, [{
        type: Injectable
    }], null, null); })();

var JustifyCenterTransform = /** @class */ (function (_super) {
    __extends(JustifyCenterTransform, _super);
    function JustifyCenterTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JustifyCenterTransform.prototype.justify = function () {
        this.execCommand(ExecCommand.JustifyCenter);
    };
    Object.defineProperty(JustifyCenterTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.JustifyCenter);
        },
        enumerable: true,
        configurable: true
    });
    JustifyCenterTransform.ɵfac = function JustifyCenterTransform_Factory(t) { return ɵJustifyCenterTransform_BaseFactory(t || JustifyCenterTransform); };
    JustifyCenterTransform.ɵprov = ɵɵdefineInjectable({ token: JustifyCenterTransform, factory: JustifyCenterTransform.ɵfac });
    return JustifyCenterTransform;
}(BaseTransform));
var ɵJustifyCenterTransform_BaseFactory = ɵɵgetInheritedFactory(JustifyCenterTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(JustifyCenterTransform, [{
        type: Injectable
    }], null, null); })();

var JustifyFullTransform = /** @class */ (function (_super) {
    __extends(JustifyFullTransform, _super);
    function JustifyFullTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JustifyFullTransform.prototype.justify = function () {
        this.execCommand(ExecCommand.JustifyFull);
    };
    Object.defineProperty(JustifyFullTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.JustifyFull);
        },
        enumerable: true,
        configurable: true
    });
    JustifyFullTransform.ɵfac = function JustifyFullTransform_Factory(t) { return ɵJustifyFullTransform_BaseFactory(t || JustifyFullTransform); };
    JustifyFullTransform.ɵprov = ɵɵdefineInjectable({ token: JustifyFullTransform, factory: JustifyFullTransform.ɵfac });
    return JustifyFullTransform;
}(BaseTransform));
var ɵJustifyFullTransform_BaseFactory = ɵɵgetInheritedFactory(JustifyFullTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(JustifyFullTransform, [{
        type: Injectable
    }], null, null); })();

var JustifyLeftTransform = /** @class */ (function (_super) {
    __extends(JustifyLeftTransform, _super);
    function JustifyLeftTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JustifyLeftTransform.prototype.justify = function () {
        this.execCommand(ExecCommand.JustifyLeft);
    };
    Object.defineProperty(JustifyLeftTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.JustifyLeft);
        },
        enumerable: true,
        configurable: true
    });
    JustifyLeftTransform.ɵfac = function JustifyLeftTransform_Factory(t) { return ɵJustifyLeftTransform_BaseFactory(t || JustifyLeftTransform); };
    JustifyLeftTransform.ɵprov = ɵɵdefineInjectable({ token: JustifyLeftTransform, factory: JustifyLeftTransform.ɵfac });
    return JustifyLeftTransform;
}(BaseTransform));
var ɵJustifyLeftTransform_BaseFactory = ɵɵgetInheritedFactory(JustifyLeftTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(JustifyLeftTransform, [{
        type: Injectable
    }], null, null); })();

var JustifyRightTransform = /** @class */ (function (_super) {
    __extends(JustifyRightTransform, _super);
    function JustifyRightTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JustifyRightTransform.prototype.justify = function () {
        this.execCommand(ExecCommand.JustifyRight);
    };
    Object.defineProperty(JustifyRightTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.JustifyRight);
        },
        enumerable: true,
        configurable: true
    });
    JustifyRightTransform.ɵfac = function JustifyRightTransform_Factory(t) { return ɵJustifyRightTransform_BaseFactory(t || JustifyRightTransform); };
    JustifyRightTransform.ɵprov = ɵɵdefineInjectable({ token: JustifyRightTransform, factory: JustifyRightTransform.ɵfac });
    return JustifyRightTransform;
}(BaseTransform));
var ɵJustifyRightTransform_BaseFactory = ɵɵgetInheritedFactory(JustifyRightTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(JustifyRightTransform, [{
        type: Injectable
    }], null, null); })();

var PebLinkDatasetRouteKey = 'id';
var PebLinkDatasetURLKey = 'url';

var LinkTransform = /** @class */ (function (_super) {
    __extends(LinkTransform, _super);
    function LinkTransform(selection) {
        var _this = _super.call(this) || this;
        _this.selection = selection;
        return _this;
    }
    Object.defineProperty(LinkTransform.prototype, "value", {
        get: function () {
            if (!this.selection.savedValue) {
                return null;
            }
            var parentElement = this.selection.savedValue.parentElement;
            while (parentElement && parentElement.tagName !== 'A') {
                parentElement = parentElement.parentElement;
            }
            return parentElement && parentElement.dataset ? parentElement.dataset[PebLinkDatasetRouteKey] : null;
        },
        set: function (value) {
            value ? this.link(value) : this.unlink();
        },
        enumerable: true,
        configurable: true
    });
    LinkTransform.prototype.link = function (link) {
        var anchorTag = this.selection.findParentTag('A');
        if (anchorTag) {
            this.selection.expandToTag(anchorTag);
        }
        this.execCommand(ExecCommand.CreateLink, '#');
        // Update selection
        this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
        this.selection.savedValue.parentElement.dataset[PebLinkDatasetRouteKey] = link;
        this.execCommand(ExecCommand.CreateLink);
    };
    LinkTransform.prototype.unlink = function () {
        this.execCommand(ExecCommand.Unlink);
    };
    LinkTransform.ɵfac = function LinkTransform_Factory(t) { return new (t || LinkTransform)(ɵɵinject(TextEditorSelection)); };
    LinkTransform.ɵprov = ɵɵdefineInjectable({ token: LinkTransform, factory: LinkTransform.ɵfac });
    return LinkTransform;
}(BaseTransform));
/*@__PURE__*/ (function () { ɵsetClassMetadata(LinkTransform, [{
        type: Injectable
    }], function () { return [{ type: TextEditorSelection }]; }, null); })();

var OrderedTransform = /** @class */ (function (_super) {
    __extends(OrderedTransform, _super);
    function OrderedTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderedTransform.prototype.apply = function (currentValue) {
        if (this.value) {
            return this.removeTransformList(currentValue);
        }
        this.execCommand(ExecCommand.InsertOrderedList);
    };
    Object.defineProperty(OrderedTransform.prototype, "value", {
        get: function () {
            return document.queryCommandState(ExecCommand.InsertOrderedList);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Remove ordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    OrderedTransform.prototype.removeTransformList = function (currentValue) {
        if (!currentValue) {
            return currentValue;
        }
        var olList = currentValue.indexOf('<ol>');
        var olListClosed = currentValue.indexOf('</ol>');
        var listContent = currentValue.slice(olList + 4, olListClosed);
        var newListContent = listContent.replace(/<li>/g, '').replace(/<\/li>/g, isSafari$1 ? '' : '<br>');
        var firstPart = currentValue.split('<ol>');
        var secondPart = currentValue.split('</ol>');
        return firstPart[0].concat(newListContent).concat(secondPart[1]);
    };
    OrderedTransform.ɵfac = function OrderedTransform_Factory(t) { return ɵOrderedTransform_BaseFactory(t || OrderedTransform); };
    OrderedTransform.ɵprov = ɵɵdefineInjectable({ token: OrderedTransform, factory: OrderedTransform.ɵfac });
    return OrderedTransform;
}(BaseTransform));
var ɵOrderedTransform_BaseFactory = ɵɵgetInheritedFactory(OrderedTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(OrderedTransform, [{
        type: Injectable
    }], null, null); })();

var UnderlineTransform = /** @class */ (function (_super) {
    __extends(UnderlineTransform, _super);
    function UnderlineTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnderlineTransform.prototype.toggle = function () {
        this.execCommand(ExecCommand.Underline);
    };
    Object.defineProperty(UnderlineTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.Underline);
        },
        enumerable: true,
        configurable: true
    });
    UnderlineTransform.ɵfac = function UnderlineTransform_Factory(t) { return ɵUnderlineTransform_BaseFactory(t || UnderlineTransform); };
    UnderlineTransform.ɵprov = ɵɵdefineInjectable({ token: UnderlineTransform, factory: UnderlineTransform.ɵfac });
    return UnderlineTransform;
}(BaseTransform));
var ɵUnderlineTransform_BaseFactory = ɵɵgetInheritedFactory(UnderlineTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnderlineTransform, [{
        type: Injectable
    }], null, null); })();

var UnorderedTransform = /** @class */ (function (_super) {
    __extends(UnorderedTransform, _super);
    function UnorderedTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnorderedTransform.prototype.apply = function (currentValue) {
        if (this.value) {
            return this.removeTransformList(currentValue);
        }
        this.execCommand(ExecCommand.InsertUnorderedList);
    };
    Object.defineProperty(UnorderedTransform.prototype, "value", {
        get: function () {
            return document.queryCommandState(ExecCommand.InsertUnorderedList);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Remove unordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    UnorderedTransform.prototype.removeTransformList = function (currentValue) {
        if (!currentValue) {
            return currentValue;
        }
        var ulList = currentValue.indexOf('<ul>');
        var ulListClosed = currentValue.indexOf('</ul>');
        var listContent = currentValue.slice(ulList + 4, ulListClosed);
        var newListContent = listContent.replace(/<li>/g, '').replace(/<\/li>/g, isSafari$1 ? '' : '<br>');
        var firstPart = currentValue.split('<ul>');
        var secondPart = currentValue.split('</ul>');
        return firstPart[0].concat(newListContent).concat(secondPart[1]);
    };
    UnorderedTransform.ɵfac = function UnorderedTransform_Factory(t) { return ɵUnorderedTransform_BaseFactory(t || UnorderedTransform); };
    UnorderedTransform.ɵprov = ɵɵdefineInjectable({ token: UnorderedTransform, factory: UnorderedTransform.ɵfac });
    return UnorderedTransform;
}(BaseTransform));
var ɵUnorderedTransform_BaseFactory = ɵɵgetInheritedFactory(UnorderedTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnorderedTransform, [{
        type: Injectable
    }], null, null); })();

/* tslint:disable:member-ordering */
var StateService = /** @class */ (function () {
    function StateService(selection, boldTransform, colorTransform, fontFamilyTransform, fontSizeTransform, italicTransform, linkTransform, externalLinkTransform, underlineTransform, justifyLeftTransform, justifyRightTransform, justifyCenterTransform, justifyFullTransform, unorderedTransform, orderedTransform) {
        var _this = this;
        this.selection = selection;
        this.boldTransform = boldTransform;
        this.colorTransform = colorTransform;
        this.fontFamilyTransform = fontFamilyTransform;
        this.fontSizeTransform = fontSizeTransform;
        this.italicTransform = italicTransform;
        this.linkTransform = linkTransform;
        this.externalLinkTransform = externalLinkTransform;
        this.underlineTransform = underlineTransform;
        this.justifyLeftTransform = justifyLeftTransform;
        this.justifyRightTransform = justifyRightTransform;
        this.justifyCenterTransform = justifyCenterTransform;
        this.justifyFullTransform = justifyFullTransform;
        this.unorderedTransform = unorderedTransform;
        this.orderedTransform = orderedTransform;
        this.stateSubject$ = new BehaviorSubject(null);
        this.removeListAlignSubject$ = new Subject();
        this.transformationCompletedSubject$ = new EventEmitter();
        this.transformationCompleted$ = this.transformationCompletedSubject$.asObservable();
        this.changed$ = merge(this.transformationCompletedSubject$, this.selection.savedValue$).pipe(share());
        this.bold$ = this.changed$.pipe(map(function () { return _this.bold; }), distinctUntilChanged());
        this.color$ = this.changed$.pipe(map(function () { return _this.color; }), distinctUntilChanged());
        this.fontSize$ = this.changed$.pipe(map(function () { return _this.fontSize; }), distinctUntilChanged());
        this.fontFamily$ = this.changed$.pipe(map(function () { return _this.fontFamily; }), distinctUntilChanged());
        this.italic$ = this.changed$.pipe(map(function () { return _this.italic; }), distinctUntilChanged());
        this.link$ = this.changed$.pipe(map(function () { return _this.link; }), distinctUntilChanged());
        this.externalLink$ = this.changed$.pipe(map(function () { return _this.externalLink; }), distinctUntilChanged());
        this.justifyCenter$ = this.changed$.pipe(map(function () { return _this.justifyCenter; }), distinctUntilChanged());
        this.justifyLeft$ = this.changed$.pipe(map(function () { return _this.justifyLeft; }), distinctUntilChanged());
        this.justifyRight$ = this.changed$.pipe(map(function () { return _this.justifyRight; }), distinctUntilChanged());
        this.justifyFull$ = this.changed$.pipe(map(function () { return _this.justifyFull; }), distinctUntilChanged());
        this.orderedList$ = this.changed$.pipe(map(function () { return _this.orderedList; }), distinctUntilChanged());
        this.underline$ = this.changed$.pipe(map(function () { return _this.underline; }), distinctUntilChanged());
        this.unorderedList$ = this.changed$.pipe(map(function () { return _this.unorderedList; }), distinctUntilChanged());
        this.value$ = this.stateSubject$.asObservable().pipe(distinctUntilChanged());
    }
    Object.defineProperty(StateService.prototype, "value", {
        get: function () {
            return this.stateSubject$.getValue();
        },
        set: function (value) {
            this.stateSubject$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "link", {
        get: function () {
            return this.linkTransform.value;
        },
        set: function (value) {
            this.selection.restore();
            if (this.externalLink) {
                this.externalLinkTransform.value = null;
            }
            this.linkTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "externalLink", {
        get: function () {
            return this.externalLinkTransform.value;
        },
        set: function (value) {
            this.selection.restore();
            if (this.link) {
                this.linkTransform.value = null;
            }
            this.externalLinkTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleBold = function () {
        this.selection.restore();
        this.boldTransform.toggle();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "bold", {
        get: function () {
            return this.boldTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleItalic = function () {
        this.selection.restore();
        this.italicTransform.toggle();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "italic", {
        get: function () {
            return this.italicTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleUnderline = function () {
        this.selection.restore();
        this.underlineTransform.toggle();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "underline", {
        get: function () {
            return this.underlineTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "fontSize", {
        get: function () {
            var size = this.fontSizeTransform.value;
            return typeof size === 'number' ? size : null;
        },
        set: function (value) {
            this.selection.restore();
            this.fontSizeTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "color", {
        get: function () {
            return this.colorTransform.value;
        },
        set: function (value) {
            this.selection.restore();
            this.colorTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "fontFamily", {
        get: function () {
            return this.fontFamilyTransform.value;
        },
        set: function (value) {
            this.selection.restore();
            this.fontFamilyTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "justifyLeft", {
        get: function () {
            return this.justifyLeftTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleJustifyLeft = function () {
        this.justifyLeftTransform.justify();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "justifyRight", {
        get: function () {
            return this.justifyRightTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleJustifyRight = function () {
        this.justifyRightTransform.justify();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "justifyCenter", {
        get: function () {
            return this.justifyCenterTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleJustifyCenter = function () {
        this.justifyCenterTransform.justify();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "justifyFull", {
        get: function () {
            return this.justifyFullTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleJustifyFull = function () {
        this.justifyFullTransform.justify();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "unorderedList", {
        get: function () {
            return this.unorderedTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleUnorderedList = function () {
        var newContent = this.unorderedTransform.apply(this.value);
        if (newContent) {
            this.value = newContent;
            this.removeListAlignSubject$.next(newContent);
        }
        else {
            this.removeListAlignSubject$.next(null);
        }
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "orderedList", {
        get: function () {
            return this.orderedTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleOrderedList = function () {
        var newContent = this.orderedTransform.apply(this.value);
        if (newContent) {
            this.value = newContent;
            this.removeListAlignSubject$.next(newContent);
        }
        else {
            this.removeListAlignSubject$.next(null);
        }
        this.transformationCompletedSubject$.next();
    };
    StateService.prototype.saveSelection = function (selection) {
        this.selection.saveSelection(selection);
    };
    StateService.prototype.findParentTag = function (tag) {
        return this.selection.findParentTag(tag);
    };
    StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(ɵɵinject(TextEditorSelection), ɵɵinject(BoldTransform), ɵɵinject(ColorTransform), ɵɵinject(FontFamilyTransform), ɵɵinject(FontSizeTransform), ɵɵinject(ItalicTransform), ɵɵinject(LinkTransform), ɵɵinject(ExternalLinkTransform), ɵɵinject(UnderlineTransform), ɵɵinject(JustifyLeftTransform), ɵɵinject(JustifyRightTransform), ɵɵinject(JustifyCenterTransform), ɵɵinject(JustifyFullTransform), ɵɵinject(UnorderedTransform), ɵɵinject(OrderedTransform)); };
    StateService.ɵprov = ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac });
    return StateService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(StateService, [{
        type: Injectable
    }], function () { return [{ type: TextEditorSelection }, { type: BoldTransform }, { type: ColorTransform }, { type: FontFamilyTransform }, { type: FontSizeTransform }, { type: ItalicTransform }, { type: LinkTransform }, { type: ExternalLinkTransform }, { type: UnderlineTransform }, { type: JustifyLeftTransform }, { type: JustifyRightTransform }, { type: JustifyCenterTransform }, { type: JustifyFullTransform }, { type: UnorderedTransform }, { type: OrderedTransform }]; }, null); })();

var TextEditor = /** @class */ (function () {
    function TextEditor(blockManager, selection, injector) {
        this.blockManager = blockManager;
        this.selection = selection;
        this.injector = injector;
    }
    TextEditor.prototype.init = function () {
        // super.init();
        // this.injector.get(TextEditorComponent);
        // this.initTransformations();
    };
    TextEditor.ɵfac = function TextEditor_Factory(t) { return new (t || TextEditor)(ɵɵinject(StateService), ɵɵinject(TextEditorSelection), ɵɵinject(Injector)); };
    TextEditor.ɵprov = ɵɵdefineInjectable({ token: TextEditor, factory: TextEditor.ɵfac });
    return TextEditor;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextEditor, [{
        type: Injectable
    }], function () { return [{ type: StateService }, { type: TextEditorSelection }, { type: Injector }]; }, null); })();

var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(ɵɵdirectiveInject(DomSanitizer)); };
    SafeHtmlPipe.ɵpipe = ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
    return SafeHtmlPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

var _c0 = ["textArea"];
var TextEditorComponent = /** @class */ (function () {
    function TextEditorComponent(injector, changeDetectorRef, selectionHelper) {
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.selectionHelper = selectionHelper;
        this.initialValue$ = new BehaviorSubject('');
        this.changes$ = new Subject();
        this.destroy$ = new Subject();
        this.editing = false;
        this.changed = new EventEmitter();
        this.textEditor = this.injector.get(TextEditor);
        this.state = this.injector.get(StateService);
    }
    Object.defineProperty(TextEditorComponent.prototype, "value", {
        set: function (value) {
            if (!value) {
                return;
            }
            this.initialValue$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEditorComponent.prototype, "textAreaElement", {
        get: function () {
            return this.textArea.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    // init(): void {
    // TODO set state here instead of @input state
    // }
    TextEditorComponent.prototype.ngAfterViewInit = function () {
        this.bindEvents();
    };
    TextEditorComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    TextEditorComponent.prototype.onInput = function () {
        this.changes$.next(this.textArea.nativeElement.innerHTML);
        this.state.value = this.textArea.nativeElement.innerHTML;
    };
    TextEditorComponent.prototype.onBlur = function () {
        this.state.value = this.textArea.nativeElement.innerHTML;
    };
    TextEditorComponent.prototype.onPaste = function (event) {
        event.preventDefault();
        var strippedText = event.clipboardData.getData('text');
        document.execCommand(ExecCommand.InsertText, false, strippedText);
    };
    TextEditorComponent.prototype.bindEvents = function () {
        var _this = this;
        this.changes$.pipe(tap(function (value) { return _this.changed.emit(value); }), takeUntil(this.destroy$)).subscribe();
        /**
         * Safari doesn't recognize fromEvent(document, 'selectionchange')
         * probably the reason is Shadow DOM
         */
        merge(fromEvent(this.textArea.nativeElement, 'keyup'), fromEvent(this.textArea.nativeElement, 'click'), fromEvent(this.textArea.nativeElement, 'mousemove'), this.state.transformationCompleted$).pipe(filter(function () { return _this.editing; }), map(function () { return _this.selectionHelper.get(_this.textArea.nativeElement); }), filter(function (selection) { return !!selection; }), distinctUntilChanged(function (prev, next) { return JSON.stringify(prev) === JSON.stringify(next); }), tap(function (selection) { return _this.state.saveSelection(selection); }), takeUntil(this.destroy$)).subscribe();
    };
    TextEditorComponent.ɵfac = function TextEditorComponent_Factory(t) { return new (t || TextEditorComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(SelectionHelper)); };
    TextEditorComponent.ɵcmp = ɵɵdefineComponent({ type: TextEditorComponent, selectors: [["peb-text-editor-new"]], viewQuery: function TextEditorComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textArea = _t.first);
        } }, inputs: { value: "value", editing: "editing" }, outputs: { changed: "changed" }, decls: 4, vars: 6, consts: [["id", "text-editor", "data-placeholder", "Text", 3, "innerHtml", "contentEditable", "input", "blur", "paste"], ["textArea", ""]], template: function TextEditorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0, 1);
            ɵɵlistener("input", function TextEditorComponent_Template_div_input_0_listener() { return ctx.onInput(); })("blur", function TextEditorComponent_Template_div_blur_0_listener() { return ctx.onBlur(); })("paste", function TextEditorComponent_Template_div_paste_0_listener($event) { return ctx.onPaste($event); });
            ɵɵpipe(2, "safeHtml");
            ɵɵpipe(3, "async");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("innerHtml", ɵɵpipeBind1(2, 2, ɵɵpipeBind1(3, 4, ctx.initialValue$)), ɵɵsanitizeHtml)("contentEditable", ctx.editing);
        } }, pipes: [SafeHtmlPipe, AsyncPipe], styles: ["#text-editor[_ngcontent-%COMP%]{position:relative;margin:2px;z-index:999;outline:0;word-break:break-word;color:#000;cursor:text;line-height:normal}#text-editor[contenteditable][_ngcontent-%COMP%]{font-weight:350}#text-editor[contenteditable=true][_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:text}#text-editor[contenteditable=false][_ngcontent-%COMP%]{cursor:default}#text-editor[_ngcontent-%COMP%]:empty:before{content:attr(data-placeholder);color:gray}.pe-te-p[_ngcontent-%COMP%]{margin-bottom:1em;margin-top:1em}"] });
    return TextEditorComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextEditorComponent, [{
        type: Component,
        args: [{
                selector: 'peb-text-editor-new',
                templateUrl: './text-editor.component.html',
                styleUrls: ['./text-editor.component.scss'],
            }]
    }], function () { return [{ type: Injector }, { type: ChangeDetectorRef }, { type: SelectionHelper }]; }, { value: [{
            type: Input
        }], editing: [{
            type: Input
        }], changed: [{
            type: Output
        }], textArea: [{
            type: ViewChild,
            args: ['textArea', { static: true }]
        }] }); })();

var TextEditorElementDirective = /** @class */ (function () {
    function TextEditorElementDirective() {
    }
    TextEditorElementDirective.ɵfac = function TextEditorElementDirective_Factory(t) { return new (t || TextEditorElementDirective)(); };
    TextEditorElementDirective.ɵdir = ɵɵdefineDirective({ type: TextEditorElementDirective, selectors: [["", "peTextEditorElementDef", ""]] });
    return TextEditorElementDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextEditorElementDirective, [{
        type: Directive,
        args: [{
                selector: '[peTextEditorElementDef]'
            }]
    }], null, null); })();

var providers = [
    TextEditor,
    StateService,
    TextEditorSelection,
    BoldTransform,
    ColorTransform,
    FontFamilyTransform,
    FontSizeTransform,
    ItalicTransform,
    LinkTransform,
    ExternalLinkTransform,
    UnderlineTransform,
    JustifyCenterTransform,
    JustifyLeftTransform,
    JustifyRightTransform,
    JustifyFullTransform,
    UnorderedTransform,
    OrderedTransform,
    SelectionHelper,
    TextEditorComponent,
];
var PebTextEditorModule = /** @class */ (function () {
    function PebTextEditorModule() {
    }
    PebTextEditorModule.ɵmod = ɵɵdefineNgModule({ type: PebTextEditorModule });
    PebTextEditorModule.ɵinj = ɵɵdefineInjector({ factory: function PebTextEditorModule_Factory(t) { return new (t || PebTextEditorModule)(); }, providers: providers, imports: [[
                CommonModule,
            ]] });
    return PebTextEditorModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PebTextEditorModule, { declarations: [TextEditorComponent,
        TextEditorElementDirective,
        SafeHtmlPipe], imports: [CommonModule], exports: [TextEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebTextEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TextEditorComponent,
                    TextEditorElementDirective,
                    SafeHtmlPipe,
                ],
                imports: [
                    CommonModule,
                ],
                providers: providers,
                exports: [TextEditorComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of text-editor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExecCommand, PebLinkDatasetRouteKey, PebLinkDatasetURLKey, PebTextEditorModule, StateService, TextEditorComponent };
//# sourceMappingURL=pe-builder-text-editor.js.map
