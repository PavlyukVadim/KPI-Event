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
var event_service_1 = require('./event.service');
var MapComponent = (function () {
    function MapComponent(route, router, eventService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.event = _this.eventService.getEventById(id);
            console.log(_this.event);
        });
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
        var posButtonDiv;
        posButtonDiv = document.createElement('div');
        var posButton = that.PosControl(posButtonDiv, map);
        posButtonDiv.index = 1;
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(posButtonDiv);
    };
    MapComponent.prototype.PosControl = function (posButtonDiv, map) {
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
        controlUI.addEventListener('click', function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
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
                }, function () { });
            }
        });
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: 'app/templates/map.html',
            styleUrls: ['app/styles/map.css'],
            providers: [event_service_1.EventService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, event_service_1.EventService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map