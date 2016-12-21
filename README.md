# ng2-utils

NG2-UI utility functions

## Install

1. install ng2-utils

        $ npm install ng2-utils --save

## Use it in your code

App Component

        import { Ng2UtilsModule } from 'ng2-utils';

        import { AppComponent }   from './app.component';

        @NgModule({
          imports: [BrowserModule, Ng2UtilsModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

        platformBrowserDynamic().bootstrapModule(AppModule);

Javascript

        import { elementVisible, computedStyle, scrollTo, outerHeight, outerWidth } from 'ng2-utils';
        
HTML

        {{myHtml | htmlCode}}
        {{myHtml | htmlCode:'include'}}
        {{myHtml | htmlCode:'-include'}}
        {{ngOnInit | jsCode}}
        
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
  


