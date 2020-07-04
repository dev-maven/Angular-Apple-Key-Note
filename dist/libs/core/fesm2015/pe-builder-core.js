import { InjectionToken, ɵɵdefineDirective } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { __rest } from 'tslib';
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
const CONTEXT_SERVICES = {
    [ContextService.Company]: new InjectionToken('ContextServices.Company'),
    [ContextService.Products]: new InjectionToken('ContextServices.Products'),
    [ContextService.Shipments]: new InjectionToken('ContextServices.Shipments'),
};

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

class AbstractComponent {
    constructor() {
        this.destroyed$ = new ReplaySubject();
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
AbstractComponent.ɵfac = function AbstractComponent_Factory(t) { return new (t || AbstractComponent)(); };
AbstractComponent.ɵdir = ɵɵdefineDirective({ type: AbstractComponent });

class PebApiService {
}

const root = (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    this;
function pebCreateLogger(namespace) {
    const acceptableNss = [
        ...namespace
            .split(':')
            .map((el, i, all) => [...all.slice(0, i), '*'].join(':')),
        namespace,
    ];
    if (root.PEB_DEBUG
        && root.PEB_DEBUG.split(',').find(eNs => acceptableNss.includes(eNs))) {
        return (...input) => {
            // tslint:disable-next-line:no-console
            console.log(`%c ${namespace} `, 'background: #3078a8; color: white', ...input);
            return [...input];
        };
    }
    return (...input) => [...input];
}

function pebMapElementDeep(element, handler) {
    const _a = handler(element), { children: children = [] } = _a, elementProps = __rest(_a, ["children"]);
    return Object.assign(Object.assign({}, merge({}, elementProps)), { children: children.map(child => pebMapElementDeep(child, handler)) });
}
function pebFilterElementDeep(element, handler) {
    var _a, _b;
    const nextChildren = (_a = element.children) === null || _a === void 0 ? void 0 : _a.filter(handler);
    return Object.assign(Object.assign({}, merge({}, element)), { children: (_b = nextChildren) === null || _b === void 0 ? void 0 : _b.map(child => pebFilterElementDeep(child, handler)) });
}
function pebTraverseElementDeep(element, handler) {
    handler(merge({}, element));
    if (isArray(element.children)) {
        element.children.forEach(el => pebTraverseElementDeep(el, handler));
    }
}
function pebFindElementParents(document, id) {
    const stack = [{ node: document, i: 0 }];
    while (stack.length) {
        let current = stack[stack.length - 1];
        while (current.i < current.node.children.length) {
            const node = current.node.children[current.i];
            if (node.id === id) {
                return stack
                    .filter(el => el.node.id !== document.id)
                    .map(el => el.node);
            }
            stack.push({ node, i: 0 });
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
    predicate = predicate || (() => true); // tslint:disable-line
    const result = [];
    pebTraverseElementDeep(element, el => {
        if (predicate(el)) {
            result.push(el);
        }
    });
    return result;
}
function pebTraverseElementDeepWithParent(element, handler, parentId = null, priority = -1) {
    const nextPriority = parseInt(priority, 10) + 1;
    handler(Object.assign(Object.assign({}, element), { parentId, priority: nextPriority }));
    if (isArray(element.children)) {
        element.children.forEach(el => pebTraverseElementDeepWithParent(el, handler, element.id, nextPriority));
    }
}
function pebFindElementChildrenWithParent(element, predicate = (() => true)) {
    if (predicate && !isFunction(predicate)) {
        throw new Error('Unsupported selector');
    }
    const result = [];
    pebTraverseElementDeepWithParent(element, el => {
        if (predicate(el)) {
            result.push(el);
        }
    });
    return result;
}

// This will allow us to detect global object both in browser and in backend
// so in sandbox we could generate more readable ids and at the same time use
// normal ones in production
const root$1 = (typeof self === 'object' && self.self === self && self) ||
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
        const base = 36;
        return Number(random(0, Math.pow(base, 5) - 1)).toString(base);
    }
    return v4();
}

const pebContextSchemaEffectHandlers = {
    [PebContextSchemaEffect.Init]: pebContextSchemaEffectInitHandler,
    [PebContextSchemaEffect.Update]: pebContextSchemaEffectUpdateHandler,
    [PebContextSchemaEffect.Delete]: pebContextSchemaEffectDeleteHandler,
};
function pebContextSchemaEffectInitHandler(_, payload) {
    return payload;
}
function pebContextSchemaEffectUpdateHandler(prevSchema, payload) {
    return merge({}, prevSchema, payload);
}
function pebContextSchemaEffectDeleteHandler(prevSchema, payload) {
    return null;
}

const pebPageEffectHandler = {
    [PebPageEffect.Create]: pebPageEffectCreateHandler,
    [PebPageEffect.UpdateData]: pebPageEffectUpdateDataHandler,
    [PebPageEffect.Delete]: pebPageEffectDeleteHandler,
};
function pebPageEffectCreateHandler(_, payload) {
    return payload;
}
function pebPageEffectUpdateDataHandler(prevPage, payload) {
    return Object.assign(Object.assign({}, prevPage), { data: Object.assign(Object.assign({}, prevPage.data), payload) });
}
function pebPageEffectDeleteHandler(prevPage, payload) {
    return null;
}

const pebShopEffectHandlers = {
    [PebShopEffect.Init]: pebShopEffectCreateHandler,
    [PebShopEffect.UpdateData]: pebShopEffectUpdateDataHandler,
    [PebShopEffect.UpdatePages]: pebShopEffectUpdatePagesHandler,
    [PebShopEffect.AppendPage]: pebShopEffectAppendPagesHandler,
    [PebShopEffect.DeletePage]: pebShopEffectAppendPagesHandler,
};
function pebShopEffectCreateHandler(prevShop, payload) {
    return payload;
}
function pebShopEffectUpdateDataHandler(prevShop, payload) {
    // debugger;
    return Object.assign(Object.assign({}, prevShop), { data: Object.assign(Object.assign({}, prevShop.data), payload) });
}
function pebShopEffectUpdatePagesHandler(prevShop, payload) {
    return Object.assign(Object.assign({}, prevShop), { pageIds: payload });
}
function pebShopEffectAppendPagesHandler(prevShop, payload) {
    return Object.assign(Object.assign({}, prevShop), { pageIds: [...prevShop.pageIds, payload] });
}
function pebShopEffectDeletePagesHandler(prevShop, payload) {
    return Object.assign(Object.assign({}, prevShop), { pageIds: prevShop.pageIds.filter(id => id !== payload) });
}

const pebStylesheetEffectHandlers = {
    [PebStylesheetEffect.Init]: pebStylesheetInitHandler,
    [PebStylesheetEffect.Update]: pebStylesheetUpdateHandler,
    [PebStylesheetEffect.Delete]: pebStylesheetDeleteHandler,
};
function pebStylesheetInitHandler(_, payload) {
    return payload;
}
function pebStylesheetUpdateHandler(prevState, payload) {
    return merge({}, prevState, payload);
}
function pebStylesheetDeleteHandler() {
    return null;
}

const layoutsScopeName = 'layouts';
const pebLayoutEffectHandlers = {
    [PebTemplateEffect.Init]: pebLayoutInitHandler,
    [PebTemplateEffect.Destroy]: pebLayoutDestroyHandler,
    [PebTemplateEffect.AppendElement]: pebLayoutAppendElementHandler,
    [PebTemplateEffect.UpdateElement]: pebLayoutUpdateElementHandler,
    [PebTemplateEffect.RelocateElement]: pebLayoutRelocateElementHandler,
    [PebTemplateEffect.DeleteElement]: pebLayoutDeleteElementHandler,
};
function pebLayoutInitHandler(prevLayout, payload) {
    return payload;
}
function pebLayoutDestroyHandler(prevLayout) {
    return null;
}
function pebLayoutAppendElementHandler(prevLayout, payload) {
    return pebMapElementDeep(prevLayout, el => (el.id === payload.to ? Object.assign(Object.assign({}, el), { children: [...el.children, payload.element] }) : el));
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
    return pebFilterElementDeep(prevLayout, c => c.id !== payload);
}

const createInitialShopSnapshot = () => ({
    // TODO: is hash needed???
    id: null,
    shop: null,
    pages: {},
    templates: {},
    stylesheets: {},
    contextSchemas: {},
});
const effectHandlers = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pebShopEffectHandlers), pebPageEffectHandler), pebLayoutEffectHandlers), pebStylesheetEffectHandlers), pebContextSchemaEffectHandlers);
function pebActionHandler(input, action) {
    return action.effects.reduce((prevState, effect) => {
        const [areaName, areaId] = effect.target.split(':');
        const handler = effectHandlers[effect.type];
        if (!handler) {
            throw new Error('Invalid effect type');
        }
        const collectionNames = Object.values(PebEffectTarget);
        // TODO: Check if Maps are deeply copied
        if (areaName === PebEffectTarget.Shop) {
            // debugger;
            return Object.assign(Object.assign({}, prevState), { shop: handler(prevState.shop, effect.payload) }); // FIXME: Type??
        }
        else if (collectionNames.includes(areaName)) {
            const prevUnit = prevState[areaName][areaId] || null;
            const nextUnit = handler(prevUnit, effect.payload);
            const nextArea = Boolean(nextUnit)
                ? Object.assign(Object.assign({}, prevState[areaName]), { [areaId]: nextUnit }) : omit(prevState[areaName], areaId);
            return Object.assign(Object.assign({}, prevState), { [areaName]: nextArea });
        }
        throw new Error('Invalid effect target');
    }, input);
}
const pebCompileActions = (actions) => actions.reduce(pebActionHandler, createInitialShopSnapshot());

// TODO: Properly handle shop with multiple pages
const pebCreateShopInitAction = (shop) => {
    const page = shop.pages[0];
    const shopContextId = pebGenerateId('context');
    const pageTemplateId = pebGenerateId('template');
    const stylesIds = {
        [PebScreen.Desktop]: pebGenerateId('stylesheet'),
        [PebScreen.Tablet]: pebGenerateId('stylesheet'),
        [PebScreen.Mobile]: pebGenerateId('stylesheet'),
    };
    const pageContextId = pebGenerateId('context');
    return {
        id: pebGenerateId('action'),
        createdAt: new Date(),
        effects: [
            {
                type: PebTemplateEffect.Init,
                target: `${PebEffectTarget.Templates}:${pageTemplateId}`,
                payload: page.template,
            },
            ...Object.values(PebScreen).map(screen => ({
                type: PebStylesheetEffect.Init,
                target: `${PebEffectTarget.Stylesheets}:${stylesIds[screen]}`,
                payload: page.stylesheets[screen],
            })),
            {
                type: PebContextSchemaEffect.Init,
                target: `${PebEffectTarget.ContextSchemas}:${pageContextId}`,
                payload: page.context,
            },
            {
                type: PebPageEffect.Create,
                target: `${PebEffectTarget.Pages}:${page.id}`,
                payload: {
                    id: page.id,
                    type: page.type,
                    variant: page.variant,
                    master: page.master,
                    name: page.name,
                    data: page.data,
                    templateId: pageTemplateId,
                    stylesheetIds: {
                        [PebScreen.Desktop]: `${stylesIds[PebScreen.Desktop]}`,
                        [PebScreen.Tablet]: `${stylesIds[PebScreen.Tablet]}`,
                        [PebScreen.Mobile]: `${stylesIds[PebScreen.Mobile]}`,
                    },
                    contextId: `${pageContextId}`,
                },
            },
            {
                type: PebContextSchemaEffect.Init,
                target: `${PebEffectTarget.ContextSchemas}:${shopContextId}`,
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
        ],
    };
};

// TODO: Delete after 25.04 if not used
const pebCreateElementKit = (elementPayload, styles, contextItem) => {
    const element = Object.assign(Object.assign({}, elementPayload), { id: pebGenerateId() });
    return {
        element,
        styles,
        contextSchema: {
            [element.id]: contextItem,
        },
    };
};

const pebCreateEmptyPage = (name, type = PebPageType.Replica, variant = PebPageVariant.Default) => {
    const line = {
        id: pebGenerateId(),
        type: PebElementType.Line,
    };
    const template = {
        id: pebGenerateId('element'),
        type: PebElementType.Document,
        children: ['header', 'body', 'footer'].map(sectionName => ({
            id: pebGenerateId('element'),
            type: PebElementType.Section,
            data: { name: sectionName },
            meta: { deletable: false },
            children: [
                ...(sectionName === 'header' ? [
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
                ] : []),
            ],
        })),
    };
    const [headerId, bodyId, footerId] = template.children.map(el => el.id);
    const headerBlockId = template.children[0].children[0].id;
    const blockColor = '#' + Number(random(0, Math.pow(16, 6))).toString(16);
    return {
        id: pebGenerateId('page'),
        name,
        type,
        variant,
        master: null,
        data: {
            url: '/',
            mark: null,
        },
        template,
        stylesheets: {
            [PebScreen.Desktop]: {
                [headerId]: { height: 200 },
                [bodyId]: { height: 600 },
                [footerId]: { height: 200 },
                [headerBlockId]: {
                    height: 150,
                    width: 150,
                    backgroundColor: blockColor,
                },
                [line.id]: { height: 2 },
            },
            [PebScreen.Tablet]: {
                [headerId]: { height: 200 },
                [bodyId]: { height: 600 },
                [footerId]: { height: 200 },
                [headerBlockId]: {
                    height: 150,
                    width: 150,
                    backgroundColor: blockColor,
                },
                [line.id]: { height: 2 },
            },
            [PebScreen.Mobile]: {
                [headerId]: { height: 200 },
                [bodyId]: { height: 600 },
                [footerId]: { height: 200 },
                [headerBlockId]: {
                    height: 150,
                    width: 150,
                    backgroundColor: blockColor,
                },
                [line.id]: { height: 2 },
            },
        },
        context: {},
    };
};
function pebCreateEmptyShop() {
    const frontPage = pebCreateEmptyPage('Front');
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
