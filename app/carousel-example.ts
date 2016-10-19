import {Component, OnInit} from '@angular/core';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import { Event } from './event';

import { EventService } from './event.service';



/*Angular 2 Carousel - Gallery*/
@Component({
    selector: 'my-carousel',
    template:`<div class="row">
                <div class="col-md-12" id="my-carousel">
                  <carousel [interval]="NextPhotoInterval" [noWrap]="noLoopSlides">
                    <slide *ngFor="let slidez of slides;"
                           [active]="slidez.active">
                      <img [src]="slidez.image" style="margin:auto;">

                      <div class="carousel-caption">
                        <h3 style="background-color: transparent;color: white;">{{slidez.text}}</h3>
                        <p  style="background-color: transparent;color: white;"></p>
                      </div>
                    </slide>
                  </carousel>
                </div>
              </div>`,
    styles: ['img{ height: 350px;}'],
    providers: [EventService]
})

export class Angular2Carousel implements OnInit {
  //The time to show the next photo\
  private NextPhotoInterval:number = 2000;
  //Looping or not
  private noLoopSlides:boolean = true;
  //Photos
  private slides:Array<any> = [];

  events: any;

  constructor(private eventService: EventService) { }

  getEvents(): void {
    this.events = this.eventService.getEventById(1);
    console.log(this.events);
  }

  ngOnInit(): void {
    this.getEvents();
    this.addNewSlide(this, 1, 2);
  }

  private addNewSlide(that: any, startId: number, finishId: number) {
    let i = startId;
    for (; i <= finishId; i++) {
      that.slides.push({image: that.eventService.getEventById(i).img, text: that.eventService.getEventById(i).title});
    }
  }
}