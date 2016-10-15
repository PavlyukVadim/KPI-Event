"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var MapComponent = (function () {
    function MapComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MapComponent.prototype.gotoHeroes = function () {
        //let heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        this.router.navigate(['/map', { id: 1 }]);
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            alert(id);
            _this.router.navigate(['/map', 1]);
            //this.service.getHero(id).then(hero => this.hero = hero);
        });
        var mapProp = {
            center: new google.maps.LatLng(50.44, 30.46),
            zoom: 20,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
        var infoWindow = new google.maps.InfoWindow({ map: map });
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
    };
    MapComponent.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: 'app/templates/map.html',
            styleUrls: ['app/styles/map.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map