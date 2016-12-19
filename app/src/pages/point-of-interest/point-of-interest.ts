import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { PointOfInterest, PointOfInterestElement } from '../../models/point-of-interest';
import { getPointOfInterest } from '../../data/index';

@Component({
  selector: 'page-point-of-interest',
  templateUrl: 'point-of-interest.html'
})
export class PointOfInterestPage {
  poi: PointOfInterest;
  selected: PointOfInterestElement
  showMore: boolean = false;

  constructor(params: NavParams) {
    let id = params.get('id');
    this.poi = getPointOfInterest(id);
    this.selected = this.poi.elements[0];
  }

  private getIndex() {
    return this.poi.elements.indexOf(this.selected);
  }

  isFirst() {
    return this.getIndex() === 0;
  }

  isLast() {
    return (this.poi.elements.length === this.getIndex() + 1);
  }

  previous() {
    let index = this.getIndex();

    if (!this.isFirst()) {
      this.selected = this.poi.elements[index - 1];
    }
  }

  next() {
    let index = this.getIndex();

    if (!this.isLast()) {
      this.selected = this.poi.elements[index + 1];
    }
  }

  toggleShowMore(){
    this.showMore = !this.showMore;
  }
}