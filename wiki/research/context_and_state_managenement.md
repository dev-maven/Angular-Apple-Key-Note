# Shop state management and theme/page context:

TODO(@dmlukichev): Rewrite this describing how this has been actually implemented 

### Prerequirements

Renderer shouldn't be aware about handling context/state. Except some very lower level case like offset 
of `carousel` element or opened state of `dropdown`.    
If some element needs to interact with other element on the page, it should be handled a level upper (ie: in Shop or POS app).

Context/state could be assigned to following logical levels:
* some context is assigned to the theme on a global level (ie: company info)
* another kind of variables should be assignable to specific pages (ie: mapping of product to specific widget)
* internal shop state should be taken into account

Theme/page context should be defined as methods that application will know how to handle. (ie:`@company: 'company.getInfo()'` at 
_theme_ level or `@product.123: products.getSingle()` at _page_ level).
Internal state should be set to initial values at first and modified during interaction with resulting page. 

### Raised questions
* what kind of storage should be selected for theme/page context
* should modification for the context of the theme/page be undoable (is state machine and storing actions necessary)
* if yes, how resulting theme will look like? What kind of structure in this case will theme have?
* how this works taking into account _master/replica pages_ feature
    Master pages shouldn't have any context definitions.
    When we install different theme with it's another set of master pages, we update existing pages 
    to keep it's data.

* in what form should we store context fetchers and how it will be parsed
* how context providers will be injected into different apps
* how will we handle state across context and prevent conflicts = just naming conventions
* what kind of context/state could we have in foreseeable future

### Assignments for context/state per level

* Theme
    * company/shop name, logo url
    * latest posts (ie to make footer more up to date)
    * creation date (for dynamic copyright string)
    * company social accounts
* Page
    * per element bindings (TODO: Enumerate possible bindings)
* State
    * cart content
    * user info
    * search string
    * track number of the delivery
    * presells/upsells
