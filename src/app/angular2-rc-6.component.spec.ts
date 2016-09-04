import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2Rc6AppComponent } from '../app/angular2-rc-6.component';

beforeEachProviders(() => [Angular2Rc6AppComponent]);

describe('App: Angular2Rc6', () => {
  it('should create the app',
      inject([Angular2Rc6AppComponent], (app: Angular2Rc6AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-rc-6 works!\'',
      inject([Angular2Rc6AppComponent], (app: Angular2Rc6AppComponent) => {
    expect(app.title).toEqual('angular2-rc-6 works!');
  }));
});
