import { NgModule } from '@angular/core';

import { scrollTo } from './dom-functions/scroll-to';
import { elementVisible } from './dom-functions/element-visible';
import { computedStyle } from './dom-functions/computed-style';
import { outerWidth } from './dom-functions/outer-width';
import { outerHeight } from './dom-functions/outer-height';

import { HtmlCodePipe } from './pipes/html-code.pipe';
import { JavascriptCodePipe } from './pipes/javascript-code.pipe';
import { Ng2UtilsDirective } from "./directives/ng2-utils.directive";

@NgModule({
  declarations: [
    HtmlCodePipe,
    JavascriptCodePipe,
    Ng2UtilsDirective
  ],
  exports: [
    HtmlCodePipe,
    JavascriptCodePipe,
    Ng2UtilsDirective
  ]
})
export class Ng2UtilsModule {}