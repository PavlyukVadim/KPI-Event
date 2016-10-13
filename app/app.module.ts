import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import {Angular2Carousel} from './carousel-example';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
  	AppComponent,
   	Slide,
   	Carousel,
   	Angular2Carousel
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
