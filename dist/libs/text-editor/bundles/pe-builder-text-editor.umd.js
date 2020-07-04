(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@pe/builder-text-editor', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/platform-browser', '@angular/common'], factory) :
    (global = global || self, factory((global.pe = global.pe || {}, global.pe['builder-text-editor'] = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, core, rxjs, operators, platformBrowser, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            this.savedValueSubject = new rxjs.BehaviorSubject(null);
            this.savedValue$ = this.savedValueSubject.asObservable().pipe(operators.share());
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
        TextEditorSelection.ɵfac = function TextEditorSelection_Factory(t) { return new (t || TextEditorSelection)(core["ɵɵinject"](SelectionHelper)); };
        TextEditorSelection.ɵprov = core["ɵɵdefineInjectable"]({ token: TextEditorSelection, factory: TextEditorSelection.ɵfac });
        return TextEditorSelection;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TextEditorSelection, [{
            type: core.Injectable
        }], function () { return [{ type: SelectionHelper }]; }, null); })();


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
    })(exports.ExecCommand || (exports.ExecCommand = {}));

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
            this.execCommand(exports.ExecCommand.Bold);
        };
        Object.defineProperty(BoldTransform.prototype, "value", {
            get: function () {
                if (!this.isSelectionExist) {
                    return false;
                }
                return document.queryCommandState(exports.ExecCommand.Bold);
            },
            enumerable: true,
            configurable: true
        });
        BoldTransform.ɵfac = function BoldTransform_Factory(t) { return ɵBoldTransform_BaseFactory(t || BoldTransform); };
        BoldTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: BoldTransform, factory: BoldTransform.ɵfac });
        return BoldTransform;
    }(BaseTransform));
    var ɵBoldTransform_BaseFactory = core["ɵɵgetInheritedFactory"](BoldTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](BoldTransform, [{
            type: core.Injectable
        }], null, null); })();

    var ColorTransform = /** @class */ (function (_super) {
        __extends(ColorTransform, _super);
        function ColorTransform() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ColorTransform.prototype, "value", {
            get: function () {
                return document.queryCommandValue(exports.ExecCommand.ForeColor);
            },
            set: function (value) {
                this.execCommand(exports.ExecCommand.ForeColor, value);
            },
            enumerable: true,
            configurable: true
        });
        ColorTransform.ɵfac = function ColorTransform_Factory(t) { return ɵColorTransform_BaseFactory(t || ColorTransform); };
        ColorTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: ColorTransform, factory: ColorTransform.ɵfac });
        return ColorTransform;
    }(BaseTransform));
    var ɵColorTransform_BaseFactory = core["ɵɵgetInheritedFactory"](ColorTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ColorTransform, [{
            type: core.Injectable
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
            this.execCommand(exports.ExecCommand.CreateLink, this.getLinkWithHttps(link));
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
            this.execCommand(exports.ExecCommand.Unlink);
        };
        ExternalLinkTransform.ɵfac = function ExternalLinkTransform_Factory(t) { return new (t || ExternalLinkTransform)(core["ɵɵinject"](TextEditorSelection)); };
        ExternalLinkTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: ExternalLinkTransform, factory: ExternalLinkTransform.ɵfac });
        return ExternalLinkTransform;
    }(BaseTransform));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ExternalLinkTransform, [{
            type: core.Injectable
        }], function () { return [{ type: TextEditorSelection }]; }, null); })();

    var FontFamilyTransform = /** @class */ (function (_super) {
        __extends(FontFamilyTransform, _super);
        function FontFamilyTransform() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(FontFamilyTransform.prototype, "value", {
            get: function () {
                var fontName = document.queryCommandValue(exports.ExecCommand.FontName);
                return fontName ? fontName.replace(/['"]+/g, '') : null;
            },
            set: function (value) {
                this.execCommand(exports.ExecCommand.FontName, value);
            },
            enumerable: true,
            configurable: true
        });
        FontFamilyTransform.ɵfac = function FontFamilyTransform_Factory(t) { return ɵFontFamilyTransform_BaseFactory(t || FontFamilyTransform); };
        FontFamilyTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: FontFamilyTransform, factory: FontFamilyTransform.ɵfac });
        return FontFamilyTransform;
    }(BaseTransform));
    var ɵFontFamilyTransform_BaseFactory = core["ɵɵgetInheritedFactory"](FontFamilyTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FontFamilyTransform, [{
            type: core.Injectable
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
        FontSizeTransform.ɵfac = function FontSizeTransform_Factory(t) { return new (t || FontSizeTransform)(core["ɵɵinject"](TextEditorSelection)); };
        FontSizeTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: FontSizeTransform, factory: FontSizeTransform.ɵfac });
        return FontSizeTransform;
    }(BaseTransform));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FontSizeTransform, [{
            type: core.Injectable
        }], function () { return [{ type: TextEditorSelection }]; }, null); })();

    var ItalicTransform = /** @class */ (function (_super) {
        __extends(ItalicTransform, _super);
        function ItalicTransform() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ItalicTransform.prototype.toggle = function () {
            this.execCommand(exports.ExecCommand.Italic);
        };
        Object.defineProperty(ItalicTransform.prototype, "value", {
            get: function () {
                if (!this.isSelectionExist) {
                    return false;
                }
                return document.queryCommandState(exports.ExecCommand.Italic);
            },
            enumerable: true,
            configurable: true
        });
        ItalicTransform.ɵfac = function ItalicTransform_Factory(t) { return ɵItalicTransform_BaseFactory(t || ItalicTransform); };
        ItalicTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: ItalicTransform, factory: ItalicTransform.ɵfac });
        return ItalicTransform;
    }(BaseTransform));
    var ɵItalicTransform_BaseFactory = core["ɵɵgetInheritedFactory"](ItalicTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ItalicTransform, [{
            type: core.Injectable
        }], null, null); })();

    var JustifyCenterTransform = /** @class */ (function (_super) {
        __extends(JustifyCenterTransform, _super);
        function JustifyCenterTransform() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JustifyCenterTransform.prototype.justify = function () {
            this.execCommand(exports.ExecCommand.JustifyCenter);
        };
        Object.defineProperty(JustifyCenterTransform.prototype, "value", {
            get: function () {
                if (!this.isSelectionExist) {
                    return false;
                }
                return document.queryCommandState(exports.ExecCommand.JustifyCenter);
            },
            enumerable: true,
            configurable: true
        });
        JustifyCenterTransform.ɵfac = function JustifyCenterTransform_Factory(t) { return ɵJustifyCenterTransform_BaseFactory(t || JustifyCenterTransform); };
        JustifyCenterTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: JustifyCenterTransform, factory: JustifyCenterTransform.ɵfac });
        return JustifyCenterTransform;
    }(BaseTransform));
    var ɵJustifyCenterTransform_BaseFactory = core["ɵɵgetInheritedFactory"](JustifyCenterTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](JustifyCenterTransform, [{
            type: core.Injectable
        }], null, null); })();

    var JustifyFullTransform = /** @class */ (function (_super) {
        __extends(JustifyFullTransform, _super);
        function JustifyFullTransform() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JustifyFullTransform.prototype.justify = function () {
            this.execCommand(exports.ExecCommand.JustifyFull);
        };
        Object.defineProperty(JustifyFullTransform.prototype, "value", {
            get: function () {
                if (!this.isSelectionExist) {
                    return false;
                }
                return document.queryCommandState(exports.ExecCommand.JustifyFull);
            },
            enumerable: true,
            configurable: true
        });
        JustifyFullTransform.ɵfac = function JustifyFullTransform_Factory(t) { return ɵJustifyFullTransform_BaseFactory(t || JustifyFullTransform); };
        JustifyFullTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: JustifyFullTransform, factory: JustifyFullTransform.ɵfac });
        return JustifyFullTransform;
    }(BaseTransform));
    var ɵJustifyFullTransform_BaseFactory = core["ɵɵgetInheritedFactory"](JustifyFullTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](JustifyFullTransform, [{
            type: core.Injectable
        }], null, null); })();

    var JustifyLeftTransform = /** @class */ (function (_super) {
        __extends(JustifyLeftTransform, _super);
        function JustifyLeftTransform() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JustifyLeftTransform.prototype.justify = function () {
            this.execCommand(exports.ExecCommand.JustifyLeft);
        };
        Object.defineProperty(JustifyLeftTransform.prototype, "value", {
            get: function () {
                if (!this.isSelectionExist) {
                    return false;
                }
                return document.queryCommandState(exports.ExecCommand.JustifyLeft);
            },
            enumerable: true,
            configurable: true
        });
        JustifyLeftTransform.ɵfac = function JustifyLeftTransform_Factory(t) { return ɵJustifyLeftTransform_BaseFactory(t || JustifyLeftTransform); };
        JustifyLeftTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: JustifyLeftTransform, factory: JustifyLeftTransform.ɵfac });
        return JustifyLeftTransform;
    }(BaseTransform));
    var ɵJustifyLeftTransform_BaseFactory = core["ɵɵgetInheritedFactory"](JustifyLeftTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](JustifyLeftTransform, [{
            type: core.Injectable
        }], null, null); })();

    var JustifyRightTransform = /** @class */ (function (_super) {
        __extends(JustifyRightTransform, _super);
        function JustifyRightTransform() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JustifyRightTransform.prototype.justify = function () {
            this.execCommand(exports.ExecCommand.JustifyRight);
        };
        Object.defineProperty(JustifyRightTransform.prototype, "value", {
            get: function () {
                if (!this.isSelectionExist) {
                    return false;
                }
                return document.queryCommandState(exports.ExecCommand.JustifyRight);
            },
            enumerable: true,
            configurable: true
        });
        JustifyRightTransform.ɵfac = function JustifyRightTransform_Factory(t) { return ɵJustifyRightTransform_BaseFactory(t || JustifyRightTransform); };
        JustifyRightTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: JustifyRightTransform, factory: JustifyRightTransform.ɵfac });
        return JustifyRightTransform;
    }(BaseTransform));
    var ɵJustifyRightTransform_BaseFactory = core["ɵɵgetInheritedFactory"](JustifyRightTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](JustifyRightTransform, [{
            type: core.Injectable
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
            this.execCommand(exports.ExecCommand.CreateLink, '#');
            // Update selection
            this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
            this.selection.savedValue.parentElement.dataset[PebLinkDatasetRouteKey] = link;
            this.execCommand(exports.ExecCommand.CreateLink);
        };
        LinkTransform.prototype.unlink = function () {
            this.execCommand(exports.ExecCommand.Unlink);
        };
        LinkTransform.ɵfac = function LinkTransform_Factory(t) { return new (t || LinkTransform)(core["ɵɵinject"](TextEditorSelection)); };
        LinkTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: LinkTransform, factory: LinkTransform.ɵfac });
        return LinkTransform;
    }(BaseTransform));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LinkTransform, [{
            type: core.Injectable
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
            this.execCommand(exports.ExecCommand.InsertOrderedList);
        };
        Object.defineProperty(OrderedTransform.prototype, "value", {
            get: function () {
                return document.queryCommandState(exports.ExecCommand.InsertOrderedList);
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
        OrderedTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: OrderedTransform, factory: OrderedTransform.ɵfac });
        return OrderedTransform;
    }(BaseTransform));
    var ɵOrderedTransform_BaseFactory = core["ɵɵgetInheritedFactory"](OrderedTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](OrderedTransform, [{
            type: core.Injectable
        }], null, null); })();

    var UnderlineTransform = /** @class */ (function (_super) {
        __extends(UnderlineTransform, _super);
        function UnderlineTransform() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UnderlineTransform.prototype.toggle = function () {
            this.execCommand(exports.ExecCommand.Underline);
        };
        Object.defineProperty(UnderlineTransform.prototype, "value", {
            get: function () {
                if (!this.isSelectionExist) {
                    return false;
                }
                return document.queryCommandState(exports.ExecCommand.Underline);
            },
            enumerable: true,
            configurable: true
        });
        UnderlineTransform.ɵfac = function UnderlineTransform_Factory(t) { return ɵUnderlineTransform_BaseFactory(t || UnderlineTransform); };
        UnderlineTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: UnderlineTransform, factory: UnderlineTransform.ɵfac });
        return UnderlineTransform;
    }(BaseTransform));
    var ɵUnderlineTransform_BaseFactory = core["ɵɵgetInheritedFactory"](UnderlineTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UnderlineTransform, [{
            type: core.Injectable
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
            this.execCommand(exports.ExecCommand.InsertUnorderedList);
        };
        Object.defineProperty(UnorderedTransform.prototype, "value", {
            get: function () {
                return document.queryCommandState(exports.ExecCommand.InsertUnorderedList);
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
        UnorderedTransform.ɵprov = core["ɵɵdefineInjectable"]({ token: UnorderedTransform, factory: UnorderedTransform.ɵfac });
        return UnorderedTransform;
    }(BaseTransform));
    var ɵUnorderedTransform_BaseFactory = core["ɵɵgetInheritedFactory"](UnorderedTransform);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UnorderedTransform, [{
            type: core.Injectable
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
            this.stateSubject$ = new rxjs.BehaviorSubject(null);
            this.removeListAlignSubject$ = new rxjs.Subject();
            this.transformationCompletedSubject$ = new core.EventEmitter();
            this.transformationCompleted$ = this.transformationCompletedSubject$.asObservable();
            this.changed$ = rxjs.merge(this.transformationCompletedSubject$, this.selection.savedValue$).pipe(operators.share());
            this.bold$ = this.changed$.pipe(operators.map(function () { return _this.bold; }), operators.distinctUntilChanged());
            this.color$ = this.changed$.pipe(operators.map(function () { return _this.color; }), operators.distinctUntilChanged());
            this.fontSize$ = this.changed$.pipe(operators.map(function () { return _this.fontSize; }), operators.distinctUntilChanged());
            this.fontFamily$ = this.changed$.pipe(operators.map(function () { return _this.fontFamily; }), operators.distinctUntilChanged());
            this.italic$ = this.changed$.pipe(operators.map(function () { return _this.italic; }), operators.distinctUntilChanged());
            this.link$ = this.changed$.pipe(operators.map(function () { return _this.link; }), operators.distinctUntilChanged());
            this.externalLink$ = this.changed$.pipe(operators.map(function () { return _this.externalLink; }), operators.distinctUntilChanged());
            this.justifyCenter$ = this.changed$.pipe(operators.map(function () { return _this.justifyCenter; }), operators.distinctUntilChanged());
            this.justifyLeft$ = this.changed$.pipe(operators.map(function () { return _this.justifyLeft; }), operators.distinctUntilChanged());
            this.justifyRight$ = this.changed$.pipe(operators.map(function () { return _this.justifyRight; }), operators.distinctUntilChanged());
            this.justifyFull$ = this.changed$.pipe(operators.map(function () { return _this.justifyFull; }), operators.distinctUntilChanged());
            this.orderedList$ = this.changed$.pipe(operators.map(function () { return _this.orderedList; }), operators.distinctUntilChanged());
            this.underline$ = this.changed$.pipe(operators.map(function () { return _this.underline; }), operators.distinctUntilChanged());
            this.unorderedList$ = this.changed$.pipe(operators.map(function () { return _this.unorderedList; }), operators.distinctUntilChanged());
            this.value$ = this.stateSubject$.asObservable().pipe(operators.distinctUntilChanged());
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
        StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(core["ɵɵinject"](TextEditorSelection), core["ɵɵinject"](BoldTransform), core["ɵɵinject"](ColorTransform), core["ɵɵinject"](FontFamilyTransform), core["ɵɵinject"](FontSizeTransform), core["ɵɵinject"](ItalicTransform), core["ɵɵinject"](LinkTransform), core["ɵɵinject"](ExternalLinkTransform), core["ɵɵinject"](UnderlineTransform), core["ɵɵinject"](JustifyLeftTransform), core["ɵɵinject"](JustifyRightTransform), core["ɵɵinject"](JustifyCenterTransform), core["ɵɵinject"](JustifyFullTransform), core["ɵɵinject"](UnorderedTransform), core["ɵɵinject"](OrderedTransform)); };
        StateService.ɵprov = core["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac });
        return StateService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](StateService, [{
            type: core.Injectable
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
        TextEditor.ɵfac = function TextEditor_Factory(t) { return new (t || TextEditor)(core["ɵɵinject"](StateService), core["ɵɵinject"](TextEditorSelection), core["ɵɵinject"](core.Injector)); };
        TextEditor.ɵprov = core["ɵɵdefineInjectable"]({ token: TextEditor, factory: TextEditor.ɵfac });
        return TextEditor;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TextEditor, [{
            type: core.Injectable
        }], function () { return [{ type: StateService }, { type: TextEditorSelection }, { type: core.Injector }]; }, null); })();

    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitized) {
            this.sanitized = sanitized;
        }
        SafeHtmlPipe.prototype.transform = function (value) {
            return this.sanitized.bypassSecurityTrustHtml(value);
        };
        SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(core["ɵɵdirectiveInject"](platformBrowser.DomSanitizer)); };
        SafeHtmlPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
        return SafeHtmlPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SafeHtmlPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'safeHtml'
                }]
        }], function () { return [{ type: platformBrowser.DomSanitizer }]; }, null); })();

    var _c0 = ["textArea"];
    var TextEditorComponent = /** @class */ (function () {
        function TextEditorComponent(injector, changeDetectorRef, selectionHelper) {
            this.injector = injector;
            this.changeDetectorRef = changeDetectorRef;
            this.selectionHelper = selectionHelper;
            this.initialValue$ = new rxjs.BehaviorSubject('');
            this.changes$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
            this.editing = false;
            this.changed = new core.EventEmitter();
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
            document.execCommand(exports.ExecCommand.InsertText, false, strippedText);
        };
        TextEditorComponent.prototype.bindEvents = function () {
            var _this = this;
            this.changes$.pipe(operators.tap(function (value) { return _this.changed.emit(value); }), operators.takeUntil(this.destroy$)).subscribe();
            /**
             * Safari doesn't recognize fromEvent(document, 'selectionchange')
             * probably the reason is Shadow DOM
             */
            rxjs.merge(rxjs.fromEvent(this.textArea.nativeElement, 'keyup'), rxjs.fromEvent(this.textArea.nativeElement, 'click'), rxjs.fromEvent(this.textArea.nativeElement, 'mousemove'), this.state.transformationCompleted$).pipe(operators.filter(function () { return _this.editing; }), operators.map(function () { return _this.selectionHelper.get(_this.textArea.nativeElement); }), operators.filter(function (selection) { return !!selection; }), operators.distinctUntilChanged(function (prev, next) { return JSON.stringify(prev) === JSON.stringify(next); }), operators.tap(function (selection) { return _this.state.saveSelection(selection); }), operators.takeUntil(this.destroy$)).subscribe();
        };
        TextEditorComponent.ɵfac = function TextEditorComponent_Factory(t) { return new (t || TextEditorComponent)(core["ɵɵdirectiveInject"](core.Injector), core["ɵɵdirectiveInject"](core.ChangeDetectorRef), core["ɵɵdirectiveInject"](SelectionHelper)); };
        TextEditorComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TextEditorComponent, selectors: [["peb-text-editor-new"]], viewQuery: function TextEditorComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.textArea = _t.first);
            } }, inputs: { value: "value", editing: "editing" }, outputs: { changed: "changed" }, decls: 4, vars: 6, consts: [["id", "text-editor", "data-placeholder", "Text", 3, "innerHtml", "contentEditable", "input", "blur", "paste"], ["textArea", ""]], template: function TextEditorComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0, 1);
                core["ɵɵlistener"]("input", function TextEditorComponent_Template_div_input_0_listener() { return ctx.onInput(); })("blur", function TextEditorComponent_Template_div_blur_0_listener() { return ctx.onBlur(); })("paste", function TextEditorComponent_Template_div_paste_0_listener($event) { return ctx.onPaste($event); });
                core["ɵɵpipe"](2, "safeHtml");
                core["ɵɵpipe"](3, "async");
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("innerHtml", core["ɵɵpipeBind1"](2, 2, core["ɵɵpipeBind1"](3, 4, ctx.initialValue$)), core["ɵɵsanitizeHtml"])("contentEditable", ctx.editing);
            } }, pipes: [SafeHtmlPipe, common.AsyncPipe], styles: ["#text-editor[_ngcontent-%COMP%]{position:relative;margin:2px;z-index:999;outline:0;word-break:break-word;color:#000;cursor:text;line-height:normal}#text-editor[contenteditable][_ngcontent-%COMP%]{font-weight:350}#text-editor[contenteditable=true][_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:text}#text-editor[contenteditable=false][_ngcontent-%COMP%]{cursor:default}#text-editor[_ngcontent-%COMP%]:empty:before{content:attr(data-placeholder);color:gray}.pe-te-p[_ngcontent-%COMP%]{margin-bottom:1em;margin-top:1em}"] });
        return TextEditorComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TextEditorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'peb-text-editor-new',
                    templateUrl: './text-editor.component.html',
                    styleUrls: ['./text-editor.component.scss'],
                }]
        }], function () { return [{ type: core.Injector }, { type: core.ChangeDetectorRef }, { type: SelectionHelper }]; }, { value: [{
                type: core.Input
            }], editing: [{
                type: core.Input
            }], changed: [{
                type: core.Output
            }], textArea: [{
                type: core.ViewChild,
                args: ['textArea', { static: true }]
            }] }); })();

    var TextEditorElementDirective = /** @class */ (function () {
        function TextEditorElementDirective() {
        }
        TextEditorElementDirective.ɵfac = function TextEditorElementDirective_Factory(t) { return new (t || TextEditorElementDirective)(); };
        TextEditorElementDirective.ɵdir = core["ɵɵdefineDirective"]({ type: TextEditorElementDirective, selectors: [["", "peTextEditorElementDef", ""]] });
        return TextEditorElementDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TextEditorElementDirective, [{
            type: core.Directive,
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
        PebTextEditorModule.ɵmod = core["ɵɵdefineNgModule"]({ type: PebTextEditorModule });
        PebTextEditorModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function PebTextEditorModule_Factory(t) { return new (t || PebTextEditorModule)(); }, providers: providers, imports: [[
                    common.CommonModule,
                ]] });
        return PebTextEditorModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](PebTextEditorModule, { declarations: [TextEditorComponent,
            TextEditorElementDirective,
            SafeHtmlPipe], imports: [common.CommonModule], exports: [TextEditorComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PebTextEditorModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        TextEditorComponent,
                        TextEditorElementDirective,
                        SafeHtmlPipe,
                    ],
                    imports: [
                        common.CommonModule,
                    ],
                    providers: providers,
                    exports: [TextEditorComponent]
                }]
        }], null, null); })();

    exports.PebLinkDatasetRouteKey = PebLinkDatasetRouteKey;
    exports.PebLinkDatasetURLKey = PebLinkDatasetURLKey;
    exports.PebTextEditorModule = PebTextEditorModule;
    exports.StateService = StateService;
    exports.TextEditorComponent = TextEditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pe-builder-text-editor.umd.js.map
