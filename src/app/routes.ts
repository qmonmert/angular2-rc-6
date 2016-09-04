import { Routes, RouterModule }  from '@angular/router';

import { MyComponent1 }          from './components/my-component-1';
import { MyComponent2 }          from './components/my-component-2';

export const appRoutes: Routes = [
	{ path: '',             component: MyComponent1 },
	{ path: 'component2',   component: MyComponent2 },
	{ path: '**',   		component: MyComponent1 }
];

export const routing = RouterModule.forRoot(appRoutes);
