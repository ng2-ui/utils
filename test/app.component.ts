import {Component} from '@angular/core'
import { isElementVisible, computedStyle, scrollTo } from 'ng2-utils';

@Component({
  selector: 'my-app',
  template: `Hello {{world}}`
})
export class AppComponent {
  constructor(helloWorld: HelloWorld) {
    this.world = helloWorld.world;
  }
}
