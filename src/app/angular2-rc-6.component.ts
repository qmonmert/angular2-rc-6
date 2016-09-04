import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'angular2-rc-6-app',
  template: `
    <a [routerLink]="['/']">Component 1</a>
    <a [routerLink]="['/component2']">Component 2</a>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class Angular2Rc6AppComponent {}
