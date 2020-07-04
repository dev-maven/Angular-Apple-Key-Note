type UniqueId = string;

type ContextService = 'business'|'product'|'shipment';

interface ContextSchema {
  [ns: string]: {
    service: ContextService;
    method: string;
    params: any[];
  };
}

interface Styles {
  [selector: string]: { [styleName: string]: any };
}

interface Element {
  id: UniqueId;
  meta: any;
  type: 'document'|'section'|'product'|'text';
  children: Element[];
}

interface Action {
  id: UniqueId;
  type: 'theme.context'|'page.context'|'page.document'|'page.screen.styling';
  target: string;
  payload: any;
  createdAt: Date;
}

interface PageSource {
  pageId: UniqueId;
  masterPageId: UniqueId;
  actions: Action[];
  snapshot: Page;
}

interface ThemeSource {
  actions: Action[];
  // ...
}

interface Page extends Element {
  id: UniqueId;
  name: string;
  document: Element;
  context: ContextSchema;
  styles: {
    [screen: string]: Styles; // css for some media
  };
}

//
//  Theme level
//
interface SiteThemeRoute {
  id: UniqueId;
  url: string;
  page: Page;
  context: ContextSchema;
}

interface ShopTheme {
  id: UniqueId;
  routing: SiteThemeRoute;
  context: ContextSchema;
  templates: Page;
}

interface AppointmentTheme {
  id: UniqueId;
  routing: SiteThemeRoute;
  context: ContextSchema;
  templates: Page;
}

interface POSTheme {
  id: UniqueId;
  context: ContextSchema;
  page: Page;
}
