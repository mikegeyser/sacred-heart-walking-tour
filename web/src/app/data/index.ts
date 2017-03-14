import { PointOfInterest } from '../models/point-of-interest';

import { one } from './001';
import { two } from './002';
import { three } from './003';
import { four } from './004';
import { five } from './005';
import { six } from './006';
import { seven } from './007';
import { eight } from './008';
import { nine } from './009';
import { ten } from './010';
import { eleven } from './011';
import { twelve } from './012';
import { thirteen } from './013';
import { fourteen } from './014';
import { fifteen } from './015';
import { sixteen } from './016';
import { seventeen } from './017';
import { eighteen } from './018';
import { nineteen } from './019';
import { twenty } from './020';
import { twentyone } from './021';
import { twentytwo } from './022';
import { twentythree } from './023';
import { twentyfour } from './024';
import { twentyfive } from './025';
import { twentysix } from './026';
import { twentyseven } from './027';
import { twentyeight } from './028';
import { twentynine } from './029';
import { thirty } from './030';
import { thirtyone } from './031';
import { thirtytwo } from './032';
import { thirtythree } from './033';
import { thirtyfour } from './034';
import { thirtyfive } from './035';
import { thirtysix } from './036';
import { thirtyseven } from './037';
import { thirtyeight } from './038';
import { thirtynine } from './039';
import { forty } from './040';

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
addPointOfInterest(six);
addPointOfInterest(seven);
addPointOfInterest(eight);
addPointOfInterest(nine);
addPointOfInterest(ten);
addPointOfInterest(eleven);
addPointOfInterest(twelve);
addPointOfInterest(thirteen);
addPointOfInterest(fourteen);
addPointOfInterest(fifteen);
addPointOfInterest(sixteen);
addPointOfInterest(seventeen);
addPointOfInterest(eighteen);
addPointOfInterest(nineteen);
addPointOfInterest(twenty);
addPointOfInterest(twentyone);
addPointOfInterest(twentytwo);
addPointOfInterest(twentythree);
addPointOfInterest(twentyfour);
addPointOfInterest(twentyfive);
addPointOfInterest(twentysix);
addPointOfInterest(twentyseven);
addPointOfInterest(twentyeight);
addPointOfInterest(twentynine);
addPointOfInterest(thirty);
addPointOfInterest(thirtyone);
addPointOfInterest(thirtytwo);
addPointOfInterest(thirtythree);
addPointOfInterest(thirtyfour);
addPointOfInterest(thirtyfive);
addPointOfInterest(thirtysix);
addPointOfInterest(thirtyseven);
addPointOfInterest(thirtyeight);
addPointOfInterest(thirtynine);
addPointOfInterest(forty);

let themeMap = {};

for (let key in AllPointsOfInterest) {
    let poi = AllPointsOfInterest[key];

    for (let theme of poi.themes) {
        if (!themeMap[theme])
            themeMap[theme] = [];
        themeMap[theme].push(poi);
    }
}

let themes = [];
for (let name in themeMap) {
    themes.push({
        theme: name,
        pois: themeMap[name]
    });
}

export var Themes = themes;

export function getPoiForTheme(theme) {
    return themeMap[theme] || [];
};