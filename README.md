# ng2-utils

NG2-UI utility functions

## Install

1. install ng2-utils

        $ npm install ng2-utils --save

## Use it in your code

        import { computedStyle, isElementVisible, scrollTo } from 'ng2-utils/dist';
        
## DOM-related functions

  * computedStyle(element, styleName)
    * returns style value
      
  * elementVisible(innerElement, outerElement)
    * returns visiblility of top, bottom, left, and right 
      
  * outerHeight(element)
    * return height in number
      
  * outerWidth(element)
    * return width in number
      
  * scrollTo(selector, parentCssSelector)
  
    * scrolls to a certain section in a second
    * returns void

## pipes

  * string | htmlCode:'include,-exclude'
    * returns html string with tags included and excluded 
    
  * string | jsCode
    * returns beautified Javascript code
  


