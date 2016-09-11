import { NgModule } from '@angular/core';

import { scrollTo } from './scroll-to';
import { elementVisible } from './element-visible';
import { computedStyle } from './computed-style';
import { outerWidth } from './outer-width';
import { outerHeight } from './outer-height';

export {
  scrollTo,
  elementVisible,
  computedStyle,
  outerWidth,
  outerHeight
};

@NgModule({
  declarations: [
    scrollTo,
    elementVisible,
    computedStyle,
    outerWidth,
    outerHeight
  ],
  exports: [
    scrollTo,
    elementVisible,
    computedStyle,
    outerWidth,
    outerHeight
  ]
})
export class Ng2UtilsModule {}