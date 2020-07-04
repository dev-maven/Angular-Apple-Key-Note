We have necessity to compile multiple independent scopes (layout, stylesheet).




## List of possible interactions in theme editor and their effects

* theme creation
    initiate theme with empty theme.pages array 
    initiate `contextSchema` for theme
    initiate first page of the theme (see: add page interactions) 
* add new page
* copy existing page
    добавить страницу в theme.pages
    создать общую инфу страницы
    создать layout
    создать contextSchema для страницы
    создать stylesheet для каждого из экранов
* update general page data (name, url, mark)
    обновить общую инфу страницы
* delete page
    remove page from theme.pages
    delete general page info
    delete according layout
    delete stylesheets
    delete context
* add element on the page
    обновить layout
    добавить свойства в stylesheet
    добавить contextSchema страницы (если нужно)
    добавить contextSchema темы (если нужно)
* delete element from the page
    обновить layout
    удалить декларации для всех stylesheet'ов для этого элемента
    удалить contextSchema (если )
* move element from one page to another
    удалить на текущей странице
        в layout'е
        в стилях (для всех)
        в контексте (если есть)
    на желаемое странице добавить этот элемент
        в layout (к определённому parent'у)
        декларацию всех стилей
        контекст (если был)
* refresh element
    || update layout
    || update specific stylesheet or all
    || context
    
    
    
