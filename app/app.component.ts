import {Component, ViewContainerRef} from '@angular/core'

//noinspection TypeScriptCheckImport
import {
  elementVisible,
  computedStyle,
  // scrollTo,
  outerHeight,
  outerWidth
} from 'ng2-utils';

@Component({
  selector: 'my-app',
  template: `
    <a id="hello" style="background: #ccc">Hello World</a>
    <p>elementVisible(this.el, document.body): {{resp.elementVisible| json}}</p>
    <p>computedStyle(this.el, 'height'): {{resp.computedStyle}}</p>
    <p>scrollTo('#hello', 'body'): {{resp.scrollTo}}</p>
    <p>outerHeight(this.el): {{resp.outerHeight}}</p>
    <p>outerWidth(this.el): {{resp.outerWidth}}</p>
  `
})
export class AppComponent {
  el: HTMLElement;
  resp: any = {};
  constructor(private viewContainerRef: ViewContainerRef) {
    this.el = viewContainerRef.element.nativeElement;
  }

  ngOnInit() {
    this.resp.elementVisible= elementVisible(this.el, document.body);
    this.resp.computedStyle = computedStyle(this.el, 'height');
    this.resp.scrollTo      = scrollTo('#hello', 'body');
    this.resp.outerHeight   = outerHeight(this.el);
    this.resp.outerWidth    = outerWidth(this.el);
  }
}
