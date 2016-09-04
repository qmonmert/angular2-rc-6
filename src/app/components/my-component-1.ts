import { Component, OnInit }  from '@angular/core';

import { MyService }          from './../services/my-service';

@Component({
  moduleId: module.id,
  selector: 'my-component-1',
  template: `
    <p>my-component-1 works!</p>
    <p>{{text}}</p>
  `
})
export class MyComponent1 implements OnInit {

  text: string;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.text = this.myService.getTextFromMyService();
  }

}
