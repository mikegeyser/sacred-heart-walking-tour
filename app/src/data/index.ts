import { PointOfInterest } from '../models/point-of-interest';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import * as marked from 'meta-marked';

import { one } from './001';
import { two } from './002';
import { three } from './003';
import { four } from './004';
import { five } from './005';
import { seven } from './007';
import { nine } from './009';
import { ten } from './010';
import { thirteen } from './013';
import { sixteen } from './016';
import { seventeen } from './017';
import { eighteen } from './018';
import { twenty } from './020';
import { twentyone } from './021';
import { twentytwo } from './022';
import { twentythree } from './023';
import { twentysix } from './026';
import { twentyeight } from './028';
import { twentynine } from './029';
import { thirty } from './030';
import { thirtytwo } from './032';
import { thirtysix } from './036';
import { thirtyseven } from './037';
import { thirtyeight } from './038';
import { thirtynine } from './039';

var allPointsOfInterest: { [id: string]: PointOfInterest; } = {};

function addPointOfInterest(poi: PointOfInterest) {
    allPointsOfInterest[poi.id] = poi;
};

export var AllPointsOfInterest = allPointsOfInterest;

export function getPointOfInterest(id: string) {
    return allPointsOfInterest[id];
};

addPointOfInterest(one);
addPointOfInterest(two);
addPointOfInterest(three);
addPointOfInterest(four);
addPointOfInterest(five);
addPointOfInterest(seven);
addPointOfInterest(nine);
addPointOfInterest(ten);
addPointOfInterest(thirteen);
addPointOfInterest(sixteen);
addPointOfInterest(seventeen);
addPointOfInterest(eighteen);
addPointOfInterest(twenty);
addPointOfInterest(twentyone);
addPointOfInterest(twentytwo);
addPointOfInterest(twentythree);
addPointOfInterest(twentysix);
addPointOfInterest(twentyeight);
addPointOfInterest(twentynine);
addPointOfInterest(thirty);
addPointOfInterest(thirtytwo);
addPointOfInterest(thirtysix);
addPointOfInterest(thirtyseven);
addPointOfInterest(thirtyeight);
addPointOfInterest(thirtynine);


// @Injectable()
// export class PoiLoader {

//     constructor(private http: Http) {
//         this.http.get('assets/data/001/poi-001-card-001.md').toPromise().then((response) => {
//             let blah = marked(response.text());
//             console.log(blah);
//         });
//     }

//     getAll(){
        
//     }
// }