import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Event } from './event';
import { EventService } from './event.service';


declare var google: any;

@Component({
  selector: 'map',
  templateUrl: 'app/templates/map.html',
  styleUrls: ['app/styles/map.css'],
  providers: [EventService]
})

export class MapComponent implements OnInit {

  event : Event;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = + params['id']; 
       this.event = this.eventService.getEventById(id);
       console.log(this.event);
     }
   );

    var that = this;

    var mapProp = {
      center: new google.maps.LatLng(that.event.coordinates.lat, that.event.coordinates.lng),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("gmap"), mapProp);

    var marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(that.event.coordinates.lat, that.event.coordinates.lng)
    });

    marker.setAnimation(google.maps.Animation.BOUNCE);

    var posButtonDiv : any;
    posButtonDiv = document.createElement('div');
    var posButton = that.PosControl(posButtonDiv, map);

    posButtonDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(posButtonDiv);
  }


  PosControl(posButtonDiv: any, map: any) : any{

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    posButtonDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Моє місцезнаходження';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
          map.setZoom(12);
          var marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: pos
          });

          marker.setAnimation(google.maps.Animation.BOUNCE);

          }, function() { });
      }     
    });
  }
}