# Terms
Element is an independent piece of UI that would be customised by a builder 
user. It is defined by following data: 

###### element: PebElement 
General information about element type, it's children and it's static data. 
In general this should by considered as HTML part of an application 

###### styles: PebElementStyles 
Information about element appearance. Almost like CSS, but can have custom 
properties for complex elements.

###### context: PebContext
Here element will receive data that would be fetched dynamically from external
services.


Also as an input element will receive information about environment where it is 
rendered (scale, screen, locale) in `options` input. This would be useful if 
appearance and behaviour of an element varies depending on this data.  


## HowTo: Create new element?

* create element definition in `@pe/builder-renderer/src/elements/${SCOPE}/${ELEMENT_NAME}`
* add this element to collection of available elements in `AVAILABLE_ELEMENTS_SET`
* extend this element from `PebAbstractElement`
* define element's customizable areas in `elements` getter
* define how element styles should be mapped to element styles in `mappedStyles` getter
* (if element could have children) create an element that will be container for this children and mark it 
with `pebRendererChildrenSlot` directive (use PebGridElement as an example)
* add a showcase page for this element in `sandbox` app at '+renderer/showcase-${ELEMENT-NAME}'

 
