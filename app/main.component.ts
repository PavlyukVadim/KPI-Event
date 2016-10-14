import { Component, OnInit } from '@angular/core';
import { Event } from './event';

import { EventService } from './event.service';


@Component({
  selector: 'my-main',
  templateUrl: 'app/templates/main.html',
  styleUrls: ['app/styles/main.css'],
  providers: [EventService]
})

export class MainComponent implements OnInit {
  events: Event[];
  
  constructor(private eventService: EventService) { }
 
  getEvents(): void {
    this.eventService.getEvents().then(events => this.events = events);
  }
  ngOnInit(): void {
    this.getEvents();
  }

}
