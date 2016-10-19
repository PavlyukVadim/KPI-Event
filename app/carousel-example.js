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
var event_service_1 = require('./event.service');
/*Angular 2 Carousel - Gallery*/
var Angular2Carousel = (function () {
    function Angular2Carousel(eventService) {
        this.eventService = eventService;
        //The time to show the next photo\
        this.NextPhotoInterval = 2000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
    }
    Angular2Carousel.prototype.getEvents = function () {
        this.events = this.eventService.getEventById(1);
        console.log(this.events);
    };
    Angular2Carousel.prototype.ngOnInit = function () {
        this.getEvents();
        this.addNewSlide(this, 1, 2);
    };
    Angular2Carousel.prototype.addNewSlide = function (that, startId, finishId) {
        var i = startId;
        for (; i <= finishId; i++) {
            that.slides.push({ image: that.eventService.getEventById(i).img, text: that.eventService.getEventById(i).title });
        }
    };
    Angular2Carousel = __decorate([
        core_1.Component({
            selector: 'my-carousel',
            template: "<div class=\"row\">\n                <div class=\"col-md-12\" id=\"my-carousel\">\n                  <carousel [interval]=\"NextPhotoInterval\" [noWrap]=\"noLoopSlides\">\n                    <slide *ngFor=\"let slidez of slides;\"\n                           [active]=\"slidez.active\">\n                      <img [src]=\"slidez.image\" style=\"margin:auto;\">\n\n                      <div class=\"carousel-caption\">\n                        <h3 style=\"background-color: transparent;color: white;\">{{slidez.text}}</h3>\n                        <p  style=\"background-color: transparent;color: white;\"></p>\n                      </div>\n                    </slide>\n                  </carousel>\n                </div>\n              </div>",
            styles: ['img{ height: 350px;}'],
            providers: [event_service_1.EventService]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], Angular2Carousel);
    return Angular2Carousel;
}());
exports.Angular2Carousel = Angular2Carousel;
//# sourceMappingURL=carousel-example.js.map