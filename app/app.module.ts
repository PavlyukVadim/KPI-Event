import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';


import { AppComponent }  from './app.component';
import { MenuComponent } from './menu.component';
import { MainComponent } from './main.component';

import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import {Angular2Carousel} from './carousel-example';
import {MapComponent} from './map.component';



@NgModule({
  imports: [ 
  BrowserModule,
	RouterModule.forRoot([
	  {
	    path: 'map',
	    component: MapComponent
	  },
    {
      path: 'main',
      component: MainComponent
    }
	]),
  ],

  declarations: [ 
  	AppComponent,
    MenuComponent,
    MainComponent,
   	Slide,
   	Carousel,
   	Angular2Carousel,
   	MapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
