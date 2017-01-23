var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { getPointOfInterest } from '../../data/index';
var PointOfInterestPage = (function () {
    function PointOfInterestPage(params) {
        this.showMore = false;
        var id = params.get('id');
        this.poi = getPointOfInterest(id);
        this.selected = this.poi.elements[0];
    }
    PointOfInterestPage.prototype.getIndex = function () {
        return this.poi.elements.indexOf(this.selected);
    };
    PointOfInterestPage.prototype.isFirst = function () {
        return this.getIndex() === 0;
    };
    PointOfInterestPage.prototype.isLast = function () {
        return (this.poi.elements.length === this.getIndex() + 1);
    };
    PointOfInterestPage.prototype.previous = function () {
        var index = this.getIndex();
        if (!this.isFirst()) {
            this.selected = this.poi.elements[index - 1];
        }
    };
    PointOfInterestPage.prototype.next = function () {
        var index = this.getIndex();
        if (!this.isLast()) {
            this.selected = this.poi.elements[index + 1];
        }
    };
    PointOfInterestPage.prototype.toggleShowMore = function () {
        this.showMore = !this.showMore;
    };
    return PointOfInterestPage;
}());
PointOfInterestPage = __decorate([
    Component({
        selector: 'page-point-of-interest',
        templateUrl: 'point-of-interest.html'
    }),
    __metadata("design:paramtypes", [NavParams])
], PointOfInterestPage);
export { PointOfInterestPage };
//# sourceMappingURL=point-of-interest.js.map