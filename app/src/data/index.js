"use strict";
const _001_1 = require("./001");
const _002_1 = require("./002");
const _003_1 = require("./003");
const _004_1 = require("./004");
const _005_1 = require("./005");
const _007_1 = require("./007");
const _009_1 = require("./009");
const _010_1 = require("./010");
const _013_1 = require("./013");
const _016_1 = require("./016");
const _017_1 = require("./017");
const _018_1 = require("./018");
const _020_1 = require("./020");
const _021_1 = require("./021");
const _022_1 = require("./022");
const _023_1 = require("./023");
const _026_1 = require("./026");
const _028_1 = require("./028");
const _029_1 = require("./029");
const _030_1 = require("./030");
const _032_1 = require("./032");
const _036_1 = require("./036");
const _037_1 = require("./037");
const _038_1 = require("./038");
const _039_1 = require("./039");
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
addPointOfInterest(_001_1.one);
addPointOfInterest(_002_1.two);
addPointOfInterest(_003_1.three);
addPointOfInterest(_004_1.four);
addPointOfInterest(_005_1.five);
addPointOfInterest(_007_1.seven);
addPointOfInterest(_009_1.nine);
addPointOfInterest(_010_1.ten);
addPointOfInterest(_013_1.thirteen);
addPointOfInterest(_016_1.sixteen);
addPointOfInterest(_017_1.seventeen);
addPointOfInterest(_018_1.eighteen);
addPointOfInterest(_020_1.twenty);
addPointOfInterest(_021_1.twentyone);
addPointOfInterest(_022_1.twentytwo);
addPointOfInterest(_023_1.twentythree);
addPointOfInterest(_026_1.twentysix);
addPointOfInterest(_028_1.twentyeight);
addPointOfInterest(_029_1.twentynine);
addPointOfInterest(_030_1.thirty);
addPointOfInterest(_032_1.thirtytwo);
addPointOfInterest(_036_1.thirtysix);
addPointOfInterest(_037_1.thirtyseven);
addPointOfInterest(_038_1.thirtyeight);
addPointOfInterest(_039_1.thirtynine);
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