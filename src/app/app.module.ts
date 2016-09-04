import { NgModule }                     from '@angular/core';

import { Angular2Rc6AppComponent }      from './angular2-rc-6.component';
import { MyComponent1 }                 from './components/my-component-1';
import { MyComponent2 }                 from './components/my-component-2';

import { routing }                      from './routes';

import { BrowserModule }                from '@angular/platform-browser';
import { HttpModule }                   from '@angular/http';
import { FormsModule }                  from '@angular/forms';

import { MyService }                    from './services/my-service';

@NgModule({
    declarations: [
        Angular2Rc6AppComponent,
        MyComponent1,
        MyComponent2
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    providers: [
        MyService
    ],
    bootstrap: [
        Angular2Rc6AppComponent
    ]
})
export class AppModule {}
