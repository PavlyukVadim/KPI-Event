import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MapComponent } from './map.component';
import { MainComponent } from './main.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
    	{path: '', redirectTo: '/main', pathMatch: 'full'},
    	{ path: 'main', component: MainComponent },	
      { path: 'maps/:id', component: MapComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
