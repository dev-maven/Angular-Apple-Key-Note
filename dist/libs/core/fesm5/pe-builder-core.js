import { InjectionToken, ɵɵdefineDirective } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { __spread, __rest, __assign, __read } from 'tslib';
import { merge, isArray, isFunction, random, omit } from 'lodash-es';
import { v4 } from 'uuid';

var PebEffectTarget;
(function (PebEffectTarget) {
    PebEffectTarget["Shop"] = "shop";
    PebEffectTarget["Pages"] = "pages";
    PebEffectTarget["Templates"] = "templates";
    PebEffectTarget["Stylesheets"] = "stylesheets";
    PebEffectTarget["ContextSchemas"] = "contextSchemas";
})(PebEffectTarget || (PebEffectTarget = {}));
var PebShopEffect;
(function (PebShopEffect) {
    PebShopEffect["Init"] = "shop:init";
    PebShopEffect["UpdateData"] = "shop:update-data";
    PebShopEffect["UpdatePages"] = "shop:update-pages";
    PebShopEffect["AppendPage"] = "shop:append-page";
    PebShopEffect["DeletePage"] = "shop:delete-page";
})(PebShopEffect || (PebShopEffect = {}));
var PebPageEffect;
(function (PebPageEffect) {
    PebPageEffect["Create"] = "page:init";
    PebPageEffect["UpdateData"] = "page:update-data";
    PebPageEffect["Delete"] = "page:delete";
})(PebPageEffect || (PebPageEffect = {}));
var PebTemplateEffect;
(function (PebTemplateEffect) {
    PebTemplateEffect["Init"] = "template:init";
    PebTemplateEffect["Destroy"] = "template:destroy";
    PebTemplateEffect["AppendElement"] = "template:append-element";
    PebTemplateEffect["UpdateElement"] = "template:update-element";
    PebTemplateEffect["RelocateElement"] = "template:relocate-element";
    PebTemplateEffect["DeleteElement"] = "template:delete-element";
})(PebTemplateEffect || (PebTemplateEffect = {}));
var PebStylesheetEffect;
(function (PebStylesheetEffect) {
    PebStylesheetEffect["Init"] = "stylesheet:init";
    PebStylesheetEffect["Update"] = "stylesheet:update";
    PebStylesheetEffect["Delete"] = "stylesheet:delete";
})(PebStylesheetEffect || (PebStylesheetEffect = {}));
var PebContextSchemaEffect;
(function (PebContextSchemaEffect) {
    PebContextSchemaEffect["Init"] = "context-schema:init";
    PebContextSchemaEffect["Update"] = "context-schema:update";
    PebContextSchemaEffect["Delete"] = "context-schema:delete";
})(PebContextSchemaEffect || (PebContextSchemaEffect = {}));

var _a;
var PebPageType;
(function (PebPageType) {
    PebPageType["Master"] = "master";
    PebPageType["Replica"] = "replica";
})(PebPageType || (PebPageType = {}));
var PebPageVariant;
(function (PebPageVariant) {
    PebPageVariant["Front"] = "front";
    PebPageVariant["Default"] = "default";
    PebPageVariant["Category"] = "category";
    PebPageVariant["Product"] = "product";
})(PebPageVariant || (PebPageVariant = {}));
// TODO: move to a more suitable location
var ContextService;
(function (ContextService) {
    ContextService["Company"] = "company";
    ContextService["Products"] = "products";
    ContextService["Shipments"] = "shipments";
})(ContextService || (ContextService = {}));
// TODO: move to a more suitable location
var CONTEXT_SERVICES = (_a = {},
    _a[ContextService.Company] = new InjectionToken('ContextServices.Company'),
    _a[ContextService.Products] = new InjectionToken('ContextServices.Products'),
    _a[ContextService.Shipments] = new InjectionToken('ContextServices.Shipments'),
    _a);

var PebElementType;
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
})(PebElementType || (PebElementType = {}));
var PebMakerType;
(function (PebMakerType) {
    PebMakerType["Text"] = "text";
})(PebMakerType || (PebMakerType = {}));
var PebElementContextState;
(function (PebElementContextState) {
    PebElementContextState["Loading"] = "loading";
    PebElementContextState["Error"] = "error";
    PebElementContextState["Ready"] = "ready";
    PebElementContextState["Empty"] = "empty";
})(PebElementContextState || (PebElementContextState = {}));

var PebScreen;
(function (PebScreen) {
    PebScreen["Desktop"] = "desktop";
    PebScreen["Tablet"] = "tablet";
    PebScreen["Mobile"] = "mobile";
})(PebScreen || (PebScreen = {}));

var AbstractComponent = /** @class */ (function () {
    function AbstractComponent() {
        this.destroyed$ = new ReplaySubject();
    }
    AbstractComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    AbstractComponent.ɵfac = function AbstractComponent_Factory(t) { return new (t || AbstractComponent)(); };
    AbstractComponent.ɵdir = ɵɵdefineDirective({ type: AbstractComponent });
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
    return __assign(__assign({}, merge({}, elementProps)), { children: children.map(function (child) { return pebMapElementDeep(child, handler); }) });
}
function pebFilterElementDeep(element, handler) {
    var _a, _b;
    var nextChildren = (_a = element.children) === null || _a === void 0 ? void 0 : _a.filter(handler);
    return __assign(__assign({}, merge({}, element)), { children: (_b = nextChildren) === null || _b === void 0 ? void 0 : _b.map(function (child) { return pebFilterElementDeep(child, handler); }) });
}
function pebTraverseElementDeep(element, handler) {
    handler(merge({}, element));
    if (isArray(element.children)) {
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
    if (predicate && !isFunction(predicate)) {
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
    if (isArray(element.children)) {
        element.children.forEach(function (el) { return pebTraverseElementDeepWithParent(el, handler, element.id, nextPriority); });
    }
}
function pebFindElementChildrenWithParent(element, predicate) {
    if (predicate === void 0) { predicate = (function () { return true; }); }
    if (predicate && !isFunction(predicate)) {
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
        return Number(random(0, Math.pow(base, 5) - 1)).toString(base);
    }
    return v4();
}

var _a$1;
var pebContextSchemaEffectHandlers = (_a$1 = {},
    _a$1[PebContextSchemaEffect.Init] = pebContextSchemaEffectInitHandler,
    _a$1[PebContextSchemaEffect.Update] = pebContextSchemaEffectUpdateHandler,
    _a$1[PebContextSchemaEffect.Delete] = pebContextSchemaEffectDeleteHandler,
    _a$1);
function pebContextSchemaEffectInitHandler(_, payload) {
    return payload;
}
function pebContextSchemaEffectUpdateHandler(prevSchema, payload) {
    return merge({}, prevSchema, payload);
}
function pebContextSchemaEffectDeleteHandler(prevSchema, payload) {
    return null;
}

var _a$2;
var pebPageEffectHandler = (_a$2 = {},
    _a$2[PebPageEffect.Create] = pebPageEffectCreateHandler,
    _a$2[PebPageEffect.UpdateData] = pebPageEffectUpdateDataHandler,
    _a$2[PebPageEffect.Delete] = pebPageEffectDeleteHandler,
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
    _a$3[PebShopEffect.Init] = pebShopEffectCreateHandler,
    _a$3[PebShopEffect.UpdateData] = pebShopEffectUpdateDataHandler,
    _a$3[PebShopEffect.UpdatePages] = pebShopEffectUpdatePagesHandler,
    _a$3[PebShopEffect.AppendPage] = pebShopEffectAppendPagesHandler,
    _a$3[PebShopEffect.DeletePage] = pebShopEffectAppendPagesHandler,
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
    _a$4[PebStylesheetEffect.Init] = pebStylesheetInitHandler,
    _a$4[PebStylesheetEffect.Update] = pebStylesheetUpdateHandler,
    _a$4[PebStylesheetEffect.Delete] = pebStylesheetDeleteHandler,
    _a$4);
function pebStylesheetInitHandler(_, payload) {
    return payload;
}
function pebStylesheetUpdateHandler(prevState, payload) {
    return merge({}, prevState, payload);
}
function pebStylesheetDeleteHandler() {
    return null;
}

var _a$5;
var layoutsScopeName = 'layouts';
var pebLayoutEffectHandlers = (_a$5 = {},
    _a$5[PebTemplateEffect.Init] = pebLayoutInitHandler,
    _a$5[PebTemplateEffect.Destroy] = pebLayoutDestroyHandler,
    _a$5[PebTemplateEffect.AppendElement] = pebLayoutAppendElementHandler,
    _a$5[PebTemplateEffect.UpdateElement] = pebLayoutUpdateElementHandler,
    _a$5[PebTemplateEffect.RelocateElement] = pebLayoutRelocateElementHandler,
    _a$5[PebTemplateEffect.DeleteElement] = pebLayoutDeleteElementHandler,
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
        var collectionNames = Object.values(PebEffectTarget);
        // TODO: Check if Maps are deeply copied
        if (areaName === PebEffectTarget.Shop) {
            // debugger;
            return __assign(__assign({}, prevState), { shop: handler(prevState.shop, effect.payload) }); // FIXME: Type??
        }
        else if (collectionNames.includes(areaName)) {
            var prevUnit = prevState[areaName][areaId] || null;
            var nextUnit = handler(prevUnit, effect.payload);
            var nextArea = Boolean(nextUnit)
                ? __assign(__assign({}, prevState[areaName]), (_a = {}, _a[areaId] = nextUnit, _a)) : omit(prevState[areaName], areaId);
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
        _a[PebScreen.Desktop] = pebGenerateId('stylesheet'),
        _a[PebScreen.Tablet] = pebGenerateId('stylesheet'),
        _a[PebScreen.Mobile] = pebGenerateId('stylesheet'),
        _a);
    var pageContextId = pebGenerateId('context');
    return {
        id: pebGenerateId('action'),
        createdAt: new Date(),
        effects: __spread([
            {
                type: PebTemplateEffect.Init,
                target: PebEffectTarget.Templates + ":" + pageTemplateId,
                payload: page.template,
            }
        ], Object.values(PebScreen).map(function (screen) { return ({
            type: PebStylesheetEffect.Init,
            target: PebEffectTarget.Stylesheets + ":" + stylesIds[screen],
            payload: page.stylesheets[screen],
        }); }), [
            {
                type: PebContextSchemaEffect.Init,
                target: PebEffectTarget.ContextSchemas + ":" + pageContextId,
                payload: page.context,
            },
            {
                type: PebPageEffect.Create,
                target: PebEffectTarget.Pages + ":" + page.id,
                payload: {
                    id: page.id,
                    type: page.type,
                    variant: page.variant,
                    master: page.master,
                    name: page.name,
                    data: page.data,
                    templateId: pageTemplateId,
                    stylesheetIds: (_b = {},
                        _b[PebScreen.Desktop] = "" + stylesIds[PebScreen.Desktop],
                        _b[PebScreen.Tablet] = "" + stylesIds[PebScreen.Tablet],
                        _b[PebScreen.Mobile] = "" + stylesIds[PebScreen.Mobile],
                        _b),
                    contextId: "" + pageContextId,
                },
            },
            {
                type: PebContextSchemaEffect.Init,
                target: PebEffectTarget.ContextSchemas + ":" + shopContextId,
                payload: {},
            },
            {
                type: PebShopEffect.Init,
                target: PebEffectTarget.Shop,
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
    if (type === void 0) { type = PebPageType.Replica; }
    if (variant === void 0) { variant = PebPageVariant.Default; }
    var line = {
        id: pebGenerateId(),
        type: PebElementType.Line,
    };
    var template = {
        id: pebGenerateId('element'),
        type: PebElementType.Document,
        children: ['header', 'body', 'footer'].map(function (sectionName) { return ({
            id: pebGenerateId('element'),
            type: PebElementType.Section,
            data: { name: sectionName },
            meta: { deletable: false },
            children: __spread((sectionName === 'header' ? [
                {
                    id: pebGenerateId('element'),
                    type: PebElementType.Block,
                    children: [
                        {
                            id: pebGenerateId('element'),
                            type: PebElementType.Text,
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
    var blockColor = '#' + Number(random(0, Math.pow(16, 6))).toString(16);
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
            _a[PebScreen.Desktop] = (_b = {},
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
            _a[PebScreen.Tablet] = (_c = {},
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
            _a[PebScreen.Mobile] = (_d = {},
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

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractComponent, CONTEXT_SERVICES, ContextService, PebApiService, PebContextSchemaEffect, PebEffectTarget, PebElementContextState, PebElementType, PebMakerType, PebPageEffect, PebPageType, PebPageVariant, PebScreen, PebShopEffect, PebStylesheetEffect, PebTemplateEffect, pebActionHandler, pebCompileActions, pebCreateElementKit, pebCreateEmptyPage, pebCreateEmptyShop, pebCreateLogger, pebCreateShopInitAction, pebFilterElementDeep, pebFindElementChildren, pebFindElementChildrenWithParent, pebFindElementParents, pebGenerateId, pebMapElementDeep, pebTraverseElementDeep, pebTraverseElementDeepWithParent };
//# sourceMappingURL=pe-builder-core.js.map
