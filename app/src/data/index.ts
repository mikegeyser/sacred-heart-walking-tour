import { PointOfInterest } from '../models/point-of-interest';

import { One } from './1';
import { Two } from './2';
import { Five } from './5';
import { Nine } from './9';
import { Ten } from './10';
import { Thirteen } from './13';
import { Sixteen } from './16';
import { Seventeen } from './17';
import { TwentyOne } from './21';
import { TwentyTwo } from './22';
import { TwentyThree } from './23';
import { TwentySix } from './26';
import { TwentyNine } from './29';
import { ThirtySix } from './36';
import { ThirtyEight } from './38';
import { ThirtyNine } from './39';



var allPointsOfInterest: { [id: string]: PointOfInterest; } = {};

function addPointOfInterest(poi: PointOfInterest) {
    allPointsOfInterest[poi.id] = poi;
};

export var AllPointsOfInterest = allPointsOfInterest;

export function getPointOfInterest(id: string) {
    return allPointsOfInterest[id];
};

addPointOfInterest(One);
addPointOfInterest(Two);
addPointOfInterest(Five);
addPointOfInterest(Nine);
addPointOfInterest(Ten);
addPointOfInterest(Thirteen);
addPointOfInterest(Sixteen);
addPointOfInterest(Seventeen);
addPointOfInterest(TwentyOne);
addPointOfInterest(TwentyTwo);
addPointOfInterest(TwentyThree);
addPointOfInterest(TwentySix);
addPointOfInterest(TwentyNine);
addPointOfInterest(ThirtySix);
addPointOfInterest(ThirtyEight);
addPointOfInterest(ThirtyNine);