import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'map',
  template: `<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>
</ol><div id="gmap" style="width:500px;height:380px;"></div>`
})
export class MapComponent implements OnInit {
  ngOnInit() {
    var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
      var infoWindow = new google.maps.InfoWindow({map: map});
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
        }, function() {
          this.handleLocationError(true, infoWindow, map.getCenter());
        });}
  }

  handleLocationError(browserHasGeolocation: any, infoWindow: any, pos: any) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }
}
