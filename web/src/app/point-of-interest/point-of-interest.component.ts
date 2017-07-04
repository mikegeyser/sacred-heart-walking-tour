import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PointOfInterest, PointOfInterestElement } from '../models/point-of-interest';
import { getPointOfInterest } from '../data/index';

@Component({
  selector: 'app-point-of-interest',
  templateUrl: './point-of-interest.component.html',
  styleUrls: ['./point-of-interest.component.scss']
})
export class PointOfInterestComponent implements OnInit {
  poi: PointOfInterest;
  selected: PointOfInterestElement
  showMore = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('wat');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.poi = getPointOfInterest(id);
      this.selected = this.poi.elements[0];
    })
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

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  close() {
    this.router.navigate(['/']);
  }
}
