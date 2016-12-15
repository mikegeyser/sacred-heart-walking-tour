import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PointOfInterest, addPointOfInterest } from '../point-of-interest';
import {PointOfInterestElement} from '../point-of-interest-element';

@Component({
  selector: 'page-point-of-interest',
  templateUrl: 'point-of-interest.html'
})
export class PointOfInterestPage {
  poi: PointOfInterest;
  selected: PointOfInterestElement

  constructor() {
    this.poi = poi; // Hack
    this.selected = poi.elements[0]; 
  }
  
  private getIndex(){
    return this.poi.elements.indexOf(this.selected);
  }

  isFirst(){
    return this.getIndex() === 0;
  }

  isLast(){
    return (this.poi.elements.length === this.getIndex() + 1);
  }

  previous(){
    let index = this.getIndex();
    
    if (!this.isFirst()){
      this.selected = this.poi.elements[index - 1];
    }
  }

  next(){
    let index = this.getIndex();
    
    if (!this.isLast()){
      this.selected = this.poi.elements[index + 1];
    }
  }
}

var poi = new PointOfInterest("9", "Pre Primary", -26.173365, 28.074303, PointOfInterestPage);
poi.addElement({ description: "Some random descriptive text.", url: "assets/images/points-of-interest/pre-primary/cover.jpg"});
poi.addElement({ description: "Some random descriptive text.", url: "assets/images/points-of-interest/pre-primary/1.jpg"});
poi.addElement({ description: "Some random descriptive text.", url: "assets/images/points-of-interest/pre-primary/2.jpg"});
poi.addElement({ description: "Some random descriptive text.", url: "assets/images/points-of-interest/pre-primary/3.jpg"});
poi.addElement({ description: "Some random descriptive text.", url: "assets/images/points-of-interest/pre-primary/4.jpg"});
addPointOfInterest(poi);