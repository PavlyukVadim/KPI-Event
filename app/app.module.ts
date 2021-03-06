import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent }  from './app.component';
import { MenuComponent } from './menu.component';
import { FooterComponent } from './footer.component';
import { MainComponent } from './main.component';

import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import {Angular2Carousel} from './carousel-example';
import {MapComponent} from './map.component';



import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [ 
  BrowserModule,
  AppRoutingModule,  
  ],

  declarations: [ 
  	AppComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
   	Slide,
   	Carousel,
   	Angular2Carousel,
   	MapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
