import { PointOfInterest } from '../models/point-of-interest';

import { One } from './1';
import { Five } from './5';
import { Nine } from './9';
import { Ten } from './10';
import { Sixteen } from './16';
import { Seventeen } from './17';
import { TwentyOne } from './21';
import { TwentyThree } from './23';
import { TwentySix } from './26';
import { TwentyNine } from './29';



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
addPointOfInterest(Sixteen);
addPointOfInterest(Seventeen);
addPointOfInterest(TwentyOne);
addPointOfInterest(TwentyThree);
addPointOfInterest(TwentySix);
addPointOfInterest(TwentyNine);