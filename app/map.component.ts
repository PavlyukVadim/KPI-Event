import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var google: any;

@Component({
  selector: 'map',
  templateUrl: 'app/templates/map.html',
  styleUrls: ['app/styles/map.css']
})
export class MapComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  gotoHeroes() {
    //let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/map', { id: 1}]);
  }


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = + params['id']; // (+) converts string 'id' to a number
       alert(id);
       this.router.navigate(['/map', 1]);
       //this.service.getHero(id).then(hero => this.hero = hero);
     }
   );


    var mapProp = {
            center: new google.maps.LatLng(50.44, 30.46),
            zoom: 20,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
      var infoWindow = new google.maps.InfoWindow({map: map});
      /*if (navigator.geolocation) {
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
        });}*/
  }

  handleLocationError(browserHasGeolocation: any, infoWindow: any, pos: any) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }
}
