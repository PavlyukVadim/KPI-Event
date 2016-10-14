import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';



import { AppComponent }  from './app.component';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import {Angular2Carousel} from './carousel-example';


@NgModule({
  imports: [ 
  BrowserModule,
	RouterModule.forRoot([
	  {
	    path: 'map',
	    component: Angular2Carousel
	  }
	])
  ],

  declarations: [ 
  	AppComponent,
   	Slide,
   	Carousel,
   	Angular2Carousel
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
