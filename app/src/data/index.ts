import { PointOfInterest } from '../models/point-of-interest';

import { One } from './1';
import { Two } from './2';
import { Three } from './3';
import { Five } from './5';
import { Nine } from './9';
import { Ten } from './10';
import { Thirteen } from './13';
import { Sixteen } from './16';
import { Seventeen } from './17';
import { Twenty } from './20';
import { TwentyOne } from './21';
import { TwentyTwo } from './22';
import { TwentyThree } from './23';
import { TwentySix } from './26';
import { TwentyNine } from './29';
import { Thirty } from './30';
import { ThirtyTwo } from './32';
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
addPointOfInterest(Three);
addPointOfInterest(Five);
addPointOfInterest(Nine);
addPointOfInterest(Ten);
addPointOfInterest(Thirteen);
addPointOfInterest(Sixteen);
addPointOfInterest(Seventeen);
addPointOfInterest(Twenty);
addPointOfInterest(TwentyOne);
addPointOfInterest(TwentyTwo);
addPointOfInterest(TwentyThree);
addPointOfInterest(TwentySix);
addPointOfInterest(TwentyNine);
addPointOfInterest(Thirty);
addPointOfInterest(ThirtyTwo);
addPointOfInterest(ThirtySix);
addPointOfInterest(ThirtyEight);
addPointOfInterest(ThirtyNine);