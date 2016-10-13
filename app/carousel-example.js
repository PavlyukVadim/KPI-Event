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
/*Angular 2 Carousel - Gallery*/
var Angular2Carousel = (function () {
    function Angular2Carousel() {
        //The time to show the next photo\
        this.NextPhotoInterval = 2000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.addNewSlide();
    }
    Angular2Carousel.prototype.addNewSlide = function () {
        this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
    };
    Angular2Carousel = __decorate([
        core_1.Component({
            selector: 'my-carousel',
            template: "<div class=\"row\">\n                <div class=\"col-md-12\">\n                  <carousel [interval]=\"NextPhotoInterval\" [noWrap]=\"noLoopSlides\">\n                    <slide *ngFor=\"let slidez of slides;\"\n                           [active]=\"slidez.active\">\n                      <img [src]=\"slidez.image\" style=\"margin:auto;\">\n\n                      <div class=\"carousel-caption\">\n                        <h3 style=\"background-color: transparent;color: white;\">Slide</h3>\n                        <p  style=\"background-color: transparent;color: white;\">{{slidez.text}}</p>\n                      </div>\n                    </slide>\n                  </carousel>\n                </div>\n              </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Angular2Carousel);
    return Angular2Carousel;
}());
exports.Angular2Carousel = Angular2Carousel;
//# sourceMappingURL=carousel-example.js.map