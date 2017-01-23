"use strict";
const _1_1 = require("./1");
const _2_1 = require("./2");
const _3_1 = require("./3");
const _4_1 = require("./4");
const _5_1 = require("./5");
const _7_1 = require("./7");
const _9_1 = require("./9");
const _10_1 = require("./10");
const _13_1 = require("./13");
const _16_1 = require("./16");
const _17_1 = require("./17");
const _18_1 = require("./18");
const _20_1 = require("./20");
const _21_1 = require("./21");
const _22_1 = require("./22");
const _23_1 = require("./23");
const _26_1 = require("./26");
const _28_1 = require("./28");
const _29_1 = require("./29");
const _30_1 = require("./30");
const _32_1 = require("./32");
const _36_1 = require("./36");
const _37_1 = require("./37");
const _38_1 = require("./38");
const _39_1 = require("./39");
var allPointsOfInterest = {};
function addPointOfInterest(poi) {
    allPointsOfInterest[poi.id] = poi;
}
;
exports.AllPointsOfInterest = allPointsOfInterest;
function getPointOfInterest(id) {
    return allPointsOfInterest[id];
}
exports.getPointOfInterest = getPointOfInterest;
;
addPointOfInterest(_1_1.One);
addPointOfInterest(_2_1.Two);
addPointOfInterest(_3_1.Three);
addPointOfInterest(_4_1.Four);
addPointOfInterest(_5_1.Five);
addPointOfInterest(_7_1.Seven);
addPointOfInterest(_9_1.Nine);
addPointOfInterest(_10_1.Ten);
addPointOfInterest(_13_1.Thirteen);
addPointOfInterest(_16_1.Sixteen);
addPointOfInterest(_17_1.Seventeen);
addPointOfInterest(_18_1.Eighteen);
addPointOfInterest(_20_1.Twenty);
addPointOfInterest(_21_1.TwentyOne);
addPointOfInterest(_22_1.TwentyTwo);
addPointOfInterest(_23_1.TwentyThree);
addPointOfInterest(_26_1.TwentySix);
addPointOfInterest(_28_1.TwentyEight);
addPointOfInterest(_29_1.TwentyNine);
addPointOfInterest(_30_1.Thirty);
addPointOfInterest(_32_1.ThirtyTwo);
addPointOfInterest(_36_1.ThirtySix);
addPointOfInterest(_37_1.ThirtySeven);
addPointOfInterest(_38_1.ThirtyEight);
addPointOfInterest(_39_1.ThirtyNine);
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
//# sourceMappingURL=index.js.map