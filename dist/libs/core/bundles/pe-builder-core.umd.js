(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('lodash-es'), require('uuid')) :
    typeof define === 'function' && define.amd ? define('@pe/builder-core', ['exports', '@angular/core', 'rxjs', 'lodash-es', 'uuid'], factory) :
    (global = global || self, factory((global.pe = global.pe || {}, global.pe['builder-core'] = {}), global.ng.core, global.rxjs, global['lodash-es'], global.uuid));
}(this, (function (exports, core, rxjs, lodashEs, uuid) { 'use strict';

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

    (function (PebEffectTarget) {
        PebEffectTarget["Shop"] = "shop";
        PebEffectTarget["Pages"] = "pages";
        PebEffectTarget["Templates"] = "templates";
        PebEffectTarget["Stylesheets"] = "stylesheets";
        PebEffectTarget["ContextSchemas"] = "contextSchemas";
    })(exports.PebEffectTarget || (exports.PebEffectTarget = {}));

    (function (PebShopEffect) {
        PebShopEffect["Init"] = "shop:init";
        PebShopEffect["UpdateData"] = "shop:update-data";
        PebShopEffect["UpdatePages"] = "shop:update-pages";
        PebShopEffect["AppendPage"] = "shop:append-page";
        PebShopEffect["DeletePage"] = "shop:delete-page";
    })(exports.PebShopEffect || (exports.PebShopEffect = {}));

    (function (PebPageEffect) {
        PebPageEffect["Create"] = "page:init";
        PebPageEffect["UpdateData"] = "page:update-data";
        PebPageEffect["Delete"] = "page:delete";
    })(exports.PebPageEffect || (exports.PebPageEffect = {}));

    (function (PebTemplateEffect) {
        PebTemplateEffect["Init"] = "template:init";
        PebTemplateEffect["Destroy"] = "template:destroy";
        PebTemplateEffect["AppendElement"] = "template:append-element";
        PebTemplateEffect["UpdateElement"] = "template:update-element";
        PebTemplateEffect["RelocateElement"] = "template:relocate-element";
        PebTemplateEffect["DeleteElement"] = "template:delete-element";
    })(exports.PebTemplateEffect || (exports.PebTemplateEffect = {}));

    (function (PebStylesheetEffect) {
        PebStylesheetEffect["Init"] = "stylesheet:init";
        PebStylesheetEffect["Update"] = "stylesheet:update";
        PebStylesheetEffect["Delete"] = "stylesheet:delete";
    })(exports.PebStylesheetEffect || (exports.PebStylesheetEffect = {}));

    (function (PebContextSchemaEffect) {
        PebContextSchemaEffect["Init"] = "context-schema:init";
        PebContextSchemaEffect["Update"] = "context-schema:update";
        PebContextSchemaEffect["Delete"] = "context-schema:delete";
    })(exports.PebContextSchemaEffect || (exports.PebContextSchemaEffect = {}));

    var _a;

    (function (PebPageType) {
        PebPageType["Master"] = "master";
        PebPageType["Replica"] = "replica";
    })(exports.PebPageType || (exports.PebPageType = {}));

    (function (PebPageVariant) {
        PebPageVariant["Front"] = "front";
        PebPageVariant["Default"] = "default";
        PebPageVariant["Category"] = "category";
        PebPageVariant["Product"] = "product";
    })(exports.PebPageVariant || (exports.PebPageVariant = {}));
    // TODO: move to a more suitable location

    (function (ContextService) {
        ContextService["Company"] = "company";
        ContextService["Products"] = "products";
        ContextService["Shipments"] = "shipments";
    })(exports.ContextService || (exports.ContextService = {}));
    // TODO: move to a more suitable location
    var CONTEXT_SERVICES = (_a = {},
        _a[exports.ContextService.Company] = new core.InjectionToken('ContextServices.Company'),
        _a[exports.ContextService.Products] = new core.InjectionToken('ContextServices.Products'),
        _a[exports.ContextService.Shipments] = new core.InjectionToken('ContextServices.Shipments'),
        _a);


    (function (PebElementType) {
        PebElementType["Document"] = "document";
        PebElementType["Section"] = "section";
        PebElementType["Block"] = "block";
        PebElementType["Text"] = "text";
        PebElementType["Image"] = "image";
        PebElementType["Product"] = "product";
        PebElementType["ProductPage"] = "productPage";
        PebElementType["Button"] = "button";
        PebElementType["Cart"] = "cart";
        PebElementType["Shape"] = "shape";
        PebElementType["Carousel"] = "carousel";
        PebElementType["Amount"] = "amount";
        PebElementType["Logo"] = "logo";
        PebElementType["Products"] = "shop-products";
        PebElementType["Line"] = "line";
    })(exports.PebElementType || (exports.PebElementType = {}));

    (function (PebMakerType) {
        PebMakerType["Text"] = "text";
    })(exports.PebMakerType || (exports.PebMakerType = {}));

    (function (PebElementContextState) {
        PebElementContextState["Loading"] = "loading";
        PebElementContextState["Error"] = "error";
        PebElementContextState["Ready"] = "ready";
        PebElementContextState["Empty"] = "empty";
    })(exports.PebElementContextState || (exports.PebElementContextState = {}));


    (function (PebScreen) {
        PebScreen["Desktop"] = "desktop";
        PebScreen["Tablet"] = "tablet";
        PebScreen["Mobile"] = "mobile";
    })(exports.PebScreen || (exports.PebScreen = {}));

    var AbstractComponent = /** @class */ (function () {
        function AbstractComponent() {
            this.destroyed$ = new rxjs.ReplaySubject();
        }
        AbstractComponent.prototype.ngOnDestroy = function () {
            this.destroyed$.next(true);
            this.destroyed$.complete();
        };
        AbstractComponent.ɵfac = function AbstractComponent_Factory(t) { return new (t || AbstractComponent)(); };
        AbstractComponent.ɵdir = core["ɵɵdefineDirective"]({ type: AbstractComponent });
        return AbstractComponent;
    }());

    var PebApiService = /** @class */ (function () {
        function PebApiService() {
        }
        return PebApiService;
    }());

    var root = (typeof self === 'object' && self.self === self && self) ||
        (typeof global === 'object' && global.global === global && global) ||
        this;
    function pebCreateLogger(namespace) {
        var acceptableNss = __spread(namespace
            .split(':')
            .map(function (el, i, all) {
            return __spread(all.slice(0, i), ['*']).join(':');
        }), [
            namespace,
        ]);
        if (root.PEB_DEBUG
            && root.PEB_DEBUG.split(',').find(function (eNs) { return acceptableNss.includes(eNs); })) {
            return function () {
                var input = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    input[_i] = arguments[_i];
                }
                // tslint:disable-next-line:no-console
                console.log.apply(console, __spread(["%c " + namespace + " ", 'background: #3078a8; color: white'], input));
                return __spread(input);
            };
        }
        return function () {
            var input = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                input[_i] = arguments[_i];
            }
            return __spread(input);
        };
    }

    function pebMapElementDeep(element, handler) {
        var _a = handler(element), _b = _a.children, children = _b === void 0 ? [] : _b, elementProps = __rest(_a, ["children"]);
        return __assign(__assign({}, lodashEs.merge({}, elementProps)), { children: children.map(function (child) { return pebMapElementDeep(child, handler); }) });
    }
    function pebFilterElementDeep(element, handler) {
        var _a, _b;
        var nextChildren = (_a = element.children) === null || _a === void 0 ? void 0 : _a.filter(handler);
        return __assign(__assign({}, lodashEs.merge({}, element)), { children: (_b = nextChildren) === null || _b === void 0 ? void 0 : _b.map(function (child) { return pebFilterElementDeep(child, handler); }) });
    }
    function pebTraverseElementDeep(element, handler) {
        handler(lodashEs.merge({}, element));
        if (lodashEs.isArray(element.children)) {
            element.children.forEach(function (el) { return pebTraverseElementDeep(el, handler); });
        }
    }
    function pebFindElementParents(document, id) {
        var stack = [{ node: document, i: 0 }];
        while (stack.length) {
            var current = stack[stack.length - 1];
            while (current.i < current.node.children.length) {
                var node = current.node.children[current.i];
                if (node.id === id) {
                    return stack
                        .filter(function (el) { return el.node.id !== document.id; })
                        .map(function (el) { return el.node; });
                }
                stack.push({ node: node, i: 0 });
                current.i++;
                current = stack[stack.length - 1];
            }
            stack.pop();
        }
        return null;
    }
    function pebFindElementChildren(element, predicate) {
        if (predicate && !lodashEs.isFunction(predicate)) {
            throw new Error('Unsupported selector');
        }
        predicate = predicate || (function () { return true; }); // tslint:disable-line
        var result = [];
        pebTraverseElementDeep(element, function (el) {
            if (predicate(el)) {
                result.push(el);
            }
        });
        return result;
    }
    function pebTraverseElementDeepWithParent(element, handler, parentId, priority) {
        if (parentId === void 0) { parentId = null; }
        if (priority === void 0) { priority = -1; }
        var nextPriority = parseInt(priority, 10) + 1;
        handler(__assign(__assign({}, element), { parentId: parentId, priority: nextPriority }));
        if (lodashEs.isArray(element.children)) {
            element.children.forEach(function (el) { return pebTraverseElementDeepWithParent(el, handler, element.id, nextPriority); });
        }
    }
    function pebFindElementChildrenWithParent(element, predicate) {
        if (predicate === void 0) { predicate = (function () { return true; }); }
        if (predicate && !lodashEs.isFunction(predicate)) {
            throw new Error('Unsupported selector');
        }
        var result = [];
        pebTraverseElementDeepWithParent(element, function (el) {
            if (predicate(el)) {
                result.push(el);
            }
        });
        return result;
    }

    // This will allow us to detect global object both in browser and in backend
    // so in sandbox we could generate more readable ids and at the same time use
    // normal ones in production
    var root$1 = (typeof self === 'object' && self.self === self && self) ||
        (typeof global === 'object' && global.global === global && global) ||
        this;
    // const initialNamespaces = localStorage.getItem('peb-ids');
    // const idsNamespaces: {
    //   [ns: string]: number,
    // } = initialNamespaces ? JSON.parse(initialNamespaces) : {};
    function pebGenerateId(ns) {
        // if (root.PEB_CUSTOM_IDS && ns) {
        //   if (!(ns in idsNamespaces)) {
        //     idsNamespaces[ns] = 0;
        //   }
        //   idsNamespaces[ns]++;
        //   localStorage.setItem('peb-ids', JSON.stringify(idsNamespaces));
        //   return `${ns}-${idsNamespaces[ns]}`;
        // }
        if (root$1.PEB_CUSTOM_IDS) {
            var base = 36;
            return Number(lodashEs.random(0, Math.pow(base, 5) - 1)).toString(base);
        }
        return uuid.v4();
    }

    var _a$1;
    var pebContextSchemaEffectHandlers = (_a$1 = {},
        _a$1[exports.PebContextSchemaEffect.Init] = pebContextSchemaEffectInitHandler,
        _a$1[exports.PebContextSchemaEffect.Update] = pebContextSchemaEffectUpdateHandler,
        _a$1[exports.PebContextSchemaEffect.Delete] = pebContextSchemaEffectDeleteHandler,
        _a$1);
    function pebContextSchemaEffectInitHandler(_, payload) {
        return payload;
    }
    function pebContextSchemaEffectUpdateHandler(prevSchema, payload) {
        return lodashEs.merge({}, prevSchema, payload);
    }
    function pebContextSchemaEffectDeleteHandler(prevSchema, payload) {
        return null;
    }

    var _a$2;
    var pebPageEffectHandler = (_a$2 = {},
        _a$2[exports.PebPageEffect.Create] = pebPageEffectCreateHandler,
        _a$2[exports.PebPageEffect.UpdateData] = pebPageEffectUpdateDataHandler,
        _a$2[exports.PebPageEffect.Delete] = pebPageEffectDeleteHandler,
        _a$2);
    function pebPageEffectCreateHandler(_, payload) {
        return payload;
    }
    function pebPageEffectUpdateDataHandler(prevPage, payload) {
        return __assign(__assign({}, prevPage), { data: __assign(__assign({}, prevPage.data), payload) });
    }
    function pebPageEffectDeleteHandler(prevPage, payload) {
        return null;
    }

    var _a$3;
    var pebShopEffectHandlers = (_a$3 = {},
        _a$3[exports.PebShopEffect.Init] = pebShopEffectCreateHandler,
        _a$3[exports.PebShopEffect.UpdateData] = pebShopEffectUpdateDataHandler,
        _a$3[exports.PebShopEffect.UpdatePages] = pebShopEffectUpdatePagesHandler,
        _a$3[exports.PebShopEffect.AppendPage] = pebShopEffectAppendPagesHandler,
        _a$3[exports.PebShopEffect.DeletePage] = pebShopEffectAppendPagesHandler,
        _a$3);
    function pebShopEffectCreateHandler(prevShop, payload) {
        return payload;
    }
    function pebShopEffectUpdateDataHandler(prevShop, payload) {
        // debugger;
        return __assign(__assign({}, prevShop), { data: __assign(__assign({}, prevShop.data), payload) });
    }
    function pebShopEffectUpdatePagesHandler(prevShop, payload) {
        return __assign(__assign({}, prevShop), { pageIds: payload });
    }
    function pebShopEffectAppendPagesHandler(prevShop, payload) {
        return __assign(__assign({}, prevShop), { pageIds: __spread(prevShop.pageIds, [payload]) });
    }
    function pebShopEffectDeletePagesHandler(prevShop, payload) {
        return __assign(__assign({}, prevShop), { pageIds: prevShop.pageIds.filter(function (id) { return id !== payload; }) });
    }

    var _a$4;
    var pebStylesheetEffectHandlers = (_a$4 = {},
        _a$4[exports.PebStylesheetEffect.Init] = pebStylesheetInitHandler,
        _a$4[exports.PebStylesheetEffect.Update] = pebStylesheetUpdateHandler,
        _a$4[exports.PebStylesheetEffect.Delete] = pebStylesheetDeleteHandler,
        _a$4);
    function pebStylesheetInitHandler(_, payload) {
        return payload;
    }
    function pebStylesheetUpdateHandler(prevState, payload) {
        return lodashEs.merge({}, prevState, payload);
    }
    function pebStylesheetDeleteHandler() {
        return null;
    }

    var _a$5;
    var layoutsScopeName = 'layouts';
    var pebLayoutEffectHandlers = (_a$5 = {},
        _a$5[exports.PebTemplateEffect.Init] = pebLayoutInitHandler,
        _a$5[exports.PebTemplateEffect.Destroy] = pebLayoutDestroyHandler,
        _a$5[exports.PebTemplateEffect.AppendElement] = pebLayoutAppendElementHandler,
        _a$5[exports.PebTemplateEffect.UpdateElement] = pebLayoutUpdateElementHandler,
        _a$5[exports.PebTemplateEffect.RelocateElement] = pebLayoutRelocateElementHandler,
        _a$5[exports.PebTemplateEffect.DeleteElement] = pebLayoutDeleteElementHandler,
        _a$5);
    function pebLayoutInitHandler(prevLayout, payload) {
        return payload;
    }
    function pebLayoutDestroyHandler(prevLayout) {
        return null;
    }
    function pebLayoutAppendElementHandler(prevLayout, payload) {
        return pebMapElementDeep(prevLayout, function (el) { return (el.id === payload.to ? __assign(__assign({}, el), { children: __spread(el.children, [payload.element]) }) : el); });
    }
    function pebLayoutUpdateElementHandler(prevLayout, payload) {
        throw new Error('To implement');
        return prevLayout;
    }
    function pebLayoutRelocateElementHandler(prevLayout, payload) {
        throw new Error('To implement');
        return prevLayout;
    }
    function pebLayoutDeleteElementHandler(prevLayout, payload) {
        return pebFilterElementDeep(prevLayout, function (c) { return c.id !== payload; });
    }

    var createInitialShopSnapshot = function () { return ({
        // TODO: is hash needed???
        id: null,
        shop: null,
        pages: {},
        templates: {},
        stylesheets: {},
        contextSchemas: {},
    }); };
    var effectHandlers = __assign(__assign(__assign(__assign(__assign({}, pebShopEffectHandlers), pebPageEffectHandler), pebLayoutEffectHandlers), pebStylesheetEffectHandlers), pebContextSchemaEffectHandlers);
    function pebActionHandler(input, action) {
        return action.effects.reduce(function (prevState, effect) {
            var _a, _b;
            var _c = __read(effect.target.split(':'), 2), areaName = _c[0], areaId = _c[1];
            var handler = effectHandlers[effect.type];
            if (!handler) {
                throw new Error('Invalid effect type');
            }
            var collectionNames = Object.values(exports.PebEffectTarget);
            // TODO: Check if Maps are deeply copied
            if (areaName === exports.PebEffectTarget.Shop) {
                // debugger;
                return __assign(__assign({}, prevState), { shop: handler(prevState.shop, effect.payload) }); // FIXME: Type??
            }
            else if (collectionNames.includes(areaName)) {
                var prevUnit = prevState[areaName][areaId] || null;
                var nextUnit = handler(prevUnit, effect.payload);
                var nextArea = Boolean(nextUnit)
                    ? __assign(__assign({}, prevState[areaName]), (_a = {}, _a[areaId] = nextUnit, _a)) : lodashEs.omit(prevState[areaName], areaId);
                return __assign(__assign({}, prevState), (_b = {}, _b[areaName] = nextArea, _b));
            }
            throw new Error('Invalid effect target');
        }, input);
    }
    var pebCompileActions = function (actions) {
        return actions.reduce(pebActionHandler, createInitialShopSnapshot());
    };

    // TODO: Properly handle shop with multiple pages
    var pebCreateShopInitAction = function (shop) {
        var _a, _b;
        var page = shop.pages[0];
        var shopContextId = pebGenerateId('context');
        var pageTemplateId = pebGenerateId('template');
        var stylesIds = (_a = {},
            _a[exports.PebScreen.Desktop] = pebGenerateId('stylesheet'),
            _a[exports.PebScreen.Tablet] = pebGenerateId('stylesheet'),
            _a[exports.PebScreen.Mobile] = pebGenerateId('stylesheet'),
            _a);
        var pageContextId = pebGenerateId('context');
        return {
            id: pebGenerateId('action'),
            createdAt: new Date(),
            effects: __spread([
                {
                    type: exports.PebTemplateEffect.Init,
                    target: exports.PebEffectTarget.Templates + ":" + pageTemplateId,
                    payload: page.template,
                }
            ], Object.values(exports.PebScreen).map(function (screen) { return ({
                type: exports.PebStylesheetEffect.Init,
                target: exports.PebEffectTarget.Stylesheets + ":" + stylesIds[screen],
                payload: page.stylesheets[screen],
            }); }), [
                {
                    type: exports.PebContextSchemaEffect.Init,
                    target: exports.PebEffectTarget.ContextSchemas + ":" + pageContextId,
                    payload: page.context,
                },
                {
                    type: exports.PebPageEffect.Create,
                    target: exports.PebEffectTarget.Pages + ":" + page.id,
                    payload: {
                        id: page.id,
                        type: page.type,
                        variant: page.variant,
                        master: page.master,
                        name: page.name,
                        data: page.data,
                        templateId: pageTemplateId,
                        stylesheetIds: (_b = {},
                            _b[exports.PebScreen.Desktop] = "" + stylesIds[exports.PebScreen.Desktop],
                            _b[exports.PebScreen.Tablet] = "" + stylesIds[exports.PebScreen.Tablet],
                            _b[exports.PebScreen.Mobile] = "" + stylesIds[exports.PebScreen.Mobile],
                            _b),
                        contextId: "" + pageContextId,
                    },
                },
                {
                    type: exports.PebContextSchemaEffect.Init,
                    target: exports.PebEffectTarget.ContextSchemas + ":" + shopContextId,
                    payload: {},
                },
                {
                    type: exports.PebShopEffect.Init,
                    target: exports.PebEffectTarget.Shop,
                    payload: {
                        data: {
                            frontPageId: page.id,
                        },
                        contextId: shopContextId,
                        pageIds: [page.id],
                    },
                },
            ]),
        };
    };

    // TODO: Delete after 25.04 if not used
    var pebCreateElementKit = function (elementPayload, styles, contextItem) {
        var _a;
        var element = __assign(__assign({}, elementPayload), { id: pebGenerateId() });
        return {
            element: element,
            styles: styles,
            contextSchema: (_a = {},
                _a[element.id] = contextItem,
                _a),
        };
    };

    var pebCreateEmptyPage = function (name, type, variant) {
        var _a, _b, _c, _d;
        if (type === void 0) { type = exports.PebPageType.Replica; }
        if (variant === void 0) { variant = exports.PebPageVariant.Default; }
        var line = {
            id: pebGenerateId(),
            type: exports.PebElementType.Line,
        };
        var template = {
            id: pebGenerateId('element'),
            type: exports.PebElementType.Document,
            children: ['header', 'body', 'footer'].map(function (sectionName) { return ({
                id: pebGenerateId('element'),
                type: exports.PebElementType.Section,
                data: { name: sectionName },
                meta: { deletable: false },
                children: __spread((sectionName === 'header' ? [
                    {
                        id: pebGenerateId('element'),
                        type: exports.PebElementType.Block,
                        children: [
                            {
                                id: pebGenerateId('element'),
                                type: exports.PebElementType.Text,
                                data: {
                                    text: name,
                                },
                            },
                        ],
                    },
                ] : [])),
            }); }),
        };
        var _e = __read(template.children.map(function (el) { return el.id; }), 3), headerId = _e[0], bodyId = _e[1], footerId = _e[2];
        var headerBlockId = template.children[0].children[0].id;
        var blockColor = '#' + Number(lodashEs.random(0, Math.pow(16, 6))).toString(16);
        return {
            id: pebGenerateId('page'),
            name: name,
            type: type,
            variant: variant,
            master: null,
            data: {
                url: '/',
                mark: null,
            },
            template: template,
            stylesheets: (_a = {},
                _a[exports.PebScreen.Desktop] = (_b = {},
                    _b[headerId] = { height: 200 },
                    _b[bodyId] = { height: 600 },
                    _b[footerId] = { height: 200 },
                    _b[headerBlockId] = {
                        height: 150,
                        width: 150,
                        backgroundColor: blockColor,
                    },
                    _b[line.id] = { height: 2 },
                    _b),
                _a[exports.PebScreen.Tablet] = (_c = {},
                    _c[headerId] = { height: 200 },
                    _c[bodyId] = { height: 600 },
                    _c[footerId] = { height: 200 },
                    _c[headerBlockId] = {
                        height: 150,
                        width: 150,
                        backgroundColor: blockColor,
                    },
                    _c[line.id] = { height: 2 },
                    _c),
                _a[exports.PebScreen.Mobile] = (_d = {},
                    _d[headerId] = { height: 200 },
                    _d[bodyId] = { height: 600 },
                    _d[footerId] = { height: 200 },
                    _d[headerBlockId] = {
                        height: 150,
                        width: 150,
                        backgroundColor: blockColor,
                    },
                    _d[line.id] = { height: 2 },
                    _d),
                _a),
            context: {},
        };
    };
    function pebCreateEmptyShop() {
        var frontPage = pebCreateEmptyPage('Front');
        return {
            id: pebGenerateId(),
            data: {
                frontPageId: frontPage.id,
            },
            routing: {
                '/': frontPage.id,
            },
            context: {},
            pages: [frontPage],
        };
    }

    exports.AbstractComponent = AbstractComponent;
    exports.CONTEXT_SERVICES = CONTEXT_SERVICES;
    exports.PebApiService = PebApiService;
    exports.pebActionHandler = pebActionHandler;
    exports.pebCompileActions = pebCompileActions;
    exports.pebCreateElementKit = pebCreateElementKit;
    exports.pebCreateEmptyPage = pebCreateEmptyPage;
    exports.pebCreateEmptyShop = pebCreateEmptyShop;
    exports.pebCreateLogger = pebCreateLogger;
    exports.pebCreateShopInitAction = pebCreateShopInitAction;
    exports.pebFilterElementDeep = pebFilterElementDeep;
    exports.pebFindElementChildren = pebFindElementChildren;
    exports.pebFindElementChildrenWithParent = pebFindElementChildrenWithParent;
    exports.pebFindElementParents = pebFindElementParents;
    exports.pebGenerateId = pebGenerateId;
    exports.pebMapElementDeep = pebMapElementDeep;
    exports.pebTraverseElementDeep = pebTraverseElementDeep;
    exports.pebTraverseElementDeepWithParent = pebTraverseElementDeepWithParent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pe-builder-core.umd.js.map
