import { PointOfInterest } from '../models/point-of-interest';

import {One} from './1';
import {Five} from './5';
import {Nine} from './9';
import {Ten} from './10';



var allPointsOfInterest: { [id: string]: PointOfInterest; } = {};

function addPointOfInterest(poi: PointOfInterest) {
    allPointsOfInterest[poi.id] = poi;
};

export var AllPointsOfInterest = allPointsOfInterest;

export function getPointOfInterest(id: string) {
    return allPointsOfInterest[id];
};

addPointOfInterest(One);
addPointOfInterest(Five);
addPointOfInterest(Nine);
addPointOfInterest(Ten);