// import router modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components

import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
// create routes array
const appRoutes: Routes = [

	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'detail/:id', component: DetailComponent},
	{path: 'car/:id', component: DetailComponent},
	{path: '**', component: HomeComponent}
];

// export configuration
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
