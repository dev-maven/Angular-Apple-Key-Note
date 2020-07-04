import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetInheritedFactory, EventEmitter, Injector, ɵɵdirectiveInject, ɵɵdefinePipe, Pipe, ChangeDetectorRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelementStart, ɵɵlistener, ɵɵpipe, ɵɵelementEnd, ɵɵproperty, ɵɵpipeBind1, ɵɵsanitizeHtml, Component, Input, Output, ViewChild, ɵɵdefineDirective, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, merge, fromEvent } from 'rxjs';
import { share, map, distinctUntilChanged, tap, takeUntil, filter } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { AsyncPipe, CommonModule } from '@angular/common';

const debug = false;
const hasShadow = 'attachShadow' in Element.prototype && 'getRootNode' in Element.prototype;
const hasSelection = !!(hasShadow && document.createElement('div').attachShadow({ mode: 'open' }).getSelection);
const hasShady = window.ShadyDOM && window.ShadyDOM.inUse;
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const useDocument = !hasShadow || hasShady || (!hasSelection && !isSafari);
const validNodeTypes = [Node.ELEMENT_NODE, Node.TEXT_NODE, Node.DOCUMENT_FRAGMENT_NODE];
function isValidNode(node) {
    return validNodeTypes.includes(node.nodeType);
}
function findNode(s, parentNode, isLeft) {
    const nodes = parentNode.childNodes || parentNode.children;
    if (!nodes) {
        return parentNode; // found it, probably text
    }
    for (let i = 0; i < nodes.length; ++i) {
        const j = isLeft ? i : (nodes.length - 1 - i);
        const childNode = nodes[j];
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
const addInternalListener = (() => {
    if (hasSelection || useDocument) {
        // getSelection exists or document API can be used
        document.addEventListener('selectionchange', (ev) => {
            document.dispatchEvent(new CustomEvent('-shadow-selectionchange'));
        });
        return () => { };
    }
    let withinInternals = false;
    const handlers = [];
    document.addEventListener('selectionchange', (ev) => {
        if (withinInternals) {
            return;
        }
        document.dispatchEvent(new CustomEvent('-shadow-selectionchange'));
        withinInternals = true;
        window.setTimeout(() => {
            withinInternals = false;
        }, 0);
        handlers.forEach((fn) => fn(ev));
    });
    return (fn) => handlers.push(fn);
})();
let wasCaret = false;
let resolveTask = null;
addInternalListener((ev) => {
    const s = window.getSelection();
    if (s.type === 'Caret') {
        wasCaret = true;
    }
    else if (wasCaret && !resolveTask) {
        resolveTask = Promise.resolve(true).then(() => {
            wasCaret = false;
            resolveTask = null;
        });
    }
});
function containsNextElement(s, node, walkForward) {
    const start = node;
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
    const measure = () => s.toString().length;
    const initialSize = measure();
    debug && console.info(`initial selection: "${s.toString()}"`);
    if (initialSize === 1 && wasCaret && leftNode === rightNode) {
        // nb. We need to reset a single selection as Safari _always_ tells us the cursor was dragged
        // left to right (maybe RTL on those devices).
        // To be fair, Chrome has the same bug.
        debug && console.debug('resetting size=1');
        s.extend(leftNode, 0);
        s.collapseToEnd();
        return undefined;
    }
    let updatedSize;
    // Try extending forward and seeing what happens.
    s.modify('extend', 'forward', 'character');
    updatedSize = measure();
    debug && console.info(`forward selection: "${s.toString()}"`);
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
    debug && console.info(`backward selection: "${s.toString()}"`);
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
        const t = node.textContent;
        if (isLeft) {
            if (s.length < t.length) {
                return { node, offset: s.length };
            }
            const prefix = s.substr(0, t.length);
            if (prefix !== t) {
                console.debug('unexpected string prefix', prefix, 'expected', t);
            }
            s = s.substr(t.length);
        }
        else {
            if (s.length < t.length) {
                return { node, offset: t.length - s.length };
            }
            const suffix = s.substr(s.length - t.length);
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
    const trailingSpaceCount = /\s*$/.exec(node.textContent)[0].length;
    if (!trailingSpaceCount) {
        return 0;
    }
    return trailingSpaceCount - 1; // always allow single last
}
const cachedRange = new Map();
function getRange(root) {
    if (hasSelection || useDocument) {
        const s = (useDocument ? document : root).getSelection();
        return s.rangeCount ? s.getRangeAt(0) : null;
    }
    const thisFrame = cachedRange.get(root);
    if (thisFrame) {
        return thisFrame;
    }
    const initialText = window.getSelection().toString();
    const result = internalGetShadowSelection(root);
    const rs = result.range && result.range.toString() || null;
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
    window.setTimeout(() => {
        cachedRange.delete(root);
    }, 0);
    debug && console.debug('getRange got', result);
    return result.range;
}
const fakeSelectionNode = document.createTextNode('');
function internalGetShadowSelection(root) {
    const range = document.createRange();
    const s = window.getSelection();
    // if (!s.containsNode(root.host, true)) {
    //   return {range: null, mode: 'none'};
    // }
    // TODO: inserting fake nodes isn't ideal, but containsNode doesn't work on nearby adjacent
    // text nodes (in fact it returns true for all text nodes on the page?!).
    // insert a fake 'before' node to see if it's selected
    root.insertBefore(fakeSelectionNode, root.childNodes[0]);
    const includesBeforeRoot = s.containsNode(fakeSelectionNode);
    fakeSelectionNode.remove();
    if (includesBeforeRoot) {
        return { range: null, mode: 'outside-before' };
    }
    // insert a fake 'after' node to see if it's selected
    root.appendChild(fakeSelectionNode);
    const includesAfterRoot = s.containsNode(fakeSelectionNode);
    fakeSelectionNode.remove();
    if (includesAfterRoot) {
        return { range: null, mode: 'outside-after' };
    }
    const measure = () => s.toString().length;
    const initialSelectionContent = s.toString();
    if (!(s.type === 'Caret' || s.type === 'Range')) {
        return { range: null, mode: 'outside-after' };
    }
    const initialCaret = (s.type === 'Caret');
    const leftNode = findNode(s, root, true);
    let rightNode;
    let isNaturalDirection = undefined;
    if (s.type === 'Range') {
        rightNode = findNode(s, root, false); // get right node here _before_ getSelectionDirection
        isNaturalDirection = getSelectionDirection(s, leftNode, rightNode);
        // isNaturalDirection means "going right"
    }
    if (s.type === 'Caret') {
        // we might transition to being a caret, so don't check initial value
        s.extend(leftNode, 0);
        const at = measure();
        s.collapseToEnd();
        range.setStart(leftNode, at);
        range.setEnd(leftNode, at);
        return { range, mode: 'caret' };
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
        return { range, mode: 'all' };
    }
    const size = measure();
    let offsetLeft, offsetRight;
    // only one newline/space char is cared about
    const validRightLength = rightNode.length - ignoredTrailingSpace(rightNode);
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
        range,
    };
}

const isSafari$1 = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
class SelectionHelper {
    get(container) {
        if (!container) {
            document.getSelection().removeAllRanges();
            return null;
        }
        const canvas = document.querySelector('pe-editor-canvas');
        const range = getRange(canvas.shadowRoot);
        if (!range) {
            return null;
        }
        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(container);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        const start = preSelectionRange.toString().length;
        return {
            start,
            end: start + range.toString().length,
            range,
            container,
            parentElement: range.endContainer.parentElement,
        };
    }
    restore(savedSelection) {
        if (!savedSelection) {
            return;
        }
        const doc = savedSelection.container.ownerDocument;
        const win = doc.defaultView;
        const range = doc.createRange();
        range.setStart(savedSelection.container, 0);
        range.collapse(true);
        const nodeStack = [savedSelection.container];
        let node;
        let foundStart = false;
        let stop = false;
        let charIndex = 0;
        while (!stop && (node = nodeStack.pop())) {
            if (node.nodeType == 3) {
                const nextCharIndex = charIndex + node.length;
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
                let i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }
        const selection = win.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
    findParentTag(selection, tagName, className, searchDepth = 10) {
        let parentTag = null;
        if (!selection || !selection.anchorNode || !selection.focusNode) {
            return null;
        }
        const boundNodes = [
            selection.anchorNode,
            selection.focusNode,
        ];
        boundNodes.forEach(parent => {
            let searchDepthIterable = searchDepth;
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
    }
}

/* tslint:disable:member-ordering */
class TextEditorSelection {
    constructor(selectionHelper) {
        this.selectionHelper = selectionHelper;
        this.savedValueSubject = new BehaviorSubject(null);
        this.savedValue$ = this.savedValueSubject.asObservable().pipe(share());
    }
    get savedValue() {
        return this.savedValueSubject.value;
    }
    set savedValue(selection) {
        this.savedValueSubject.next(selection);
    }
    saveSelection(selection) {
        this.savedValue = selection;
    }
    getSelection(container) {
        return this.selectionHelper.get(container);
    }
    restore() {
        this.selectionHelper.restore(this.savedValue);
    }
    expandToTag(element) {
        // const selection = this.savedValue.data;
        // selection.removeAllRanges();
        // const range = document.createRange();
        // range.selectNodeContents(element);
        // selection.addRange(range);
    }
    findParentTag(tagName) {
        if (!this.savedValue) {
            return null;
        }
        let parentElement = this.savedValue.range.endContainer.parentElement;
        while (parentElement && parentElement.tagName !== tagName && parentElement.tagName !== 'DIV') {
            parentElement = parentElement.parentElement;
        }
        return parentElement;
    }
}
TextEditorSelection.ɵfac = function TextEditorSelection_Factory(t) { return new (t || TextEditorSelection)(ɵɵinject(SelectionHelper)); };
TextEditorSelection.ɵprov = ɵɵdefineInjectable({ token: TextEditorSelection, factory: TextEditorSelection.ɵfac });
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

class BaseTransform {
    execCommand(command, value) {
        document.execCommand(command, false, value);
    }
    get isSelectionExist() {
        return window.getSelection().type.toLowerCase() !== 'none';
    }
}

class BoldTransform extends BaseTransform {
    toggle() {
        this.execCommand(ExecCommand.Bold);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.Bold);
    }
}
BoldTransform.ɵfac = function BoldTransform_Factory(t) { return ɵBoldTransform_BaseFactory(t || BoldTransform); };
BoldTransform.ɵprov = ɵɵdefineInjectable({ token: BoldTransform, factory: BoldTransform.ɵfac });
const ɵBoldTransform_BaseFactory = ɵɵgetInheritedFactory(BoldTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(BoldTransform, [{
        type: Injectable
    }], null, null); })();

class ColorTransform extends BaseTransform {
    set value(value) {
        this.execCommand(ExecCommand.ForeColor, value);
    }
    get value() {
        return document.queryCommandValue(ExecCommand.ForeColor);
    }
}
ColorTransform.ɵfac = function ColorTransform_Factory(t) { return ɵColorTransform_BaseFactory(t || ColorTransform); };
ColorTransform.ɵprov = ɵɵdefineInjectable({ token: ColorTransform, factory: ColorTransform.ɵfac });
const ɵColorTransform_BaseFactory = ɵɵgetInheritedFactory(ColorTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ColorTransform, [{
        type: Injectable
    }], null, null); })();

class ExternalLinkTransform extends BaseTransform {
    constructor(selection) {
        super();
        this.selection = selection;
    }
    set value(value) {
        value ? this.link(value) : this.unlink();
    }
    get value() {
        if (!this.selection.savedValue) {
            return null;
        }
        const parentElement = this.getParentLinkElement();
        return parentElement && parentElement.hasAttribute('href') ? parentElement.getAttribute('href') : null;
    }
    link(link) {
        // const anchorTag = this.selection.findParentTag('A');
        // if (anchorTag) {
        //   this.selection.expandToTag(anchorTag);
        // }
        this.execCommand(ExecCommand.CreateLink, this.getLinkWithHttps(link));
        // Update selection
        this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
        const parentElement = this.getParentLinkElement();
        parentElement.setAttribute('target', '_blank');
        // this.execCommand(ExecCommand.CreateLink);
    }
    getParentLinkElement() {
        let parentElement = this.selection.savedValue.parentElement;
        while (parentElement && parentElement.tagName !== 'A') {
            parentElement = parentElement.parentElement;
        }
        return parentElement;
    }
    getLinkWithHttps(link) {
        return ((link.indexOf('://') === -1) && (link.indexOf('mailto:') === -1)) ? `https://${link}` : link;
    }
    unlink() {
        this.execCommand(ExecCommand.Unlink);
    }
}
ExternalLinkTransform.ɵfac = function ExternalLinkTransform_Factory(t) { return new (t || ExternalLinkTransform)(ɵɵinject(TextEditorSelection)); };
ExternalLinkTransform.ɵprov = ɵɵdefineInjectable({ token: ExternalLinkTransform, factory: ExternalLinkTransform.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExternalLinkTransform, [{
        type: Injectable
    }], function () { return [{ type: TextEditorSelection }]; }, null); })();

class FontFamilyTransform extends BaseTransform {
    set value(value) {
        this.execCommand(ExecCommand.FontName, value);
    }
    get value() {
        const fontName = document.queryCommandValue(ExecCommand.FontName);
        return fontName ? fontName.replace(/['"]+/g, '') : null;
    }
}
FontFamilyTransform.ɵfac = function FontFamilyTransform_Factory(t) { return ɵFontFamilyTransform_BaseFactory(t || FontFamilyTransform); };
FontFamilyTransform.ɵprov = ɵɵdefineInjectable({ token: FontFamilyTransform, factory: FontFamilyTransform.ɵfac });
const ɵFontFamilyTransform_BaseFactory = ɵɵgetInheritedFactory(FontFamilyTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(FontFamilyTransform, [{
        type: Injectable
    }], null, null); })();

class FontSizeTransform extends BaseTransform {
    constructor(selection) {
        super();
        this.selection = selection;
    }
    set value(value) {
        if (!this.selection.savedValue) {
            throw new Error('There is no selection');
        }
        document.execCommand('fontSize', false, '1');
        const fontElements = this.selection.savedValue.container.getElementsByTagName('font');
        Array.from(fontElements).forEach(el => {
            if (el.getAttribute('size') !== '1') {
                return;
            }
            el.removeAttribute('size');
            el.style.fontSize = `${value}px`;
        });
    }
    get value() {
        if (!this.selection.savedValue) {
            return null;
        }
        let parentElement = this.selection.savedValue.parentElement;
        while (parentElement && parentElement.tagName !== 'SPAN' && !parentElement.style.fontSize) {
            parentElement = parentElement.parentElement;
        }
        const size = parentElement ? parentElement.style.fontSize : null;
        return size ? parseInt(size, 10) : null;
    }
}
FontSizeTransform.ɵfac = function FontSizeTransform_Factory(t) { return new (t || FontSizeTransform)(ɵɵinject(TextEditorSelection)); };
FontSizeTransform.ɵprov = ɵɵdefineInjectable({ token: FontSizeTransform, factory: FontSizeTransform.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FontSizeTransform, [{
        type: Injectable
    }], function () { return [{ type: TextEditorSelection }]; }, null); })();

class ItalicTransform extends BaseTransform {
    toggle() {
        this.execCommand(ExecCommand.Italic);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.Italic);
    }
}
ItalicTransform.ɵfac = function ItalicTransform_Factory(t) { return ɵItalicTransform_BaseFactory(t || ItalicTransform); };
ItalicTransform.ɵprov = ɵɵdefineInjectable({ token: ItalicTransform, factory: ItalicTransform.ɵfac });
const ɵItalicTransform_BaseFactory = ɵɵgetInheritedFactory(ItalicTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ItalicTransform, [{
        type: Injectable
    }], null, null); })();

class JustifyCenterTransform extends BaseTransform {
    justify() {
        this.execCommand(ExecCommand.JustifyCenter);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.JustifyCenter);
    }
}
JustifyCenterTransform.ɵfac = function JustifyCenterTransform_Factory(t) { return ɵJustifyCenterTransform_BaseFactory(t || JustifyCenterTransform); };
JustifyCenterTransform.ɵprov = ɵɵdefineInjectable({ token: JustifyCenterTransform, factory: JustifyCenterTransform.ɵfac });
const ɵJustifyCenterTransform_BaseFactory = ɵɵgetInheritedFactory(JustifyCenterTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(JustifyCenterTransform, [{
        type: Injectable
    }], null, null); })();

class JustifyFullTransform extends BaseTransform {
    justify() {
        this.execCommand(ExecCommand.JustifyFull);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.JustifyFull);
    }
}
JustifyFullTransform.ɵfac = function JustifyFullTransform_Factory(t) { return ɵJustifyFullTransform_BaseFactory(t || JustifyFullTransform); };
JustifyFullTransform.ɵprov = ɵɵdefineInjectable({ token: JustifyFullTransform, factory: JustifyFullTransform.ɵfac });
const ɵJustifyFullTransform_BaseFactory = ɵɵgetInheritedFactory(JustifyFullTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(JustifyFullTransform, [{
        type: Injectable
    }], null, null); })();

class JustifyLeftTransform extends BaseTransform {
    justify() {
        this.execCommand(ExecCommand.JustifyLeft);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.JustifyLeft);
    }
}
JustifyLeftTransform.ɵfac = function JustifyLeftTransform_Factory(t) { return ɵJustifyLeftTransform_BaseFactory(t || JustifyLeftTransform); };
JustifyLeftTransform.ɵprov = ɵɵdefineInjectable({ token: JustifyLeftTransform, factory: JustifyLeftTransform.ɵfac });
const ɵJustifyLeftTransform_BaseFactory = ɵɵgetInheritedFactory(JustifyLeftTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(JustifyLeftTransform, [{
        type: Injectable
    }], null, null); })();

class JustifyRightTransform extends BaseTransform {
    justify() {
        this.execCommand(ExecCommand.JustifyRight);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.JustifyRight);
    }
}
JustifyRightTransform.ɵfac = function JustifyRightTransform_Factory(t) { return ɵJustifyRightTransform_BaseFactory(t || JustifyRightTransform); };
JustifyRightTransform.ɵprov = ɵɵdefineInjectable({ token: JustifyRightTransform, factory: JustifyRightTransform.ɵfac });
const ɵJustifyRightTransform_BaseFactory = ɵɵgetInheritedFactory(JustifyRightTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(JustifyRightTransform, [{
        type: Injectable
    }], null, null); })();

const PebLinkDatasetRouteKey = 'id';
const PebLinkDatasetURLKey = 'url';

class LinkTransform extends BaseTransform {
    constructor(selection) {
        super();
        this.selection = selection;
    }
    set value(value) {
        value ? this.link(value) : this.unlink();
    }
    get value() {
        if (!this.selection.savedValue) {
            return null;
        }
        let parentElement = this.selection.savedValue.parentElement;
        while (parentElement && parentElement.tagName !== 'A') {
            parentElement = parentElement.parentElement;
        }
        return parentElement && parentElement.dataset ? parentElement.dataset[PebLinkDatasetRouteKey] : null;
    }
    link(link) {
        const anchorTag = this.selection.findParentTag('A');
        if (anchorTag) {
            this.selection.expandToTag(anchorTag);
        }
        this.execCommand(ExecCommand.CreateLink, '#');
        // Update selection
        this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
        this.selection.savedValue.parentElement.dataset[PebLinkDatasetRouteKey] = link;
        this.execCommand(ExecCommand.CreateLink);
    }
    unlink() {
        this.execCommand(ExecCommand.Unlink);
    }
}
LinkTransform.ɵfac = function LinkTransform_Factory(t) { return new (t || LinkTransform)(ɵɵinject(TextEditorSelection)); };
LinkTransform.ɵprov = ɵɵdefineInjectable({ token: LinkTransform, factory: LinkTransform.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LinkTransform, [{
        type: Injectable
    }], function () { return [{ type: TextEditorSelection }]; }, null); })();

class OrderedTransform extends BaseTransform {
    apply(currentValue) {
        if (this.value) {
            return this.removeTransformList(currentValue);
        }
        this.execCommand(ExecCommand.InsertOrderedList);
    }
    get value() {
        return document.queryCommandState(ExecCommand.InsertOrderedList);
    }
    /**
     * Remove ordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    removeTransformList(currentValue) {
        if (!currentValue) {
            return currentValue;
        }
        const olList = currentValue.indexOf('<ol>');
        const olListClosed = currentValue.indexOf('</ol>');
        const listContent = currentValue.slice(olList + 4, olListClosed);
        const newListContent = listContent.replace(/<li>/g, '').replace(/<\/li>/g, isSafari$1 ? '' : '<br>');
        const firstPart = currentValue.split('<ol>');
        const secondPart = currentValue.split('</ol>');
        return firstPart[0].concat(newListContent).concat(secondPart[1]);
    }
}
OrderedTransform.ɵfac = function OrderedTransform_Factory(t) { return ɵOrderedTransform_BaseFactory(t || OrderedTransform); };
OrderedTransform.ɵprov = ɵɵdefineInjectable({ token: OrderedTransform, factory: OrderedTransform.ɵfac });
const ɵOrderedTransform_BaseFactory = ɵɵgetInheritedFactory(OrderedTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(OrderedTransform, [{
        type: Injectable
    }], null, null); })();

class UnderlineTransform extends BaseTransform {
    toggle() {
        this.execCommand(ExecCommand.Underline);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.Underline);
    }
}
UnderlineTransform.ɵfac = function UnderlineTransform_Factory(t) { return ɵUnderlineTransform_BaseFactory(t || UnderlineTransform); };
UnderlineTransform.ɵprov = ɵɵdefineInjectable({ token: UnderlineTransform, factory: UnderlineTransform.ɵfac });
const ɵUnderlineTransform_BaseFactory = ɵɵgetInheritedFactory(UnderlineTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnderlineTransform, [{
        type: Injectable
    }], null, null); })();

class UnorderedTransform extends BaseTransform {
    apply(currentValue) {
        if (this.value) {
            return this.removeTransformList(currentValue);
        }
        this.execCommand(ExecCommand.InsertUnorderedList);
    }
    get value() {
        return document.queryCommandState(ExecCommand.InsertUnorderedList);
    }
    /**
     * Remove unordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    removeTransformList(currentValue) {
        if (!currentValue) {
            return currentValue;
        }
        const ulList = currentValue.indexOf('<ul>');
        const ulListClosed = currentValue.indexOf('</ul>');
        const listContent = currentValue.slice(ulList + 4, ulListClosed);
        const newListContent = listContent.replace(/<li>/g, '').replace(/<\/li>/g, isSafari$1 ? '' : '<br>');
        const firstPart = currentValue.split('<ul>');
        const secondPart = currentValue.split('</ul>');
        return firstPart[0].concat(newListContent).concat(secondPart[1]);
    }
}
UnorderedTransform.ɵfac = function UnorderedTransform_Factory(t) { return ɵUnorderedTransform_BaseFactory(t || UnorderedTransform); };
UnorderedTransform.ɵprov = ɵɵdefineInjectable({ token: UnorderedTransform, factory: UnorderedTransform.ɵfac });
const ɵUnorderedTransform_BaseFactory = ɵɵgetInheritedFactory(UnorderedTransform);
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnorderedTransform, [{
        type: Injectable
    }], null, null); })();

/* tslint:disable:member-ordering */
class StateService {
    constructor(selection, boldTransform, colorTransform, fontFamilyTransform, fontSizeTransform, italicTransform, linkTransform, externalLinkTransform, underlineTransform, justifyLeftTransform, justifyRightTransform, justifyCenterTransform, justifyFullTransform, unorderedTransform, orderedTransform) {
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
        this.bold$ = this.changed$.pipe(map(() => this.bold), distinctUntilChanged());
        this.color$ = this.changed$.pipe(map(() => this.color), distinctUntilChanged());
        this.fontSize$ = this.changed$.pipe(map(() => this.fontSize), distinctUntilChanged());
        this.fontFamily$ = this.changed$.pipe(map(() => this.fontFamily), distinctUntilChanged());
        this.italic$ = this.changed$.pipe(map(() => this.italic), distinctUntilChanged());
        this.link$ = this.changed$.pipe(map(() => this.link), distinctUntilChanged());
        this.externalLink$ = this.changed$.pipe(map(() => this.externalLink), distinctUntilChanged());
        this.justifyCenter$ = this.changed$.pipe(map(() => this.justifyCenter), distinctUntilChanged());
        this.justifyLeft$ = this.changed$.pipe(map(() => this.justifyLeft), distinctUntilChanged());
        this.justifyRight$ = this.changed$.pipe(map(() => this.justifyRight), distinctUntilChanged());
        this.justifyFull$ = this.changed$.pipe(map(() => this.justifyFull), distinctUntilChanged());
        this.orderedList$ = this.changed$.pipe(map(() => this.orderedList), distinctUntilChanged());
        this.underline$ = this.changed$.pipe(map(() => this.underline), distinctUntilChanged());
        this.unorderedList$ = this.changed$.pipe(map(() => this.unorderedList), distinctUntilChanged());
        this.value$ = this.stateSubject$.asObservable().pipe(distinctUntilChanged());
    }
    set value(value) {
        this.stateSubject$.next(value);
    }
    get value() {
        return this.stateSubject$.getValue();
    }
    set link(value) {
        this.selection.restore();
        if (this.externalLink) {
            this.externalLinkTransform.value = null;
        }
        this.linkTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get link() {
        return this.linkTransform.value;
    }
    set externalLink(value) {
        this.selection.restore();
        if (this.link) {
            this.linkTransform.value = null;
        }
        this.externalLinkTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get externalLink() {
        return this.externalLinkTransform.value;
    }
    toggleBold() {
        this.selection.restore();
        this.boldTransform.toggle();
        this.transformationCompletedSubject$.next();
    }
    get bold() {
        return this.boldTransform.value;
    }
    toggleItalic() {
        this.selection.restore();
        this.italicTransform.toggle();
        this.transformationCompletedSubject$.next();
    }
    get italic() {
        return this.italicTransform.value;
    }
    toggleUnderline() {
        this.selection.restore();
        this.underlineTransform.toggle();
        this.transformationCompletedSubject$.next();
    }
    get underline() {
        return this.underlineTransform.value;
    }
    set fontSize(value) {
        this.selection.restore();
        this.fontSizeTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get fontSize() {
        const size = this.fontSizeTransform.value;
        return typeof size === 'number' ? size : null;
    }
    set color(value) {
        this.selection.restore();
        this.colorTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get color() {
        return this.colorTransform.value;
    }
    set fontFamily(value) {
        this.selection.restore();
        this.fontFamilyTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get fontFamily() {
        return this.fontFamilyTransform.value;
    }
    get justifyLeft() {
        return this.justifyLeftTransform.value;
    }
    toggleJustifyLeft() {
        this.justifyLeftTransform.justify();
        this.transformationCompletedSubject$.next();
    }
    get justifyRight() {
        return this.justifyRightTransform.value;
    }
    toggleJustifyRight() {
        this.justifyRightTransform.justify();
        this.transformationCompletedSubject$.next();
    }
    get justifyCenter() {
        return this.justifyCenterTransform.value;
    }
    toggleJustifyCenter() {
        this.justifyCenterTransform.justify();
        this.transformationCompletedSubject$.next();
    }
    get justifyFull() {
        return this.justifyFullTransform.value;
    }
    toggleJustifyFull() {
        this.justifyFullTransform.justify();
        this.transformationCompletedSubject$.next();
    }
    get unorderedList() {
        return this.unorderedTransform.value;
    }
    toggleUnorderedList() {
        const newContent = this.unorderedTransform.apply(this.value);
        if (newContent) {
            this.value = newContent;
            this.removeListAlignSubject$.next(newContent);
        }
        else {
            this.removeListAlignSubject$.next(null);
        }
        this.transformationCompletedSubject$.next();
    }
    get orderedList() {
        return this.orderedTransform.value;
    }
    toggleOrderedList() {
        const newContent = this.orderedTransform.apply(this.value);
        if (newContent) {
            this.value = newContent;
            this.removeListAlignSubject$.next(newContent);
        }
        else {
            this.removeListAlignSubject$.next(null);
        }
        this.transformationCompletedSubject$.next();
    }
    saveSelection(selection) {
        this.selection.saveSelection(selection);
    }
    findParentTag(tag) {
        return this.selection.findParentTag(tag);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(ɵɵinject(TextEditorSelection), ɵɵinject(BoldTransform), ɵɵinject(ColorTransform), ɵɵinject(FontFamilyTransform), ɵɵinject(FontSizeTransform), ɵɵinject(ItalicTransform), ɵɵinject(LinkTransform), ɵɵinject(ExternalLinkTransform), ɵɵinject(UnderlineTransform), ɵɵinject(JustifyLeftTransform), ɵɵinject(JustifyRightTransform), ɵɵinject(JustifyCenterTransform), ɵɵinject(JustifyFullTransform), ɵɵinject(UnorderedTransform), ɵɵinject(OrderedTransform)); };
StateService.ɵprov = ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StateService, [{
        type: Injectable
    }], function () { return [{ type: TextEditorSelection }, { type: BoldTransform }, { type: ColorTransform }, { type: FontFamilyTransform }, { type: FontSizeTransform }, { type: ItalicTransform }, { type: LinkTransform }, { type: ExternalLinkTransform }, { type: UnderlineTransform }, { type: JustifyLeftTransform }, { type: JustifyRightTransform }, { type: JustifyCenterTransform }, { type: JustifyFullTransform }, { type: UnorderedTransform }, { type: OrderedTransform }]; }, null); })();

class TextEditor {
    constructor(blockManager, selection, injector) {
        this.blockManager = blockManager;
        this.selection = selection;
        this.injector = injector;
    }
    init() {
        // super.init();
        // this.injector.get(TextEditorComponent);
        // this.initTransformations();
    }
}
TextEditor.ɵfac = function TextEditor_Factory(t) { return new (t || TextEditor)(ɵɵinject(StateService), ɵɵinject(TextEditorSelection), ɵɵinject(Injector)); };
TextEditor.ɵprov = ɵɵdefineInjectable({ token: TextEditor, factory: TextEditor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextEditor, [{
        type: Injectable
    }], function () { return [{ type: StateService }, { type: TextEditorSelection }, { type: Injector }]; }, null); })();

class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(ɵɵdirectiveInject(DomSanitizer)); };
SafeHtmlPipe.ɵpipe = ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

const _c0 = ["textArea"];
class TextEditorComponent {
    constructor(injector, changeDetectorRef, selectionHelper) {
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
    set value(value) {
        if (!value) {
            return;
        }
        this.initialValue$.next(value);
    }
    get textAreaElement() {
        return this.textArea.nativeElement;
    }
    // init(): void {
    // TODO set state here instead of @input state
    // }
    ngAfterViewInit() {
        this.bindEvents();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onInput() {
        this.changes$.next(this.textArea.nativeElement.innerHTML);
        this.state.value = this.textArea.nativeElement.innerHTML;
    }
    onBlur() {
        this.state.value = this.textArea.nativeElement.innerHTML;
    }
    onPaste(event) {
        event.preventDefault();
        const strippedText = event.clipboardData.getData('text');
        document.execCommand(ExecCommand.InsertText, false, strippedText);
    }
    bindEvents() {
        this.changes$.pipe(tap(value => this.changed.emit(value)), takeUntil(this.destroy$)).subscribe();
        /**
         * Safari doesn't recognize fromEvent(document, 'selectionchange')
         * probably the reason is Shadow DOM
         */
        merge(fromEvent(this.textArea.nativeElement, 'keyup'), fromEvent(this.textArea.nativeElement, 'click'), fromEvent(this.textArea.nativeElement, 'mousemove'), this.state.transformationCompleted$).pipe(filter(() => this.editing), map(() => this.selectionHelper.get(this.textArea.nativeElement)), filter(selection => !!selection), distinctUntilChanged((prev, next) => JSON.stringify(prev) === JSON.stringify(next)), tap(selection => this.state.saveSelection(selection)), takeUntil(this.destroy$)).subscribe();
    }
}
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

class TextEditorElementDirective {
}
TextEditorElementDirective.ɵfac = function TextEditorElementDirective_Factory(t) { return new (t || TextEditorElementDirective)(); };
TextEditorElementDirective.ɵdir = ɵɵdefineDirective({ type: TextEditorElementDirective, selectors: [["", "peTextEditorElementDef", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextEditorElementDirective, [{
        type: Directive,
        args: [{
                selector: '[peTextEditorElementDef]'
            }]
    }], null, null); })();

const providers = [
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
class PebTextEditorModule {
}
PebTextEditorModule.ɵmod = ɵɵdefineNgModule({ type: PebTextEditorModule });
PebTextEditorModule.ɵinj = ɵɵdefineInjector({ factory: function PebTextEditorModule_Factory(t) { return new (t || PebTextEditorModule)(); }, providers: providers, imports: [[
            CommonModule,
        ]] });
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
                providers,
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
