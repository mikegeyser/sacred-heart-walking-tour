webpackJsonp([1,4],{

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointOfInterest; });
/* unused harmony export PointOfInterestElement */
/* unused harmony export PointOfInterestElementType */
var PointOfInterest = (function () {
    function PointOfInterest(id, title, description, latitude, longitude) {
        if (description === void 0) { description = ""; }
        this.id = id;
        this.title = title;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.elements = [];
        this.info = "<button class=\"pin-btn\" ion-button onclick=\"mapNavigate('" + this.id + "')\">\n                     <strong>" + this.title + "</strong>\n                     <div>" + this.description + "</div>\n                     </button>";
    }
    PointOfInterest.prototype.getLatLng = function () {
        return { lat: this.latitude, lng: this.longitude };
    };
    PointOfInterest.prototype.addElement = function (element) {
        this.elements.push(element);
    };
    PointOfInterest.prototype.thumbnail = function () {
        if (this.elements.length) {
            return this.elements[0].url;
        }
    };
    return PointOfInterest;
}());
var PointOfInterestElement = (function () {
    function PointOfInterestElement() {
        this.type = PointOfInterestElementType.Image;
    }
    return PointOfInterestElement;
}());
var PointOfInterestElementType;
(function (PointOfInterestElementType) {
    PointOfInterestElementType[PointOfInterestElementType["Image"] = 1] = "Image";
    PointOfInterestElementType[PointOfInterestElementType["Video"] = 2] = "Video";
    PointOfInterestElementType[PointOfInterestElementType["Audio"] = 3] = "Audio";
})(PointOfInterestElementType || (PointOfInterestElementType = {}));
//# sourceMappingURL=point-of-interest.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__001__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__002__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__003__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__004__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__005__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__006__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__007__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__008__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__009__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__010__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__011__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__012__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__013__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__014__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__015__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__016__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__017__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__018__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__019__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__020__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__021__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__022__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__023__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__024__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__025__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__026__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__027__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__028__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__029__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__030__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__031__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__032__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__033__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__034__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__035__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__036__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__037__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__038__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__039__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__040__ = __webpack_require__(494);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AllPointsOfInterest; });
/* harmony export (immutable) */ __webpack_exports__["a"] = getPointOfInterest;
/* unused harmony export Themes */
/* unused harmony export getPoiForTheme */








































var allPointsOfInterest = {};
function addPointOfInterest(poi) {
    allPointsOfInterest[poi.id] = poi;
}
;
var AllPointsOfInterest = allPointsOfInterest;
function getPointOfInterest(id) {
    return allPointsOfInterest[id];
}
;
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_0__001__["a" /* one */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_1__002__["a" /* two */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_2__003__["a" /* three */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_3__004__["a" /* four */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_4__005__["a" /* five */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_5__006__["a" /* six */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_6__007__["a" /* seven */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_7__008__["a" /* eight */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_8__009__["a" /* nine */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_9__010__["a" /* ten */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_10__011__["a" /* eleven */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_11__012__["a" /* twelve */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_12__013__["a" /* thirteen */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_13__014__["a" /* fourteen */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_14__015__["a" /* fifteen */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_15__016__["a" /* sixteen */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_16__017__["a" /* seventeen */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_17__018__["a" /* eighteen */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_18__019__["a" /* nineteen */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_19__020__["a" /* twenty */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_20__021__["a" /* twentyone */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_21__022__["a" /* twentytwo */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_22__023__["a" /* twentythree */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_23__024__["a" /* twentyfour */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_24__025__["a" /* twentyfive */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_25__026__["a" /* twentysix */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_26__027__["a" /* twentyseven */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_27__028__["a" /* twentyeight */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_28__029__["a" /* twentynine */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_29__030__["a" /* thirty */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_30__031__["a" /* thirtyone */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_31__032__["a" /* thirtytwo */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_32__033__["a" /* thirtythree */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_33__034__["a" /* thirtyfour */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_34__035__["a" /* thirtyfive */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_35__036__["a" /* thirtysix */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_36__037__["a" /* thirtyseven */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_37__038__["a" /* thirtyeight */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_38__039__["a" /* thirtynine */]);
addPointOfInterest(__WEBPACK_IMPORTED_MODULE_39__040__["a" /* forty */]);
var themeMap = {};
for (var key in AllPointsOfInterest) {
    var poi = AllPointsOfInterest[key];
    for (var _i = 0, _a = poi.themes; _i < _a.length; _i++) {
        var theme = _a[_i];
        if (!themeMap[theme])
            themeMap[theme] = [];
        themeMap[theme].push(poi);
    }
}
var themes = [];
for (var name in themeMap) {
    themes.push({
        theme: name,
        pois: themeMap[name]
    });
}
var Themes = themes;
function getPoiForTheme(theme) {
    return themeMap[theme] || [];
}
;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_index__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointOfInterestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PointOfInterestComponent = (function () {
    function PointOfInterestComponent(route, router) {
        this.route = route;
        this.router = router;
        this.showMore = false;
    }
    PointOfInterestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.poi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data_index__["a" /* getPointOfInterest */])(id);
            _this.selected = _this.poi.elements[0];
        });
    };
    PointOfInterestComponent.prototype.getIndex = function () {
        return this.poi.elements.indexOf(this.selected);
    };
    PointOfInterestComponent.prototype.isFirst = function () {
        return this.getIndex() === 0;
    };
    PointOfInterestComponent.prototype.isLast = function () {
        return (this.poi.elements.length === this.getIndex() + 1);
    };
    PointOfInterestComponent.prototype.previous = function () {
        var index = this.getIndex();
        if (!this.isFirst()) {
            this.selected = this.poi.elements[index - 1];
        }
    };
    PointOfInterestComponent.prototype.next = function () {
        var index = this.getIndex();
        if (!this.isLast()) {
            this.selected = this.poi.elements[index + 1];
        }
    };
    PointOfInterestComponent.prototype.toggleShowMore = function () {
        this.showMore = !this.showMore;
    };
    PointOfInterestComponent.prototype.close = function () {
        this.router.navigate(['/']);
    };
    PointOfInterestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-point-of-interest',
            template: __webpack_require__(555),
            styles: [__webpack_require__(552)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], PointOfInterestComponent);
    return PointOfInterestComponent;
    var _a, _b;
}());
//# sourceMappingURL=point-of-interest.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 333;


/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(497);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point_of_interest_point_of_interest_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    {
        path: 'p/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__point_of_interest_point_of_interest_component__["a" /* PointOfInterestComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: '<app-home></app-home><router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__point_of_interest_point_of_interest_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__safe_pipe__ = __webpack_require__(496);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__point_of_interest_point_of_interest_component__["a" /* PointOfInterestComponent */],
                __WEBPACK_IMPORTED_MODULE_8__safe_pipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return one; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("001", "Marist Brothers", "Beginnings in France, South Africa and now", -26.173891, 28.075287);
poi.themes = ["Marist Brothers' History", "Ethos", "Marcellin Champagnat", "Brothers today at Sacred Heart"];
poi.addElement({
    type: 1,
    text: "Marcellin Joseph Benedict Champagnat was born on 20th May 1789 in south-east-central France.",
    furtherText: "\n    <p>Born in <strong>Le Rosey,*</strong> Marhles, the ninth of ten children, Champagnat spent his early years working on his family\u2019s farm, as he\u2019d vowed not to return to school after witnessing cruelty to, and humiliation of, the school pupils. This experience, and the deep religious faith of his mother and aunt, shaped his life\u2019s path, inspiring his religious vocation and his drive for compassionate education. Despite no formal early schooling, Champagnat wanted to study to become a priest and aged 15 entered a seminary (after twice sitting the entrance exams). He was ordained, aged 26, on 22nd July 1816. The next day Champagnat and some other newly ordained priests went to <strong>Fourvi\u00E8re</strong>, to the shrine of Mary, to pledge their fidelity to her. Together they created a group (to be made up of priests, sisters and lay people) called The Society of Mary with the intention of carrying out their ordained life dedicated to following the example of Mary and to emulate the loving relationship between her and Jesus. </p>\n<footer>*words in bold correspond to places circled in red above.</footer>\n\n    ",
    url: "assets/images/points-of-interest/01.115b.jpg",
    reference: "Image: Marist Archive (annotations Caroline Kamana)"
});
poi.addElement({
    type: 1,
    text: "Notre Dame de L’Hermitage in 1836.",
    furtherText: "\n    <p>Aged 27 and Curate of the village of <strong>La Valla,*</strong> Marcellin Champagnat visited a sick boy, Jean-Baptiste Montagne, in the remote village of <strong>Les Palais</strong>. The boy died and Champagnat was troubled that he did so without having had any education, spiritual or otherwise. For Champagnat, this experience was a message from God. Thereon, Champagnat vowed to form a brotherhood of teachers to lovingly educate children at the margins of society. On 2nd January 1817, in <strong>La Valla</strong> Champagnat founded Les Petits Fr\u00E8res de Marie (The Little Brothers of Mary or Marist Brothers). In 1823, trapped by heavy falling snow in the mountains near <strong>Graix</strong>, Champagnat prayed to Mary asking for protection, and to her he attributed his survival. Growing quickly, (from three to nearly 30 Brothers in just over five years) the Marist Brotherhood needed new premises, and <strong>Notre Dame De L&#39;Hermitage</strong> opened near St Chamond in 1825. Champagnat, trained in metal and woodwork by his father while working on the family farm, designed and built L\u2019Hermitage, aided by twenty Brothers and local artisans.</p>\n<p>The image on this slide is by Thomas Gauthron. Gauthron, an artist, from the area of St.Etienne (the largest town near L\u2019Hermitage) was known for his print making, specialising in religious subjects. </p>\n<blockquote>\n<footer>*words in bold signify places on map shown previously.</footer>    </blockquote>\n\n    ",
    url: "assets/images/points-of-interest/01.117b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "One of the Ordinands with whom Champagnat (top left) pledged to Mary at Fourvière was Fr Jean-Claude Colin (bottom left), who formed a group of priests with a missionary purpose, Les Pères Maristes (Marist Fathers). Colin invited Nuns Jeanne-Marie Chavoin (top right) and Marie Françoise Perroto (bottom right) to begin the Sisters of the Congregation of Mary, the Marist Missionary Sisters.",
    furtherText: "\n    <p>Marcellin Champagnat regarded Jean-Claude Colin as the first Marist, as he was the lead founder of the Society of Mary. Even during Champagnat\u2019s lifetime, however, the Marist Brothers (and of course today a much wider audience) regard Champagnat as such. With the Marist Brothers, the Fathers and Sisters became the first three parts of the Society of Mary, officially approved by Rome in 1834. In 1836 the Lay Marists were officialised by Rome as the fourth branch of the Society of Mary.</p>\n<p>In 1863 the Marist Brothers were given autonomous institutional status as the Fratres Maristae a Scholis (FMS) or Marist Brothers of the Schools. Each section of the society fulfilled a particularly unique purpose. The Marist Fathers focus on missionary work. The Marist Brothers have their particular calling within education, following in the footsteps of the order of Brothers that Marcellin Champagnat started in 1817, at La Valla. </p>\n\n    ",
    url: "assets/images/points-of-interest/01.112.jpg",
    reference: "Image: The Society of Mary (USA)"
});
poi.addElement({
    type: 1,
    text: "This badge is the international crest of the FMS (the Marist Brothers).",
    furtherText: "\n    <p>The intertwined AM monogram in the centre of this crest (seen on many of the Marist school blazers, though no longer on Sacred Heart\u2019s) stands for Ad Mariam, a shortened form of Ad Jesum per Mariam (to Jesus through Mary), the Marist motto.  The twelve stars and crown are taken from the symbolism in the book of Revelation (21:1) which Catholics interpret as signifying the coronation of Mary and referencing the twelve tribes of Israel / twelve disciples (themselves representative of all peoples like the international Marist congregation). </p>\n<p>The three violets represent the virtues of humility, simplicity and modesty that Champagnat espoused. Just as the actual violet is tiny in size but has a strong, beautiful and lingering fragrance, these virtues are huge powerhouses for good, despite their outward quietness. Currently there are Marist Brothers and schools in 80 countries worldwide.</p>\n\n    ",
    url: "assets/images/points-of-interest/01.109.jpg",
    reference: "Image: Institute of the Marist Brothers (FMS)"
});
poi.addElement({
    type: 1,
    text: "1885 Timetable (St Aloysius’ School, Cape Town). For the Brothers (on the left) this included four set prayer sessions, and for school pupils (on the right) three kinds of Maths class were taught daily – arithmetic, Euclid (geometry) and algebra.",
    furtherText: "\n    <p>Thomas Grimley, Bishop of the Cape of Good Hope (Western Division), asked Pope Pius XI to send some teaching Brothers to start a school for Catholic children in his diocese and, in turn, the Pope asked the Superior General of Marist Brothers to help. In April 1867, five Marist Brothers arrived in South Africa at Simon\u2019s Town after 62 days at sea on a gunship, \u2018L\u2019Ephigenie\u2019.  These Brothers (two from France and one each from Belgium, Ireland and England) set up two schools that year in Cape Town. St. Aloysius\u2019 School (financed by the Colonial government) opened with ninety-four pupils and St. Joseph\u2019s Academy (fee paying) with nine pupils. They were the first Marist schools outside of Europe, set up side by side in Hatfield Street.  Bishops in other South African dioceses, emboldened by the success, began to ask for Marist Brothers. </p>\n\n    ",
    url: "assets/images/points-of-interest/01.77c.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 2,
    text: "Marist Schools South Africa.",
    furtherText: "\n    <p>A film produced in 2014 charting the early beginnings of the Marist Brotherhood and the development of the existing Marist schools in South Africa. Formally Sacred Heart College, informally the Koch Street school was known as Marist Johannesburg. The film explores the unique pedagogy of the Marists and the particular ethos of their schools today. There are plans to open another Marist school in Johannesburg in the near future.</p>\n<p>Though twenty Marist schools and training missions opened in South Africa following 1867, only five remain in 2017. The Marist institute cites contributing factors as including language/religion and the socio-political structure of South Africa, clashes between the influences of Catholic social teachings following Vatican II and the apartheid government (particularly during the years 1940-1990), the effects of the first and second World Wars (many Brothers were conscripted), the sourcing of Brothers elsewhere internationally, and issues of funding.</p>\n\n    ",
    url: "https://www.youtube.com/embed/FQmzPYckhb4?start=16&end=182",
    reference: "Marist Schools Council (FMS SA), 'Marist Schools in South Africa'"
});
poi.addElement({
    type: 1,
    text: "Brother Norbert Mwila, Marist Provincial of Southern Africa since August 2016.",
    furtherText: "\n    <p>Prior to 1908, the Marists in South Africa were bound by administration in Europe; thereafter South Africa functioned as its own administrative province. In 1999, the Province of South Africa became the Province of Southern Africa and covered six countries of Marist presence on the African continent (the others being Malawi, Mozambique, Zambia, Zimbabwe and Angola). There are three other Marist Provinces in Africa and one district; there are 24 Provinces and five districts worldwide (depending on the country\u2019s size and number of Brothers). Each Provincial serves a three-year term after being voted in by the Province\u2019s Brothers and appointed by the Superior General in Rome. Br Norbert Mwila, current Provincial, started as a postulant (a trainee Marist Brother) in 1991 in Zambia, and made his final vows in 2000. As Provincial, Br Norbert is responsible for overseeing the running of the Southern African Province (including its schools and other missions) supported by a Council of elected Brothers from the six countries of the Province reporting directly to the Marist Superior General in Rome (currently Brother Emili Tur\u00FA). The head office of the Province of Southern Africa is located on the Sacred Heart College campus.</p>\n\n    ",
    url: "assets/images/points-of-interest/01.130.jpg",
    reference: "Image: Institute of the Marist Brothers (FMS)"
});
poi.addElement({
    type: 1,
    text: "Marist Brothers Bicentennial year 2017.",
    furtherText: "\n    <p>2017 is a significant year for the Marist Brothers. 2017 marks 200 years since the founding of the Marist Brothers by Marcellin Champagnat and the 150th anniversary of the Marists in South Africa. In the lead up to their Bicentenary, the Marists have spent three years focusing on the preparations. 2014/15 was the Montagne year (so named for the dying youth that inspired Champagnat to activate his calling to educational work). The focus was on contemplation around the Marist mission of providing education to those, particularly youth, on the margins of society. 2015/16 was designated the Fouvi\u00E8re year, a reference to the location of where Champagnat and other newly ordained colleagues pledged to start the Society of Mary, in front of a statue of Madonna and Child. This focus on Mary honours her openness to the acceptance of God in life and her role model as mother and nurturer. 2016/17, the La Valla year (named for the village where Champagnat started his first school and training of teaching Brothers) is dedicated to a focus on spirituality and mindfulness.</p>\n<p>This logo incorporates the number 200 to signify the Bicentennial year as well as the symbol of the three Marist violets. </p>\n\n    ",
    url: "assets/images/points-of-interest/01.129.png",
    reference: "Image: Institute of the Marist Brothers (FMS)"
});
var one = poi;
//# sourceMappingURL=001.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return two; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("002", "Koch Street", "The first Sacred Heart College in Johannesburg", -26.173581, 28.075099);
poi.themes = ["Marist Brothers' History", "Koch Street", "Alumni"];
poi.addElement({
    type: 1,
    text: "“Hip Hip Hurrah! Deo Gratias [Thanks be to God]”. In August 1889, Br Nectaire, Principal of Marist Uitenhage College, responded to news from Fr De Lacy O.M.I., Apostolic Delegate, that Marist Brothers could soon proceed to Johannesburg.",
    furtherText: "\n    <p>A series of letters between Br Nectaire (in Uitenhage) and two of the O.M.I. priests (Father Monginoux and Father De Lacy), based in Pretoria and Johannesburg, discuss the possibility of bringing the Marist Brothers to the these towns. Marist Superiors in France were worried about \u2018faithless, lawless and dirty\u2019 Johannesburg, fearing that the town would \u2018vanish in the dust\u2019 like early American pioneer towns. Brother Nectaire convinced his Superiors otherwise and arrangements were made to send Brothers from Europe for schools to be opened in Johannesburg and Pretoria. The letters were written in English (to Father De Lacy) and in French (to Father Monginoux). Some letters discuss the specifics of the Marist mission to Johannesburg and their visions for educational practice. However, Marist missions in Natal and Kimberley \u2018appropriated\u2019 the Brothers sent to Pretoria.</p>\n\n    ",
    url: "assets/images/points-of-interest/01.38c.jpg",
    reference: "Image: Catholic History Bureau"
});
poi.addElement({
    type: 1,
    text: "The Brothers who first came to Johannesburg to set up the Marist College at Koch Street in October 1889: Brother Albert Dominic (left), Brother Frederick, Principal (centre) and Brother Euphrase (right).",
    furtherText: "\n    <p>Johannesburg\u2019s first Catholic Mass was said in Ferreira\u2019s camp in February 1887, ten years after the first Catholics (Oblate priests from the O.M.I. missionary congregation) arrived in the then Transvaal Republic in 1878. It was decided the town needed a school for Catholic children and The Holy Family sent six Sisters to set up a Convent school in October 1887. St Mary\u2019s was Johannesburg\u2019s first school. It was such a success that they decided to start a school for boys. The O.M.I. priests, not teachers themselves, wrote to the Marist Brothers, asking them to extend their missions already established elsewhere in South Africa. </p>\n<p>There were many delays in getting the Brothers to Johannesburg, due to security concerns, finance and demands from other Marist missions in South Africa.  According to Brother Nectaire, the three Brothers had begun to lose hope that they might ever reach their destination. </p>\n\n    ",
    url: "assets/images/points-of-interest/02.152.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Brother Nectaire described the three Johannesburg-bound Brothers to Father Monginoux in a letter written in November 1888.",
    furtherText: "\n    <blockquote>\n<p>\u201CHere are their names: Brother Frederick, Principal, a good little Bourguignon* who has been in the Colony for 10 years already; Brother Albert-Dominic, a courageous Irishman who has been with me here since last March and Brother Euphrase an excellent Belgian who will teach Dutch. Three excellent pious men who will be an asset to you and edifying for your parish.\u201D</p>\n<footer>*from the Bourgogne region in France.</footer>\n\n</blockquote>\n<p>Brother Frederick was the new Marist school\u2019s first Principal for thirteen years, until 1903 when he was made Marist Provincial for the newly created administrative Province of South Africa. He was seen as a fatherly figure by his pupils, famed around the school for always carrying a small black bag containing sweets and sticks that he dished out to appropriately reward or rebuke deserving pupils. Brother Frederick died three weeks before his 100th birthday in 1946, having survived the cyclone that killed Brother Euphrase in Basutoland in 1912, where they had been posted after Koch Street. Brother Albert-Dominic died after an illness in 1894.</p>\n\n    ",
    url: "assets/images/points-of-interest/01.25b_26b_combined.jpg",
    reference: "Image: Catholic History Bureau"
});
poi.addElement({
    type: 1,
    text: "One of the first photographs taken at the newly established school; boys and Brothers at Koch Street in 1889.",
    furtherText: "\n    <p>According to records, 27 pupils (7 Catholics, 12 non-Catholics and 8 Jews) arrived to register on the first day, Wednesday 9th October 1889. The first school pupil to arrive at the new school was Peter Busschau (in 2017 there are still Busschaus from the same family at Marist schools). Not long after Busschau\u2019s arrival, a wagonload of boys came from the End Street Convent, run by the Holy Family Sisters, bringing their desks with them. Within the first two years the school roll stood at 300 pupils. In these early days the school was known as Marist Brothers\u2019 College. </p>\n<p>The single-storey building in the background was the school house \u2013 divided inside with wood and glass panels into three classroom areas. This became the ground floor of the western wing of the Koch street premises as it started to grow. The playground at this stage was open veld, for Doornfontein was not yet built up. </p>\n<p>In this photograph the boy on the tricycle is identified as George Nolan \u2013 later to become uncle of Brother Paul, a much beloved member of the Eckstein Street community of Marist Brothers. Another of the boys here, as recorded in the Marist Archives (but not clearly identifiable due to the quality of the image) is Joe Geddes \u2013 later to become a teacher at the school and after whom one of the school houses is named. </p>\n\n    ",
    url: "assets/images/points-of-interest/02.65f.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Postcard of Marist Brothers' College, showing the school in the late 1890s.",
    furtherText: "\n    <p>By 1890 the school roll had reached 800 and the school building was far too cramped to accommodate even half of the boys; thus a new double-storey school house was constructed. Even so, the most junior pupils still couldn\u2019t be accommodated within the new building and nearly 200 of them were taught in a marquee pitched in the playground, with others timetabled to sports and other subjects taught in areas around the playground. No longer open veld, the walled playground, which doubled as a cadet training ground and cricket field/soccer pitch, also contained a cottage where the Brothers (and their beehives) resided, a gym, a greenhouse, a woodwork room, a chapel and prototype science laboratory (which pupils were charged an extra fee to use). Space at Koch Street was already becoming tight. </p>\n<p>The school was creating quite a reputation for itself in Johannesburg. Gymnastic displays put on by the school became quite a societal fixture, with such big crowds of people turning out to watch that the school yard was not big enough, and the Wanderers grounds were used for displays. The boys were invited to take part in the annual Carnival Procession through the streets of the city and again in special displays (on foot, on bicycles, with gym equipment, in Reed or Brass Bands leading the Cadet Corps) for the Diamond Jubilee of Queen Victoria in 1897 and the Coronation of King Edward in 1902.</p>\n\n    ",
    url: "assets/images/points-of-interest/02.172.jpg",
    reference: "Image: Museum Africa"
});
poi.addElement({
    type: 1,
    text: "The school, known officially known as Sacred Heart College, after further renovations and extensions in c.1907/8.",
    furtherText: "\n    <p>During the South African War, the school roll dropped to 150 and a part of the school was turned into a military hospital under the care of the French Red Cross, assisted by the Brothers. By 1905 the pupil numbers rose back to over 500, and by 1906 the school was re-extended, this time into a triple-storey building. By 1914 the school roll was over 600 again and plans began to take shape, not to extend the existing school (impossible due to the ever increasing density of the Doornfontein neighbourhood), but to look for another site further afield. Around 1918 this additional land was found in Observatory and purchased in 1919 by the Marist Provincial (The Revd. Brother Vital) for development as soon as possible, following the settling down of socio-economics after WW1.</p>\n<p>In a letter to his Lordship, Right Rev. Dr William Miller, Vicar Apostolic of the Transvaal, written in 1910, Br Frederick defended the particular nature of Sacred Heart School at Koch Street. The Catholic administration had accused the school of not being \u2018Catholic\u2019 enough and of having too many \u2018other\u2019 pupils. Brother Frederick assured the Right Rev. Miller that Catechism classes, the Rosary and regular Masses made provision for the Catholic boys, of whom there were 135 on the roll. This implies that there were at least 450 non-Catholic children attending the school (at the time most likely Jewish and Protestant children) \u2013 a diverse and inclusive Catholic school, as Sacred Heart College remains today. </p>\n\n    ",
    url: "assets/images/points-of-interest/02.58c.jpg",
    reference: "Image: Museum Africa"
});
poi.addElement({
    type: 1,
    text: "Aerial view of Sacred Heart College, Koch Street in c.1960.",
    furtherText: "\n    <p>By the 1960s the land around Sacred Heart College was entirely built up. This view shows how close the school was to the train tracks that led to Park Station and how little room, if at all, there was for expansion. The block on which Sacred Heart College stood is bordered by Koch Street to the north, Claim Street to the east, Hancock Street to the south and Banket Street to the east. </p>\n<p>As is visible from this photograph, there was no room for expansion of the original school, which since the late 1920s had served as the preparatory school for Sacred Heart College in Observatory and later also for St. David\u2019s College, Inanda. St.David\u2019s College opened in 1940 after the Marist Brothers had purchased land north of Rosebank to build a new school. It was clear from the early 1930s that even two Marist schools could not accommodate the number of applicants wishing to be taught by the Brothers. </p>\n\n    ",
    url: "assets/images/points-of-interest/02.129b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Brother Aquinas after demolition began at Koch Street in the mid 1960s.",
    furtherText: "\n    <p>The Brothers sold the land at Koch Street in the mid 1960s as the ever developing city centre had become an unsuitable area for a school . A site to the south and (at the time) far away from construction in town was bought in Linmeyer. The final assembly at Sacred Heart College on the Koch Street site was held in 1965. </p>\n<p>In 1966 The Star reported that many Old Boys from Koch Street had gone to the site when demolition started to salvage mementos from the buildings, like bricks to set into their homes \u2013 such was the sentiment surrounding the school. In 1966 Marian College Linmeyer was opened. The Koch Street foundation stone and the organ from the chapel were incorporated into this new Marist school. Most of the boys from the younger years at Koch Street transferred to Marian College Linmeyer, since Observatory only admitted boys from Standard 3 (grade 5 today) until the late 1970s. Some of the older boys went to the established Marist Colleges in Observatory and Inanda. Since Koch Street had been the preparatory school for Sacred Heart, or Marist Obs as it was known, Sacred Heart Koch Street can be considered as the mother school of Sacred Heart College. </p>\n\n    ",
    url: "assets/images/points-of-interest/02.145.jpg",
    reference: "Image: The Star in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Mariston in 1971 (with part of Sacred Heart College still standing at its base).",
    furtherText: "\n    <p>The Mariston, a 31-storey building appropriately named with a nod to the former landowners, opened in 1971. One part of the school building (seen here) was left standing for some time after the Mariston was constructed, but this has since also been demolished and built over. The Mariston Building, which is still standing today, was created as a multi-usage building with 550 flats. A swimming pool, restaurant and landscaped gardens were planned at the time of construction but it isn\u2019t clear that this was followed through. Today a hotel occupies the first six floors, with student accommodation, short term lets and other premises on the remaining levels. </p>\n\n    ",
    url: "assets/images/points-of-interest/02.252.jpg",
    reference: "Image: Marist Archive"
});
var two = poi;
//# sourceMappingURL=002.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return three; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("003", "Observatory", "From Marist ‘Obs’ to Sacred Heart College of today", -26.173221, 28.075289);
poi.themes = ["Koch Street", "Brothers today at Sacred Heart", "Ethos", "College Characters", "Alumni", "Grounds and Buildings", "Learning", "Traditions and Innovations", "Socio-Political Context"];
poi.addElement({
    type: 1,
    text: "The ivory handled and silver bladed Ceremonial Trowel used by The Honourable Mr J. Hofmeyer, Administrator of the Transvaal, during the laying of The Foundation Stone on 3 September 1924. The Foundation Stone was by blessed by the Right Revd. Bishop Cox during the same ceremony.",
    furtherText: "\n    <p>After 1913 there were no more additions to the school buildings at Koch Street, despite the continuing growing number of boys on the roll and waiting list. With the spread of Johannesburg, a town not much older than Sacred Heart College itself, space was at a premium and the area surrounding Koch Street was entirely built up. Playground space was inadequate, and overspill at break-time as well as sports events were thus accommodated at the (Old) Wanderers Grounds, a few blocks away across the railway tracks. The Brothers decided that they needed new premises was necessary if they were to expand their teaching provisions alongside the growing city (though Johannesburg was only officially designated as a city in 1928). The First World War (1914-18) delayed the search for another property, but in 1919 the Brothers purchased 32 acres of land on Observatory Ridge, then outside Johannesburg. </p>\n\n    ",
    url: "assets/images/points-of-interest/03.91.jpg",
    reference: "Image: Museum Africa"
});
poi.addElement({
    type: 1,
    text: "Brother Florian Arnal	(left) and Brother Henry Julian Francois (right).",
    furtherText: "\n    <p>Building works at the Observatory site took a little over a year to complete. Not only did the school have to be built from scratch, but the ground had to be levelled and outcrops of granite and iron containing rocks blasted in order to lay the sports grounds that were sorely missed at Koch Street. The architect, Mr P.J. Hill, was a former Marist pupil, having been taught by the Brothers at Uitenhage. Much of the blasting was completed by Brother Henry, who took out a special licence in order to do so. The grounds were landscaped under the direction of Brother Florian, a keen botanist, who was to become the first Principal of the College. </p>\n<p>The new school opened on 1 February 1926 in Observatory to approximately 250 pupils. The senior classes from Koch Street, from Standard 2 (Grade 4 today) to Matric, were moved to the new premises.</p>\n\n    ",
    url: "assets/images/points-of-interest/03.100b_168_combined.jpg",
    reference: "Images: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1926, Advertisement for “Marist Brothers’ New College”. ",
    furtherText: "\n    <p>Sacred Heart College, Koch Street became the preparatory school to Observatory. Brother Martin, Marist Archivist, noted that the Observatory school was originally to be the preparatory school, with Koch Street the senior school. This didn\u2019t happen, perhaps due to the superior sports facilities at Observatory. In the early 1900s several other boys\u2019 schools, like Johannesburg College (later renamed King Edward VII School (KES)), St. John\u2019s and Jeppe High School for Boys were opened; it is likely that the seniors moved to Observatory so that they could compete with these schools in sport. Interestingly, the school name is given in this advertisement as Marist Brothers\u2019 New College, while the original College name, as suggested in archival material, was St Benedict\u2019s (to differentiate from Sacred Heart College at Koch Street). The name Sacred Heart College is recorded in documents from the 1930s, but Marist Brothers College or Marist \u2018Obs\u2019 (a shortened form of Observatory) were used colloquially until the 1980s.</p>\n\n    ",
    url: "assets/images/points-of-interest/02.138.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The College pictured in 1927. In the archives this picture is labelled as “Obs in the veld”. Its location on the then outskirts of town was met with some resentment, for many felt that the new site was too far out of town to be easily accessed.",
    furtherText: "\n    <p>The first few years at Obs were years of expansion \u2013  in terms of both buildings and pupil The first few years at Obs were years of expansion \u2013  in terms of both buildings and pupil numbers. In this image you can just make out the Hall building to the right of the main building. Notable are the open upper walkways which lead from the northern and southern ends of the main building towards the central facade. These were later covered and used to extend the interior space on the upper level. One of the first \u2018extras\u2019 was the swimming pool, added in 1930. The school opened as a school for boys \u2013 white boys \u2013 with some Chinese pupils being admitted in the 1930s. Obs, like Sacred Heart at Koch Street, also offered boarding facilities. The number of pupils grew so quickly that a new wing was added in 1931, housing several classrooms, Chaplain\u2019s quarters, a library, a sanatorium and a second dormitory. This is the building that today houses the Marist Provincial Offices and a number of classrooms, situated parallel to the Hall. </p>\n<p>At the time of opening there were twelve teaching Brothers, assisted by several specialist lay-teachers, including alumnus Mr. W. Singleton who until then taught at Koch Street. Sources record that \u201Cthe boys were full of admiration for the well \u2013 ventilated classrooms, the hall, the tennis-courts and the wide open spaces.\u201D</p>\n\n    ",
    url: "assets/images/points-of-interest/03.24b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1932 – a letter sent from New Zealand was delivered to ‘Obs’ addressed only to ‘Biggest School, Transvaal, South Africa’! ",
    furtherText: "\n    <p>At the bottom of this envelope \u2018Marist Bros. Observatory, Joburg\u2019 was added by the Post Office, identifying Obs as the \u2018biggest school\u2019 in the Transvaal. By 1932 Johannesburg was already by far the largest city in South Africa, and that Obs was recognised as the \u2018Biggest School\u2019 in the city speaks volumes about its then reputation. This reputation initially extended from that of its mother school in Koch Street, but in very little time Obs was to become the Marist \u2018monument\u2019 that it remains today. Some documents in the archives date the arrival of the letter as 1932, but others as 1952. In any case, a remarkable artefact.</p>\n<p>By the mid 1930s the school numbers were close to 400 and a new classroom block was added (now part of the junior primary quad) as well as further sports facilities. The school was full to capacity. Koch Street was again oversubscribed, particularly (for both schools) the boarding facilities. By the early 1940s Obs had over 600 pupils and more primary-aged pupils were admitted to the school. Koch Street was thus not the only preparatory school, though it continued to take the very youngest Marist pupils. The Marist Brothers decided to purchase another site and in 1941 St. David\u2019s Inanda was opened</p>\n\n    ",
    url: "assets/images/points-of-interest/03.116.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Photograph taken by Brother Rudolf in 1961, showing additions to the school by this time. Mr. Armstrong, parent of a Sacred Heart pupil, made his plane available to Brother Rudolf specially to take this aerial view of the school. Brother Rudolf, who taught science, also ran the school photography club. ",
    furtherText: "\n    <ol>\n<li>The original main building built 1924-26 was constructed around the fountain quad.</li>\n<li>The hall was completed for 1926 and renovated in 1951. </li>\n<li>In 1926 a block was built for lay staff accommodation. It included a separated structure that was the pupils\u2019 toilets and washing facilities.</li>\n<li>The 1931 addition containing a new dormitory, sanatorium, classes and library.</li>\n<li>The \u2018new block\u2019 built in 1935. </li>\n<li>The Memorial Chapel was built in 1956 (note the open bell tower fixture visible on north side and the established gardens that served the Chapel).</li>\n<li>This area of Chapel gardens was built onto with a new library and primary quad extensions in 1969.</li>\n<li>This tree lined area formerly known as \u2018The Glade\u2019 was built on in 1973 to add the new Science block.</li>\n<li>The Senior Primary Quad (know also known as the Intermediate Quad) was added in 1987.</li>\n</ol>\n\n    ",
    url: "assets/images/points-of-interest/03.26h.jpg",
    reference: "Image: Brother Rudolf (annotations Caroline Kamana)"
});
poi.addElement({
    type: 1,
    text: "The changing face of Sacred Heart College. Matrics of 1930 (left) and Matrics of 2016 (right). ",
    furtherText: "\n    <p>Though the expansions of the school buildings speak about the physical changes to the school in terms of pupil numbers and improvements to facilities, the transformations of the Sacred Heart community should rather be understood in terms of its socio-cultural developments. The school at Koch Street, whilst a Catholic school, welcomed pupils of different religious backgrounds. Its daughter school, Sacred Heart College Observatory, did the same. Jewish learners were supported by weekly instruction from a visiting Rabbi in the 1930s and 40s, while Catholic pupils were encouraged in Catechism and could belong to Sodalities (societies focused on faith). The South African Catholic Bishops Conference (SACBC), to whom the Marists belonged (and in the 1930s had hosted at Observatory) had long been publicly denouncing discriminatory policies. In 1975 the SACBC declared their position with regard to (racially integrated) Open Schooling and in 1976 the Soweto student uprisings brought to the fore this issue at home and internationally. In 1976 no school magazine was produced. By no means was this was to erase the significance of this year, but rather highlights a turning point in the history of the school. </p>\n<p>Former Principal, Stephen Lowry, wrote in 2002:</p>\n<blockquote>\n<p>\u201CFrom 1976 the school was led by Brother Neil McGurk who had an inspired vision of what education could be in the South Africa of 25 years ago. The Marist Brothers\u2019 understanding of their mission led them to defy government decree and open the school to boys of all races. However the newcomers did not present a real challenge to the school\u2026 The real cultural revolution probably took place four years later when in 1980 girls were first admitted to the school when it amalgamated with two near-by convents. [At that time] \u201CMarist Brothers\u2019 \u2013 Observatory\u201D reverted to its religious name, Sacred Heart College.\u201D</p>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/03.166_34.20_combined.jpg",
    reference: "Images: Marist Archive (left) and Sacred Heart College (right)"
});
poi.addElement({
    type: 1,
    text: "Colin Northmore, Head of College (since 2003). ",
    furtherText: "\n    <p>In 2017, Sacred Heart College serves approximately 1,200 learners from Pre-Primary to Matric plus 200 who attend the Three2Six school. The school provides a nurturing and dynamic learning environment supported by Marist educational principles; a representative and diverse microcosm of the positive possibilities of South African society. The school is proud of its heritage and whilst protective of its positive contributions, continues to innovate, leaving behind elements better bygone (as evidenced by its \u2018changing face\u2019). Colin Northmore prefaced the 2010 yearbook with this summary:</p>\n<blockquote>\n<p>\u201CSacred Heart has always had a reputation for making bold decisions in curriculum innovation and when it comes to addressing the social evils of our time. Right back to the time when the Brothers turned the school into a hospital for the Boers and the Brits during the South African War, and created a situation where sworn enemies lay side by side recovering from the wounds they inflicted upon one another, our school has been a beacon of hope.\u201D</p>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/03.99.jpg",
    reference: "Image: Sacred Heart College"
});
var three = poi;
//# sourceMappingURL=003.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return four; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("004", "The Boarders", "Boarding was offered until the mid 1970s", -26.173664, 28.075313);
poi.themes = ["Koch Street", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "The Boarding House for Sacred Heart College, 1908. ",
    furtherText: "\n    <p>The building was located opposite the school on the other side of the street on the Koch Street/Claim Street corner. In the 1960s when the school closed the boarding house was converted to be used as a nursing home. The man with the beard on the balcony (standing on the left) is Brother Joseph.</p>\n\n    ",
    url: "assets/images/points-of-interest/04.05b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Inside the dormitory at Koch Street (picture undated). ",
    furtherText: "\n    <p>There are at least 33 beds visible in this picture \u2013 more are perhaps out of shot of the camera. Note that the bed in the top left corner of the photograph has a rail and curtain suspended around it. It most likely to have belonged to the most senior boy or \u2018dormitory captain\u2019 and his privilege of privacy being a reward for holding this position. Apart from a crucifix on the mantelpiece and a small picture in the curtained section there is no decoration in the room.</p>\n<p>During the Spanish Influenza epidemic of 1918, which killed an estimated 300,000 South Africans, this dormitory was used as a ward for some of the sick of Johannesburg. They were tended to by the Holy Family Sisters. There were fewer boarders in 1918 due to the reaching effects of the First World War, and those remaining were accommodated locally during this time. </p>\n\n    ",
    url: "assets/images/points-of-interest/04.04.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The ‘new wing’ extension to the college, built in 1931. The upstairs of this wing contained a dormitory, added to house an additional 50-60 boarders.",
    furtherText: "\n    <p>Boarders were admitted to the College from its opening in 1926 until 1973. Such was the demand for boarding places that some boys were lodged in homes in the Observatory neighbourhood. Others were put up in spare rooms around the College.  However, this wasn\u2019t satisfactory. The new wing that was added doubled boarding capacity and also contained a library, Chaplain\u2019s rooms and the Sanatorium. The 1937 Maristonian reads \u201Cample accommodation is provided in the handsome and extensive buildings, which, recently erected, have been designed to ensure the comfort and health of the pupils\u201D. The Brothers slept in rooms in the main College off the other side of the main staircase from the Junior Dormitory (now the upstairs area where the staff room and administrative offices that belong to the School Counsellor and Chaplain can be found). According to those who still recall those days it was so cold in winter that boys and Brothers sometimes slept underneath their mattresses on top of newspapers! The Senior Boarders were luckier \u2013 when the new wing was added, electric heating was installed. </p>\n<p>When the school became co-educational in 1980 the dormitories were partitioned off and converted into additional classrooms to accommodate the increase in pupil numbers.</p>\n\n    ",
    url: "assets/images/points-of-interest/04.03b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Inside the dormitory in 1929. ",
    furtherText: "\n    <p>The image shows the beds with the head of each bed against the window. Once the boarding numbers increased and space was tight, four rows of beds were packed into the room, with the beds placed parallel to the walls. Each boy had a locker (the tall piece of furniture seen in this photograph) where they kept their belongings. These had hinged tops which lifted to reveal a space for toiletries and small items. Underneath was a cupboard with shelving for their clothes. Though these items of furniture were called lockers, none of them ever had locks on for there were frequent inspections to make sure that everything was in order and that nothing illicit was kept in the dormitory \u2013 for example, food was banned from the dorms. Every item that the boys had at school was labeled with their names and M.C.O.J (Marist College Observatory Johannesburg) and where washed in the college laundry rooms. When boarding was phased out in the 1970s, the laundry and ironing rooms were converted into the school workshop (located at the side of the Orchard).</p>\n\n    ",
    url: "assets/images/points-of-interest/04.06.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Excerpt from G.Nolan’s document “M.B.C Golden Jubilee at Observatory”. This document reads like a post-dinner speech and was likely written for the 1974 Golden Jubilee Dinner. For the occasion, the Carlton Hotel Ballroom was decorated in blue and gold. Nolan was O’Leary House Captain in 1928.",
    furtherText: "\n    <blockquote>\n<p>\u201CHave you ever noticed that the windows, opposite the Standard 8, 9, 10 classrooms on the top floor of the main building, are of the type that only open slightly? These were put in to stop the boarders climbing out at night! Sometimes they would hurt themselves or damage roof tiles while sneaking out to meet their friends and go to a film at the Piccadilly in Yeoville, or the Victory in Orange Grove. The door at the top of the main staircase was also kept permanently locked in a bid to prevent such nocturnal adventures.\u201D</p>\n<footer>Sacred Heart College Yearbook, 1989 (p.10)</footer>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/03.52_53b_combined.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Excerpt from G.Nolan’s recollective document “M.B.C Golden Jubilee at Observatory” written in 1974. ",
    furtherText: "\n    <p>As Nolan went onto explain, it was \u2026 <img src=\"assets/images/points-of-interest/03.49b.jpg\" alt=\"\"> \u2026 He continues by describing a terrible bout of food poisoning that one boy endured as a result of eating the tin of sardines mentioned above. However, this (and the threat of rats) did not seem to deter the boarders from midnight feasts as he recounts several of them, as does another alumnus, E. Joffe, who was a boarder during the 1940s. Joffe also recalls thick brown drapes at the end of one of the dormitories behind which rows of pegs were positioned to hang their blazers on. He also recalled these drapes being particularly useful for boys to hide behind when they were trying to escape being caught out of bed or in the dormitory at prohibited times.</p>\n\n    ",
    url: "assets/images/points-of-interest/03.51b.jpg",
    reference: "Images above & below: Marist Archive"
});
var four = poi;
//# sourceMappingURL=004.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return five; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("005", "Transport", "School transport and its evolution", -26.173848, 28.07519);
poi.themes = ["Koch Street", "College Characters", "Alumni", "Grounds and Buildings", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "Early school transport was by horse and cart. In this image from c.1896 ‘Boarders and Brothers’ from Koch street are pictured on a school outing.",
    furtherText: "\n    \n    ",
    url: "assets/images/points-of-interest/05.22.jpg",
    reference: "Image: The Star in Catholic History Bureau"
});
poi.addElement({
    type: 1,
    text: "1903. Pupils were provided with stabling for their horses (and a donkey!) at Koch Street.",
    furtherText: "\n    <p>In a 1965 article in the Rand Daily Mail, the journalist H. Carruthers (an alumnus of Koch Street), captioned this picture \u201Ca bunch of students about to ride home at the end of the day\u201D and noted that stabling for horses was one of the perks students could enjoy, advertised by the school as late as 1903. The 1999 Sacred Heart Yearbook (p66) reprinted this picture with the caption: <em>Transport to school has changed somewhat. But is it as much fun?</em></p>\n\n    ",
    url: "assets/images/points-of-interest/05.08c.jpg",
    reference: "Image: Rand Daily Mail in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "c.1945 -  Cyclists on the driveway in front of the main school building.",
    furtherText: "\n    <p>The 1935 Maristonian (p55) records that along with the building of the new quad (now the Primary School Foundation Quad) a new bike shed was built, with spaces for 170 bicycles. This would have been at the back of the changing room facilities, where the music rooms now stand. During the late 1930s to 1950s the bicycle would have been the choice of transport for many of the boys. </p>\n<p>There was an active cycling club for boarders, which organised outings most weekends together with the clubs at Koch Street and St David\u2019s. Sometimes they would cycle as far as Little Falls in Roodeport. The first recorded Marist cyclists in Johannesburg took part in a procession for the Coronation of King Edward VII in 1902. More recently, in 2015 and 2016, student and community cyclists have taken part in the \u2018Hearts into the Future\u2019 cycle ride around the city organised by Sacred Heart on Heritage Day (in 2015 and 2016) to raise awareness against xenophobia, whilst connecting participants with each other and their local heritage.</p>\n\n    ",
    url: "assets/images/points-of-interest/05.10.jpeg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Number 22 bus (c. 1965) stopped right outside the College gates.",
    furtherText: "\n    <p>Between the 1960s and 1980s the 22 bus followed a route from Cyrildene, through Observatory and into town via Yeoville. This route connected the Sacred Heart nursery school campus, then in Yeoville (at the Holy Family Convent), and the main school at Observatory. Currently the 421 Metrobus route runs along a similar route. The 22 bus was the choice of transport for many pupils, while others took trams as far as Yeoville and then walked to Eckstein Street. According to maps and other documents in Museum Africa\u2019s archive, a tram route was proposed in 1903 to run up to and stop in Eckstein Street but the line was only constructed as far as Yeoville.</p>\n\n    ",
    url: "assets/images/points-of-interest/05.19.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "Parking at Sacred Heart College in 1963. Photograph taken by then matric, Howard Thomas.",
    furtherText: "\n    <p>The image below shows some learners in 1984 who came to school with their own cars or on motorbikes. It is no longer permissible for learners to bring their own cars or other vehicles (other than bicycles) to College for reasons of health and safety, as well as the logistics of parking and insurances. </p>\n<figure><img src=\"assets/images/points-of-interest/05.14.jpg\" alt=\"\">\n  <figcaption>Image: Marist Archive</figcaption>\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/05.24.jpg",
    reference: "Image: Howard Thomas"
});
poi.addElement({
    type: 1,
    text: "One of the school buses in 2016.",
    furtherText: "\n    <p>There are two private school bus routes that collect learners \u2013 one coming from the west of town (Parkview) and one coming from the south (Robertsham). Other students come by taxi, a few on foot, but the vast majority are driven to school by parents, carers and guardians. The same school buses also collect and return the Three2Six learners to their homes in areas such as Berea and Hillbrow in the afternoons.</p>\n\n    ",
    url: "assets/images/points-of-interest/05.11.jpg",
    reference: "Image: Caroline Kamana"
});
var five = poi;
//# sourceMappingURL=005.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return six; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("006", "The College Gates", "The main point of access, then and now", -26.173987, 28.074998);
poi.themes = ["Koch Street", "College Characters", "Alumni", "Grounds and Buildings", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "The school gates at Sacred Heart College, Koch Street in c.1906. The Marist ‘AM’ monogram is visible at the centre of the gate. AM represents Ad Mariam, a shortened form of Ad Jesum per Mariam (to Jesus through Mary), the Marist motto. ",
    furtherText: "\n    <p>The gate has two entrances \u2013 a smaller side entrance for pedestrians and a large one for vehicles and groups, such as the Cadets who would have \u2018marched on\u2019 through these gates on their way between the school and the Union or Wanderers Grounds, where they took part in drills. The boys are pictured here with a soccer ball and a bicycle. </p>\n\n    ",
    url: "assets/images/points-of-interest/06.23.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1933, The Eckstein Street entrance to College. ",
    furtherText: "\n    \n    ",
    url: "assets/images/points-of-interest/03.104.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The gates in c.1935. There was no signage over the gates in the early days of the College. ",
    furtherText: "\n    <p>From this view of the College, the upper walkways that led behind the central fa\u00E7ade are visible; these were covered during later building renovations to provide additional interior space in the upper level rooms (and to protect against the cold, since the Brothers\u2019 and boarders\u2019 dormitories were adjacent to them). </p>\n\n    ",
    url: "assets/images/points-of-interest/06.21.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The College gates in 1963, showing the signage that reads “Marist Brothers College”. This photograph was taken by N. Bartie (then in Junior Matric ‘A’, Grade 11 today) in ‘Camera Club’.  The Marist monogram is visible at the top of the signage.",
    furtherText: "\n    <p>Camera Club was run by Brother Rudolf, a keen amateur photographer and the College Science teacher (and Principal, 1965-71). The club used the College darkroom which was situated in the science laboratories to develop their photographs, for of course this was long before the digital era. N. Bartie\u2019s photograph was selected to appear in the 1963 school magazine, then called The Maristonian.</p>\n\n    ",
    url: "assets/images/points-of-interest/06.20b.jpg",
    reference: "Image: N.Bartie in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The College gates were rebuilt in 1978-9. The numbering on the gatepost dates from this time.  ",
    furtherText: "\n    <p>Until then, the gate was a single entry/exit passage but with increased motor traffic in the College this became restrictive. In 1978 a passing truck crashed into the gates, damaging some of the stone work. Brother Anton and Joseph Letebele took the opportunity to construct a double entry/exit gate to ease traffic flow. Each stone was taken down from the original gates and numbered, so that when the new and enlarged gates were built most of the stones could be repurposed in the correct places (e.g. cornerstones were still cornerstones). This was painstaking work, which took most of the year. You can still see the green lettering used to mark each stone on today\u2019s gateposts.</p>\n\n    ",
    url: "assets/images/points-of-interest/06.11b.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Joseph Letebele (staff member since 1961) shows where he put his initials “J.L. ‘79” into the wet concrete support at the right hand (on exit) base of the gates during the renovations. Look carefully and you can still feel this initialling today. ",
    furtherText: "\n    <p>Joseph Letebele also repaired the metal gates after a motorist mistook the closed gates for a side street in the 1990s. A little bend remains today, but straightening it further would necessitate the replacement of the whole gate. As it is, it serves as a reminder to pay close attention while driving in and out. </p>\n<p>The College gates were not locked at night until the late 1980s. An incident in 1987 led to this policy being revised. Information in the slides about the Statue of Jesus with the Sacred Heart explains what happened.</p>\n\n    ",
    url: "assets/images/points-of-interest/06.06.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The College gates as they appear in 2017. The lettering for the signage was prepared by Frank Hollingworth (who has taught High School Science since the late 1970s) in December 1979, as the College reverted to the use of its religious name ‘Sacred Heart College’ when it became co-educational in 1980.",
    furtherText: "\n    <p>Frank Hollingworth recounts how he created these:</p>\n<blockquote>\n<p>&quot;Brother Neil gave the staff tasks to get us ready for the big day. Mine was to change the &#39;Marist Brothers College&#39; sign above the front gate to &#39;Sacred Heart College&#39;. I was able to use many of the existing letters for this purpose, but had to make C, D, E and A.  I was at a bit of a loss as to how to do this, then had the idea of using the lead pipes which were still sticking out of the wall in the old boarders&#39; boot room (the present-day girls\u2019 toilets next to the IT laboratory). I melted this lead and poured it into moulds which I&#39;d made out of wood, then erected scaffolding under the gate and placed all the letters in the iron frame to spell out the new name. I&#39;ve often looked at the sign will some pride, even though the &#39;D&#39; is a little crooked and I might have made a better job of the &#39;A&#39;. Nevertheless, it is my small &#39;footprint&#39; which will endure for some years to come I hope!&quot;</p>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/06.25.jpg",
    reference: "Image: Caroline Kamana"
});
var six = poi;
//# sourceMappingURL=006.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return seven; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("007", "Pre-Primary School", "The Orchard, Yeoville and the Pre-School", -26.173514, 28.074774);
poi.themes = ["Koch Street", "Brothers today at Sacred Heart", "Ethos", "College Characters", "Alumni", "Grounds and Buildings", "Learning", "Traditions and Innovations", "Socio-Political Context", "Stories in the story", "Marcellin Champagnat"];
poi.addElement({
    type: 1,
    text: "Artist's impression of the proposed Pre-Primary buildings c.1994. The architect was Christian Gottschalk of Alfio Torrisi Architects; the buildings were opened in 1996. ",
    furtherText: "\n    <p>Though the physical buildings of the Sacred Heart Pre-Primary School were built in 1995-1996, the story of the Pre-Primary section of the school is intertwined with that of the local community in Yeoville from 1914, and with the changing dynamic of inner city Johannesburg from the late 1980s. The existing Pre-Primary School\u2019s foundation stone was laid by Bishop of Johannesburg, The Right Revd. Orsmond in 1995, and the facility was opened in 1996 by Prof. Bengu, Minister of Education.</p>\n<p>Funding for the buildings was contributed by Anglo American and the De Beers Chairman\u2019s Funds (in 1998 this became one fund), Sacred Heart\u2019s Development Fund and the Genesis Foundation, amongst other donors. The two conical stone pillars outside the entrance contain plaques which remind passers-by of these facts. </p>\n<p>The Pre-Primary building was designed in the 1990s to resemble 1920s main buildings of the College and at the same time reflect and incorporate features (such as the indigenous trees) of the triangular shaped part of the Orchard that it was to be built in.</p>\n\n    ",
    url: "assets/images/points-of-interest/07.22b.jpg",
    reference: "Image: Christian Gottschalk in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Two conical stone pillars with inset plaques mark the entrance to the Pre-Primary. ",
    furtherText: "\n    <p>Colin Northmore, Head of College, recounts an anecdote about the two pillars which could be said to represent the opposing views of the surveyor and the architect for the Pre-Primary building project. There was a disagreement over whether the Orchard land that was set aside for the new buildings was over landfill or a ridge of quartz. Of course this would have made a difference to the depth of the foundations that were to be laid and to the final design and structure of the building. The architect and the surveyor threw their hats on the ground during \u2018discussions\u2019 and, it turned out, this was the ideal place at which to test their theories by digging exploratory holes. The two pillars not only conveniently hold the plaques that mark the beginnings of the Pre-Primary but the middle ground that was found between their two plans and the start of the two men working together with a shared vision. Of course the pillars also mark the physical entry point into the Pre-Primary Foyer.</p>\n\n    ",
    url: "assets/images/points-of-interest/07.07.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "c.1996-7, Brother Joseph Walton, former Principal of the Primary School and former Provincial at the Pre-Primary with some of the learners. ",
    furtherText: "\n    <p>The Pre-Primary was built to accommodate 250 children in nine classrooms, with extra spaces such as a library, staff offices, a large multi-functional foyer and an aftercare facility. The buildings and landscaped play areas were designed to connect the pre-schoolers with their Orchard setting; aviaries and pens for farmyard animals were included in the colonnaded verandas. Sheep, pigs and ducks mingled with the children in the specially enclosed play area and there was also a vegetable patch for the learners to tend and watch grow. Though the animals are no longer part of the Pre-Primary community, the vegetable garden remains, the mini-robots still function and the children enjoy following the life cycles of the guinea fowl that have made the Orchard their home. The play area used by the Pre-Primary today extends behind the initial landscaped play area to incorporate a specially set aside part of the Orchard complete with a bug hotel, marble run and jungle gyms made of wood.</p>\n\n    ",
    url: "assets/images/points-of-interest/07.32.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "Holy Family Convent Yeoville as pictured in the 1931 Maristonian – part of an advertisement presumably aimed at the families of boys already at Obs to consider for their daughters.",
    furtherText: "\n    <p>After the consolidation of three schools into Sacred Heart College in 1980, the increased pupil roll (from 500 to over 800) meant that all learners could not be accommodated at the Observatory campus. The Holy Family Convent was used for the Sacred Heart College Junior Primary and Nursery schools. In 1993, after the completion of the new buildings (which now form the Intermediate Quad) the Junior Primary was moved back to Observatory. The classrooms vacated by the Junior Primary of Sacred Heart College at Yeoville were given over to the foundation of a new school, Yeoville Community School. </p>\n<p>The Holy Family Convent school was built in Yeoville in 1914. The colonnaded verandas and balconies shown in this picture are still a feature of the school today, however, the grounds and buildings themselves are no longer in good repair. The allocated government funding doesn\u2019t stretch to covering maintenance of the buildings, purchased by the Department of Education in 2003, nor does it provide for some of the other needs of the staff and pupils at Yeoville Community School, such as sufficient learning and classroom equipment.</p>\n\n    ",
    url: "assets/images/points-of-interest/28.83b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Yeoville Campus of Sacred Heart College (in the former Holy Family Convent) was 1.5 km away from the main school at (top right on map) and in operation from 1980 to 1995, home to the Junior Primary until 1992 and the Nursery and Pre-Primary until 1995. From 1995 the school site was given over to Yeoville Community School.",
    furtherText: "\n    <p>Yeoville Community School, first headed by Jackie Stevenson (who came from the staff at Sacred Heart College) began as a school of less than 200 children, doubled again in size once the Sacred Heart Nursery/Pre-Primary relocated to Observatory after 1995, and now has a roll of over 1000 learners.</p>\n<p>Children of the returning political exiles who began to come back to South Africa in the early 1990s formed a large section of the student body of the new Model C school. They were aided through the Batlagae Trust along with children from the existing inner-city area, who until this point were unable to access their local school. Many of the pupils had been denied access to other city schools, often on the grounds of language and educational inadequacies, and the new school saw to it that the bridging of these gaps was achieved, with pupils then able to access other mainstream schools in due course. </p>\n<p>Sacred Heart College and the Marist Brothers, who dealt with the Department of Education, were key to the establishment of quality education in that area. Many College staff moved to work at the new schools in order to provide experienced teachers to this community initiative. Barnato Park High School and Orange Grove Primary were amongst the first Model D schools opened in the early 1990s, established through efforts of the Marist Brothers and their supporters, many of whom were staff and parents of Sacred Heart College.</p>\n\n    ",
    url: "assets/images/points-of-interest/07.33.jpg",
    reference: "Image: Google Maps at http://yeovillecommunityschool.weebly.com "
});
poi.addElement({
    type: 1,
    text: "Nelson Mandela and Graça Machel visit one of the Pre-Primary classes in 1999 on Grandparents’ Day. Grandparents’ (or special carers) Day remains a highlight of the Pre-Primary Calendar today. The Pre-Primary uses a Reggio approach curriculum, which cultivates resilience, independent thinking and curiosity in the young learners. ",
    furtherText: "\n    <p>According to Brother Neil McGurk and Brother Joseph Walton, Principals of the College and Primary School respectively, when Nelson Mandela visited Sacred Heart College he liked to visit the Pre-Primary school in particular. During his time in prison he was starved of contact with children, not least of his own children and grandchildren. </p>\n<p>In the first few years after Nelson Mandela\u2019s release from prison and during his Presidency he was a regular visitor to both Sacred Heart campuses (until 1995). In the early 1990s Mandela attended one of the Junior Primary concerts at the Yeoville campus and was so impressed by the diversity and cohesion of the students and staff that he advised Oliver Tambo to attend, to see for himself how the new South Africa could and should be. Oliver Tambo indeed joined the audience at the concert the next evening. </p>\n\n    ",
    url: "assets/images/points-of-interest/07.25.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "President Mandela (left) and Teacher Boitumelo Letho (right) with Pre-Primary learners in 1999.",
    furtherText: "\n    <p>Ms. Boitumelo Letho, who has taught at the Pre-Primary since the Yeoville days, tells of how Mandela loved to sing \u2018Twinkle Twinkle Little Star\u2019 with the youngest Sacred Heart learners. One of her favourite moments as a teacher of Grade 00 came whilst leading her class through the school grounds. Passing the statue of Jesus with Sacred Heart she overheard a discussion between a few of the 4 and 5 year olds. Was this perhaps the resting place of Jesus or Nelson Mandela they debated? Such a spot with this prominent statue as marker could only be, in their minds, a signifier for one of these two momentous figures that they hear in connection with their schools\u2019 narrative in stories around social justice. </p>\n<p>\u201CWow, look it\u2019s Jesus!\u201D \u2026 \u201CNo, it\u2019s not real\u201D \u2026 \u201CBut it is actually where Jesus is buried\u201D \u2026 \u201Cyes, it is like a signpost\u201D \u2026 \u201Cwell I think Nelson Mandela is buried here\u201D \u2026 \u201Cat night maybe they talk to each other\u201D ... </p>\n<p>Indeed, at a recent school Mass one of her students lent over and whispered, \u201CLook, Teacher Buti, Jesus has come to our school!\u201D The youngster had not, before then, seen the Brothers dressed in their soutanes and didn\u2019t recognise that it was the same man who\u2019d welcomed his class to the Brothers\u2019 gardens to meet their resident tortoise only a few weeks prior.</p>\n\n    ",
    url: "assets/images/points-of-interest/07.28b.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "A statuette of Marcellin Champagnat with Mary and Jesus that can be found in the Pre-Primary Foyer.",
    furtherText: "\n    <p>This statuette of Marcellin Champagnat kneeling before the Virgin Mary and Child was made by celebrated Canadian figurine maker E. Dini, who was particularly renowned during the 1940s and 1950s for his painted plaster moulded religious icons that have been collected all over the world. It is one of a few artefacts found around the Pre-Primary that speak to the Marist ethos and founders of the school. Another example is the statue of Jesus that is mounted in the foyer above the entry point to the reception office; this statue of Jesus was once installed above the altar in the Old Chapel and moved to its current position in the late 1990s. </p>\n\n    ",
    url: "assets/images/points-of-interest/07.12b.jpg",
    reference: "Image: Caroline Kamana"
});
var seven = poi;
//# sourceMappingURL=007.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eight; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("008", "Ntate Sammy", "Selling Ice-Cream at Sacred Heart College since 1963", -26.173422, 28.074565);
poi.themes = ["Brothers today at Sacred Heart", "College Characters", "Alumni", "Grounds and Buildings", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "c.1963, Ntate (Uncle) Sammy cycling his ice-cream cart to College, pictured at the junction of Eckstein and Innes Streets.",
    furtherText: "\n    <figure><img src=\"assets/images/points-of-interest/08.15b.jpg\" alt=\"\">\n\n<figcaption>Excerpt from letter to Alumni Community from Wayne Frank, Matric 1993, to let the community know about Ntate Sammy\u2019s upcoming retirement. (Image: Sacred Heart College Archive)</figcaption>\n\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/08.01.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 2,
    text: "Uncle Sammy in 2016.",
    furtherText: "\n    <p>Uncle Sammy\u2019s retirement is imminent. However, in December 2016, Ntate Sammy said he wasn\u2019t sure if he could retire\u2026 \u2018as long as these gates are open and I can cycle through them I will want to\u2019 \u2026 Indeed, Uncle Sammy can still be found after school with his pushbike and freezer selling his ice creams to learners, parents and staff. In the same conversation Uncle Sammy said \u201CMy name isn\u2019t really Uncle Sammy but the boys called me that a long time ago and it stayed, so now I am Uncle Sammy.\u201D</p>\n\n    ",
    url: "https://www.youtube.com/embed/ughdThYOKok",
    reference: "Video: Caroline Kamana at YouTube.com"
});
poi.addElement({
    type: 1,
    text: "Text: Uncle Sammy and Pupils (including Wayne Frank writer of letter to Alumni Community) pictured in the 1989 Sacred Heart College yearbook.",
    furtherText: "\n    <figure><img src=\"assets/images/points-of-interest/08.12b.jpg\" alt=\"\">\n\n<figcaption>Image: Sacred Heart College (2003 Yearbook))</figcaption>\n\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/08.07b.jpg",
    reference: "Image: Frank Hollingworth in Marist Archive"
});
poi.addElement({
    type: 3,
    text: "Brother Neil McGurk talking about Uncle Sammy, who is pictured here talking with Brother Joseph in 2015.",
    furtherText: "\n    <p>Uncle Sammy has been selling his ice creams at Sacred Heart College for nearly 55 years, an integral part of and reliable constant in the everyday life of a place that has seen many a transformation. Not only does Uncle Sammy form part of tradition at the College for individuals and families, but for the whole school community. During this conversation in which Brother Neil McGurk speaks about Uncle Sammy, he later said of him, </p>\n<blockquote>\n<p>\u201Ccharacters like that make for a place.\u201D</p>\n</blockquote>\n\n    ",
    url: "api.soundcloud.com/tracks/303356674",
    reference: "Image: Frank Hollingworth, Audio: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Ntate Sammy selling ice-creams on Plane Tree Avenue at Inter-House Athletics (September 2015).",
    furtherText: "\n    <p>Usually to be found in the Orchard during Aftercare, if the weather is bad Uncle Sammy takes his ice-cream cart (from which he also sells popcorn, chips and suckers for those not after ice-cream) into one of the quads. </p>\n<p>As well as coming daily during the school week, Uncle Sammy is a fixture at school sports or other events such as the Heritage Day Music Festival. </p>\n\n    ",
    url: "assets/images/points-of-interest/08.09b.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 3,
    text: "In this clip a Sacred Heart College family discuss the particular way in which Uncle Sammy plays a part in their lives. ",
    furtherText: "\n    <p>Before Uncle Sammy arrives at Sacred Heart, usually at around 2.30 (until after 5pm on a hot day \u2026 good for sales!), he stops at the gates of King Edward VII school where he also sells to the KES boys. Therefore, Uncle Sammy is part of the fabric of the wider local community as well as being a familiar figure at Sacred Heart College and in some cases, to whole families. A quick scan of the school and alumni Facebook pages confirms this through the many posts and comments that fondly recall his presence (and presents!).</p>\n\n    ",
    url: "api.soundcloud.com/tracks/303360968",
    reference: "Image: Frank Hollingworth, Audio: Frances Correira"
});
poi.addElement({
    type: 3,
    text: "A Sacred Heart College learner talks about Uncle Sammy. This image shows Primary and High School learners joining Uncle Sammy in the Orchard.",
    furtherText: "\n    \n    ",
    url: "api.soundcloud.com/tracks/303362034",
    reference: "Image: Frank Hollingworth, Audio: Frances Correira"
});
var eight = poi;
//# sourceMappingURL=008.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nine; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("009", "The Orchard", "From private garden to community space", -26.173355, 28.074312);
poi.themes = ["Koch Street", "Brothers today at Sacred Heart", "Alumni", "Grounds and Buildings"];
poi.addElement({
    type: 1,
    text: "Aerial view of the College grounds taken in 1931. The “Orchard” is the plume like shape in the centre of the bottom half of the picture.",
    furtherText: "\n    <p>The school grounds are bordered by Norfolk pine trees, planted by the Brothers at the outset of establishing the property, in consultation with the government\u2019s forestry department.  The Orchard was planted with fruit trees; peach and fig. The avenues in the orchard area were planted with cedar trees. </p>\n<p>Brother Henry was a keen botanist, as was Brother Florian (the first College Principal), and they were both responsible for establishing the gardens and trees. Br Florian was known for his landscaping, whilst Brother Henry looked after the plants and shrubs and tended a nursery for seedlings. The rectangular space at the top left of the orchard area was a vegetable patch from which fresh produce was procured for the dining room. Today a vegetable patch still exists in the Orchard, but is now situated on the far western perimeter of the grounds. </p>\n<p>In the top right of the image is a square area edged with pine trees that used to be part of the school grounds; today the two blocks of houses east of Steyn Street are built on this. This part of the grounds was left unleveled and was referred to as \u2018the potato patch\u2019 for it was covered in lumps of rock and mainly used by the Cadets until it was sold in 1953.</p>\n\n    ",
    url: "assets/images/points-of-interest/03.101.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Front of College viewed through some of the orchard trees in c.1930-33.",
    furtherText: "\n    <p>In the archive there is no date associated with this picture; however, due to the absence of a statue in the front niche (above the main steps) and the height of the trees it can be estimated at c.1930-1931.</p>\n<p>The Orchard was a private area in the College grounds for use of the Brothers and was given the name of \u2018crows\u2019 garden\u2019 by the boys.</p>\n<p>Edward Joffe, matric c. 1948, in his book, Before Mandela\u2019s Rainbow, recalled:</p>\n<blockquote>\n<p>\u201CFacing the College\u2019s main buildings across the driveway stood an orchard the size of a soccer field, entry to which was absolutely forbidden. Few foolhardy lads had ever courted disaster by entering that sanctuary where the Brothers meditated, enjoyed a quiet drag, or simply escaped to take respite from their charges\u201D</p>\n<footer>Joffe 2013:39</footer>\n\n</blockquote>\n<p>Frank Hollingworth, staff member since 1979, recalls that one pupil who had been at \u2018Obs\u2019 in the 1950s told him he was very disappointed on joining the school to find out that the boys were not allowed to enter, for it had been one of the reasons he had asked his parents to send him to Obs in the first place \u2013 in the hope of fresh fruit on demand!</p>\n\n    ",
    url: "assets/images/points-of-interest/09.01a.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "“Cedar Avenue” in 1934.",
    furtherText: "\n    <p>Cedar Avenue was the name given to the pathway around the perimeter of the orchard. Cedar Avenue exists today as the pathway that runs between the Pre Primary School and the open area in the orchard, down to the western perimeter of the College grounds. From the 1931 image (card 1) you can make out the plume shape of the planting, however, by the 1950s further planting on the south side of the orchard had extended the orchard into a heart shaped area. The \u2018plume\u2019 was thus the left hand side of the heart viewed from the west towards the east (the direction of the photograph in card 1).</p>\n\n    ",
    url: "assets/images/points-of-interest/09.10a.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Aerial view of the college taken in approx. 1961.",
    furtherText: "\n    <p>This image shows how densely planted the Orchard was at its peak (at the top of this picture) and it remained like this until the late 1980s. It also gives a sense of the heart shape that the Orchard became with the extra planting on the side towards Eckstein Street (the road visible to the left of the photograph). From this view (east to west) the top of the earlier plume-shaped orchard is to the top right in the picture.</p>\n<p>Brother Henry, one of the aforementioned botany enthusiasts, was also responsible for making a substantial part of the College grounds that are visible in this picture accessible. In the 1920s he obtained a Blasters License from the Department of Mines and used this to blast the rocky, iron-containing outcrops of the Observatory area, in particular the koppies that covered the area now known as the Orchard and the sports fields. Brother Henry brought the dynamite needed for this using public transport from Koch Street, unbeknownst to his fellow passengers! Some of the stone was reused to form boundary walls, terracing and steps around the College. </p>\n\n    ",
    url: "assets/images/points-of-interest/09.15.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Painted tree stumps created during Mindworks in 2015 by the Primary school and now positioned, with a marble run, in the part of the Orchard used by the Pre-Primary as a playground.",
    furtherText: "\n    <p>During 2014 and 2015 some of the trees needed to be felled to maintain the overall health of the Orchard area. The wood from these trees was kept to be repurposed by the pupils during Mindworks (a biannual programme for the Primary School run by the parent body, engaging the learners in skills not usually timetabled in the regular curriculum). The painted stumps are used for games, outdoor furniture and in one corner, a bug hotel. Other Mindworks and Sacred Arts Festival (the High School equivalent to Mindworks) programmes have included the creation of murals, the mosaic works seen in the High School and Intermediate quads, as well as the clay-hands Vertical Garden on the side of the High School art room. One year a labyrinth was created in the Orchard and is maintained for use by the pupils during break times.</p>\n\n    ",
    url: "assets/images/points-of-interest/09.02.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Carols by Candlelight in The Orchard, December 2016.",
    furtherText: "\n    <p>Today the Orchard is used by all sections of the school and for a wide range of reasons. During term time, it is used daily as a grassy and shaded play area at break time, except on rainy days. The Three2Six children congregate in the Orchard on arrival at school before they go off to class and a selection of extra-murals takes place in its four corners. Primary aftercare is supervised here, and after school, all ages (students, staff and parents) know it\u2019s the place to find Sammy the ice-cream seller.</p>\n<p>Other Marist and school community happenings take place in the Orchard throughout the year; the Stations of the Cross is led around the Orchard by the Brothers on Good Friday and Carols by Candlelight is held in December.</p>\n\n    ",
    url: "assets/images/points-of-interest/09.14.jpg",
    reference: "Image: Caroline Kamana"
});
var nine = poi;
//# sourceMappingURL=009.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ten; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("010", "Grotto", "The statue of Madonna and Child", -26.173161, 28.074369);
poi.themes = ["Marist Brothers' History", "Brothers today at Sacred Heart", "Ethos", "Marcellin Champagnat", "Grounds and Buildings"];
poi.addElement({
    type: 1,
    text: "A mosaicked pathway leads up to the statue of Madonna and Child.",
    furtherText: "\n    <p>The Madonna and Child statue was enshrined in a specially prepared corner of the Orchard in 2008 by the Primary School. Known as The Grotto, it provides a restful and contemplative area in which to escape the busy play area that the Orchard becomes during aftercare hours.</p>\n\n    ",
    url: "assets/images/points-of-interest/10.01.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The statue was created by sculptress Geraldine McGurk, sister of Brother Neil McGurk, former Principal of Sacred Heart College. The facial features are based on that of a nurse that Ms McGurk knew personally and reproduced using a plaster cast technique. ",
    furtherText: "\n    <p>Mary is traditionally represented wearing blue. Blue dye (ultramarine, made from crushed semi-precious stone lapis lazuli) was a very rare commodity in ancient times. It was associated with royalty and the wealthy and, as such, in religious pictures, a heavenly grace bestowed on the worthy. Some sources suggest that in the Middle East, where Mary came from, blue clothing was associated with virginity. Blue is the colour of the sky and heavens in Catholic tradition, and from where Jesus\u2019s heavenly arrival was proclaimed. Mary\u2019s cloak is edged with gold. Again, this colour refers to royalty and Mary is held to be the \u201CQueen of Heaven\u201D. Of course, blue and gold are the two colours chosen for the uniform of Sacred Heart College (and the other Marist schools in South Africa).</p>\n\n    ",
    url: "assets/images/points-of-interest/10.05.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The Black Virgin of the Chapel of Our Lady, Fourvière, before whom the Society of Mary was formed in July 1816.",
    furtherText: "\n    <p>As a black Madonna with child, the statue offers a representation of Mary fitting for Sacred Heart College\u2019s inclusive and diverse community, that speaks to one of the pivotal moments in the calling of Marcellin Champagnat to his life\u2019s work. It was before the black virgin, in the Chapel of Our Lady of Fouvi\u00E8re, that Champagnat and other newly ordained priests pledged to establish the Society of Mary in 1816. For Champagnat, Mary as mother \u2013 loving, faithful, giving and guiding - was the ultimate role model, and it is from the relationship between Mary and Jesus that Marist principles are derived. In turn, the ethos of Sacred Heart College is based on this.</p>\n\n    ",
    url: "assets/images/points-of-interest/10.06.jpg",
    reference: "Image: Marist Archive"
});
var ten = poi;
//# sourceMappingURL=010.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eleven; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("011", "The Workshop", "Furnishing the College with history", -26.173035, 28.074214);
poi.themes = ["Brothers today at Sacred Heart", "Ethos", "College Characters", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "The Workshop security gates viewed from the inside. Their design references the Sacred Heart of Jesus from where the College takes its name and to the love with which everything in the workshop is made or repaired. The Maintenance and Ground Staff, not all of whom are based in this building, are responsible for the cleaning, repair and upkeep of the College buildings and facilities. Their skills range from carpentry to welding, from tiling to landscaping, and from catering provision to security monitoring. As individuals they  are integral to the College community.",
    furtherText: "\n    <p>The College Workshop is situated in the building where the Boarders\u2019 Laundry and Ironing used to be done. The Workshop was originally in the northern basement of the main College building (where the printing room and school Nurse can be found) but the noise of the machinery in use during class time meant that it became necessary to find an alternative space. When a Laundry for the Boarders was no longer required the Workshop was moved from the basement to the Laundry building.  </p>\n\n    ",
    url: "assets/images/points-of-interest/11.14.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Mass in The Memorial Chapel to celebrate the Maintenance and Support Staff in 2015. Brother Vincent, Head of Maintenance, is pictured second from right along with some members of the Maintenance and Support Staff Departments.",
    furtherText: "\n    <p>Gratitude to the Maintenance and Support staff is shown in a variety of ways by members of the College community. Masses are held to celebrate their contribution to the College, and parents host an annual Appreciation Breakfast. The relations between the non-teaching staff and the learners are genuinely reciprocal. The support staff are often included when learners bring baked goods to share with their peers and teachers on their birthdays. The ground staff are often present at College sports matches and, when they can, assist children in accessing items mistakenly left behind after hours. </p>\n\n    ",
    url: "assets/images/points-of-interest/12.14.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "The Tower above the Main Quadrangle houses the water supply tank for the whole College. The College has two boreholes on the property, one of which dates back to the 1920s when the grounds were prepared for use as a school, and is located within the Workshop building itself. The pump has since been replaced but the hole has remained a plentiful source of water for the College to this day. Water from the two boreholes (the second is located on the top field) is combined with a municipal supply in this tower tank.",
    furtherText: "\n    <p>The image of the Tower was taken before the Main Quadrangle was renovated in the late 1990s. The piazza of the quadrangle was liable to flooding in heavy rains; the after effects of this can be seen in the lower right hand corner of the image. </p>\n\n    ",
    url: "assets/images/points-of-interest/35.24b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Bewysbok (Dompas) that Joseph Letebele, longest serving employee to date, was required to carry for 25 of the 58 years (by 2017) that he has been at the College.",
    furtherText: "\n    <p>Joseph Letebele trained in carpentry at Pax College (Pietersburg) with the Brothers of Charity. Starting with a holiday job in July 1959, he was invited back for a probationary period as a handyman in 1961. From 1962, Joseph Letebele was permanently employed, as school Carpenter and \u201Cproved to be quite indispensable. He knows where every fuse is to be found, where every key fits, the intricacies of the swimming pool filter, the condition of every desk\u2026 the list is endless\u201D (1989 College Yearbook).</p>\n<figure><img src=\"assets/images/points-of-interest/11.10.jpg\" alt=\"\">\n  <figcaption>Image: Caroline Kamana</figcaption>\n</figure>\n\n\n    ",
    url: "assets/images/points-of-interest/11.05.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Joseph Letebele with the plans he designed and used to create the interior of the Primary School Computer Laboratory. Letebele, known as Mr Fix-it by learners past and present, has contributed countless furnishings and fixtures to the College.  ",
    furtherText: "\n    <p>A carpenter by training, other skills he learnt from mentors, like Brother Anton (responsible for Maintenance in the 1970s). Joseph Letebele\u2019s projects include the rebuilding of the College gates, construction of rugby posts, soccer goals and perimeter walls, tiling in the Old Chapel theatre, Altars for Marist Chapels, and workbenches for the Science labs. Currently he is refurbishing the desks and chairs in the Primary School. He makes each desk and chair by hand, including the metal welding and soldering. He has also produced furnishings for St David\u2019s, Inanda, and St. Joseph\u2019s College, Rondebosch. College, Rondebosch. </p>\n\n    ",
    url: "assets/images/points-of-interest/11.15b.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 3,
    text: "Joseph Letebele explains his methods inspired by Brother Anton. ",
    furtherText: "\n    \n    ",
    url: "api.soundcloud.com/tracks/304608084",
    reference: "(Image & Audio: Caroline Kamana)"
});
poi.addElement({
    type: 1,
    text: "Joseph Letebele opening the Letebele Music Centre in 2002. The Music Centre was named in recognition of the Letebele family’s long association with the College (which to date in 2017 spans 83 years) and for their enduring contributions to the very fabric of its community. Joseph Letebele’s father, Ephraim Letebele, was the Boarders’ Chef from 1934 until his retirement in 1974. Ephraim Letebele’s kitchen was situated where the High School Tuck Shop can be found today.",
    furtherText: "\n    \n    ",
    url: "assets/images/points-of-interest/20.16.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1989, Joseph Letebele stands with his daughters, Margarete (right) Elizabeth (left), and nephew Khumo (centre front); matriculants of 1989, 1993 and 1997 respectively.",
    furtherText: "\n    <p>Joseph Letebele with his granddaughters. Koketso Letebele (right) and Kgomotso Letebele (left) matriculated in 2015 and this picture was taken just a few weeks before the end of their school careers at Sacred Heart College. Their elder cousin, Tebogo Letebele, matriculated in 2012.</p>\n<figure><img src=\"assets/images/points-of-interest/34.34c.jpg\" alt=\"\">\n  <figcaption>Image: Frank Hollingworth </figcaption>\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/34.34b.jpg",
    reference: "Image: Marist Archive"
});
var eleven = poi;
//# sourceMappingURL=011.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twelve; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("012", "The Brothers' Residence", "A selection of Brothers' profiles", -26.172998, 28.074698);
poi.themes = ["Marist Brothers' History", "Koch Street", "Brothers today at Sacred Heart", "Ethos", "College Characters", "Alumni", "Grounds and Buildings", "Learning", "Socio-Political Context"];
poi.addElement({
    type: 1,
    text: "Marist Brothers from Johannesburg, Cape Town, Port Elizabeth and Uitenhage assembled in Uitenhage in 1895 for a retreat.",
    furtherText: "\n    <p>The Brothers always lived, as they do today, in community residence at Marist institutions that they served. Prior to 1985, the Brothers based at Sacred Heart College lived in rooms on the upper floor of the main building, which today have been converted into the staff room and several offices (including those of the school counsellor and the Chaplain). In 1985 a new residence was completed for the Brothers, providing rooms for 11 Brothers, a mall Chapel space, a dining room and a communal lounge. The single storey building, partly incorporating the Manual Training Hall, was practically designed to comfortably accommodate more elderly Brothers. </p>\n<figure><img src=\"assets/images/points-of-interest/12.69.jpg\" alt=\"\">\n  <figcaption>The Staff (Brothers, Matron and Lay staff) at Observatory in 1940. (Image: Marist Archive)</figcaption>\n</figure>\n\n\n    ",
    url: "assets/images/points-of-interest/12.68.jpg",
    reference: "Image: Institute of Marist Brothers (FMS)"
});
poi.addElement({
    type: 1,
    text: "Brother Vidal pictured giving a Physical Training lesson at Koch Street on the front page of The Star in 1956 with the headline ’80 and still going strong’.",
    furtherText: "\n    <p>Brother Vidal arrived in South Africa in 1902 suffering \u2018galloping consumption\u2019 (tuberculosis) and doctors in Cape Town gave him three months to live. He moved to Johannesburg where the altitude strengthened his lungs, and astounded the medical profession by not only living to the age of 95 but by becoming a PT teacher, gymnastics enthusiast and soccer coach.  Another article in The Star (undated) reported that he volunteered as a traffic cop ensuring that learners were able to safely cross the roads to and from school. The 1962 Maristonian remarked in his obituary that \u201Cperhaps he will be best remembered among the laity for his many remedies for almost all sorts of diseases. For some these proved beneficial, for others a trial that was not repeated.\u201D Brother Martin, the late Marist Archivist, kept a list of his remedies and noted that it was the \u2018Hail Marys\u2019 offered at the end of each treatment that were the only potentially non-lethal part of the process!</p>\n<p>Over the 150 years that the Marists have been in Johannesburg many hundreds of Brothers have served to educate the youth at the three Gauteng Marist schools. Their presence has impacted the wider community in numerous ways. Some of these Brothers are mentioned in this App; these are but a selection. In this group of slides, the main focus is on the Brothers who lived, or continue to live, at the Eckstein Street Brothers\u2019 Residence. </p>\n\n    ",
    url: "assets/images/points-of-interest/02.91b.jpg",
    reference: "Image: The Star in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1962, Brother Paul on his 56th birthday with his guide dog Sheena, the Alsatian.",
    furtherText: "\n    <p>Brother Paul became a Marist Brother just a few years after finishing school (Athlone Boys\u2019 High School) in Johannesburg in 1924. Br Paul trained in Italy, and on returning to South Africa in 1926 taught at many of the Marist Schools, including Koch Street and Observatory. He was elected to represent the South African Brothers at the General Chapter in Italy in 1946. He then spent some years recruiting for the Province of South Africa in northern Europe. In 1957, having suffered degenerative eyesight by this time, he had an operation in London. The operation was not successful and Br Paul was thereafter totally blind. </p>\n<p>Br Paul returned to South Africa to live with the Brothers at Observatory, where he remained until 1998 when he moved to a Catholic care facility, Nazareth House in Yeoville. The boys at the school organised a collection for Br Paul to buy his guide dog. He learnt braille and immersed himself in charitable work to assist the blind, particularly in social welfare. In 1967, Br Paul founded \u201CThe Guild of St. Theresa for the Blind\u201D, a charitable institution, assisted by the Sisters of Charity to practically assist and financially support the blind in disadvantaged communities. The Siloe School for the Blind, near Pietermaritzburg, is one of the foundations supported by St. Theresa\u2019s Guild. Br Paul\u2019s obituary, published in 2000 in the College Yearbook, commented that the children at the Siloe School &#39;know more about Br Paul than they do about the Pope!&#39;</p>\n\n    ",
    url: "assets/images/points-of-interest/12.17.jpg",
    reference: "Image: Rand Daily Mail in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Brother Jude with some Grade 1s in 2017.",
    furtherText: "\n    <p>Brother Jude describes himself as \u2018working with young people\u2019, but this only tells one small portion (though with a huge impact) of his contribution to transformative processes in South African society. Educated at St. Joseph\u2019s College, Rondebosch from Standard 2 (grade 4 today), he professed his first Marist vows in 1959. Brother Jude taught in Marist Brothers\u2019 Colleges in Observatory and in Walmer, Port Elizabeth, where he was Principal from 1969. In 1974, Br Jude was appointed Provincial of South Africa, a position he held for nine years. Following this, at the request of the Catholic Bishops\u2019 Conference of Southern Africa (SACBC), he founded the Catholic Institute of Education. From 1988 until 1995 he served as Secretary General of the SACBC until re-appointment as Provincial of South Africa. From 1998, until 2003, Br Jude was Provincial of the new Marist Province of Southern Africa which, besides South Africa, involves the Brothers and their institutions in Angola, Malawi, Mozambique, Zambia and Zimbabwe. Today he is a Councillor for the Southern African Province. </p>\n<p>As Director of the Catholic Institute of Education and later as Secretary General of the SACBC, in the 1980s and \u201890s Br Jude was a driving force in talks with the then Government around the desegregation of Catholic schools in South Africa. Over the years he has contributed to positive changes in the country, not least in missions relating to social justice and in terms of the development of national and Catholic education policies. In 1999 Br Jude set up the Marist Schools Council, which oversees the administration of the five Marist schools in South Africa.  </p>\n\n    ",
    url: "assets/images/points-of-interest/12.70.jpg",
    reference: "Image: Lynn Walker"
});
poi.addElement({
    type: 1,
    text: "In 1997, whilst Principal of the Sacred Heart College Primary School, Brother Joseph celebrated his 50th birthday.",
    furtherText: "\n    <p>Born in Port Elizabeth, Brother Joseph was educated at Marist College in Uitenhage (as was his father) and the Marist Juniorate in Hibberdene, KZN. Like all Marist Brothers of his generation he spent a year in a Postulancy (preparation to enter the next stage of Marist formation) and a further year at a Novitiate (during which ones\u2019 first vows are made). Br Joseph\u2019s Novitiate year included teaching practice at St. David\u2019s, Inanda, after which he taught at Marian College, Linmeyer, St. Charles\u2019 College, Pietermaritzburg, and St. Joseph\u2019s, Rondebosch, where he was Primary School Principal. In the 1980s Br Joseph was the founder Principal of Trinity High School in Port Elizabeth (a joint venture between the Marists and the Dominican Sisters) and spent a year as Superintendent for the Diocesan Mission Schools. </p>\n<p>From 1991-2000 Br Joseph was Principal of the Primary School at Sacred Heart College which he fondly recalls as \u2018a great ten years of my apostolic life\u2019. Br Joseph oversaw the move of the Foundation Phase back to the Eckstein Street premises from its temporary home in Yeoville. Br Joseph, a gentle but firm, much loved Principal, was appointed to join the staff of the Brothers\u2019 tertiary formation house in Nairobi in 2000. In 2005 he returned to live at the Brothers\u2019 Residence at Sacred Heart on his election as Deputy Marist Provincial and from 2010-2016 served two terms as Marist Provincial for Southern Africa. Brother Joseph recently moved from Observatory to continue Marist mission work in the Western Cape. </p>\n\n    ",
    url: "assets/images/points-of-interest/12.42.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Br Mario (on right) pictured on a pilgrimage to L’Hermitage in 2005.",
    furtherText: "\n    <p>Brother Mario\u2019s elder brother taught him the war cry for St. Joseph\u2019s College, Rondebosch well before he became there a pupil in the early 1950s. Aged 15 he decided to become a Marist and moved to the Hibberdene Juniorate to complete his secondary schooling. After his postulancy and novitiate in Australia (completed contemporaneously with Brother Jude), he returned to South Africa. After obtaining a B.Sc. degree at the University of Natal in Pietermaritzburg, he taught at St David\u2019s College, Inanda for 14 years. During this period he studied part-time through UNISA ending with a Masters in Education. He is grateful to the Superiors for allowing him to take advantage of a bursary to follow a summer programme at the University of California (science teaching), and another one at the University of Louvain (theology) many years later. He has also benefitted from a renewal programme in Rome and a year of study at the Gregorian University in the same city. He has served as a teacher in two former South African homelands and spent eight years as a formator at the Marist International College in Nairobi. </p>\n<p>On returning to South Africa, Br Mario devoted a number of years to formation of Marist educators in the spirit of St Marcellin. In 2010, he was appointed as Secretary to the Province of Southern Africa and personal secretary to Brother Joseph, the Provincial Superior. He currently continues that service under Brother Norbert who replaced Br Joseph in 2016.</p>\n\n    ",
    url: "assets/images/points-of-interest/12.54.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Brother Vincent at Academic Mass, February 2017.",
    furtherText: "\n    <p>In 1957, aged 8, Brother Vincent began boarding with the Marists at St. Charles\u2019 College, Pietermaritzburg. From there he went to the Marist Juniorate in Hibberdene, Natal. In 1968 he took his first vows at the Marist Novitiate (together with Brother Joseph) in Stellenbosch. In 1971, after a year at the Marist Scholasticate in Pietermaritzburg, Br Vincent came to Marist \u2018Obs\u2019 to teach Standard 5 and coach sports and the Cadet band. Br Vincent recalls walking to Ellis Park Stadium and the Yeoville Bioscope with Brother Neil on occasional weekends. His bedroom is now the College Counsellor\u2019s office. </p>\n<p>In 1973 Br Vincent continued his Marist formation in Australia, thereafter spending fifteen years between Marist schools in Port Elizabeth and Durban. Posted to the Slough Marist mission in the Kalahari Desert in 1986, he taught in the local school and cultivated his interest in practical work. In 1990 he received an H.D.Ed in Technical Studies at the Johannesburg College of Education. He taught Technical Studies at Slough and at the Xhosa-speaking Dominican Convent High School in Uitenhage until 2007, when he transferred back to Sacred Heart as Maintenance Manager, a role he continues today.</p>\n\n    ",
    url: "assets/images/points-of-interest/12.72.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Brother Neil, pictured in 2000, recalling transformations in the identity and direction of Sacred Heart College.",
    furtherText: "\n    <p>Brother Neil, whose uncle Gerald McGurk taught at Sacred Heart College for 43 years, and whose uncle Edwin McGurk was Provincial in the 1950s and 60s, began his own journey with Marist \u2018Obs\u2019 aged 14. Br Neil began teaching science at Marist \u2018Obs\u2019 in 1965. A veritable academic, with reams of published research in topics as diverse as education and race, cosmology and nucleic forces, he has inspired generations of learners. From 1975 to 1999 he was Director of the College. Sim Tshabalala, now joint CEO of Standard Bank, and one of the first black students admitted to the College, said of his former Headmaster:</p>\n<blockquote>\n<p>\u201CI learned a lot from him and in particular, I gained a love of philosophy and deep desire to help out \u2013 at least a little \u2013 to make South Africa a better place.\u201D      (Tshabalala, 2011)</p>\n</blockquote>\n<p>Under Br Neil\u2019s leadership, the College defied government decree and opened the school to boys of all races in 1976. In 1980, he was responsible for the change to co-education and the integrated studies curriculum. Br Neil has made invaluable contributions to South African society, including negotiating educational reform with the pre-1994 government, leading to the remodelling and desegregation of schools, assisting the ANC before and after its unbanning with socio-cultural missions, and the integration of returning exiles in conjunction with the Batlagae Trust. Br Neil continues to work tirelessly for social development with Catholic NGOs in the country; one current project, \u2018The Culture of Learning\u2019 in KZN, provides skill training in education and community development.  </p>\n\n    ",
    url: "assets/images/points-of-interest/12.52b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Father David Dryden celebrates Academic Mass in the Macartin Centre in 2015.",
    furtherText: "\n    <p>Marist Brothers are not priests, but have nonetheless made vows to live a spiritual life in community with other Brothers, focused on education as their founder, Marcellin Champagnat (who was a priest), established in 1817. Father David Dryden, not a Marist Brother but a Jesuit Priest, has been the Sacred Heart College Chaplain since 1983, after serving at St. Joseph\u2019s College, Rondebosch, for the previous decade. Father Dryden is concurrently the Chaplain at Marian College, Linmeyer and he devotes one day each week to each school. </p>\n<p>Father Dryden\u2019s duties as Chaplain include pastoral care, religious instruction for Catholic children and religious education in a general sense, as well as conducting Masses and other special ceremonies (such as First Holy Communion and Confirmation). He has contact in these capacities with all ages at the school, from Pre-Primary to Matric, and also with staff members.</p>\n\n    ",
    url: "assets/images/points-of-interest/12.15.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "The statue of Our Lady of Good Hope in the Brothers’ Residence.",
    furtherText: "\n    <p>This statue of Our Lady of Good Hope was made in Europe and sent by Br Procope, Marist Superior in the 1880s, to the Marist College at Uitenhage, Our Lady of Good Hope College at a cost of \u00A37 and 15 shillings, according to the Uitenhage annals of 1890, recorded by Br Nectaire. When that College closed in the 1950s, the statue was moved to Port Elizabeth, where the Brothers in that area continued to live. When Br Joseph became Principal of the Primary School at Sacred Heart College he arranged for the statue to be moved to Johannesburg, for he had developed a fondness for it during his days as a learner at the Marist College in Walmer. When Br Joseph was made Provincial in 2010 he arranged for a copy of the statue to be made, and it is this copy that sits in the niche in the College fa\u00E7ade today. The niche had been empty for nearly thirty years after the statue of Jesus with the Sacred Heart was moved from that spot in 1979 when the school reverted to the use of its religious name upon becoming co-educational in 1980. </p>\n\n    ",
    url: "assets/images/points-of-interest/12.02b.jpg",
    reference: "Image: Caroline Kamana"
});
var twelve = poi;
//# sourceMappingURL=012.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirteen; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("013", "Statue of Jesus", "At the heart of the College", -26.173185, 28.075152);
poi.themes = ["Brothers today at Sacred Heart", "Ethos", "Grounds and Buildings", "Learning", "Socio-Political Context", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "The statue of Jesus and the Sacred Heart.",
    furtherText: "\n    <p>For Christians, particularly Catholics, the Sacred Heart of Jesus symbolises a physical manifestation of God\u2019s divine love for all humanity. Particularly relevant to a Marist school, it echoes Champagnat\u2019s vision of providing education for all children, born out of equal love for them through the way of Mary, mother of Jesus. The school\u2019s slogan is \u201CEducation with heart that knows no bounds\u201D.</p>\n<p>This photograph shows what the statue, positioned facing the College entrance steps, looks like today. The statue previously stood in two other locations at Sacred Heart College. That the statue is now also painted with colours, unlike most other statues around the school, is also significant. The narratives around these changes are recounted in the following slides. This statue of Jesus does much more than symbolise the College name; it physically links Sacred Heart College to its ongoing mission to uphold its community members\u2019 struggle for peace, equality and justice. </p>\n\n    ",
    url: "assets/images/points-of-interest/13.08.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "1933, the College façade with the statue of Jesus and Sacred Heart in the top niche.",
    furtherText: "\n    <blockquote>\n<p>\u201COnly a few days back a beautiful statue of the Sacred-Heart was erected over the entrance of the College. This emblem of the love of God for men is a most befitting image to dominate an institution placed under the patronage and the protection of the Son of God. From its niche it stretches forth its arms in welcome to all those who enter the College.\u201D         (The 1932 Principal\u2019s Report)</p>\n</blockquote>\n<p>There is speculation over why the niche was empty for the first few years of the College\u2019s life. Perhaps it was originally intended to contain a statue of Marcellin Champagnat, since in the early days the College was, briefly, called St Benedict\u2019s in his honour. By the early 1930s, though colloquially referred to as Marist \u2018Obs\u2019, the school\u2019s name was officially Sacred Heart College and the installation of this statue in this niche was a physical cementing of this fact. Today a copy of the statue of Our Lady of Good Hope sits in the niche. The original statue is kept in the Brothers\u2019 residence.</p>\n\n    ",
    url: "assets/images/points-of-interest/13.34.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Statue of Jesus with Sacred Heart under snow in September 1981. The statue was placed at the top of the traffic island found immediately as you enter the College.",
    furtherText: "\n    <p>The statue of Jesus with the Sacred Heart was moved to its position by the gates in the late 1970s in preparation for the \u2018new\u2019 co-educational Sacred Heart College; an amalgamation of the three schools, Marist Observatory, St. Angela\u2019s Convent in Kensington and Holy Family Convent, Yeoville. It symbolically welcomed people to this place of \u2018love for all\u2019. Sacred Heart College, the school that would embrace these three groups of learners, had already been named, but the name was not yet widely used by the school or wider community. It was mostly referred to as Marist Observatory to distinguish it from the other Sacred Heart College in Koch Street (the preparatory school for Sacred Heart College from 1926 until 1965), continuing out of habit for more than a decade after Koch Street closed.</p>\n<p>The last issue of the Maristonian, published in 1979 (replaced by the Sacred Heart College Yearbook) paid tribute to the Marist Brothers, the Ursuline Sisters and the Holy Family Sisters, now united in Sacred Heart College, under a picture of this statue already situated in its new location just inside the school gates. The statue was only to remain in this spot for about seven years. Events in 1987 necessitated restoration of the statue and resulted in the statue being moved to its current location today. </p>\n\n    ",
    url: "assets/images/points-of-interest/13.39b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 3,
    text: "Br Neil’s recollections about the necklacing of the statue of Jesus with Sacred Heart one night in June 1987 during the second State of Emergency in the nation.",
    furtherText: "\n    <p>Brother Neil McGurk, Principal of the College for 20 years, was responsible for the transformative processes that Sacred Heart College underwent in the 1970s and \u201880s (first with the admittance of black learners in 1976 and then in 1980 with co-education). The College had started to admit Chinese learners from the 1930s and Brother Vincent recalls stories of these boys having to hide in cupboards from visiting government school inspectors, such was the nature of the school even prior to the 1970s. </p>\n\n    ",
    url: "api.soundcloud.com/tracks/303282356",
    reference: "Image: Sacred Heart College, Audio: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "One of the leaflets dropped at the time of the statue’s necklacing, collected by Brother Neil McGurk in 1987.",
    furtherText: "\n    <p>This \u2018warning\u2019 to black students not to attend school in June 1987 was likely printed and distributed by the security forces, and dropped at Sacred Heart by one Sergeant Beyers. The intention was no doubt to give the impression that black students were behind the necklacing of the Sacred Heart statue and to create discord within the school and Marist community, well known for its inclusivity and racial integration. In some ironic-comic performance, Sergeant Beyers was dispatched to school the next morning when Brother Neil called the authorities to explain what had occurred during the night. </p>\n<p>To prevent the charred statue scaring the students (of all races) coming into school, Brother Neil and two colleagues moved the statue whilst his sister Geraldine restored and painted it. The statue was re-erected opposite the main steps in an act of defiance towards those responsible for the necklacing; rather than discarding the burnt statue it was brought physically closer to the school\u2019s heart, demonstrating that \u2018love for all\u2019 was the true nature of the College.</p>\n\n    ",
    url: "assets/images/points-of-interest/13.07.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "A Southern African Catholic Bishops’ Conference (SACBC) booklet about the petrol bombing of Khanya House, 1988.",
    furtherText: "\n    <blockquote>\n<p>\u201CWhat has occurred at Khanya House is a tragedy, not only for the Bishops\u2019 Conference but for the country as well. THIS IS NOT A TIME FOR POLITICAL POINT SCORING. It is a time for all South Africans to realise that violence will not solve the problems of the country.\u201D</p>\n<footer>Br Jude Pieterse, Sec. Gen. SACBC 1988</footer>\n\n</blockquote>\n<p>It was, in part, the SACBC\u2019s anti-apartheid vision that had inspired the Marists to open Sacred Heart to all races.  Brother Jude relates that further unexploded triggers (including limpet mines) were found in Khanya House. Similar attacks, on Cosatu House (trade union headquarters), and Khotso House (home to the South African Council of Churches and other community organisations), had occurred earlier that year. The apartheid state\u2019s fear of the power of educational and spiritual missions was palpable. The statue of Jesus with Sacred Heart remains a reminder of the transformative potential of that power. </p>\n\n    ",
    url: "assets/images/points-of-interest/13.12.jpg",
    reference: "Image: Anna Zeminski/Afrapix/SACBC in Marist Archive"
});
var thirteen = poi;
//# sourceMappingURL=013.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fourteen; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("014", "Mandela", "Grandparent, Pied Piper, Mediator and President", -26.172918, 28.075211);
poi.themes = ["Brothers today at Sacred Heart", "Ethos", "College Characters", "Alumni", "Socio-Political Context", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "President Nelson Mandela visiting the College in 1998.",
    furtherText: "\n    <p>Almost everyone connected to Sacred Heart College during the 1990s/2000s has their own recollections of Nelson Mandela\u2019s frequent visits to the College. To include all the stories would be impossible; the following slides give some insight into the special relationship that Nelson Mandela and his family have had with Sacred Heart College over the years.</p>\n<p>Some of the former President\u2019s visits were made in an official capacity (as when he took the lead in fundraising events for bursary schemes, new buildings or renovations), others more personal (parents\u2019 evenings and watching his grandchildren in school productions). Some visits were impromptu, such as his attendance at the 16th June Family Fun Day (2001), much to the consternation of his security team. Even the scheduled events caused a stir for his team. Frank Hollingworth recalled Mandela\u2019s attendance at the \u2018Bugsy Malone\u2019 school production, where one scene required cast members to burst into the hall brandishing weapons to the sound of gun fire. Mandela\u2019s protection team jumped up and prepared to react, much to the amusement of the cast, audience and President, who had already assessed that High School pupils carrying custard-guns were unlikely to be a national security threat. </p>\n\n    ",
    url: "assets/images/points-of-interest/14.12b.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 3,
    text: "Brother Neil describes the ‘Pied Piper’ of College.",
    furtherText: "\n    <p>Artist Willem Boshoff on Mandela:</p>\n<blockquote>\n<p>\u201CFor some years now my children attended the same school as Mr. Mandela&#39;s grandchildren, Sacred Heart College in Observatory, Johannesburg. We regularly see him at school plays and other functions. He surprised all of us with his lack of bitterness after his four neves sentences [slang for more than a seven-year imprisonment], and with his astute and accommodating leadership. However, what impressed me most about him is that, in spite of staggering commitments of national and international dimension, in spite of (perhaps it is because of) the many years of life missed while we [sic.] was in jail, he affords his (rather naughty) grandchildren the time and respect one might prudently bestow upon royalty, presidents and the like.\u201D                                                    </p>\n<footer><a href=\"http://www.davidkrut.com/bioBoshoff.html\">http://www.davidkrut.com/bioBoshoff.html</a> </footer>\n\n</blockquote>\n\n    ",
    url: "api.soundcloud.com/tracks/305085270",
    reference: "Image: Sacred Heart College, Audio: C Kamana"
});
poi.addElement({
    type: 3,
    text: "2002, Nelson Mandela and his grandsons view the solar eclipse. From the left are Zuko Dlamini, Mbuso Mandela, Andile Mandela. ",
    furtherText: "\n    <p>Perhaps one of these blazers was the one that featured in the tale recounted by Terry Sawyer, College Bursar since 2001, in the attached audio clip?</p>\n\n    ",
    url: "api.soundcloud.com/tracks/305106787",
    reference: "Image: Debbie Yazbek / IOL, Audio: Caroline Kamana"
});
poi.addElement({
    type: 3,
    text: "Brother Joseph Walton (Primary School Principal in the 1990s) recalls some of Mandela’s visits to the College. ",
    furtherText: "\n    <p>The 1999 College Yearbook captioned a photograph of Nelson Mandela visiting a Pre-Primary classroom with his wife Gra\u00E7a Machel, with \u201CA very special grandfather came to visit the nursery school\u201D. The Pre-Primary holds an annual breakfast to celebrate the important role that all the learners\u2019 grandparents, and other senior caregivers, play in the lives of the children. For each child, the attendance of their own grandparent or special visitor is a very meaningful moment in their Pre-Primary career as it demonstrates how their own family is a part of the larger unit of the Sacred Heart College community. Family spirit is a fundamental part of Marist and thus College ethos. </p>\n\n    ",
    url: "api.soundcloud.com/tracks/305095578",
    reference: "Image: Sacred Heart College, Audio: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Some staff were gifted copies of Mandela's autobiography.",
    furtherText: "\n    <figure><img src=\"assets/images/points-of-interest/14.11b.jpg\" alt=\"\">\n\n<figcaption> Brother Joseph (pictured left) with Mandela, meeting a Primary school learner in 1998. (Image: Sacred Heart College)</figcaption>\n\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/14.19b.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 3,
    text: "Viashin Govender (Matric 2011) recalls an incident during Grade 1. Pictured above with his parents, sibling and Mandela as described in his audio.",
    furtherText: "\n    <p>Viashin Govender matriculated in 2011 and went on to study Engineering and Game Design (Bachelors of Engineering Science in Digital Arts) at Wits University. He is currently completing Honours in the same field. Viashin\u2019s mother, Thiru, was a maths teacher and later Deputy Principal, at Sacred Heart College for seventeen years.</p>\n\n    ",
    url: "api.soundcloud.com/tracks/306341415",
    reference: "(Image and Audio: Viashin Govender)"
});
poi.addElement({
    type: 1,
    text: "Letter written by Nelson Mandela whilst in Pollsmoor Prison to Israel Maisels QC (former alumnus) on the occasion of his 80th birthday.",
    furtherText: "\n    <p>This letter represents the interconnectedness of the extended Sacred Heart College community. At the time of writing, in 1985, Nelson Mandela would not have known that the school that his defence attorney during the Treason Trial in the 1960s attended was to become one so dear to his and his family\u2019s heart. </p>\n\n    ",
    url: "assets/images/points-of-interest/34.52b.jpg",
    reference: "Image: Wits University Historical Papers"
});
poi.addElement({
    type: 2,
    text: "Nelson Mandela inducting Brigitte Mabandla as Deputy Minister of Arts and Culture at Luthuli House in 1995. The presence of her son Sibusiso, in school uniform, provoked this response from the President.",
    furtherText: "\n    <p>Many members of the first democratically elected government in South Africa chose to send their children to Sacred Heart College. Brother Neil and several of the College staff had flown to Tanzania to help assess and plan for the return of the exiles\u2019 children to South Africa and settlement in South African schools. Many of them joined Sacred Heart College. In the subsequent years the College was the choice of school for the children and grandchildren of the returning exiles. These included the Mandela, Ramaphosa, Ramogopa, Manganyi, Slovo, Letsebe, Motshega, Sisulu, Maharaj and Manthata families but there were many others.</p>\n\n    ",
    url: "https://www.youtube.com/embed/tBx7WteZMF8",
    reference: "Video: Quizzical Pictures / SABC"
});
var fourteen = poi;
//# sourceMappingURL=014.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fifteen; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("015", "The Intermediate Quad", "The Senior Primary block", -26.172795, 28.075211);
poi.themes = ["Brothers today at Sacred Heart", "Ethos", "Alumni", "Grounds and Buildings", "Learning", "Traditions and Innovations", "Socio-Political Context"];
poi.addElement({
    type: 1,
    text: "Building the Senior Primary block in 1987.",
    furtherText: "\n    <p>The Senior Primary, or Intermediate (grades 4-6) Quad was officially opened in March 1989, the centenary year of the Marist Brothers\u2019 arrival in Johannesburg. The foundation stone was unveiled by Mr K. O\u2019Dowd, Chairman of Anglo American\u2019s Chairman\u2019s Fund, one of the main funders of the new premises (along with the De Beers Chairman\u2019s Fund and the JCI Fund). The relationship between the donors and the school came through shared insights around educational development and provision at a national level. The Marist Brothers, College staff and community members, together with representatives from these corporations, held talks with the Department of Education that led to reinvestment in schooling, both in private schools like Sacred Heart College and in Model C and D schools in central Johannesburg in the late 1980s and early 1990s; a period of critical change.</p>\n<p>At the time of the Senior Primary Quad opening the school was implementing an innovative curriculum of Integrated Studies for those in the bridging years of Primary and High school (grades 7 and 8). This was a consolidation of subject teaching, particularly in the social sciences, which provided a common focus on literacy, numeracy and language learning, and was designed to accommodate and integrate learners from different educational and language backgrounds. The subject matter provided a balanced historical perspective and was taught in relation to real life experiences that encouraged interaction amongst the diverse student body. </p>\n\n    ",
    url: "assets/images/points-of-interest/15.11.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The circular stained glass window is a memorial to Bebe Mothopeng, alumnus and former trainee teacher at Sacred Heart College.",
    furtherText: "\n    <p>All over the College grounds, in windows, on plaques, in the form of benches, artworks or dedicated spaces there are memorials to those members of the school community who have died. Many more of course are recalled through the memories of those who have attended or still attend the college and not all have a physical marker in the school space to their earthly existence. Each one, in their own way, made a special contribution to the family spirit of Sacred Heart College. </p>\n<p>This stained-glass window, created by Barry Thompson, who produced most of the windows in the Memorial Chapel, commemorates the life of Bebe Mothopeng, 1982-2004. Bebe, a member of the Learners Leadership Council, matriculated from the College in 2001. She was in the third year of her Bachelor of Education degree at UNISA, completing her teaching practice at Sacred Heart College, when she died in 2004 after a short illness. Like many members of her family, Bebe was a musician and had been a member of both the Soweto Youth Orchestra and the Johannesburg Youth Orchestra as a wind instrumentalist. She also sang in the Nightingale Children\u2019s Choir.</p>\n\n    ",
    url: "assets/images/points-of-interest/15.04.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "In The Workshop Joseph Letebele holds the Peace Pole that used to stand in the Intermediate Quad in the 1990s. ",
    furtherText: "\n    <p>In the final school assembly of 1993, when all learners were housed in the classrooms on the Observatory site (the Junior Primary learners moved from Yeoville in 1993), a prayer for peace was said by the whole school. It was a time of national uncertainty before the first democratic elections in the country in 1994. A visiting German journalist who witnessed the prayer described the spirit of the diverse and united school community as a beacon of hope for the country. The Director of the Peace Pole Project (an international organisation that began in Japan in the 1950s), after reading the article, decided the College would be a fitting location for a South African Peace Pole. </p>\n<p>The whole school and members of the wider community took part in an elaborate ceremony to put up a peace pole to the right of the stage area in 1994. On its four sides it read \u201CMay Peace Prevail On Earth\u201D in isiZulu, Afrikaans, Sesotho and English. The quad was renovated some years later and the pole was removed. Perhaps it has not been re-installed because the message of tolerance, unity and diversity has long been learnt at Sacred Heart. </p>\n\n    ",
    url: "assets/images/points-of-interest/11.26.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The stage area in the Intermediate Quad, bordered with a learner created mosaic listing the five Marist pedagogical pillars.",
    furtherText: "\n    <p>The Integrated Studies Curriculum was a concrete example of the innovative approach to education undertaken at Sacred Heart College. As a Marist school, it is underpinned by and strengthened through values that come directly from the unique application of Marcellin Champagnat\u2019s educational vision that stemmed from his understanding of the Gospel message and which lies at the core of Marist schools today. These values can be understood as five pedagogical (or educational practice) pillars or characteristics that uphold and inform the educational framework of the school. These five characteristics are named as presence, simplicity, family spirit, love of work and following the way of Mary. </p>\n<p>Mary, the mother of Jesus, is understood as the perfect model of the Marist educator. Faithful and loving, she knew both the joys and the trials of life. In her way, Marist educators seek to lead by example and above all to encourage the personal growth of their learners by establishing relationships with them based on love and humility. The family spirit that is encouraged is evidenced in the relationships built between learners of all ages and at all stages in their school life, supported by their teachers, with whom a strong community is built. This simple, modest attentiveness sets the Marist and Sacred Heart Community apart from others \u2013 the nurturing of \u2018doing good, quietly\u2019 in a school setting encourages hard work, application and mindfulness.  </p>\n\n    ",
    url: "assets/images/points-of-interest/15.02.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Wolf Hillman and G.M Newton (on right) of the Rotary Club receiving relief-fund gifts at Sacred Heart College in 1932.",
    furtherText: "\n    <p>This photograph, from the archive of Museum Africa, shows Sacred Heart College learners handing over gifts that had been collected in 1932 for a relief fund during the worldwide economic depression, which also affected South Africa. A connection between the Rotary Club and Sacred Heart College remains to this day in joint efforts for charitable works. In 2016, the Rotary Club\u2019s \u201CStop Hunger\u201D food packing drive was assisted by High School learners and staff. </p>\n<p>The five Marist pillars include presence, love of work and family spirit. These characteristics are seen in many ways within the school community (e.g. the whole school supporting the Three2Six education project) but also in connection with wider community projects. Charitable work is more than just a donation; it involves presence, application (and fun!). This can be seen in a number of projects that the children take part in, like the yearly Red and White Days and Rollerblade Disco, which raise funds for a local children\u2019s home, or the collection of bottled water for national distribution during the droughts of 2015/2016.</p>\n\n    ",
    url: "assets/images/points-of-interest/33.36b.jpg",
    reference: "Image: Museum Africa"
});
poi.addElement({
    type: 1,
    text: "Pre-Primary learners making artworks for display in the Nelson Mandela Children’s Hospital in 2015.",
    furtherText: "\n    <p>Charitable giving and works are an important part of the Sacred Heart College community spirit. This begins in the Pre-Primary where weekly collections of donated extra packed lunches are passed onto a \u2018meals on wheels\u2019 service for the elderly and homeless. Older learners are encouraged to support causes they select; examples of these are the 2016 grade 5s initiative to hold a \u2018SleepOut\u2019 to raise funds for the destitute, and the High School\u2019s Enviro-Club and Eco Committee, awarded International Green Flag Status by Generation Earth (a US based environmental education programme) in 2016. </p>\n<figure><img src=\"assets/images/points-of-interest/33.02.jpg\" alt=\"\">\n  <figcaption>The school came together to collect donations for the Addo Community in the Eastern Cape, supported by the Marist Brothers, in 2016. (Image: Sacred Heart College).</figcaption>\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/15.14b.jpg",
    reference: "Image: Sacred Heart College"
});
var fifteen = poi;
//# sourceMappingURL=015.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sixteen; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("016", "St Marcellin Champagnat", "St Marcellin’s story and Sacred Heart College", -26.172672, 28.075282);
poi.themes = ["Marist Brothers' History", "Ethos", "Marcellin Champagnat", "Grounds and Buildings"];
poi.addElement({
    type: 1,
    text: "Stained glass window in the College's Memorial Chapel. By artist Barry Thompson, it depicts Champagnat at the bedside of the dying youth, Jean Baptiste Montagne.",
    furtherText: "\n    <p>Champagnat\u2019s experience with the Montagne boy confirmed his calling to teach children, particularly those who didn\u2019t know God\u2019s love. Within a few months of the boy\u2019s death, Champagnat had found two men willing to train as teachers and to follow in the way of Mary. Champagnat, curate of the village of La Valla, started a school and a foundation house for the three of them on 2 January 1817. The original house soon became too small and Notre Dame de L\u2019Hermitage (depicted at bottom right of window as a red roofed building) was completed in 1825 to accommodate 100 Brothers.</p>\n<p>Also visible is Champagnat\u2019s signature, copied from his own handwriting. The violets \u2013 a tiny but strongly fragrant flower \u2013 symbolise the three virtues espoused by the Marist tradition, humility, simplicity, and modesty. The three nails allude to the crucifixion and the trade plied by the Marist Brothers in their early days, making nails. Their nearby town, St Etienne, was (and remains) a centre for metalwork. This window was gifted in 2000 by the Louriero family to celebrate their son Ricardo\u2019s First Holy Communion in 1998. </p>\n\n    ",
    url: "assets/images/points-of-interest/23.18a.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "This Memorial Chapel window is also by Barry Thompson. It depicts Champagnat the teacher, and an abbreviation of his saying “to teach children well, you must first love them and love them all equally.”",
    furtherText: "\n    <blockquote>\n<p>&#39;Ordained a priest in 1816, I was assigned to a town in the district of St.-Chamond (Loire). What I saw with my own eyes in that new post, with reference to the education, reminded me of the difficulties I had experienced myself at their age, for lack of teachers.&#39;</p>\n<footer>Champagnat to Queen Marie-Am\u00E9lie, Letters, 59</footer>\n\n</blockquote>\n<p>Champagnat envisioned a brotherhood to tend to the educational and spiritual needs of children. Champagnat also employed a lay teacher at La Valla to support his teaching whilst he trained the two first Brothers. By the time of his death in 1840, only 23 years after the founding of the Marist Brothers, there were 278 Brothers in 48 schools.  In 2015 there were c.3,250 Brothers and c.70,000 lay people/teachers associated with the Marist congregation, as well as c.655,000 children. This window was added to the school Chapel in 2003, funded by a donation, specifically marked for a further Champagnat window. </p>\n\n    ",
    url: "assets/images/points-of-interest/23.27.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "1840, Official portrait of Champagnat by A.V.Ravery, that hangs in the Marist Superior’s Chapel in Rome.",
    furtherText: "\n    <p>Ravery\u2019s portrait (20 x 60 cm) is a likeness of Champagnat, since it was painted immediately after Champagnat\u2019s death from cancer on 6th June 1840 (celebrated as Champagnat Day by the Marist communities). Ravery, who had painted several paintings for the Chapel at L\u2019Hermitage, was called to paint the deceased, who had been washed, dressed in his cassock, stole and surplice, and placed with his profession Cross in his right hand on a sofa in his room. Champagnat, who died well before photography was widely accessible and was not painted in life, considered (as many religious people did previously) that sitting for a portrait was a demonstration of pride or of unnecessary luxury, and as such something to be avoided.  All later portraits and representations of Champagnat, including Ridolfi\u2019s and Goyo\u2019s (see the next slides), are artistic interpretations of this painting, and attempt to portray something of the spiritual legacy that Champagnat created. </p>\n\n    ",
    url: "assets/images/points-of-interest/16.42.jpg",
    reference: "Image: Institute of Marist Brothers (FMS)"
});
poi.addElement({
    type: 1,
    text: "A representation of Tito Ridolfi’s portrait of Marcellin Champagnat that hangs in the Marist Provincial House at Sacred Heart College. ",
    furtherText: "\n    <p>The Beatification of Champagnat was proclaimed by Pope Pius XII on 29 May 1955; from then Champagnat was afforded the title of the &#39;Blessed&#39; Marcellin Champagnat. Artist Tito Ridolfi was commissioned to paint an official portrait of Champagnat for this event, but he lost his sight during work on the piece and as it was unfinished, the portrait was never officially released by the Marist Brothers. The Provincial House portrait is very similar to Ridolfi\u2019s portrait, bar the positioning of Champagnat\u2019s hands and the lighter overall colourings used. In the Chapel, a portrait painted in 1948 by Br Dominguez Garcia at Sacred Heart, combines the hand positioning of Ridolfi\u2019s portrait with the lighter colourings seen in this painting. To celebrate the 1955 event, pupils from Sacred Heart (both Koch Street and Observatory) and from St David\u2019s attended a special Pontifical Mass at City Hall. </p>\n\n    ",
    url: "assets/images/points-of-interest/16.21b.jpg",
    reference: "Image: Caroline Kamana "
});
poi.addElement({
    type: 1,
    text: "Portrait of St Marcellin Benedict Champagnat by Gregorio (Goyo) Dominguez, 1999. ",
    furtherText: "\n    <p>In 1999, Goyo painted this portrait in acrylic on a wood panel measuring 70 x 50cm. Goyo was a Marist pupil from the age of 10, and a later a Brother in Spain. Though he left the institution, he has kept close relations with the Marists. Many of his other paintings that feature Champagnat hang in Marist schools in Spain, and he remains a part of the Marist family in faith and friendship. In the late 1990s, Goyo was asked to create a new portrait of Champagnat to be used for the Canonisation of St Marcellin in 1999. Canonisation changed Champagnat\u2019s appellation, and level of recognition by the Vatican, to Saint Marcellin Champagnat. A large version of Goyo&#39;s portrait, printed on canvas, was displayed in St Peter\u2019s Basilica, Rome, when Champagnat was canonised in 1999. A print of this portrait can be found, amongst other places around the school, hanging in the main school reception hall. </p>\n\n    ",
    url: "assets/images/points-of-interest/36.66.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "One of only two original Chalices given to Marcellin Champagnat during his life. ",
    furtherText: "\n    <p>The Chalice of Marcellin Champagnat is gold and silver plated and measures c. 15 x 30 cms.  It is boxed in its original casing along with Champagnat\u2019s patten and engraved with \u201CCalice du V\u00E9n\u00E9rable P\u00E8re Champagnac [sic]\u201D at the base. Translated: \u2018Chalice of the Venerable Father Champagnat\u2019. Champagnat\u2019s Chalice was brought to South Africa by Rev Br Justinian from the General House in Italy around the time of Champagnat\u2019s Beatification in 1955. Rev Br Justin, a former Principal of Obs, was Assistant General of the Marist Brothers at the time, and arranged for its transportation in time for the dedication of the Memorial Chapel in 1956. Br Jude (former Provincial) suggests that Br Justinian was granted this request because South Africa was the first country where the Marists established schools in outside of Europe.</p>\n<p>This Chalice is mainly used for special occasions at the three Johannesburg Marist schools such as First Holy Communions, Confirmations and at special Masses like those on Champagnat Day in June. On occasion it travels elsewhere in the Province of Southern Africa for similarly significant events. </p>\n\n    ",
    url: "assets/images/points-of-interest/16.10.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The statue of Champagnat, now in the Intermediate quad, was first installed on the traffic island opposite the Main Reception steps.",
    furtherText: "\n    <p>The Champagnat statue, which is life-size, was unveiled and blessed by Fr Barry on Champagnat Day (or Founders Day), 6th June 1961. An identical statue is also to be found at the two other Marist schools in Johannesburg, St David\u2019s, Inanda, and Marian College, Linmeyer.</p>\n<figure><img src=\"assets/images/points-of-interest/16.37.jpg\" alt=\"\">\n\n<figcaption>1980 Sacred Heart College Yearbook, p80</figcaption>\n\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/16.27.jpg",
    reference: "Image: Marist Archive"
});
var sixteen = poi;
//# sourceMappingURL=016.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return seventeen; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("017", "A Medical History", "Hospitals, Matrons and Nurses", -26.172887, 28.075342);
poi.themes = ["Koch Street", "Ethos", "College Characters", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Socio-Political Context"];
poi.addElement({
    type: 1,
    text: "The Red Cross flag and the Tricolour with Sacred Heart flying above Marist Brothers College, Koch Street in c.1900.",
    furtherText: "\n    <p>Marist Brothers College, Koch Street served as a hospital during the South African War. Despite the war going on the school remained open, though its pupil numbers were fairly diminished and classrooms were split between school rooms and hospital wards. The hospital, run by the French Red Cross and serviced by Marist Brothers and Sisters from Holy Family (their Convent was at End Street at the time) treated wounded from both sides of the conflict, both Boer and British. The hospital was given protection under the French Tricolore flag and it was at this time that the name Sacred Heart (Sacr\u00E9 Coeur) was appropriated by the school. The emblem of the Sacr\u00E9 Coeur was floated above the school as a flag to denote its neutrality in the war.  </p>\n\n    ",
    url: "assets/images/points-of-interest/17.18b.jpg",
    reference: "Image: The Star in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Brothers wearing Red Cross armbands in c1900. Brother Frederick is seated in the picture.",
    furtherText: "\n    <p>The Red Cross, established in 1863, is an international organisation that has its headquarters in Geneva. Hence the label given to this photograph. That the school/hospital was under the French arm of the Red Cross is demonstrated by the Tricolour Flag hung on the wall with a picture of the then French President \u00C9mile Loubet and the monogram RF (R\u00E9publique Fran\u00E7aise) displayed beneath.</p>\n\n    ",
    url: "assets/images/points-of-interest/17.07c.jpg",
    reference: "Image: The Star in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "A classroom used as hospital ward with the wounded attended by Brothers and Sisters c.1900.",
    furtherText: "\n    <p>For the duration of the war (1899-1902) the wounded were brought in daily. The French Red Cross made sure that both the school and the hospital benefited from the arrangement \u2013 the Marists were allowed access to precious military rations, a luxury in those times, while the wounded from both sides were treated equally and afforded treatment and respite in comfortable surroundings. </p>\n\n    ",
    url: "assets/images/points-of-interest/17.06b.jpg",
    reference: "Image: The Star in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Matron Allpass attending to a pupil in the Infirmary, 1938.",
    furtherText: "\n    <p>The Infirmary (a consulting room with dispensary) and Sanatorium were situated in the upstairs of the block added in 1932 to the school, and is now part of the Marist Provincial offices. Though these rooms were on the same floor as the senior boarders there was no direct access between the two areas and access was gained by a staircase from the ground floor.</p>\n<p>The school Matron was a nurse-cum-mother figure for the boys who boarded at Sacred Heart. Though she tended to those who were unwell at any time during the school term, her busiest time of the week was on Saturdays during the rugby season. Several matches a day were played and she was on duty throughout to assist any injured boys (including those from visiting schools).</p>\n\n    ",
    url: "assets/images/points-of-interest/17.19.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Sanatorium for boarders in the 1940s.",
    furtherText: "\n    <p>There were ten beds available in the Sanatorium for sick boarders who needed to be separated from the rest of the boys in case they spread infectious diseases, or simply needed rest away from the noise of the dormitories. Matron had her own rooms nearby too; in addition to the Sanatorium and Infirmary she had her own private suite, allowing her to stay over if boarders required night time nursing. </p>\n<p>Today the school nurse\u2019s rooms are located on the lower ground floor under the Primary School reception office. The former Sanatorium and senior dormitories were readapted for classroom and office use.</p>\n\n    ",
    url: "assets/images/points-of-interest/04.12.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Matron Blow was the last Matron at the school, serving for 17 years until the boarders were phased out in the mid 1970s.",
    furtherText: "\n    <p>Matron Blow\u2019s daughter-in-law, Beverly Fulton Blow, ballet teacher (until 2016) at Sacred Heart College for 36 years and prior to that for nearly a decade at the Holy Family Convent in Yeoville, remembers coming to fetch her mother-in-law most Saturdays after the sports fixtures had finished. The Blow family would be treated to tea and cake in the Brothers\u2019 Refectory, now the College coffee shop, before Matron Blow would take some respite from her duties at school. Matron\u2019s time off in the week was from Saturday afternoon until Sunday afternoon, when she had to be back in time for the boarders to return to school from their own weekend exeats. </p>\n<p>Matron Blow\u2019s great-granddaughter, Astrid K\u00FChn, is, in 2017, a matriculant at Sacred Heart College.</p>\n\n    ",
    url: "assets/images/points-of-interest/17.21.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Epaulette worn by School Nurse Peta-Anne Munnik.",
    furtherText: "\n    <p>Under the 1978 Nurses\u2019 Act the epaulettes and badges worn by a registered and practicing nurse are protected. By law they must be worn whilst on duty (with a few specified exceptions). Sister Peta-Anne\u2019s maroon epaulette denotes that she is a Registered General Nurse and the bars underneath signify particular capacities in the following areas: community nursing (yellow), psychiatrics (black) and midwifery (green). The lamp within the blue enameled edged badge, the Badge of the South African Nursing Council, alludes to Florence Nightingale, \u2018the Lady with the Lamp\u2019, who is considered the creator of modern nursing. </p>\n<p>As well as being fully informed of and able to attend to the special medical needs of the learners and staff (for example any existing conditions or allergies that need specific ministrations) Sister Peta-Anne, a  member of staff since 2010, organises staff training for First Aid as part of the Health and Safety Committee and assists support staff to get access to health care. </p>\n\n    ",
    url: "assets/images/points-of-interest/17.11.jpg",
    reference: "Image: Caroline Kamana"
});
var seventeen = poi;
//# sourceMappingURL=017.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eighteen; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("018", "Foundation Quad", "This block of classrooms was added in 1935", -26.17278, 28.075545);
poi.themes = ["Grounds and Buildings", "Learning", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "1935, the “new block”. Now part of the Foundation Quad. ",
    furtherText: "\n    <p>For sometime, the steady increase in the number of students seeking admission into the College had emphasised the need for additional class-rooms and further staff accommodation, so to meet this need, Mr. E. L. Keenor, the architect who had planned the wing added in 1931, designed a two-storey block of twelve classrooms with an exterior that matched the already established College buildings. He was careful to provide in his plans for the latest improvements in acoustics and comfort.</p>\n<p>In addition to the twelve classroom block built under Mr. A Bennett in 1935, a gamesroom, extra lodgings for the support staff, and a bicycle shed with racks for some 170 bicycles, were constructed by Mr. J. E. Morren.</p>\n<p>Two days before the re-opening of the College, which took place that year on the 28th of January, the new buildings were blessed by His Excellency the Rt. Rev. Bishop O&#39;Leary, O.M.I, and dedicated to the Christian education of youth. He was assisted in the ceremony by Rev. Fathers E. Roux, O.M.I., and Abramo, O.M.I, of Yeoville and Kerk Street parishes.</p>\n<p>(text adapted from the 1935 Maristonian p55)</p>\n\n    ",
    url: "assets/images/points-of-interest/18.01c.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The interior of one of the new classrooms added in 1935. ",
    furtherText: "\n    <p>Today these classrooms are used for some of the Junior Primary classes (grades 1 to 3).</p>\n\n    ",
    url: "assets/images/points-of-interest/18.10.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Knights of the Altar in 1963 pictured on the staircase of the ‘new block’ as it was still known thirty years after it opened. ",
    furtherText: "\n    <p>The Knights of the Altar was a society established by Brother Otto whilst posted on mission to a Marist school in China in 1938. Their function was, as a group of boys who were responsible for duties assisting Ministers during Mass, \u201Cto form a worthy guard of honour of our Divine Eucharistic King\u201D. The Knights of the Altar was first established in South Africa at Obs in 1960 and thereafter in other Marist schools in the Republic. Brother Otto is pictured centre in this image, with D. Ball (Supreme Grand Knight) to his left and P. Abraham (Vice-Supreme Grand Knight) to his right.</p>\n\n    ",
    url: "assets/images/points-of-interest/18.11.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Until the addition of a roof over the staircase in 1969 after renovations to the quad, this spot in the College was used for official group photographs. ",
    furtherText: "\n    \n    ",
    url: "assets/images/points-of-interest/18.13.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Today the Primary School children sometimes play with marbles in the Foundation Quad – supposedly only at break times. In earlier days at the College, certainly between the 1940s and 1960s, this area between the Memorial Chapel and where the Science Block now stands was known by the boys as the best place to play. ",
    furtherText: "\n    <p>This photograph, captioned \u201Cvenue for the annual \u2018Marble Season\u2019\u201D was posted on the Sacred Heart/Marist Obs Alumni Facebook page by Howard Thomas, matric in 1963. He took a series of photographs in his final year at the College on a Brownie Box camera, including this one. Howard Thomas is not the only alumnus to recall marbles being a part of school life. Edward Joffe, a pupil in the 1940s, described the following in his memoirs:</p>\n<blockquote>\n<p>\u201CThe marbles site was the driveway between the buildings and the main rugby field. Proximity to the classrooms enabled us to extract every last moment of playing time before the bell summoned us back to lessons. The area was sheltered by pine trees and riddled with small shallow craters used to play holey-holey at which the Portuguese guys were particularly skilled. This game was vaguely reminiscent of billiards without the cue and demanded remarkable dexterity.\u201D   </p>\n<footer>Joffe 2013:89</footer>\n\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/18.25.jpg",
    reference: "Image: Howard Thomas"
});
var eighteen = poi;
//# sourceMappingURL=018.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nineteen; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("019", "Cadets", "From Cadets' Armoury to Computer Centre", -26.172482, 28.075433);
poi.themes = ["Koch Street", "Brothers today at Sacred Heart", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Socio-Political Context"];
poi.addElement({
    type: 1,
    text: "The first Marist Cadet Corps, the 1895 Naval Cadets.",
    furtherText: "\n    <p>The Marist Brothers Cadet Corps was founded in 1895. The Cadet Corps had made their first official appearance at the Rand Agricultural Show of that same year and there attracted the attention of President Paul Kruger. The State decreed them a Naval Brigade, dressed the boys in sailor suits and provided them with Martini-Henry Carbines and Bayonets. The young \u2018middies\u2019, as they were known at that time (\u2018middies\u2019 being an abbreviation of midshipman, another name for a sailor) financed their own ammunition and military training. That they were a Naval Brigade was probably due to the hopes of the Transvaal Republic Government to annex Natal and extend the Republic to become a maritime colony. </p>\n<p>Later, the Corps acted as a bodyguard to President Kruger when he addressed the people of Johannesburg at the Union Grounds (which was also used, alongside the Old Wanderers Grounds, as a sports field and for Cadet drills by the boys at Koch Street). Not long after, during the South African War, the Corps was furnished with dummy rifles and then disbanded after an official mandate was sent from Pretoria by the Republican Government \u201Cin case they prove a menace to the State.\u201D </p>\n\n    ",
    url: "assets/images/points-of-interest/19.82.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1903, Some of the Cadet Corps after its re-grouping post The South African War. ",
    furtherText: "\n    <p>In 1903 the Marist Cadet Corps was reformed and in 1904 they received official recognition from the Government and South African Military. This was in part due to the efforts of many military enthusiasts amongst the Old Boys, who had formed their own association in 1902. The Cadet Corps was gazetted and several officers from the South African Military got involved, all of whom, except Max Langerman, were alumni of Koch Street: Lieutenant-Colonel Max Langerman, Captain G. Hartog, Captain R. Goldberg, Captain G. H. Roy who was Adjutant and thus most senior in rank, Lieutenant F. Ingle, Lieutenant L. Lewison and Lieutenant W. McDonald. They were responsible for the training of the student and staff Officer Body, oversaw drills and displays, and prepared them for competitions. The Corps gained a reputation in particular for producing excellent marksmen, and had their own Reed and Brass Bands</p>\n\n    ",
    url: "assets/images/points-of-interest/19.83.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "An excerpt from the 1905 Koch Street Annual Report.",
    furtherText: "\n    <p>When the Cadet Corps was reformed it was affiliated to the Transvaal Scottish Volunteers and guided by their Captain, George Herbert Roy, an alumnus of Koch Street. In 1906 Captain Roy oversaw the commissioning of several of the Marist Brothers, approved by the then Principal of Koch Street, Brother Callixte. At this time the Koch Street Annual Report to the parent body revealed some of the concerns of the parent body around the Cadet Corps\u2019 existence. The document also relays some of the historical sentiment around the purpose of the Cadets.</p>\n\n    ",
    url: "assets/images/points-of-interest/19.03a1.jpg",
    reference: "Image: Catholic History Bureau"
});
poi.addElement({
    type: 1,
    text: "1935, The Marist Cadet Corps pictured in The Glade winning the Inter-Platoon Shooting Competition at Observatory. The trophy can be seen today in the display cabinet in Habits. ",
    furtherText: "\n    <p>By the 1930s the Cadet Corps had grown so large that the detachment had three full companies; Infantry Troops (the backbone of the Corps), a Platoon of Signaleers (responsible for military communications), and a Platoon trained in Trench Mortar and Bren Gun deployment (specialising in weaponry). The Cadet Band, now a mixed orchestral marching band, was a regularly anticipated feature of school pageants and until fairly recently did the College Band \u2018March On,\u2019 leading participants to swimming galas and athletics meetings.</p>\n<figure><img src=\"assets/images/points-of-interest/19.75b.jpg\" alt=\"\">\n  <figcaption>The Cadet Corps in 1928 (Image: Marist Archive)</figcaption>\n</figure>\n\n\n    ",
    url: "assets/images/points-of-interest/19.78.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Major General F. Theron (front row, centre) inspecting The Marist Cadet Corps at ‘Obs’, 1931. The tall structure behind the trees is the tower above the tunnel that runs between the Main Quad and The Memorial Chapel.",
    furtherText: "\n    <p>Such was the standing of the Marist Cadet Corps that it was regularly invited to perform in official state duties. In 1931 General F. Theron came to inspect the Cadets at Observatory, and this photograph was published in the Rand Daily Mail. Visible is Staff Sergeant Belcher (2nd right in back row), who matriculated from Koch Street in 1924. After school he continued to help the College community, with the Cadets (at Observatory) and coaching cricket (at Koch Street) and it was he who donated this image to Museum Africa.  In 1947, school cadet corps lined Louis Botha Avenue (then the main road in and out of Johannesburg) to stand to attention in honour of King George VI and Queen Elizabeth (and the Princesses, one now Queen Elizabeth II) whose Rolls Royce drove past en route to Pretoria.</p>\n\n    ",
    url: "assets/images/points-of-interest/19.48.jpg",
    reference: "Image: Rand Daily Mail in Museum Africa"
});
poi.addElement({
    type: 1,
    text: "Captain G.H Roy’s sword and scabbard, donated in 1935.",
    furtherText: "\n    <p>In 1935 Captain Roy\u2019s sword was presented to the College Cadet Corps by his sister Edith Pooley along with other Cadet memorabilia such as photo albums of Cadet camps, badges and documents. The sword, embossed with an inscription that reads \u2018Marist Bros Cadet Corps\u2019, is still in the possession of the school. The sword, made of solid silver, wood and leather is about 105 cm in length and has an intricately carved handle depicting the monogram of King Edward VII, the monarch who reorganised the British Forces after the South African War, including the company to which the Marist Cadet Corps was affiliated. This dates the sword to the early 1900s. The blade (81cm) is still protected by its original leather scabbard. </p>\n<figure><img src=\"assets/images/points-of-interest/19.65a.jpg\" alt=\"\">\n  <figcaption>Mrs Pooley donating her late brother, Captain G. H. Roy\u2019s, sword to the school in 1935 (image: Marist Archive) </figcaption>\n</figure>\n\n\n    ",
    url: "assets/images/points-of-interest/19.29b.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "A Cadet Inspection in the 1950s.",
    furtherText: "\n    <p>Tuesdays afternoons were given over to Cadet training \u2013 drills and shooting practice, using live ammunition. The Brothers would change out of their soutanes and into dog-collared military uniforms to assist Sergeants specially employed to run the Cadets. In the summer months the cricket oval was used as the Cadet training ground, with the rugby fields used in the winter. </p>\n<p>The Cadet Corps was compulsory for all boys aged 13 in accordance with the National Defence Act, until Cadets was disbanded at the school in the early 1980s. The disbanding of the Cadets was something of a controversial move by the school, and contributed to the numerous confrontations with government officials at the time over issues such as the school\u2019s rejection of the quota system (whereby the number of black students was meant to be limited in order for the school to retain a government subsidy). By the 1980s, the school administration felt that the presence of Cadets contributed to the military culture prevalent within white society at the time, which was not in keeping with the inclusive ethos that the school was demonstrably pioneering. With authority structures being widely discredited through the political struggle in the country it was decided that bastions of such traditional thinking were not appropriate to the school\u2019s progressive and inclusive ethos, and thus the Cadets and the Prefect system were disbanded. The latter was replaced with a Student Representative Council which involved students as leaders in the school rather than as subject to the whims of individuals and particular power dynamics. </p>\n\n    ",
    url: "assets/images/points-of-interest/19.64.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Marist Brothers Cadet Corps Military Badge c.8x8cm. Donated to Museum Africa in 1953.",
    furtherText: "\n    <p>Until the disbanding of the Cadets there was an Armoury at the school. The Armoury at Obs contained Cadet kit (including uniform, drums, bugles and other band instruments) as well as relics from the South African War and the First and Second World Wars, such as .303 (which no longer worked) and .22 calibre rifles. The school shooting range, paid for by the South African military authorities in the 1920s, was situated in the far corner of the school grounds where the cricket nets are found today. When the Koch Street premises were demolished, used ammunition was found embedded in the walls, left over from when shooting practice took place in the school yard. It would not be impossible to find similar debris buried where cricket balls land in Observatory today. The former Armoury\u2019s cache of weapons has been replaced with a very different kind of battery cluster, as today it is used as the Primary School Computer Centre.</p>\n\n    ",
    url: "assets/images/points-of-interest/19.73.jpg",
    reference: "Image: Museum Africa"
});
poi.addElement({
    type: 1,
    text: "An early Cadet Camp near Nigel, Gauteng in c1905. Note the steam-train in the background.",
    furtherText: "\n    <p>Cadet Camp was also a regular side feature of the Cadet Corps at the College. Though the Cadets were disbanded, the camp experience was maintained for learners from Grade 4 onwards to do team building activities and encourage independence. Camp activities today are a little less rigid than in times gone by. </p>\n<figure><img src=\"assets/images/points-of-interest/19.60.jpg\" alt=\"\">\n  <figcaption>Boys on Cadet Camp in the early 1900s. (Image: Marist Archive) </figcaption>\n</figure>\n\n\n    ",
    url: "assets/images/points-of-interest/19.85.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Primary School Computer Centre in 2013.",
    furtherText: "\n    <p>The College opened its first Computer Centre in 1984 with fifteen Ataris and four IBM PCs for use by its learners \u2013 initially for the Primary School but soon after extended to the High School learners as well. The collection of computers grew as fast as funding would allow; initially, to recoup some of the costs involved, a Computer Club was set up for staff and learners outside of classroom hours \u2013 at a joining fee of R10 per person. Today the Primary School Computer Centre has been updated with flat-screened desktops, and the school is equipped throughout with a wifi network and Apple products (Apple TV, desktops and iPads). All High School learners participate in the BYOD (bring your own device) programme, which grooms workforce-ready students who can collaborate in up-to-the-minute ways and seamlessly transfer their learning outside of the classroom. Learners are introduced to coding, app development and game design as well as the more traditional IT skills.  </p>\n\n    ",
    url: "assets/images/points-of-interest/40.21.jpg",
    reference: "Image: Boxer Ngwenya / The Star"
});
var nineteen = poi;
//# sourceMappingURL=019.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twenty; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("020", "Music", "Musical traditions then and now.", -26.172438, 28.075738);
poi.themes = ["Koch Street", "Alumni", "Grounds and Buildings", "Learning", "Traditions and Innovations"];
poi.addElement({
    type: 1,
    text: "c.1904, Marist Pupils listening to a Phonograph. ",
    furtherText: "\n    <p>The phonograph was invented by Thomas Edison (also the inventor of the lightbulb) in 1877. It was the first machine on which sound could be recorded and reproduced on a prototype \u2018record\u2019. The phonograph evolved to become the gramophone and then the record player \u2013the precursor to cassettes, CDs and downloadable music files. Some DJs however still prefer the sound quality of vinyl or \u2018records\u2019 on which to play their sets. The first of these machines arrived in Johannesburg in the 1890s and the Brothers saw to acquire one for the school.</p>\n<p>In this picture an early phonograph machine is set on the table with several sets of earphones (though these were more like medical stethoscopes!) attached. The Brothers ran a fundraising scheme for the school with the boys paying three-pence each to listen to the recording \u2013 either music or special listings. The Brothers also recorded the names of boys who had attained good results or deserved special mention for particular activities and these names were listed and played during assemblies (for the phonograph could also be played with a horn like attachment which acted as a kind of loudspeaker).</p>\n\n    ",
    url: "assets/images/points-of-interest/20.04a.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Teacher Garvin and his musicians in 1897. ",
    furtherText: "\n    <p>Teacher Garvin was one of the first music teachers employed at the school, along with Mr Hyde who was responsible for the Brass Band. They were among some of the first lay members of staff, since staff were principally Brothers. Many of the boys learnt instruments as part of early extra\u2013mural activities. Singing was regarded as an important skill and was a compulsory subject for all the boys. To accompany the Cadet Corps there was both a Reed Band (woodwind) and a Brass Band.</p>\n\n    ",
    url: "assets/images/points-of-interest/20.06b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "c.1950 Sacred Heart College’s Marching Band. ",
    furtherText: "\n    <p>The Marching Band at Sacred Heart College held a very special position within the school\u2019s history, from the Koch Street days and for many years at Observatory. Starting off as the Marching Band that led Cadet Corps displays, even after the Cadets&#39; dissolution, the band \u2018marched on\u2019, leading learners to athletics meetings and swimming galas. It is because of this tradition that a \u2018march on\u2019 is still how the school progresses to the top fields to take part in the annual inter-house athletics meeting in September, but now music is played through the loudspeaker system rather than accompanied with an actual band.</p>\n\n    ",
    url: "assets/images/points-of-interest/20.12.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Alumnus Vincent Fritelli, aged 14 in 1955. ",
    furtherText: "\n    <p>In addition to class music lessons, many learners take extra lessons in instruments or voice, and are part of musical societies at school. Several alumni, like the pictured Vincent Fritelli, who in the 1955 Maristonian was described as a \u201Cprodigy of the violin\u201D, have gone onto become professional musicians. Fritelli was a member of the Johannesburg Symphony Orchestra and conductor of the Johannesburg Concerto Festival, and is now a Professor of Music at the University of Texas, Austin, USA. </p>\n<p>More recent alumni to have achieved internationally acclaimed status in the music world include jazz musicians Vuma Levin (matric 2005), who credits belonging to the Sacred Heart Choir aged 14 as the catalyst for his career as an international award winning guitarist and composer, and Yamikani Mahaka-Phiri (matric 2009), renowned actor-cum-singer who performs on stage in South Africa and overseas. Levin and Mahaka-Phiri, along with South African music legend Sipho \u2018Hotstix\u2019 Mabuse, parent and grandparent to current pupils at the school, are some of those currently inspiring a thriving music scene for Sacred Heart learners.</p>\n\n    ",
    url: "assets/images/points-of-interest/20.19.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Primary Choir and Orchestra performing in 1998. ",
    furtherText: "\n    <p>The Letebele Music Centre was opened in 2002 by Joseph Letebele and named for the family\u2019s long history with and worthy contributions to the school community. The centre, which was converted from staff accommodation to a music block at the turn of the millenium to a music block contained one large teaching classroom and twelve small rooms for musical tuition and practice. </p>\n<p>Today this space is no longer adequate for the needs of the Sacred Heart learners and funds are currently being raised for a new M.A.D Centre (Music, Arts and Drama Centre), which will allow music and arts to grow and flourish at Sacred Heart. Architectural plans have been drawn up for this new facility on the site of the existing sports kiosk. </p>\n\n    ",
    url: "assets/images/points-of-interest/20.11.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 2,
    text: "Iyon Brew, the Sacred Heart College Marimba Band, performs at Sacred Heart Day, October 2016. ",
    furtherText: "\n    <p>Both the Primary and High Schools have several musical ensembles, including the seniors\u2019 One Heart Choir, String and Woodwind Ensemble, The Sacred Heart Jazz band and a number of Marimba groups (including the featured Iyon Brew). As well as players of more traditional instruments there are a growing number of contemporary musicians and vocalists who refine their skills at school. </p>\n<p>With a burgeoning and reinvigorated music scene at the school it is fitting that The One Heart Music Festival, annual hot ticket during the City of Johannesburg\u2019s Heritage Day celebrations, showcases the combined talents of performers from Sacred Heart and other Marist schools alongside those more well known (both at home and abroad) such as Sipho \u2018Hotstix\u2019 Mabuse, Feya Faku, Judith Sephuma, MiCasa, Lira and Black Coffee. The Festival, which developed out of the Sacred Heart Cultural Festival and School F\u00EAte, raises awareness around xenophobia amidst the celebration of national heritages, with proceeds from tickets going towards funding the Three2Six school and, in recent years, the Field of Flowers (a scholarship fund enabling children from disadvantaged backgrounds to study at Sacred Heart College).</p>\n\n    ",
    url: "https://www.youtube.com/embed/urEOjdDQpL0",
    reference: "Video: Sacred Heart on YouTube.com"
});
poi.addElement({
    type: 2,
    text: "'Thangzz', the Sacred Heart College Jazz Band, performs Gil Scott-Heron's 'Lady Day and John Coltrane' at Jazz on the Lawn 2016, a Cape Town Jazz Festival for high school and professional acts. ",
    furtherText: "\n    <p>The four existing members of the Sacred Heart Jazz Band, Riley Pam-Grant, Paul Stansell, Jeremy Crouch and Howard Su, were joined in 2016 by vocalists Lerato Dieterich, Angel Gwanda and Lethabo Sephuma. During an intense 2016, packed with rehearsals and workshops, Thangzz were finalists in both the &quot;Battle of the Bands&quot; at St Mary&#39;s and the St Andrew&#39;s &quot;Viebz contemporary music&quot; competitions. Thangzz also performed, and wowed, the general public at Jazz on the Lawn in Cape Town (March 2016) and at the One Heart Music Festival in Johannesburg (September 2016). </p>\n\n    ",
    url: "https://www.youtube.com/embed/YjAddE3fzaE",
    reference: "Video: Jozikids on YouTube.com"
});
var twenty = poi;
//# sourceMappingURL=020.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentyone; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("021", "The Swimming Pool", "An unusual shaped pool", -26.17258, 28.075828);
poi.themes = ["Koch Street", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "1906, Marist boys on a picnic and swimming outing. There was no swimming pool at Koch Street. ",
    furtherText: "\n    <p>In the 1929 Maristonian, Gustavus Hartog (Matric of 1894 \u2013 the first year of Matriculants from Koch Street \u2013 who later became a politician and retired as a South African Senator) wrote about swimming with his peers from Koch Street in places like Sans Souci (now Parkview) and Orange Grove, where one could still find streams with waterfalls, in the late 1880s/early1890s. Perhaps this photograph was taken at one of those sites. It is also possible that this photograph was taken at the natural pool under the waterfall in Roodepoort (now the Walter Sisulu Botanical Gardens) or in what is now known Emmarentia Dam for the boys also took excursions by horse and cart to these locations. </p>\n\n    ",
    url: "assets/images/points-of-interest/21.45.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Despite not having a school swimming pool, Koch Street boys still took part in swimming galas. ",
    furtherText: "\n    <p>The boys from Sacred Heart College, Koch Street, used public swimming baths (built in 1890) in Raleigh Street, Yeoville in the summer, and may have used the private Summit Club in Hillbrow during the winter.</p>\n<p>In 1905 an appeal by the then Headmaster, Brother Callixte, was made to parents to consider donating funds to build a swimming pool at Koch Street. This project was never realised.</p>\n\n    ",
    url: "assets/images/points-of-interest/21.09b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The school swimming pool was built to imperial measures – 25 yards in length and 15 yards wide - and opened in 1930.",
    furtherText: "\n    <p>On 4th October 1930, Sir William Dalrymple opened the swimming pool. Brother Jordan (Principal in the 1950s) wrote, in a history of the Marists in South Africa up until 1955, of Dalrymple \u2018addressing the throng\u2019 at the opening of the school pool. Indeed, quite a crowd is shown in this photograph taken at the opening ceremony. Dalrymple, a Randlord, was likely asked to open the pool whilst acting as Chairman of the Council of the University of the Witwatersrand at that time. Dalrymple and his wife, Lady Isobel, were also famed for their hospitality and for having one first privately owned swimming pools at their home in Westcliff. It isn\u2019t recorded in Brother Jordan\u2019s history if there was a further connection around a passion for swimming.</p>\n<p>The view, towards the structure at the back of the pool, is towards the eastern perimeter of the school grounds. The small trees are today lofty pines demarcating the edge of Steyn Street.</p>\n\n    ",
    url: "assets/images/points-of-interest/21.02.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Pool games in the 1940s.",
    furtherText: "\n    <p>A series of nine postcards \u2013 early marketing materials \u2013 were produced for the College in the 1940s. This one shows some pool games, likely taking place during a swimming gala. Not all pool activities involve swimming lengths. Edward Joffe, a school boy here in the 1940s, wrote in his memoires how he and his friends would slip unnoticed over the school walls and climb into the locked pool area with school friends for illicit midnight swims (Joffe 2013:68). In the 1962 Maristonian a boy recounted the tale of a tail in the pool. Another boy, as a prank, had let loose his pet snake in the pool. Thankfully it was retrieved the same day. In the 1980s synchronised swimming was offered as a school sport and today the swimming team still participates in the Midmar Mile, as they have done since the late 1980s.</p>\n\n    ",
    url: "assets/images/points-of-interest/21.21.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The pool gate in 1963, as photographed by then matric, Howard Thomas. ",
    furtherText: "\n    <p>In 1961 the pool was extended and its surrounds upgraded. Tiered seating was added to accommodate over 1,200 spectators. The gate entrance was kept from the original 1930 structure. An L-shaped design was selected for the \u2018new\u2019 pool to incorporate the old imperial measure of 25 yards along one \u2018arm\u2019 of the L and a measure of 25 meters along the other \u2018arm\u2019. Both arms were 15 yards wide. The metric side runs north-to-south and was included to conform to the requirements of Olympic distances. Just a few years before the refurbishment, in 1956, Tony Briscoe (matric 1955) swam for South Africa at the Olympics in Melbourne. In 1997, the grandstand seating at the northern and eastern ends of the pool was demolished. Renovations to these areas had become necessary. Funded by the Development Fund and the PTA, shade-cloth for the new seating areas and a judge\u2019s box were added, along with a sound-system. A second phase of renovations to the pool area, two years later, included the conversion of an adjacent garage into the College Fitness Centre and the addition of the studio space above.  </p>\n<figure><img src=\"assets/images/points-of-interest/21.03.jpg\" alt=\"\">\n  <figcaption>1961, The pool as viewed from the Old Chapel. (Image: Marist Archive)</figcaption>\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/21.75.jpg",
    reference: "Image: Howard Thomas"
});
poi.addElement({
    type: 1,
    text: "In 2010, the National Lottery Distribution Trust Fund awarded Sacred Heart College a sum for pool refurbishments.",
    furtherText: "\n    <p>In 2010 the baby pool was added, shades erected over the spectator stands and the starting blocks remodelled. The pool bottom was mosaicked with the school\u2019s sports emblem, the \u2018Dolphins\u2019 of Sacred Heart College.</p>\n<p>The Inter House Galas remain one of the most looked forward to annual events \u2013 house chants are sung, teams are cheered and costumes worn. Over time swimming costumes changed from non-uniform, to red for everyone (not only Valerian House) during the 1980s/1990s, to today\u2019s Marist blue and gold topped with house-colour swimming caps. Since the Koch street days, swimming galas have always been (as has athletics) accompanied by a fancy-dress parade. This dressing up continues, some years more enthusiastically than others, as a tradition today. The same silver plated trophies awarded today were used in the 1930s. Each year winning house names are engraved around the cup. </p>\n\n    ",
    url: "assets/images/points-of-interest/21.37a.jpg",
    reference: "Image: Sacred Heart College"
});
var twentyone = poi;
//# sourceMappingURL=021.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentytwo; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("022", "The Macartin Centre", "Indoor sports and community space", -26.172722, 28.075867);
poi.themes = ["Koch Street", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "Br Macartin with his some of his awarded medals pictured in the 1973 Maristonian. ",
    furtherText: "\n    <p>Born Christopher Hagan in Ireland in 1889, Br Macartin arrived in South Africa in 1920. He taught at several of the Marist schools in South Africa, including Sacred Heart College at Koch Street, Uitenhage and Pietermaritzburg, and was headmaster of five Marist schools. However, it was at Observatory that he spent most of his teaching career, both in the classroom, on the sports field and with the Cadet Corps. </p>\n<p>Brother Macartin was decorated with several medals, some of which are pictured here. These included one awarded by Queen Elizabeth II for services to education, the King George medal for long and meritorious service as a Cadet Officer, a medal for being the best at Musketry in the British Empire, the African Medal for services on the Home Front during the Second World War and a gold medallion sent by Pope John Paul II when Brother Macartin had served 70 years as a Brother. </p>\n\n    ",
    url: "assets/images/points-of-interest/12.29.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Br Macartin (on left) with J. Collins, a coach visiting from overseas, on the fields at Observatory in 1933. ",
    furtherText: "\n    <p>Brother Macartin, for whom the sports centre is named, was a celebrated teacher and sportsman (soccer and cricket) until an accident slightly lamed him. As a result, he was nicknamed \u201CHoppy\u201D by the boys. When too elderly to coach sports, but before his retirement to Nazareth House, he was to be found polishing and ordering the school sports equipment in \u201CHoppy\u2019s Hole\u201D (now the Alumni and Marketing Office). He was not the only Brother with a zeal for sport but his death, in 1990, was timeous with the construction of the new sports and community centre. </p>\n<p>Brother Macartin could also be considered as one of the pioneers of Marist \u201CObs\u201D. In c.1918 Brother Macartin, taking a Sunday stroll with some of his peers, came across the land at Eckstein Street and remarked it would be a suitable site for the expansion of the school. Since the sports facilities were inadequate at Koch Street, it was the idea of sprawling playing fields that particularly caught Br Macartin\u2019s attention. </p>\n\n    ",
    url: "assets/images/points-of-interest/22.12.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1933, Corpus Christi Procession gathering on the site where the Macartin Centre now stands. In that year there was a crowd of 6,000 people. ",
    furtherText: "\n    <p>During the 1930s and 1940s thousands of Catholics from all over the Johannesburg area congregated at Sacred Heart College in Observatory to celebrate the Feast of Corpus Christi. As is traditional, Corpus Christi (a celebration of the bodily presence of Jesus in the Eucharistic service) is celebrated on the second Sunday after Pentecost, approximately six weeks after Easter. The festival was marked with a procession, Mystery Plays and with the celebration of the Eucharist at several points around the College grounds. One altar for this purpose was set up in the arched entrance to the swimming pool \u2013 seen in this image with the double columns on either side of the archway.     </p>\n<p>This entrance to the swimming pool is still in existence at Sacred Heart College, though its position has since moved and its structure adapted. The building of the Macartin Centre alongside the swimming pool area meant that the entrance to the pool shifted westwards. The same gate from the 1930s has been incorporated into an adapted gateway to the swimming pool today.  </p>\n<p>The Macartin Centre and Memorial Chapel were constructed on the very garden area that held thousands of people at the Corpus Christi Festival. When the Memorial Chapel was built, this area became a landscaped lawn shaded by trees serving as a meditational space.  In 1969, the College Library was added. This is the extension that comes off the cloistered walkway to the Chapel and today contains Foundation Phase classrooms. </p>\n\n    ",
    url: "assets/images/points-of-interest/21.19.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Architect’s impression of the proposed new sports hall in 1984, the year the Development Fund was started.",
    furtherText: "\n    <p>The Brother Macartin Indoor Sports &amp; Community Centre was officially opened on 18th July 1992 by The Right Reverend Reginald Orsmond, Bishop of Johannesburg. The opening of the Macartin Centre was organised by Linda Giuricich (n\u00E9e Woock), who taught PE and Standard 3 for 20 years and was Principal of the Foundation Phase (then located at Yeoville Convent) for six years. Linda also organised the Cultural Festival, which was the forerunner of the current-day Heritage Day Music Festival. Linda Giuricich is the granddaughter of Richard Hurly, after whose farm Hurlyvale in Edenvale is named. Generations of both the Hurly and Giuricich families attended Koch Street, Marist \u2018Obs\u2019 and Yeoville Convent. Richard\u2019s six sons and brother, Henry Hurly, attended Sacred Heart College (at both sites). Of their sons, Richard (junior), was Head Boy and another, Charles, a Springbok soccer player. Ten grandchildren and great-grandchildren followed suit. </p>\n<p>The Giuricich brothers, who were builders, brought soil (dug up when building the Rosebank Mall) to level some of the school playing fields in the 1960s. Linda\u2019s grandmother, Myrtle Hurly, chaired the Ladies\u2019 Committee that raised the funds to build The Memorial Chapel. Linda recalls that her grandfather Richard Hurly received the first Marist Brothers who arrived from Kimberley by ox wagon in 1887, as they stopped at the Hurly dairy farm before continuing to Johannesburg. Today Linda runs Aerials Rhythmic Gymnastics club from the College, based at the school since 1980. Chantal Moonsammy and Nadia Harris, 2006 Springbok gymnasts and Sacred Heart alumni, were her students. Two current learners who train at Aerials represent Gauteng, and alumnus Sara Feldman won South African titles for four consecutive years. </p>\n\n    ",
    url: "assets/images/points-of-interest/22.10.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "2016’s first Academic Mass; the outgoing Matrics lead the incoming Grade 1s up the steps and into the Macartin Centre. ",
    furtherText: "\n    <p>The Macartin Centre is foremost a sports hub but has many other uses in line with its original purposing as a Sports and Community Centre. Three times a year whole school Masses are held in the space as it is the only indoor space large enough to hold the Pre-Primary, Primary, High School and Three2Six School that together make up Sacred Heart College. </p>\n<p>The first term Mass is the Academic Mass, which honours girls and women and acknowledges the role of the Ursuline Sisters in the College\u2019s history. In the second term the Mass is held in memory of St Marcellin Champagnat, and the third term Mass celebrates Sacred Heart Day. A much loved tradition at these Masses is when the school \u2018elders\u2019 \u2013 the matrics \u2013 lead in the Grade 1s, who are just embarking on their school careers. This is a physical reminder of the strength of relations between pupils of all stages and walks of life at Sacred Heart College. On Sacred Heart Day cool drinks and sticky buns are served as a treat to learners, a tradition that goes right back to the Koch Street days. </p>\n\n    ",
    url: "assets/images/points-of-interest/22.20.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "Sacred Heart College Dolphins logo painted as a mural inside the Macartin Centre ",
    furtherText: "\n    <p>This logo, which is the emblem for sports teams at Sacred Heart College, was devised by alumni Paul Swart (matric 1989) during his time at the school. Swart went on to become an architect after his time at Sacred Heart. 1989 was the first year that swimmers from Sacred Heart College swam the Midmar Mile (the world\u2019s largest open water swim that takes place in February each year) coached by Veronica Sandham, then PE teacher, and the swimming team wanted something to put on their team T-shirts to mark this event. The dolphin was suggested by Franco Gilardi (alumnus and later PE teacher) and since the late 1980s has been particularly associated with Sacred Heart College\u2019s swimmers and basketball players (though the emblem represents all school teams). The same logo is to be found on the flooring of the Macartin Centre as well as mosaicked onto the bottom of the swimming pool.  </p>\n\n    ",
    url: "assets/images/points-of-interest/22.13.jpg",
    reference: "Image: Caroline Kamana"
});
var twentytwo = poi;
//# sourceMappingURL=022.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentythree; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("023", "The Memorial Chapel", "The ‘new’ College Chapel completed in 1956", -26.173131, 28.076051);
poi.themes = ["Marist Brothers' History", "Brothers today at Sacred Heart", "Marcellin Champagnat", "Alumni", "Grounds and Buildings"];
poi.addElement({
    type: 1,
    text: "Invitation to the opening blessing of The War Memorial Chapel of the Assumption of Our Lady and Blessed Marcellin Champagnat and Pontifical High Mass in 1956.",
    furtherText: "\n    <p>The Most Reverend Damiano consecrated the new College Chapel on 7th October 1956. An Apostolic Delegate represents the Pope in a country where there are no regular diplomatic relations with the Vatican. A Pontifical High Mass is one celebrated by a Bishop, with additional ceremonies; in this case the consecration of the Chapel. \u2018Most Reverend\u2019 denotes that Damiano was Archbishop (of the then Transvaal). </p>\n<p>The Old Chapel was not officially consecrated (meaning to set apart from this world things for association with the sacred) as a place of worship, rather, it was dedicated. The difference between dedication and consecration is to do with permanence and ownership. Sacred Heart College was built with funds from a mortgage for building works, so the Old Chapel technically didn\u2019t belong to the Marists at the time of the school opening; only once the mortgage had been paid off years later. </p>\n<p>All the funds (\u00A320,000 South African pounds, equivalent to about R750,000 today) for the building, decoration and furnishing of the 1956 Chapel were raised by the Ladies\u2019 Committee over ten years through fairs, sales, dances \u2018and other ingenious schemes\u2019 (according to the 1956 Maristonian). </p>\n\n    ",
    url: "assets/images/points-of-interest/23.05b.jpg",
    reference: "Image: Catholic History Bureau"
});
poi.addElement({
    type: 1,
    text: "Apostolic Delegate, His Excellency The Most Reverend C. J. Damiano, officiating Pontifical High Mass at the consecration of the Memorial Chapel in October 1956.",
    furtherText: "\n    <p>Prior to the opening of the Memorial Chapel the foundation stone was laid and blessed by The Very Reverend Hugh Boyle, Bishop of Johannesburg, in June 1956; fittingly on Champagnat Day. This is commemorated with an engraved stone that can be seen on the outside of the Chapel (front left of the main doors). The Chapel architect was J. W. Van Gemert and the builder J. Brouwers. In accordance with consecration ceremonies, they, along with the extended Marist community seen in this photograph, would have been present in October 1956.  </p>\n<p>In this image the original parquet flooring is visible. Over time this was replaced with tiling because of water damage through a ceiling leak. The ceiling was restored and is today exactly as it looked in 1956. Also visible is a stone Altar rail used to demarcate the more holy area of the Chapel (since removed). The Crucifix above the Altar and the same 36 mahogany pews are still in use today; these cost \u00A3100 and \u00A31260 respectively at the time. The statues to the left and right of the Chancel area, of Mary and Joseph, came from the Old Chapel.</p>\n\n    ",
    url: "assets/images/points-of-interest/23.34c.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Hungarian sculptor and artist, Zoltan Borbereki, creating the Champagnat sculpture that sits above the Altar, in 1956.",
    furtherText: "\n    <p>The Chapel&#39;s full title is <strong>The War Memorial Chapel of the Assumption of Our Lady and Blessed Marcellin Champagnat</strong>. The building serves as a place of reverent remembrance for those (Brothers and alumni) who died in both the First and Second World Wars of the twentieth century. A plaque commemorating the 49 Old Boys who died serving in WW1 was erected in the Hall. A plaque for the 78 Old Boys killed in WW2 (named in the 1944 Maristonian) was proposed but never constructed. </p>\n<p>The Assumption of Our Lady, celebrated on 15th August, is a feast day marking the ascension of Mary to heaven. The Chapel, built only a year after Champagnat\u2019s Beatification, is dedicated to the Blessed Marcellin Champagnat, rather than to \u2018Saint\u2019 Marcellin as he is now venerated. Borbereki, a world-renowned artist, was commissioned specially to create the marble Champagnat sculpture. It was purchased for \u00A3300 (approx. R10,500 today). The Altar, made of German sandstone, contains relics of Champagnat.</p>\n\n    ",
    url: "assets/images/points-of-interest/23.63.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "This window dedicated to the Marists, features representations of Nelson Mandela, Archbishop Hurley and Mahatma Gandhi, who embody virtues of peace and justice. ",
    furtherText: "\n    <p>Archbishop Hurley grew up on Robben Island, as his father was the lighthouse keeper. Twice President of the South African Catholic Bishops\u2019 Council, he was an outspoken and active opponent of apartheid.</p>\n<p>There are twelve stained glass windows in the Chapel. All but one were designed and made by Barry Thompson. Most were added to the Chapel between 2000 and 2004, overseen by the then Primary Principal, Mrs Gorst-Allman. In 1956 the Chapel windows were made of plain glass; the circular windows set high above in the Chancel area remain like this today. The windows were sponsored by individual donors. The Pre-School raised the funds for the window dedicated to St Francis of Assisi. Others were sponsored by families wishing to mark the First Holy Communions of their children. The \u2018Safe in the arms of Jesus\u2019 window is dedicated to beloved teacher Penny Frangiskakis, who died in 2002. The \u2018Let the children come around Me\u2019 window honours Mary Newman, former Primary School secretary.</p>\n\n    ",
    url: "assets/images/points-of-interest/23.25.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Primary school pupils at a Mass to celebrate a visit by Marist Superior General Emili Turú in September 2016. ",
    furtherText: "\n    <p>The Memorial Chapel is not a parish church and as such regular services are not held by the Diocese here. However, during the school week Masses are attended by all High and Primary school pupils, and pupils from Pre-Primary to Matric meet here with Fr Dryden, the school Chaplain. Special services are also held throughout the year, such as the Matric Valedictory. In keeping with the inclusive nature of the school, special Holy Days marked by other faiths are also celebrated in the space, such as Diwali. The Chapel is used for special services outside of school days by alumni and the extended Marist congregation for marriages, memorials and sometimes Ordinations. Performances such as the Pre-Primary nativity are held here as are numerous musical recitals. </p>\n<p>Visible in this image is the original 1956 organ, fitted with over 300 pipes. Despite several visits from specialists who have tried to restore it, it is no longer in working order. A portrait of Champagnat similar to Ridolfi\u2019s can be seen to the left of the organ. Four of the fourteen carved and painted Stations of the Cross can be seen in this picture, originally hung in the Old Chapel. On Good Friday, as every year since the establishment of the school, the Marist Brothers lead a walk through 14 stations of reflection and prayer through the grounds, culminating in the Orchard.</p>\n\n    ",
    url: "assets/images/points-of-interest/23.06.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 2,
    text: "Grade 9 pupil sings in the Chapel, accompanied on the piano by Wayne Purchase, Deputy Principal of the High School and Head of Music. ",
    furtherText: "\n    <p><em>Forever Young</em> by Bob Dylan, covered by a very talented grade 9 vocalist, Angel Gwanda, in 2016. The acoustics in the Chapel are excellent.</p>\n\n    ",
    url: "https://www.youtube.com/embed/Y64HYUToe4Y",
    reference: "Image: Sacred Heart on YouTube.com "
});
var twentythree = poi;
//# sourceMappingURL=023.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentyfour; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("024", "The Science Block", "Our Lady of Observatory and the Science Block", -26.173412, 28.076001);
poi.themes = ["Koch Street", "Brothers today at Sacred Heart", "College Characters", "Alumni", "Grounds and Buildings", "Learning", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "1961, Sodality of Our Lady at Marist ‘Obs’ pictured beneath the statue of Our Lady of Observatory. The Sodality was a society for Catholic boys who wished to grow in faith through dedication to Mary, the Mother of Jesus. As well as prayer meetings and fellowship the society was responsible, through the boys (rather than through religious instruction, Catechism and Mass led by the Brothers), for inspiring Catholic spirit in the College and for charitable works contributing to the wider community.",
    furtherText: "\n    <p>The first Sodality began at Koch Street in the late 1880s and soon split into a junior and senior section due to its popularity amongst the boys. When the Senior boys moved to Observatory in 1926, their Sodality moved too. The full title of the Sodality was The Sodality of the Blessed Virgin, Our Lady of Perpetual Succour. By the 1960s the group had become known more colloquially as The Sodality of Our Lady. With the advent of co-education, the Sodality was disbanded at the College to allow for the creation of more inclusive charitable and/or faith led societies. </p>\n\n    ",
    url: "assets/images/points-of-interest/24.27.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "This statue is known today as Our Lady of Observatory and was the devotional statue of the now disbanded Sodality of Our Lady. The symbolism of the Virgin Mary with a star on her forehead is connected to the iconography in the Catholic tradition of Our Lady of Perpetual Succour.",
    furtherText: "\n    <p>As Our Lady of Perpetual Succour (or \u2018help\u2019), Mary is depicted with a star on her veil or forehead, which links to Mary as The Star of the Sea and to whom faithful sailors prayed for safe passage under her protection. In times gone by sailors used the stars as guidance and for the Sodality, formed in the name of Our Lady, this star would have signified Mary\u2019s guidance in their works. Of course, being a Marist Sodality, the relevance of working in the way of and protection by Mary is of great significance.</p>\n\n    ",
    url: "assets/images/points-of-interest/24.05.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "In 1982, the learner-produced College Newspaper ‘SPLAB’ (no longer in existence), captioned an image of this statue with ‘Our Lady of the Science Lab’. It is not clear whether this label was given due to the statue’s proximity to the Science Labs or if prayers for additional protection during Science experiments were necessary.",
    furtherText: "\n    \n    ",
    url: "assets/images/points-of-interest/24.17b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The College Science Lab in the mid 1940s, known fondly as ‘Brother Raymond’s Lab’.",
    furtherText: "\n    <p>The first College Science Lab was situated where the Primary School reception and Primary School Principal, Mrs Robyn Picas\u2019s, offices are today. In the 1960s, the Science Laboratory moved to the \u2018Manual Training Hall\u2019 (later hugely modified to become the Brothers\u2019 Residence), until then used for nationwide compulsory wood/metalwork classes. Brother Raymond, known by the boys as \u201CCossack\u201D, taught Maths, Science and Latin, and was for some time College Principal and later Marist Provincial. Brother Raymond, who along with Brothers Neil and Rudolph, championed the building of a new science block, died before its completion in 1973. </p>\n\n    ",
    url: "assets/images/points-of-interest/24.22.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Manual Training Hall in c.1960 before it was turned into a Science lab, used until the new Science Block was built in 1973.",
    furtherText: "\n    <p>The Science Laboratory, in its current location at Sacred Heart College, was built in an area known as \u201CThe Glade\u201D adjacent to the College Hall which was covered in pine trees. One of these trees was planted by Councillor Freeman, Principal Rev. Brother Paul and Old Boys\u2019 Association Chairman, Mr. L. Spitz, in 1937 to mark the Coronation of King George VI and Queen Elizabeth. Perhaps this is the pine tree that still stands at the southern end of the Science block; a photograph in the 1937 Maristonian suggests this might be the case.</p>\n<p>Brothers Rudolph and Neil secured funding from Anglo-American to build the new Science Block (and furnish it with top of the range \u2018Leybold\u2019 apparatus from Germany). They both taught Science until 1979 in the new building having layed out its interior structure. In 2012 and again in 2015 further funding was received from the Anglo-American Chairman\u2019s Fund, the Italian Bishops Conference, Brother Neil\u2019s fund and other donors for an upgrade and refurbishment of the Science Block. The upgrade brought Science at the College into the 21st century and was received with delight by teaching staff and learners. </p>\n\n    ",
    url: "assets/images/points-of-interest/12.24.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Front of invitation to the opening of the Science Block in 1973. “Ernie’s Lab” was the Science room at Koch Street.",
    furtherText: "\n    <figure><img src=\"assets/images/points-of-interest/24.12b.jpg\" alt=\"\">\n  <figcaption>Back of Invitation to Science Block opening. (Image: Marist Archive)</figcaption>\n</figure>\n\n\n\n    ",
    url: "assets/images/points-of-interest/24.11b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Frank Hollingworth, staff since 1979, in his Science Block classroom in 1982.",
    furtherText: "\n    <p>Mr. Frank Hollingworth has taught Science at Sacred Heart College for nearly 40 years, having arrived at the school (along with his late wife Barbara who taught History) in 1979. He specialises in Physical Sciences and many of his pupils have gone onto illustrious careers in the Sciences, such as Professor Bruce Watson, matric 1984 (Spectral Theory Expert, Wits University), Dr Ridwan Mia, matric 1993 (award winning plastic surgeon) and Dr David Balchin, matric 2005 (Postdoctoral Fellow at Max Planck Institute of Biochemistry). Until the mid 1980s he coached the 1st XV Rugby and 1st XI Cricket teams and today runs the Sacred Heart College Chess team and clubs. </p>\n<p>As well as his professional interest in Science, Mr. Holly is a keen amateur historian and assisted Brother Martin for years compiling the digital section of the Marist Archive. Teddy, Mr. Holly\u2019s beloved Jack Russell, has accompanied him to College every day since 2008, just as Kelly, his Staffordshire Terrier did for the previous decade. </p>\n\n    ",
    url: "assets/images/points-of-interest/24.16.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "c.2004; Either side of the Tower are two cypress trees planted in the 1950s by the then Principal, Brother Andrew.",
    furtherText: "\n    <p>Brother Andrew, made College Principal two years after his arrival in the country from the Chinese mission, died suddenly in 1964. The palm trees planted here alongside the cypress (and those in front of the College) remain his legacy. Soon after this photograph was taken a learner, conducting her own un-condoned \u2018Science Experiment\u2019 involving an aerosol and matches, accidently set fire to one of the trees, not realising quite how powerful the blast created would be. Colin Northmore, the relatively new College Principal, suggested restorative justice to the culprit (who&#39;d immediately come forward) and a new sapling was bought. Unfortunately, the stump of the burnt tree proved impossible to remove. Shortly after the incident, Mr. Northmore was visited by a group of the learner\u2019s peers in his office. They were so distraught at the loss of the tree, which had burst into flames because of the cypress\u2019 highly flammable resin, that they suggested further punishment was necessary. The aforementioned learner removed graffiti that had become an eye-sore in some College bathrooms and latterly developed a keen interest in gardening.  </p>\n\n    ",
    url: "assets/images/points-of-interest/24.10a.jpg",
    reference: "Image: Marist Archive"
});
var twentyfour = poi;
//# sourceMappingURL=024.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentyfive; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("025", "Sports 'Now'", "Development of some of today's College sports", -26.172484, 28.076364);
poi.themes = ["Koch Street", "Brothers today at Sacred Heart", "Alumni", "Grounds and Buildings", "Traditions and Innovations"];
poi.addElement({
    type: 1,
    text: "1929, Cadet Band leads the “March On” to the sports fields.",
    furtherText: "\n    <p>The tradition of the \u2018March On\u2019 for both Inter-House Athletics and swimming galas goes back to the earliest days at Observatory, as evidenced in this photograph. It most likely came as an \u2018imported\u2019 tradition from Koch Street, when the boys used to \u2018march to\u2019 The Wanderers and Union Grounds to use sports facilities. Pre 1975, the Cadet Band, in full military regalia with mace, drums and bugles, would lead the school in a march to the strains of \u201CMarching to Georgia\u201D and \u201CA hunting we will go\u201D to inter-house events. The band accompaniment came to an end when the Cadets were phased out and a Sousa march was played out from the loudspeakers instead, as is still the case today, along with music of the moment as selected by the matrics of that year. </p>\n<figure><img src=\"assets/images/points-of-interest/27.35.jpg\" alt=\"\">\n  <figcaption>1940s &#39;March On&#39; to Athletics track (Image: Marist Archive)</figcaption>\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/19.72.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Benedict House ‘March On’. Inter-House Athletics, 2015.",
    furtherText: "\n    <p>The \u2018March On\u2019 tradition continues to this day as part of the Inter-House Athletics meet in September. Athletics has always been one of the major sports at the College, with all learners taking part, at whatever level is suited to their ability. Brother Callixte was recognised by the South African Athletics Union for his contribution to the sport in the early 1900s, and was made a life member due to Koch Street producing so many talented athletes, despite having no facilities of their own (when Observatory was built the boys travelled there to use them). Many South African athletes learnt their early skills on this cinder track, which was sprinkled with sawdust so it could be used after rains. Today the track is grass and the College continues to produce athletes who compete nationally. </p>\n\n    ",
    url: "assets/images/points-of-interest/27.20.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Athletics Starting Gun with live ammunition in c1948.",
    furtherText: "\n    <p>The picture above shows an athletics meet from the late 1940s. The smoke from the starting gun is visible. Brother Mario recalls an incident during the 1960s in which Br Andrew, who came from Inanda to prepare for an inter-school swimming gala, was preparing the starting gun for use. Convinced that the selected ammunition was blank, he demonstrated by taking aim at a 44-gallon drum on one of the traffic islands in front of the College, inside which was a garden hose. The hosepipe thereafter became a very long sprinkler system and for safety measures it was decided that the starting gun at swimming galas would be replaced with a whistle. The gun has been retained only for athletics \u2013 and only blanks are kept on site!</p>\n\n    ",
    url: "assets/images/points-of-interest/27.27.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 2,
    text: "War Cry Wednesday – weekly practice, 2016.",
    furtherText: "\n    <p>The College War Cry goes back at least to the 1940s, if not before. The boys imitated what was prevalent in society at the time and war cries were (and are) not unique to Sacred Heart College. However, each school\u2019s war cry is individual. Unfortunately the origins of the wording to Sacred Heart\u2019s are unknown. </p>\n<p>The school\u2019s official war cry is called \u2018Rammy, Rammy, Ramson\u2019:</p>\n<ol>\n<li>Leaders: Rammy, Rammy, Ramson</li>\n<li>Response: Ramson</li>\n<li>Leaders: Rusting Culi Ruli Ra</li>\n<li>Response: Ra Ra Ra</li>\n<li>Leaders: Bulwa Bulwa Wa Wa Wa </li>\n<li>Response: Roger, Roger Rika Ra</li>\n<li>Leaders: Gee Whiz</li>\n<li>Response: Wa Brothers</li>\n<li>Leaders and Responders alternate shouting out letters: O-B-S-E-R-V-A-T-O-R-Y</li>\n</ol>\n\n    ",
    url: "https://www.youtube.com/embed/D2HU5_O3eeM",
    reference: "Video: Sacred Heart on YouTube.com"
});
poi.addElement({
    type: 1,
    text: "Older members of O’Leary House leading their younger house members in war cries. Inter-House Athletics, September 2015.",
    furtherText: "\n    <p>War cries had their origins in military \u2018war cries\u2019 \u2013 in the 1880s British soldiers were noted \nfor having imitated the Usuthu war cries of the Zulu soldiers, which were declarations of war against their opponents. Cultures all over the world and throughout history are renowned for this pre-empt to battle \u2013 from Nordic Vikings to Japanese Samurai. Shouting in a loosely musical form, like yelling, is often a warning of strength or dominance or even a precursor to physical violence. It\u2019s not unique to humans; think of the lion\u2019s roar! </p>\n<p>Of course, the war cry is not a prelude to outbursts of violence at the College \u2013 a war cry in a civilian sense is understood as a cue to rally around a particular cause. The 1999 SRC report stated that a weekly war cry practice was introduced by the \u2018Spirit Committee\u2019 to teach the war cries and promote school spirit, for until the mid 1980s every boy knew the lyrics as it was regularly chanted at rugby matches by the crowd by way of encouragement to the players. In 2011 the LLC coined the practice \u2018War Cry Wednesday\u2019 and the cries can be heard at swimming galas and athletics fixtures, at the end of special assemblies and other spirit raising events today.</p>\n\n    ",
    url: "assets/images/points-of-interest/27.13.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "1941, Brother Emilian (then Principal) bowls the first cricket ball on a school turf wicket in the Transvaal to Mr T.P. Gray, then Mayor of Johannesburg.",
    furtherText: "\n    <p>When the College opened to boys in 1926, several cricket fields were laid out, having been blasted flat and cleared of granite rocks by Brother Henry and his maintenance team. In 1940 the College Cricket Oval was created and turf wickets laid; the existing Kikuyu grass was removed and Magennis grass was planted. In 1941 the Oval was opened in the presence of the Mayor, Lady Mayoress, several City Councillors and a number of Old Boys, (including Springbok cricketers Syd Curnow and C.N. Frank). </p>\n\n    ",
    url: "assets/images/points-of-interest/25.04b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Jimmy Sinclair (1876-1913), alumnus of Koch Street, is hailed as having put South African cricket ‘on the map’, having scored South Africa’s first three Test centuries. He was the first person, globally, to have scored a century and take five wickets in an innings in the same Test. Sinclair also represented South Africa in soccer and rugby.",
    furtherText: "\n    <p>Cricket remains a core summer sport at the College, with many more recent alumni playing at District and Gauteng levels, several having been invited to trial for national level teams.</p>\n\n    ",
    url: "assets/images/points-of-interest/25.10.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Marist Brothers AFC Transvaal League C Team, 1903.",
    furtherText: "\n    <p>The Transvaal Football Association (FA) was formed in 1889, and not only did the boys at Koch Street play soccer at school as their main winter sport but, together with the Old Boys they formed their own A.F.C (Association Football Club), which played league matches within the Transvaal FA. Marist Brothers (and there was an equivalent Marist team in the Western Province) dominated the league until the 1960s and the advent of professional soccer. In 1955, Marist Brothers (in the Transvaal FA) won 19 trophies, including every league championship title in the province from Under 14 to the senior Transvaal League \u2013 an all-time record. As of 1974 10% of Springbok soccer players were Old Boys from Marist schools in South Africa. </p>\n<p>Sacred Heart College at Koch Street and then at Observatory was renowned for its soccer teams and its reputation as a leader in the sport. The early impetus for soccer likely came from Scottish immigrants to South Africa, who, influenced by Brother Walfrid, an Irish Marist Brother who founded the famous Celtic Football Club in Glasgow as a poverty outreach project in the 1880s, sought Marist schools for their soccer playing sons. Indeed, the Brothers, though many enjoyed the sport of rugby and taught it, were known for their preference for soccer as a socially unifying and accessible game. </p>\n\n    ",
    url: "assets/images/points-of-interest/02.134.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Excerpt from an article in The Star titled 'Rise of Marist Brothers in Johannesburg', published on the eve of Koch Street's 50th anniversary in 1939. ",
    furtherText: "\n    <p>For fifty years, soccer was relegated by rugby to a secondary sport at Sacred Heart College. From the 1980s it regained popularity amongst the boys, perhaps due to its following amongst the newly admitted black students for whom soccer had always been a major game, and in 1982 the school officially recognised a senior team who represented the College against other schools in matches. Today there are both girls\u2019 and boys\u2019 soccer teams. </p>\n<p>The 1934 Maristonian noted the move to rugby with the following words::</p>\n<blockquote>\n<p>\u201CKing Soccer&#39;s long reign at the College has come to an end, and this may be well termed its obituary notice. Its term of sovereignty has been a long and an honourable one, and has left an indelible mark upon the history of the game in the Transvaal and in South Africa. Some of the most famous players who have represented this country have received their first coaching while at the School, among these perhaps the best known being Jock Ritchie, Freddie Mitchell and the Lowe brothers. Its passing will be regretted by many who almost regard the Marist Brothers&#39; College and Soccer as inseparable, but factors beyond the control of the Brothers have made the change to rugby unavoidable. The latter has, however, been set a standard to reach and a tradition to equal.\u201D</p>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/02.86c1.jpg",
    reference: "Image: The Star in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Micky Lill, Sports teacher at Sacred Heart College from 1977-2000, and after whom the Fitness Centre is named, scores a hat-trick for Premier League Wolverhampton Wanderers against West Bromwich Albion in 1958.",
    furtherText: "\n    <p>Soccer\u2019s resurgence in popularity coincided with the teaching career of Micky Lill at Sacred Heart College. Lill had played in the English Premier League (Wolverhampton Wanderers (Wolves), West Ham, Everton and England Under 23), but had been forced to abandon a further professional career due to injury \u2013 which led him to coaching, and to South Africa. By 1986 the sport had fostered enough enthusiasm amongst both the boys and staff (though to the horror of many Old Boys) that it came to replace rugby as the main winter sport, and the 1st XV rugby pitch (behind the Science Block) was returned to its originally designated usage as a soccer field. The soccer teams received the benefit of coaching by retired professional Lill. Today this field is known, as it has been for the last thirty years, as \u201COld Trafford\u201D, its goalposts made in the school workshop by Joseph Letebele. Soccer remains the main winter boys\u2019 sport today and Sacred Heart College continues to produce excellent players who compete at District and Provincial levels. A number of alumni have played or are playing in professional leagues. Waseem Jadean (Matric 2014), former Kaizer Chiefs Academy member, is a professional soccer player in Malta for FC Gujdha. Emmanuel Ndlovu (Matric 2015), a former Black Aces Academy player, is part of a Greek professional club. Obert Rukato and Bogosi Morojele (2015 Matrics) play for Corinthians FC in the SAB Ekhuruleni League.</p>\n\n    ",
    url: "assets/images/points-of-interest/25.25.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Alumnus Chantal Moonsammy, Springbok Gymnast, Commonwealth Games 2006 (aged 14).",
    furtherText: "\n    <p>Sacred Heart College provides a wide range of sports within the school timetable and gives access via extra-curricular coaching to additional sports. These include gymnastics (through Aerials Rhythmic Gymnastics Club, run by Linda Giuricich at the school for 36 years, and continuing still), ballet (previously through the Beverly Fulton Blow School of Ballet until the retirement of Beverly Fulton Blow in 2016 after 36 years at the College, and today through the Michele Le Roux School of Ballet) and karate (the Kyokushin School with Steve Helm). </p>\n<figure><img src=\"assets/images/points-of-interest/30.16.jpg\" alt=\"\">\n  <figcaption>Sugar Plum Fairies in the 1974 Production.(Image: Marist Archive)</figcaption>\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/34.64.jpg",
    reference: "Image: Sacred Heart College"
});
var twentyfive = poi;
//# sourceMappingURL=025.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentysix; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("026", "Uniform", "School uniform and badges over 128 years (to 2017)", -26.172251, 28.076247);
poi.themes = ["Koch Street", "College Characters", "Alumni", "Traditions and Innovations"];
poi.addElement({
    type: 1,
    text: "1912, Br Leudomire and his class (form 4) at Sacred Heart College at Koch Street. There was no set uniform. Boys were asked to dress as similarly as possible.",
    furtherText: "\n    <p>The Brothers however always wore \u2018uniform\u2019 when performing their duties at school. Their black soutanes (robes) with white starched split rectangular collars earned them the nickname \u201Ccrows\u201D amongst the boys both at Koch Street and at Observatory. </p>\n<p>The first official and compulsory uniforms were introduced at the former Marist school in Pietermaritzburg (then Maritzburg) in 1927 by then Principal Br Paul-Camille. This consisted of a blue blazer with a braid of alternate sections of blue and gold around the edges of the lapel, pockets and cuffs. Br Paul-Camille, who had been stationed at the Cala Marist Brothers College in then Tembuland in the early 1900s, possibly took the idea from the blue and gold uniform worn by cadets there at the time. The earliest evidence of the blue and gold combination as \u201CMarist\u201D in South Africa is in the 1903 edition of the Marist College Uitenhage magazine called \u201CBlue &amp; Gold\u201D. As the Uitenhage college was the fifth Marist school to open in South Africa, it is likely that these colours had already been adopted at the earlier schools in Cape Town and Port Elizabeth, but no documentation exists to confirm this. Br Paul-Camille became Principal at Sacred Heart (Observatory) in 1935.   </p>\n\n    ",
    url: "assets/images/points-of-interest/02.180.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Advert from the 1938 Maristonian.",
    furtherText: "\n    <p>In 1933, the striped blazer replaced a plain blue blazer with a blue and gold edging after the Provincial Council of South African Marists\u2019 resolution:</p>\n<blockquote>\n<p>\u201CThe uniform of all Marist schools in the country must include a light navy-blue blazer of Venetian cloth with pairs of gold-yellow stripes an eighth inch wide and an eight inch apart, at a distance of 1 \u00BD inch between each pair.\u201D</p>\n</blockquote>\n<p>The Marist Centenary Digest (1967) explains the blue and gold combination:</p>\n<blockquote>\n<p>\u201CSome claim that the colours were brought to South Africa from St Joseph\u2019s College at Dumfries in Scotland. Others say that the blue was chosen for Marist (blue for Our Lady) and the gold from the white and gold of the Papal colours\u2026 that blue is the colour of the heavens which bids us cherish the highest ideals; and that gold represents the sterling qualities of character which the Brothers endeavour to instil in their pupils.\u201D</p>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/36.40.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The first badge used on Sacred Heart College blazers.",
    furtherText: "\n    <p>M.B.C stood for Marist Brothers College and was emblazoned below the badge with the Marist monogram AM at Sacred Heart Colleges at Koch Street and at Observatory. The monogram consists of the letters A and M intertwined representing the Marist\u2019s motto Ad Jesum per Mariam (To Jesus through the way of Mary). AM as a Catholic monogram (usually standing for Ave Maria \u2013 praise/hail Mary) is not unique to the Marist Brothers but AM in this distinctive yellow and blue script is internationally associated with the Marist family.</p>\n<p>This blazer crest, with M.B.J, is still used on \u2018ordinary\u2019 blazers (as opposed to Honours blazers) at St David\u2019s College, Inanda and at Marian College, Linmeyer. Blazer badges in the past were not necessarily the same as that of the school badges or crests; today, however, the College crest is the one that appears on the blazer badge. </p>\n\n    ",
    url: "assets/images/points-of-interest/36.11.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "1926, a new crest for Sacred Heart College, Observatory.",
    furtherText: "\n    <p>This badge shown was used on Honours blazers only (with varying blues and widths of stripes used until the 1980s) and was used only until the 1960s. After that it was used as a blazer badge for \u2018ordinary\u2019 school blazers in the 1970s. Today plain blue blazers recognise outstanding academic, sports and cultural achievement as well as community service. In order to get a blue blazer, High School learners first have to be awarded a gold badge and then a scroll. LLC Presidents wear plain blue blazers with a gold piping (rather like the first school blazers).  The badge shown has three gold stampers in the top right segment, similar to the crest of the City of Johannesburg and an allusion to the location of the College being in the mining town. The left-hand symbol is the lamp of learning and below it is the AM monogram. The reason for the addition of the green and red was perhaps was a way to include the two other school house colours not represented by the blue and gold already in the crest. The school motto \u2018In Meliora Contende\u2019, meaning \u2018strive for better things\u2019, is embroidered at the bottom of the badge.</p>\n\n    ",
    url: "assets/images/points-of-interest/36.24.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The Sacred Heart College badge designed in 1980 when the school became co-educational.",
    furtherText: "\n    <p>This badge was designed by Sister Mara O.S.U. who was Deputy Principal of the Junior Primary school at the time. It combined symbols from the three schools that joined together in 1980. These three schools were Sacred Heart College Observatory, Holy Family Convent, Yeoville and St. Angela\u2019s Convent, Bezuidenhout Valley. The AM monogram for Sacred Heart College (or Marist Obs) is preserved in the badge. The Holy Family Convent (which continued to house the Sacred Heart nursery school until the 1990s) shamrock, representing the Holy Family (Jesus, Mary and Joseph), is found at the bottom right. The seven stars in the Ursuline badge (for St Angela\u2019s Convent was run by the Ursuline Order) are arranged in the constellation of Ursula Minor. In this badge the seven stars are rearranged and attached to the Cross, the symbol of Christianity, which bound all three schools together. The Cross was represented with a crook at the top. A crook is used by both Bishops and shepherds \u2013  for both it is a tool that speaks to the care and management of a flock. </p>\n\n    ",
    url: "assets/images/points-of-interest/36.55.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1980, Standard 2 class wearing a selection of different blazer badges. Ms Field, their class teacher, remains a member of the teaching staff at the College today having started at the school in 1978.",
    furtherText: "\n    <p>Both the Primary and High Schools were permitted to wear a mix of blazer badges until the mid 1980s in the years immediately after the amalgamation of schools. In this image you can make out at least three (the old and new badge at Sacred Heart, and the Ursuline badge). The dresses worn by the girls were also a mix of styles \u2013 today\u2019s \u2018banana dress\u2019 is an adaptation of the dress that came from Holy Family, Yeoville (seen on the girl on far left). Another style of dress, a pinafore with collarless shirt underneath, from St Angela\u2019s, was also worn (seen on the girl in far right of picture).</p>\n<p>In 1986 the College proposed a two section High School with either Afrikaans or English offered as the medium of instruction (rather than only English). In addition, Sotho, French, Portuguese and Italian were offered as second languages. Though the whole school (Nursery, Primary and High School) was to retain the name Sacred Heart College, the High School was renamed Observatory College/Kollege. Both instruction medium groups were combined for sporting and cultural activities but split for Languages, Mathematics, Physical and Social Sciences. This dual first language programme lasted only a couple of years.       </p>\n\n    ",
    url: "assets/images/points-of-interest/36.50c.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Sacred Heart College blazer and school badge in 2017. ",
    furtherText: "\n    <p>This badge, created in 1985 by Kobus Esterhuizen, symbolised the Afrikaans/English initiative, but has lasted for at least thirty years longer than the initial reason for its design. The Cross with crook is set within a Huguenot Cross to signify the union of both the Catholic and Reformed theological traditions within the mediums of instruction to be offered. The Alpha and Omega, the first and last letters of the Greek alphabet, used together signify wholeness, and were incorporated to symbolise the diverse (religious, racial and cultural) and co-educational nature of the school. The hearts in the centre are the three petals of the Holy Family shamrock and a fourth for the Sacred Heart of Jesus. The stars from the Ursuline badge (only five can be seen, the other two are artistically \u2018hidden\u2019 behind the logo) are those of the constellation Ursula Minor (or little bear), which points to the Pole star, traditionally the star towards which one looks to for direction. As such, the badge speaks to more than just the dual language programme that it was created around, but commemorates the union of three schools and celebrates the diverse and inclusive nature of the College community.</p>\n\n    ",
    url: "assets/images/points-of-interest/36.12.jpg",
    reference: "Image: Caroline Kamana"
});
var twentysix = poi;
//# sourceMappingURL=026.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentyseven; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("027", "Sports 'Then'", "Some of the sports no longer played at the College", -26.17333, 28.076271);
poi.themes = ["Koch Street", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Socio-Political Context"];
poi.addElement({
    type: 1,
    text: "1940s; Plane Tree Avenue (the horizontal row of trees in centre of picture) is still very young.",
    furtherText: "\n    <p>The open veld of Observatory provided the Brothers with the opportunity to not only build a new school but to create expansive playing fields for sports that would have been impossible in the residential suburb of Doornfontein. The purchase of 32 acres on Observatory Ridge meant that the sporting reputation of Sacred Heart College, Koch Street could be maintained and, as history proved, built upon. An article in The Star published in 1965 described the Koch Street school as \u201Ca famous sporting nursery\u201D and a \u201Csoccer stronghold\u2026[that]\u2026 over the years, athletes, cricketers, rugby internationals and tennis players owed both their own greatness, and the splendour they gave to South African sport, to their training at Marists.\u201D</p>\n<p>The top field was levelled during the late 1920s as it was a rocky waste land. During the 1960s, the fields were given their two-tiered layout. Soil, excavated from Rosebank while building the Mall, was used to raise the topmost fields and thereby create a sunken cricket oval. </p>\n<p>Several sports have fallen out of the curriculum at the College over the years, for a variety of different reasons, and other sports have been added as time goes on. </p>\n\n    ",
    url: "assets/images/points-of-interest/25.19.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1958, Boxing at Sacred Heart College.",
    furtherText: "\n    <p>Boxing was a very popular sport until the late 1950s. A ring, donated in the 1930s by the S.A.N.A.B.A (South African National Amateur Boxing Association), was set up in the Hall for practices and for years Sacred Heart College was the only school in Johannesburg with an actual ring. The boys took part in tournaments against pugilists from other schools and against each other \u2013 from the mid 1940s the Boarders vs. Day Boys boxing tournament was an annual calendar highlight. The boxing ring was even set up in the Main Quad for the annual school championships since the sport was popular with spectators, and the crowd drawn to the event was too large to fit in the Hall. </p>\n\n    ",
    url: "assets/images/points-of-interest/25.23.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1947, Boxing Programme. Marist 'Obs' vs. Athlone Boys.",
    furtherText: "\n    <p>The lightweight school Boxers were known as the College Midgets with the Mighty Midgets (or Marist Midgets) the title going to the Senior or Heavyweight boys. The College boxing trainer and manager for several decades was Jack O\u2019Malley. Des Williams, who represented South Africa in the 1948 Olympic Games as a flyweight, was one of O\u2019Malley\u2019s first trainees. Indeed, the 1965 Maristonian lists eight alumni as having represented the country in boxing with one (J. Watson) becoming South African Boxing coach. Stan Silcock also learnt boxing under Jack O\u2019Malley and later became Headmaster of Marian College, Linmeyer. </p>\n\n    ",
    url: "assets/images/points-of-interest/27.21.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1983 1st XV scrum on pitch in front of Science Block.",
    furtherText: "\n    <p>Rugby was played at Koch Street until a few years before WW1. A Koch Street team won the 1899 Transvaal Rugby Junior Cup, captained by Woodburn MacCowat (who later played for Scotland), against Pirates. Then the boys played Rugby League code (13 players per team). But the Brothers College chose to concentrate on soccer so rugby was \u2018discontinued\u2019. Writing in the 1912 Maristonian, Clarence Becker (a Koch Street alumnus), later national selector for the S.A Rugby Association, took the Brothers to task for having &quot;cold-shouldered&quot; rugby. Brother Valerian, then Principal, explained that &quot; rugger will always be a risky game . . . There is no gainsaying that rugger is a grand game . . . but where small and big boys are so mixed up in the classes . . . we cannot be convinced that rugger is a better game for growing lads than soccer . . .\u201D </p>\n<p>Rugby was reintroduced to Sacred Heart College in 1934 as the official winter sport, in line with the Transvaal schools\u2019 sports policy. The Transvaal Rugby Union grassed the old soccer pitches and the school adopted the Rugby Union code (playing with 15 players). The boys were coached by professionals and the Brothers. In 1949 the New Zealand All Blacks (whose team had nine Marist Old Boys) visited the College and presented the 1st XV with an inscribed ball. More than the equivalent of a whole rugby team of Springbok players were introduced to the sport at Sacred Heart, including Syd Nomis, who until 2001 held the record for most consecutive games (25) played for the Springboks.</p>\n\n    ",
    url: "assets/images/points-of-interest/27.32.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1981 1st XV Rugby Team. Jeffrey Ho, front row second from right.",
    furtherText: "\n    <p>Rugby was popular with the boys and an important feature of College life for years \u2013 games drew large crowds with major opponents being St. David\u2019s Inanda, Jeppe Boys\u2019 High School, Parktown Boys and K.E.S. However, no match was more popular than the annual Boarders v. Day Boys fixture (providing the boys with an opportunity to create their own traditions, e.g. junior boys rolling out red carpets for the senior players), which set the tone of the spirit of the school at the time. Brother Mario remembers the rugby games in the \u201860s and \u201870s being more like clashes than matches and the War Cry being belted out with more than just volume. </p>\n<p>Rugby was played at the school until 1986, when the sport was re-replaced by soccer. There were several reasons for this; the admission of black students in the 1970s embodied the College\u2019s distancing from the apartheid government\u2019s elitist policies; for many, rugby symbolised these colonial hangovers. With the school now co-educational, the hubristic and \u2018putting-on-a-pedestal\u2019 tendencies that the sport engendered were no longer appropriate. Many of the boys at the school were also inspired to play soccer by teacher Mickey Lill, a former English Premier League player. The tragic death of alumnus Jeffrey Ho on the field, playing for an Old Boys\u2019 team in 1984, hastened the end of rugby, though this had been coming for some years. A plaque dedicated to the memory of Jeffrey Ho can be found set into the wall by the steps that lead up to the former rugby pitches (now the First Soccer field), directly east of the Science Block.</p>\n\n    ",
    url: "assets/images/points-of-interest/27.31.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Sacred Heart College Fencers in 1955.",
    furtherText: "\n    <p>Many curriculum and club sports have been and gone at Sacred Heart College. Reasons for this include differing levels of interest at different times by the boys \u2013 sports can go in and out of \u2018fashion\u2019 and specialist teachers come and go. Fencing, judo and baseball are examples of this tendency. Better known for its rugby club today, Pirates started a baseball league when many Americans arrived to join the mining camps in the late 1880s. In the 1950s it was baseball that carried the Pirates\u2019 reputation around South Africa \u2013 not rugby. Sacred Heart College had its own team that participated in its tournaments. </p>\n<figure><img src=\"assets/images/points-of-interest/25.07.jpg\" alt=\"\">\n  <figcaption>(Image: Sacred Heart College)</figcaption>\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/25.22.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "PT (Physical Training) for Junior boys (at Koch Street). PT, fitness drills, was the forerunner to PE (Physical Education) later introduced at Sacred Heart College (at Koch Street and Observatory).",
    furtherText: "\n    <p>Physical Training (and Physical Education today) at Sacred Heart College contributed to the fitness and skill sets of those who entered sporting careers outside of school hours. Many alumni have gone on to represent South Africa in their own particular field. These sports include Judo, golf, billiards, shooting, body building, equestrian eventing, weightlifting, wrestling, gymnastics and softball.</p>\n\n    ",
    url: "assets/images/points-of-interest/30.10.jpg",
    reference: "Image: Rory Birkby Photography in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Silver medal presented to A.Tully in 1900 for 3rd Place in Athletics (100yds). Left-hand image shows the front of the medal, the right-hand image is the back.",
    furtherText: "\n    <p>This silver medal, which measures about 4cm x 4 cm, was awarded to A. Tully in 1900. It was \ndonated by Alec Kaplan and Son (Pty) Ltd to Museum Africa in 1979. Not only have sports themselves evolved over the years at Sacred Heart College, so too have the individual awards. Today, a 3rd place in the 100 meters would be awarded a certificate and ribbon.</p>\n\n    ",
    url: "assets/images/points-of-interest/02.170_171_combined.jpg",
    reference: "Images: Museum Africa"
});
poi.addElement({
    type: 1,
    text: "The East London publication, Daily Dispatch (May 1973), recounts the tale of a Marist medal awarded in 1895 to Roydon O’Grady, school athletics champion, highlighting both the sentimental and monetary value of such pieces.",
    furtherText: "\n    \n    ",
    url: "assets/images/points-of-interest/02.83.jpg",
    reference: "Image: Daily Dispatch in Marist Archive"
});
var twentyseven = poi;
//# sourceMappingURL=027.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentyeight; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("028", "Co-education and Sacred Heart College", "Marists, Holy Family Sisters and Ursuline Sisters combine", -26.173112, 28.07586);
poi.themes = ["Koch Street", "Brothers today at Sacred Heart", "Ethos", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Socio-Political Context"];
poi.addElement({
    type: 1,
    text: "The school crests of the three schools that amalgamated in 1980 to form Sacred Heart College. From top: Holy Family Convent, St Angela’s Convent and Marist Brothers’ Observatory. ",
    furtherText: "\n    <p>In 1980, when three Catholic educational foundations came together into one school, the school known colloquially as Marist Brothers\u2019 Observatory reverted to its religious name, \u2018Sacred Heart College\u2019, which dated back to the late 1920s, but was rarely used.</p>\n<p>The symbolism present in the three schools\u2019 individual crests was incorporated into a new school badge and crest for Sacred Heart College. The stars from the Ursulines, the trefoil from the Holy Family and the Marist colours were combined into one badge. A more detailed account of the amalgamation of the three school crests can be read about in the slides that relate to the school\u2019s uniform.  </p>\n\n    ",
    url: "assets/images/points-of-interest/28.79.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "‘Oh brother! It’s girls, girls and more girls!’ Rand Daily Mail 12.01.1980",
    furtherText: "\n    <p>This article from the Rand Daily Mail gives some of the student perspectives on the merging of the three schools. Learners from both the Ursuline and Holy Family Convents, as well as many Sisters and their lay staff, came to Sacred Heart. </p>\n<p>Brother Neil McGurk explained that the decision to become co-educational was not only a practical solution for the female pupils when the two Convent schools decided to close. It brought together the already intertwined educational heritages of the three congregations, but it also hinged around something deeper:</p>\n<blockquote>\n<p>\u201CFor many of us the cultural context of the emerging South Africa required transforming the male hubris of the all-boys school, which had dominated much of the sporting and cultural activities of Sacred Heart College in the past. However, it was not a popular decision at the time with those traditionalists who had epitomised a good education for boys with such a hubris, which seemed to be required for success in the corridors of power in society. The girls did not disappoint. They brought a new human quality to the College\u2019s social, cultural and spiritual life, and quickly rising to leadership roles, they assisted in re-defining the nature of those roles.\u201D</p>\n<footer>Brother Neil McGurk, 2015</footer>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/28.82b.jpg",
    reference: "Image: Rand Daily Mail in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The farm in Kensington that belonged to the Ursuline Sisters, and where St. Angela’s Convent was established in 1914. ",
    furtherText: "\n    <p>Founded by St Angela de Merici in the 1500s, The Ursuline Order of Sisters began as a group of women called to teach girls. This was long before formal education of girls was accepted as the norm. At first, the women lived with their own families but, as their mission became more focused on structured education and the provision of schools, it was decided that they would live together in religious communities where teaching could be done alongside communal prayer. Angela Merici chose St Ursula as the patron saint for the order as she prayed before an image of St Ursula in the church of San Francesco, Brescia (Italy). The first community was established at Brescia. Angela was deeply influenced by the legends surrounding Princess Ursula, a young woman whose faith in God was stronger than death, and who was martyred in the 3rd century along with a group of pious women. </p>\n<p>A group of Dutch and British Ursuline Sisters arrived in South Africa in 1895 and settled in Barberton. By 1889 this town had collapsed as a mining centre. The Ursuline Sisters came to Johannesburg and took over a school in Braamfontein first established by the Holy Family Sisters; an early joint mission between congregations that were to reunite within Sacred Heart College one hundred years later. The Braamfontein school closed in 1907 and the Sisters transferred to Krugersdorp (later moving to Roodepoort and selling their site to the La Salle Brothers). Not long after their school was established in Krugersdorp they turned their farm land in Bezuidenhout Valley into the Convent School of St. Angela\u2019s, which existed from 1914 until its merger with Sacred Heart in 1980. Another Ursuline school, Brescia House, was established in Bryanston in the 1960s, and still exists today. </p>\n\n    ",
    url: "assets/images/points-of-interest/28.80.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Some of the first pupils to be registered at Holy Family Convent, End Street. C.October 1887 - December 1889. ",
    furtherText: "\n    <p>The Holy Family of Bordeaux is a Catholic congregation formed by Pierre-Beinvenu de Noailles in 1820. Three young girls came to the newly ordained priest for spiritual direction, inspiring him to establish a sisterhood inspired by imitation of the Holy Family (Mary, Joseph and Jesus) and devotion to the three-in-one Christian concept of the God as a Trinity (Father, Son and Holy Spirit). The Sisterhood was to go on to have several branches, each with a special focus such as nursing, teaching and Christian mission.  </p>\n<p>Holy Family Sisters were invited to Johannesburg by Fr Monginoux O.M.I. (who also invited the Marist Brothers to the city). They arrived in 1887 and established a convent school at End Street in Doornfontein, at the junction of Fox and Smal Streets. End Street was so named because at that time, in the 1880s, it formed the far eastern boundary of the city; the east \u2018end\u2019 of Johannesburg, with Fordsburg being the furthest settlement to the west. The Doornfontein area was entirely residential at the time. Boys from the Holy Family Convent were some of the first pupils to move over to the newly established boys\u2019 school, Marist Brothers College at Koch Street, in 1889. Perhaps some of the boys in this picture were amongst those to attend Koch Street. </p>\n<p>The Holy Family Sisters, from their beginnings in Johannesburg in the 1880s, flourished and set up several convent schools in the city. By the 1960s they had 100 Sisters, split between convents in Yeoville, Kensington, Victory Park, Parktown and Coronationville, and a further 140 Sisters in the rest of South Africa. The Holy Family Schools in Parktown and Coronationville remain today.  </p>\n\n    ",
    url: "assets/images/points-of-interest/28.25b.jpg",
    reference: "Image: Catholic History Bureau"
});
poi.addElement({
    type: 1,
    text: "1906, Eucharistic procession at End Street Convent with girls from The Holy Family Convent and boys from Sacred Heart College, Koch Street. ",
    furtherText: "\n    <p>This image shows an example of some of the shared activities between the girls\u2019 and boys\u2019 schools, as the schools were single sex at that time. This also appears to have been a racially mixed congregation, indicating something of the inclusivity of the Marist and Holy Family Congregations in the early 1900s.</p>\n<p>Holy Family Convent at Yeoville, which merged with Marist Brothers\u2019 College, took boys until Standard 2 only. From Standard 3 most of those boys, including Brother Neil (later Principal of Sacred Heart), attended Marist Obs. Brother Neil and Beverly Fulton Blow, ballet teacher at Sacred Heart College from 1980-2016, were in the same junior primary classes together at Yeoville Convent. Some current staff and learners can trace family connections to one of the three schools that merged in 1980. </p>\n\n    ",
    url: "assets/images/points-of-interest/28.85.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Ursuline Girls perform at a dramatised Mass in the Hall at Sacred Heart College, Koch Street in 1950. ",
    furtherText: "\n    <p>Another example of the communal activities between learners of the three schools that later merged can be seen here in the performance of Ursuline girls in the hall at Koch Street in 1950. Not only were the Catholic congregations coming together, but this picture shows three yarmulke-wearing boys, representative of the high proportion of Jewish pupils at both Sacred Heart Colleges in Koch Street and at Observatory. For years, a Rabbi visited the College each week to give the Jewish boys religious instruction, until the numbers of Jewish boys on the roll dwindled to a level that rendered this service unnecessary. </p>\n<p>At least three of the pictured girls went on to join the Sisterhood; Maureen Murray at the front right of the picture became Sister Veronica Murray who taught at the Ursuline School in Kensington and later became Headmistress of Brescia House from 1975-1980. </p>\n\n    ",
    url: "assets/images/points-of-interest/30.03c.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Statue of St Angela, in front of the College, in 1985. ",
    furtherText: "\n    <p>\u201CIf mothers in the world had a thousand children, they would find a place for each one in their hearts,\u201D wrote Sister Stella in the 1980 Sacred Heart College yearbook, echoing the words of St Angela, the foundress of the Ursuline Order. The message is similarly understood to that of Marcellin Champagnat\u2019s \u201Cto teach children well you must first love them and love them equally\u201D, and demonstrates the filial bond between the Catholic Orders that came together in the extended family of Sacred Heart College.</p>\n<p>This statue of St Angela with a girl represents how the foundress of the Ursuline Sisters\u2019 mission began when she gathered women to dedicate themselves to the teaching of girls, particularly impoverished girls, at a time when formal education for girls was unheard of. This statue came to Sacred Heart from the St. Angela\u2019s Ursuline Convent in Kensington in 1980 and was first installed, after being re-painted in white, on one of the traffic islands in front of the College (as can be seen in this picture). At the Ursuline Convent, the statue was positioned in an alcove above an archway and this niche was, over time, colonised by honeybees. When the Chapel piazza was repaved in 1995, the statue of St Angela was moved to her current position between the Memorial Chapel and the main quad tunnel. It was at this time that the explanatory plaque under the statue was added. </p>\n\n    ",
    url: "assets/images/points-of-interest/28.13.jpg",
    reference: "Image: Marist Archive"
});
var twentyeight = poi;
//# sourceMappingURL=028.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twentynine; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("029", "World War One Memorial", "Remembering Koch Street Marists who served in WW1", -26.173556, 28.075651);
poi.themes = ["Koch Street", "Alumni", "Grounds and Buildings", "Socio-Political Context", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "Memorial plaque mounted in the school hall to the memory of those who died in WW1.",
    furtherText: "\n    <p>This plaque found in the school hall is a memorial to Koch Street Old Boys who died in service during WW1 (1914-1918). The plaque was erected by the Old Boys Association in memory of their peers. There are 49 names listed and it is emblazoned with the Marist International crest and two springboks, the symbol used by South African soldiers in WW1. The Koch Street exam records list every boy who sat for Matriculation. G. Adler, the first alphabetically listed, was a Matric in 1910. A. Freedman, Matric 1911; A. Rennie, Matric 1912. The 1912 Maristonian describes some of its Old Boys; G.O.Veit who was born in 1890 (thus between 24 and 28 when he was killed in action) as a solicitor who still enjoyed cricket and hockey. Each one of the 49 will have been recorded in school annals; mentioned here are but four. The year in which they sat Matric serves as a stark reminder of the youths that these 49 Marist boys were when they were killed in action.</p>\n\n    ",
    url: "assets/images/points-of-interest/29.11.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Springbok atop the ceremonial mace of the (now disbanded) Marist Brothers Cadet Corps. ",
    furtherText: "\n    <p>The springbok sits atop the ceremonial mace, still kept by Sacred Heart College, along with the Cadet Corps ceremonial sword, that was used by the Marist Brothers Cadet Corps. It would have been used at military inspections, pageants and for drills.</p>\n<p>The mace is made of a dark wood, perhaps mahogany, with silver plating and measures 150 cm in length.</p>\n\n    ",
    url: "assets/images/points-of-interest/19.16a.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Hat pin worn by soldiers of the South African Infantry Brigade in WW1 with springbok emblem and as such certainly worn by Marist pupils serving in WW1 (unless they were pilots or sailors as a few were).",
    furtherText: "\n    <p>The motto was that of the Union of South Africa, post 1910, and referred to the strength perceived to have been created when combining the Boer Republics (Transvaal and Orange Free State) with the two British Colonies (Cape and Natal) and signified the union of Afrikaans and English speaking South Africans in a common South African identity. The nickname \u201CSpringboks\u201D stayed with South African servicemen and women throughout the First and Second World Wars. Today it is a nickname more readily associated with South African sports teams.</p>\n<p>The South African Infantry Brigade was formed of four battalions. Soldiers from the then Transvaal, hence Marist boys from Sacred Heart College in Koch Street, would have formed part of either the 3rd or 4th regiments.</p>\n\n    ",
    url: "assets/images/points-of-interest/29.19.jpg",
    reference: "Image: https://www.etsy.com/au/listing/196162545/antique-wwi-era-springbok-south-african"
});
poi.addElement({
    type: 2,
    text: "Nancy the springbok was an actual springbok mascot who accompanied the 4th regiment of the South African Infantry Brigade to Egypt and France during WW1.",
    furtherText: "\n    <p>Nancy, preserved after her death, was displayed from 1958 at the Johannesburg National Museum of Military History where she remains part of their collection of war-related artefacts.</p>\n\n    ",
    url: "https://www.youtube.com/embed/cfgyaLBc2MM",
    reference: "Video: NationalMuseumsScotland on YouTube.com"
});
poi.addElement({
    type: 1,
    text: "The British team for the Schneider Trophy standing in front of two seaplanes at Calshot, UK. Flight Lieutenant Samuel Kinkead second from right (9th August 1927).",
    furtherText: "\n    <p>Flight Lieutenant Samuel Marcus Kinkead R.N.A.S, D.F.C Bar, D.S.C Bar and D.S.O, born in 1897, was a matriculant at Koch Street in 1911. After leaving Sacred Heart College, S.M. Kinkead trained with the R.F.C and became a highly skilled fighter pilot during WW1 and speed aviator afterwards. He died during an attempt to break the world record for the fastest ever recorded seaplane flight in 1928.</p>\n<p>S.M.Kinkead\u2019s elder brother, Thompson Calder Kinkead, also an alumnus of Sacred Heart at Koch Street, was killed during WW1 in a flying accident in 1917. Second Lieutenant T.C.Kinkead is remembered as one of the 49 names on the WWI memorial plaque.</p>\n\n    ",
    url: "assets/images/points-of-interest/29.22.jpg",
    reference: "Image: E. Bacon/Topical Press Agency/Getty Images"
});
poi.addElement({
    type: 1,
    text: "Air Vice Marshall Hugh Saunders, Matric 1907.",
    furtherText: "\n    <p>Along with an alumni of Marist College in Uitenhage, Sir Quentin Brand, Air Vice Marshall Saunders was one of two Old Boys involved in the Battle of Britain in 1942. In WW1 he was awarded the M.C (Military Cross) for gallantry and devotion to duty whilst serving on horseback. In WW2 he transferred to the air force and 1943 he was awarded a CBE in recognition of his services, which entitled him to use the title \u2018Sir\u2019. He retired from the armed forces in 1953 as Air Vice Marshall, one of the highest possible military rankings. Vice Air Marshall Saunders died in 1987.</p>\n\n    ",
    url: "assets/images/points-of-interest/29.23.jpg",
    reference: "Image: http://www.theaerodrome.com/aces/safrica/saunders3.php"
});
var twentynine = poi;
//# sourceMappingURL=029.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirty; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("030", "The Hall", "A concourse for the body and mind", -26.173687, 28.075672);
poi.themes = ["Koch Street", "Alumni", "Grounds and Buildings", "Learning", "Traditions and Innovations"];
poi.addElement({
    type: 1,
    text: "Sacred Heart (Koch Street) gym display at the Old Wanderers Ground in the 1890s. ",
    furtherText: "\n    <p>When Sacred Heart College opened in 1889 there was no hall space to use for assemblies or PT (physical training). The school used the open space at the Wanderers Club (not to be confused with the Wanderers Club\u2019s new grounds in Illovo), as it was available for use by the public when not in use by the cricket club. It was west of Joubert Park and a few blocks away from the Koch Street school. Today railway tracks run over the Old Wanderers Club grounds as the property was purchased by the railways to enlarge Park Station in the 1930s. </p>\n<p>Large crowds of people came to watch the displays by the Marist boys at the Wanderers Club \u2013 often many hundreds of spectators. The boys developed such a prestigious local reputation for their displays that they became a much anticipated feature of the annual carnival parade in town. During the South African War, when a curfew was placed on residents of Johannesburg, the entry ticket to the Marist gym display was used as a \u2018late pass\u2019 and therefore much coveted as no one was allowed out after 9pm without a pass. </p>\n\n    ",
    url: "assets/images/points-of-interest/30.12.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Senior boys at Koch Street doing PT drills. c.1890-1910.",
    furtherText: "\n    <p>PT is the acronym for physical training, or fitness drills using gymnastic techniques. Today PE, physical education, is a more holistic subject, incorporating fitness skills and techniques for a variety of different sports. The boys shown above are using clubs to develop strength in their arms, using a variety of motions, and to tone muscles in the whole body. The boys wear the uniform that was compulsorary for sports at Koch Street and Observatory in the early days \u2013 long trousers for the seniors, a thick clasped belt and leather ankle shoes. </p>\n<figure><img src=\"assets/images/points-of-interest/30.07b.jpg\" alt=\"\">\n\n<figcaption>PT at Koch Street, 1898. (Image: Marist Archive)</figcaption>\n\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/30.09.jpg",
    reference: "Image: Rory Birkby Photography in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1895 – the gym at Koch Street is built and used not only by pupils at the school. This picture shows some senior boys (in Marist PT uniform) and some other adults training ‘after hours’. ",
    furtherText: "\n    <p>There was initially no gym at the Koch Street school, but money was raised by the school and by local businessmen to build a gym for use by the boys and (after hours) residents of the area. Sir Lionel Philips, Randlord and husband of the foundress of the Johannesburg Art Gallery, was one of the largest donors, giving 100 guineas. Frank Fillis, world renowned circus master, organised a special fund-raising matinee in contribution. </p>\n<p>The 1895 gym was considered a state-of-the-art and luxurious facility. The gymnastic displays were a huge feature on Johannesburg\u2019s early entertainments calendars and the large crowds necessitated the use of the Wanderers and Union Grounds to hold all the spectators. The first gymnastics and PT teacher was killed during the South African War and for a time senior boys took over his classes until a replacement, Mr. Barend Vieyra was found. Mr Vieyra was supported by Mr Jack Lelie (a professional sportsman who also taught the girls at Yeoville Convent in the 1920s and 30s). </p>\n\n    ",
    url: "assets/images/points-of-interest/30.02b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Mr Vieyra pictured with a Koch Street Fencing team.",
    furtherText: "\n    <p>Mr. Vieyra, a Jewish immigrant from the Netherlands who arrived in Johannesburg in 1896 became a favoured teacher at the school, remembered for his echoing around the school of \u2018von-two-three\u2026von-two-three\u2019 to encourage precision in the repetition of exercises. He was considered to have been one of the greatest early South African gymnasts and contributed much to the development of the sport in the country. </p>\n<p>Mr. Vierya\u2019s son, Herbert Vieyra, a Koch Street alumnus, became an advocate who was legal advisor to the Regent of Basutoland and latterly became a Judge.  Herbert Vieyra converted to Catholicism (contrary to the wishes of his family) and became a lay member of the Dominican Order in the 1930s. He is particularly remembered for his dedication to the cause of social justice and his contribution to the SACBC (South African Catholic Bishops\u2019 Conference) stance against apartheid in his role as Chair of the Joint Council for Catholic African and Europeans (JCCAE) in the 1950s.</p>\n\n    ",
    url: "assets/images/points-of-interest/27.29.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Hall at Obs in c.1928. ",
    furtherText: "\n    <p>The Hall was built at the same time as the main school building at Observatory and was ready for the opening of the school in 1926. This photograph was taken in the very early days before the installation of the World War One memorial which by 1930 had been installed to the left-hand side of the door in the centre of the back wall. Note the gymnastics apparatus that was fixed into the ceiling. The original ceiling, pressed metal panelling, painted white, can also be seen. The boys here are wearing shorts with their gymnastic kit, which was an addition to the uniform for the junior boys. </p>\n\n    ",
    url: "assets/images/points-of-interest/30.04a.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1937 prize-giving in The Hall. ",
    furtherText: "\n    <p>The school hall was not only used for gym and PT, but for formal occasions such as prize-giving, as in the occasion shown here. Only very senior boys and staff were allowed to sit on chairs. At Koch Street a new gym was built in 1935, for by then the original one was 40 years old and no longer big enough and the equipment outdated. At Observatory, the 1926 gym was modified several times. In 1938 a stage was added (hence the table just visible on the floor in this image), in 1945 a lighting rig was added to the ceiling and between the 1950s and 1990s further improvements were made, which included modifications to the stage dressing rooms, sound and lighting facilities.</p>\n\n    ",
    url: "assets/images/points-of-interest/30.23.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "In 1938 a stage was added to the Hall. This feature was used for college productions and also doubled as the setting for the College Bioscope which entertained boarders and staff at the weekends. ",
    furtherText: "\n    <p>As well as being used for indoor sports training and for events like prize-giving and formal dinners the hall was used for drama and other entertainments, much as it is today (though not so much for indoor sports). Showing films had been a regular feature at Sacred Heart since the early days at Koch Street, days as Brother Frederick had acquired a bioscope for use there. Every Saturday during term time the Hall was turned into a cinema, or bioscope, for the entertainment of the boarders and staff. The 1938 Maristonian records that in that year a \u2018Talkie\u2019 machine was added to the bioscope \u2013 much to everyone\u2019s excitement, since up until then the movies had all been silent. The addition of the stage created even more of a cinema-like effect.</p>\n<p>E. Joffe, who was a boarder in the 1940s, recalls in his memoirs that Saturday evenings were, because of the bioscope, a highlight of the week. Films were usually educational in nature, with the odd \u2018B\u2019 movie comedy or western being shown. Since the reel needed to be changed during the film there were intervals during the screenings and it was at this time that the tuck shop was at its busiest. Joffe also recalls that the Brothers allowed all the staff at the school to watch the films \u2013 something of a rarity in those days since there were no picture houses in town open for black audiences. </p>\n\n    ",
    url: "assets/images/points-of-interest/30.24.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Pre-Primary perform a “Musical Medley” in 2016. ",
    furtherText: "\n    <p>The Hall continues to be a multi-functional space. Here Colin Northmore leads an app creating workshop for the grades 8 and 9 in 2016.</p>\n<figure><img src=\"assets/images/points-of-interest/30.39.jpg\" alt=\"\">\n\n<figcaption>Image: Caroline Kamana</figcaption>\n\n</figure>\n    ",
    url: "assets/images/points-of-interest/30.37.jpg",
    reference: "Image: Caroline Kamana"
});
var thirty = poi;
//# sourceMappingURL=030.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtyone; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("031", "The Marist Archive", "A collection of collective memories", -26.173796, 28.075463);
poi.themes = ["Marist Brothers' History", "Koch Street", "Alumni", "Traditions and Innovations", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "The Marist Archive is located at Marist Provincial House (the southern end of the block built in 1931) and contains documents, photographs, books, letters, and artefacts relating to the history of the Marist Brothers in South Africa and the schools they have established (some no longer in existence) over their 150 years in the country.",
    furtherText: "\n    <p>This physical archive is ordered in columned shelving in a small room (c. 4m x 2m), and can be visited by appointment with permission of the Marist Brothers. This rich store of information relating to the heritage of the wider Marist community is not practically accessible to a large audience. The collective archive of the Marist Brothers and of the Sacred Heart College community is however more than this particular physical space. Along with the actual items contained in this space, stories relating to the heritage of the Marists and Sacred Heart are held in the fabric of the buildings, the memories of its members and in the narrative threads that link them all together.</p>\n\n    ",
    url: "assets/images/points-of-interest/31.13.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The Accounts Ledger from the first South African Marist School, St. Joseph’s Academy in Cape Town.",
    furtherText: "\n    <p>This example page from the Accounts Ledger of St Joseph\u2019s Academy lists purchases by the Brothers in 1872 as including library books, ink mats, 20lbs of chocolate, 2 pigs and \u00BD lb of snuff. </p>\n<p>This fee-paying school was set up in 1867 alongside another Marist School, St Aloysius\u2019 School, financed by the Colonial government. St Marcellin\u2019s wish \u2018to give special attention to the poor and neglected\u2019 is expressed in this model of free/fee-paying schools running concurrently. At Sacred Heart College the extensive bursary programme in High School and the Three2Six Education Project for refugee children are testimony to this aspect of Marist ethos. </p>\n<figure><img src=\"assets/images/points-of-interest/31.88.jpg\" alt=\"\">\n  <figcaption>1909, St. Joseph\u2019s Academy, Cape Town (Image: Institute of the Marist Brothers (FMS))</figcaption>\n</figure>\n\n\n    ",
    url: "assets/images/points-of-interest/01.79_87_combined.jpg",
    reference: "Images: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Press clippings that form a picture of what life was like for the wider Marist community in times gone by are kept in the archive. This double page spread features sporting champions from Sacred Heart College at Koch Street, the dynamite explosion at George Goch (the area south of Jeppestown today) and portraits of two young ladies – likely society debutantes. ",
    furtherText: "\n    <p>In those early days of Johannesburg explosions related to mining were not infrequent. In 1896, at Braamfontein station, an explosives train carrying c.60 tons of dynamite, which had been stood for several days in the sun was struck by a shunting train. A crater 60m x 50m x 8m was created by the blast (heard up to 200 km away) and some 300 people were killed or seriously injured. </p>\n<p>In the 1930 Maristonian, Koch Street alumnus C.H.Holden recalled the 1896 blast;</p>\n<blockquote>\n<p>\u201CIt was just about 3.20 in the afternoon of the 19th February \u2013 Ash Wednesday \u2013 that, while Brother Kieran was taking class, the windows were suddenly blown in. Of course we were all for dashing out to see what it meant but Brother Kieran would not let us go until closing time\u2026 I arrived home to find the roof of our house lifted some inches of the wall. This was however a trifle compared to the desolation nearer the scene of the explosion.\u201D</p>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/26.01d.jpg",
    reference: "Image: Standard & Diggers's News in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "c.1895/96, Five (possibly six) Marist Brothers at Sterkfontein Caves with (most likely) Guglielmo Martinaglia, who discovered and blasted open the entrance to the cave (in the white shirt). The late Professor Philip Tobias, one of South Africa’s most honoured and awarded scientists (nominated three times for a Nobel Prize) mused that the item that the Brother to the right of Martinaglia was holding might have been the first fossil removed from the cave! ",
    furtherText: "\n    <p>A plaque to honour Martinaglia\u2019s discovery of the caves was erected by Wits University to mark the centenary anniversary of the caves\u2019 detection in October 1996 and in recognition of this important contribution to scientific and historical research. </p>\n\n    ",
    url: "assets/images/points-of-interest/26.02.jpg",
    reference: "Image: Musée de L’homme, Paris in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Professor Tobias had borrowed the photograph (shown previously) from the Marist Brothers to use during his research on the Caves, which he began in 1966.",
    furtherText: "\n    <p>The \u2018amazing discoveries\u2019 that Professor Tobias refers to in his letter are likely to have been the Little Foot skeleton (fossil StW 573), parts of which were found in 1980, but it was only in 1994 that Little Foot was declared a hominid, one of the first early ancestors of man to walk upright. In 1997 the missing pieces of the skeleton were found deep inside one of the caves, the Silberberg Grotto.</p>\n\n    ",
    url: "assets/images/points-of-interest/26.04.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "In 2000, the Grade 7s visited Sterkfontein Caves and were fortunate to find Professor Tobias, Professor Ron Clarke and Dr Ali Bacher on site. Here they are pictured together.",
    furtherText: "\n    <p>During their impromptu meeting Professor Tobias told the Grade 7s about the Marist connection to the caves. He assumed Guglielmo Martinaglia, an Italian immigrant to Johannesburg, he assumed had become associated with the Brothers through his Catholic faith (he is buried in the Roman Catholic cemetery in Burgershoop, Krugersdorp, only a few miles from the Sterkfontein Caves). It is possible that his son had been enrolled at Koch Street, though no record of a boy by that surname exists in the annals. Perhaps the visit reminded Professor Tobias to return the photo of the Brothers visiting the caves, as by then he\u2019d had it by then in his possession for several years!</p>\n\n    ",
    url: "assets/images/points-of-interest/26.09.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Brother Jordan was Principal of the College in the 1950s and he is pictured here in 1975 three years before his death.",
    furtherText: "\n    <p>Brother Jordan was born Michael Mengele in Bavaria (Germany) and aged 13 entered the Marist Juniorate at Grugliasco in Italy. As a young boy he would have heard the same bell tolling that is rung by the Grade 1s and Grade 12s to mark their entry into and exit from the College; for the Marist Bell was brought from Italy at the request of Brother Jordan to be installed in the newly built Memorial Chapel in 1956. </p>\n<p>Brother Jordan came to South Africa in 1937, teaching at all but one of the Marist schools and serving as a Provincial Councillor and Superior in his time. During his years as Principal of the College, Brother Jordan researched the history of the Marist Brothers and Holy Family Sisters from their beginnings and later their presence in South Africa (until the 1950s). The former piece of research is kept in the Marist Archive and has been used as background to many a piece in the Maristonian and College yearbooks. </p>\n\n    ",
    url: "assets/images/points-of-interest/31.87.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Brother Martin Xavier in c.1990. ",
    furtherText: "\n    <p>Born Ian Anthony Whiteford, in 1936 (in Johannesburg), Brother Martin was a learner at St Joseph\u2019s College in Rondebosch from 1945-1953 where his family moved after the end of the Second World War. Marist Archivist for over 20 years until shortly before his death in 2013, he meticulously ordered and assembled the Archival material kept in the room at Observatory. In the latter years of this work Brother Martin had begun to digitalise many of the photographs and documentation kept in the archive and, in addition, he amassed biographies for almost every Brother appointed to and in South Africa since 1867. </p>\n<p>Brother Martin taught Religious Education, Geography, the Cadets and some sports at Sacred Heart College from the 1970s until the mid 1980s. He was also responsible for retreats and pastoral care for both learners and staff at each of the schools he was involved with. He later he moved to St. Henry\u2019s, Durban, and then into the Archivist role.</p>\n\n    ",
    url: "assets/images/points-of-interest/31.86.jpg",
    reference: "Image: Marist Archive"
});
var thirtyone = poi;
//# sourceMappingURL=031.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtytwo; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("032", "The Struggle(s)", "Selected stories of Sacred Heart’s activists (1976-2016)", -26.173857, 28.075487);
poi.themes = ["Brothers today at Sacred Heart", "Ethos", "Alumni", "Grounds and Buildings", "Learning", "Traditions and Innovations", "Socio-Political Context", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "The plaque on the front door of the Marist Provincial Offices reads ‘I will bless every place where a picture of my heart shall be exposed and honored’ around an image of Jesus with Sacred Heart. Eric Molobi, struggle activist, was given refuge at the College in the 1980s. An identical plaque was affixed to the door of his room.",
    furtherText: "\n    <p>Sacred Heart College inspires and demands a social consciousness that reflects on and actively seeks practical ways to move forward through the complexity of South African society. Though the College ethos is undoubtedly underpinned by Catholic (specifically Marist) principles, it draws from many cultures and faiths (Islam and Hinduism in particular, since a large number of the school community come from these traditions). Shared values and a deep sense of justice and equality knit together community members into a common order, expressed through love and mutual respect. In fact, it is often most precisely because of the diversity within the Sacred Heart community that traditional values are honed and shared, because each member can reflect on the common threads of humanity that bind them to each other. </p>\n<p>The narratives in these slides are by no means a comprehensive collection of all the stories connected to individuals from Sacred Heart\u2019s community who have actively contributed (and continue to contribute) towards positive change within society and to transformative dialogue around socio-political issues. Herewith is a selection of some of them. </p>\n\n    ",
    url: "assets/images/points-of-interest/32.10b.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Eric Molobi and Martha Molobi, pictured in 2002 at a farewell dinner for then Principal of Sacred Heart, Stephen Lowry. ",
    furtherText: "\n    <p>Mr. Lowry, as a worker for the South African Catholic Bishops\u2019 Conference (SACBC), and Mr. Molobi were both detained by the government during the 1980s. They were arrested because of their involvement in activities that promoted peace and justice during the years of the apartheid regime. During the 1970s Eric Molobi had been imprisoned on Robben Island for his work with the then-banned ANC. After his release Molobi, along with Sheila Sisulu, other community leaders, and supported by the South African Council of Churches and the SACBC worked within two educationally focused activist groups: the Joint Enrichment Programme (that dealt with civic leadership in townships and schools) and the National Education Crisis Committee. At the same time Molobi was administrator for the Kagiso Trust that benefited black South Africans in the 1980s, funded by the European Commission. In 1993 Molobi became CEO of the re-formed Kagiso Trust Investments, which continued to support and promote learning by young black South Africans after the ANC came to power. </p>\n\n    ",
    url: "assets/images/points-of-interest/32.19.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The view from Eric Molobi's place of refuge at the College. ",
    furtherText: "\n    <blockquote>\n<p>\u201C[Eric Molobi] was to play a variety of prominent roles in the struggle in the ensuing decade, perhaps, most prominently, in visiting Dr Mandela in Pollsmoor Prison to discuss the negotiations linked to the suspension of the armed struggle.</p>\n<p>With the renewal of the state of emergency in 1988, Eric was pursued by the security police, whom he evaded for many months in a place of refuge supplied on the College premises. He would masquerade by day decked out in a peaked cap and the other paraphernalia of a chauffeur\u2019s uniform... Martha, his wife was employed by the college as a receptionist, a position she subsequently held for twenty years, until a year after Eric\u2019s death in 2007. She soon became the resident mother figure. Many students over the years have had recourse to Martha for succour and advice. Martha is still a serving member on our board of trustees of the outreach programme to rural communities. \u201C</p>\n<footer>Br Neil McGurk, 2015</footer>\n\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/32.08.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 3,
    text: "Brother Neil discusses the socio-political situation of the 1980s with regard to Sacred Heart College. ",
    furtherText: "\n    <p>In 1986 and 1987, Sacred Heart hosted talks between College and township students on the subject of schooling. In 1989, leaders from Sacred Heart College were included in the Five Freedoms Forum Delegation to meet with ANC leadership in Lusaka. As well as discussing the suspension of armed struggle, questions around the school enrolment of the exiles\u2019 children and grandchildren were addressed, assuming an imminent return. Many of those children later enrolled at the College. Into the early 1990s the Sacred Heart teaching community, in conjunction with the Brothers, attended to local and national issues surrounding the rapidly changing socio-economic demographic of central Johannesburg, and were instrumental in the setting up of Model D schools \u2013 ensuring educational provision for black pupils, training for teachers from the black community, and continued employment for teachers from the white community. </p>\n\n    ",
    url: "api.soundcloud.com/tracks/303285575",
    reference: "Image: Wits University Historical Papers, Audio: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Brother Neil (second from left) and Brother Jude (fourth from right) pictured at an assembly of South African Marists in 2016. Brother Mario (second from right) and Brother Vincent (fourth from left) are College residents, with Brother Neil and Brother Jude. Brother Joseph (third from left) and Brother Paul (third from right) were so until 2016.",
    furtherText: "\n    <p>During the late 1970s and 1980s, Sacred Heart College was undergoing a period of transformation. The school began to admit pupils other than white boys, first becoming an open school and then co-educational. The latter was not only done to consolidate three schools, but was part of a conscious move to destabilise the male-centric nature of the school and imbalances of power inherited from apartheid. The College was deliberately moving away from this old order, which also entailed the disbanding of the Cadets and the de-structuring of the Prefect System. College Principal, Brother Neil McGurk, and Brother Jude Pieterse (then Secretary General of SACBC and Chairperson of the SA Catholic Schools Association) were not only influential in the nation\u2019s forthcoming socio-political transformations, particularly in the area of educational reforms, but were also integral to negotiations with the apartheid government, specifically in talks with the then Administrator of the Transvaal, Sybrand van Niekerk and the Minister of National Education, Piet Koornhof. These talks revealed the divisions beginning to appear within the apartheid regime regarding principles of inclusion in education, with the Brothers offering Catholic principles of inclusivity as a basis for educational reform. This was supported by international opinion regarding segregation in South Africa. The talks concluded with discussions on how moving against the open schools would further damage international relations in the wake of Soweto, the death of Steve Biko, and the cultural boycott. </p>\n\n    ",
    url: "assets/images/points-of-interest/32.20.jpg",
    reference: "Image: Institute of the Marist Brothers (FMS)"
});
poi.addElement({
    type: 3,
    text: "A message of reflection added to a wall in the College grounds during the 2015 Hearts into the Future Cycle Ride.",
    furtherText: "\n    <p>The Hearts into the Future Cycle ride is held on Heritage Day, prior to the One Heart Music Festival. Both events are intended to bring awareness of issues surrounding xenophobia. An 11-year-old College learner wrote of her fears and hopes in an \u2018Open Letter\u2019 during the outbursts of xenophobic violence in South Africa in April 2015. The letter subsequently went viral after it was posted by Principal Colin Northmore on social media, encouraging awareness of and activating against xenophobic discriminations. SABC News circulated the learner\u2019s message further. The pupil, who used a pseudonym while writing, read the letter at a youth rally held in June of that year at Constitution Hill and it can be heard here. The Sacred Heart College community remains driven by Marist principles, a diverse, sanctuary-like school and is a microcosm of the positive possibilities of South African society. </p>\n\n    ",
    url: "api.soundcloud.com/tracks/300050756",
    reference: "Image and Audio: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Sacred Heart College alumnus Rekgotsofetse Chikane being arrested during the protests to support #FeesMustFall in the Cape Town parliamentary precinct in 2015. ",
    furtherText: "\n    <p>The College provides a balanced, multicultural and dynamic environment. Confidence is instilled in the individual through allowing no single pupil grouping to dominate; no sporting, academic or cultural merits are ranked more important than others. The Marist ethos cultivates proactivity around the values of equality and freedom. The development of critical thinking skills, through an ever-innovating curriculum, produces well balanced, respectful but equally opinionated and strong willed alumni; something which is often remarked on by those meeting alumni in the fields of further education and business. That many of the leaders in the 2015 and 2016 protests around access to education and its fee structures were alumni of Sacred Heart College came as no surprise. Rekgotsofetse Chikane (pictured) and Wits SRC Secretary General for 2016, Fasiha Hassan (matric 2011), are but two examples; many others, including some of the older students still attending the College, also stepped forward to demonstrate their solidarity with the cause. </p>\n<p>Rekgotsofetse Chikane, who in his final year at Sacred Heart was president of the Learners\u2019 Representative Council, is the son of Rev. Frank Chikane. Frank Chikane first associated with the school in 1971 when he came from Soweto to Observatory for extra Saturday lessons to boost his tuition before his matriculation exams that year. In 1988, Frank Chikane, like Eric Molobi, was given refuge by the Marists when he was being sought by the Security Police at the Holy Family Convent in Yeoville, by then a satellite premises for Sacred Heart. The property was raided and paper bombed on the same night that Sacred Heart\u2019s statue of Jesus was necklaced, but Chikane was not found. Later, however, Frank Chikane was subjected to a near-fatal poisoning, which he spoke about at the Truth and Reconciliation Commission. </p>\n\n    ",
    url: "assets/images/points-of-interest/32.05.jpg",
    reference: "Image: James-Brent Styan / The Times"
});
poi.addElement({
    type: 1,
    text: "Xhamela Sisulu, great-grandson of Walter Sisulu (and High School learner) meets Denis Goldberg at Liliesleaf Farm in 2016.",
    furtherText: "\n    <p>There are many interconnections between individuals involved in the struggles and the Sacred Heart Community that can be traced over many years. This picture offers an insight into just one of these stories. Walter Sisulu and Denis Goldberg were two of ten liberation activists arrested during a raid at Liliesleaf and subsequently imprisoned after the Rivonia Trial in 1964. Though the meeting of Denis Goldberg and Walter Sisulu\u2019s grandson took place in 2016, the foundations of this particular narrative can be traced back through Sacred Heart to 1913. </p>\n<p>The leader of the 1956 Treason Trial defence team was Israel Maisels, who started at Koch Street in 1913. Nelson Mandela, Sisulu and 154 others were charged with treason but were all found not guilty. In 1964 Joel Joffe, an \u2018Obs\u2019 alumnus, was one of the attorneys who defended Mandela, Sisulu and Denis Goldberg at the Rivonia Trial. A number of the Mandela and Sisulu grandchildren and great-grandchildren attended Sacred Heart College. Liliesleaf Farm was used as a hideout for leaders of the liberation struggle. It is fitting that Sacred Heart College learners visit this site to further their understanding of their community\u2019s involvement in the struggle for freedom in South Africa.</p>\n\n    ",
    url: "assets/images/points-of-interest/32.21b.jpg",
    reference: "Image: Bea Roberts"
});
var thirtytwo = poi;
//# sourceMappingURL=032.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtythree; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("033", "The Three2Six Education Project", "A bridging program for refugee children", -26.171979, 28.076848);
poi.themes = ["Marist Brothers' History", "Ethos", "Marcellin Champagnat", "Grounds and Buildings", "Learning", "Traditions and Innovations", "Socio-Political Context", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "Three2Six learners pictured in 2013 in front of the Marist Provincial Offices at Sacred Heart College.",
    furtherText: "\n    <p>The Three2Six Education Project for Refugee Children (Three2Six) is an educational bridging programme for refugee children (ages 6-13) who are unable to access state education in South Africa, for a number of reasons. These can be financial, around language, or discrimination due to structural xenophobia and attitudes towards foreigners, or because previous school records needed for enrolment in state education have been lost or destroyed.</p>\n<p>Three2Six operates from 3pm to 6pm in classrooms at Sacred Heart College, Observatory (where the project originated in 2008) and focuses mainly on English, Maths and Life Skills. Reception (Grade R) classes have been held at Observatory Girls Primary since 2010. About 200 children are taught by teachers from the refugee communities, who in turn are supported to convert their teaching experience into local qualifications through UNISA. These teachers are helped by local and international volunteers and by Sacred Heart College learners (and other students) who give of their time after the school day and during holiday periods.</p>\n<p>Though education is the main focus of the project, it also creates a feeling of inclusion within South African society for its learners, and provides a safe space for the Three2Six children. The Three2Six Education Project is, in essence, the sixth Marist school in South Africa, for inspired by the mission of Marcellin Champagnat, the ethos is built around inclusion of those most children needy in our society and around the premise that to teach children, one must first love them all and equally.</p>\n\n    ",
    url: "assets/images/points-of-interest/40.16.jpg",
    reference: "Image: Southern Cross"
});
poi.addElement({
    type: 1,
    text: "The Three2Six Lending Library, a Book-tainer donated by Standard Bank.",
    furtherText: "\n    <p>Three2Six is entirely supported by local and foreign donors, who contribute the running costs (c. R12 000 per learner per year). Main costs are teachers&#39; salaries, food and uniforms. The children who arrive in South Africa as refugees, usually with their families, because they are fleeing war, hostile political or economic situations or other life endangering hardships come from all over the African continent, particularly Francophone countries. </p>\n<p>One of the main aims of the project is to place the children, when they are ready, into government schools. The focus of the Three2Six project is therefore on the skills they need to do so. A core focus is reading, writing, comprehension and application of the English language; enabling them to join mainstream education as soon as they are ready to do so. Those who are too far behind when they join (for English is a second, third or even fourth language for most of the children) are given access to a remedial class, which helps them achieve a level of language competency from which they can begin to rejoin their peers.</p>\n<p>The lending library, donated by Standard Bank and furnished by the Project\u2019s supporters is therefore a vital part of the strengthening of language skills. In addition, learners are fed daily (you can\u2019t learn when you are hungry), provided with a uniform (in the blue and gold that provides a visible link to the Marist community that Three2Six is part of), and shoes. Stationery and uniform packs are also gifted to the children who leave the project to enter mainstream education.</p>\n\n    ",
    url: "assets/images/points-of-interest/33.53.jpg",
    reference: "Image: Three2Six Children’s Refugee Education Project"
});
poi.addElement({
    type: 1,
    text: "Learners from the Three2Six Education Project and the Primary School play games together after Sacred Heart Day Mass, June 2016.",
    furtherText: "\n    <p>The benefits of the Three2Six project are not just for those who receive assistance through the programme. The extended family of Sacred Heart is greatly enriched in many ways through the presence and purpose of the project; sharing facilities is just one small part of it. True concern for social justice and active participation in society is evidenced in Sacred Heart College learners, in no small way influenced by the Marist ethos and the inclusion of the Three2Six project in their community.</p>\n<p>Several times a year, such as special Masses, Heritage Day and at some sporting events (such as Inter Catholic Schools Athletics and Soccer tournaments) learners from Three2Six and Sacred Heart College come together to share in activities and learn from each other.</p>\n<p>It is not just Sacred Heart learners who feel the impact. A group of Sacred Heart College parents run a food-packing project which contributes monthly food parcels to the families of the children. This was started because in the early days of the project it was noted that some of the children would save their daily provided meal to take home to share with their families. </p>\n\n    ",
    url: "assets/images/points-of-interest/33.52.jpg",
    reference: "Image: Three2Six Children’s Refugee Education Project"
});
poi.addElement({
    type: 2,
    text: "Finale scene from the Three2Six Musical Theatre production, facilitated by MindBurst Workshop and Minimax Performing Arts and hosted by Sacred Heart College in August 2014. ",
    furtherText: "\n    <p>The holiday programme was first started in 2010 when it was feared that many of the children might be at an extra risk of child trafficking during the Soccer World Cup. The holiday programme was such a success that it has been repeated annually ever since, often twice a year. Some of the activities take place on campus at Sacred Heart College, others involve outings to places of interest such as the Zoo, SciBono and The National Children\u2019s Theatre. </p>\n<p>This video clip features part of one such Three2Six holiday project. In 2014, MindBurst Workshop and Minimax Perfoming Arts helped the Three2Six children to write, compose, choreograph, rehearse and perform their own musical theatre production around themes concerning their community. This musical theatre production was nominated for a BASA award in 2015. These awards recognise excellence and innovation in the field of business support for the arts. The content of the musical itself, which was written, choreographed and performed by the children highlighted the sense of identity of the Three2Six community and their situation within the South African context amidst a time beset with resurgences of xenophobic outbursts in local communities. </p>\n\n    ",
    url: "https://www.youtube.com/embed/o0rASBf_Ic8",
    reference: "Video: G&T Spiller/SHC @ Caroline Kamana on YouTube.ccom "
});
poi.addElement({
    type: 3,
    text: "A Three2Six learner and his Journey with an Artist, 2015 ",
    furtherText: "\n    <p>During the school holidays, the Three2Six learners are offered programmes in the arts, sciences, computing, sports and other skills that the daily timetabling focus on numeracy and literacy cannot afford. </p>\n<p>The learner shown holding his artwork (in the image above) participated in the 2015 holiday programme \u201CJourney with an Artist\u201D. This was a four-day creative and critical thinking skills workshop, facilitated by MindBurst Workshop in conjunction with Three2Six and Sacred Heart College, that equipped the children with an understanding of their rights as children in South Africa, whilst providing space for creative expression around their sense of self and aspirations. Here he tells the story behind his art work which he titled \u201CThe Hero\u201D.  </p>\n\n    ",
    url: "api.soundcloud.com/tracks/301060347",
    reference: "Image and Audio: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Three2Six Dolphins and Mvelaphanda Primary play a soccer match during the Three2Six Sports Challenge in June 2016.",
    furtherText: "\n    <p>Three2Six learners from Grades 5 and 6 took part in a Sports Challenge that included coaching in soccer and netball followed by matches one Saturday in June 2016. This event, sponsored by Kaya FM and hosted by Sacred Heart College, was designed to not only provide a focus for sports training that has increasingly become a regular fixture for the Three2Six learners when time at weekends and during holidays allows, but to teach the fundamentals of working as a team. That the refugee children were playing against a team from the township of Tembisa was intentional; the idea being to enhance relations between the refugee communities that the Three2Six children come from and those of South Africans living in Johannesburg, and to bring contact between communities that have historically undergone xenophobic clashes. Dolphins is the sports emblem for all Sacred Heart College teams, not least the newly established Three2Six sports teams.</p>\n\n    ",
    url: "assets/images/points-of-interest/33.54.jpg",
    reference: "Image: Benjamin Bugeja"
});
poi.addElement({
    type: 1,
    text: "In 2016, a third branch of the Three2Six opened at Holy Family Convent in Parktown serving learners from grade R upwards.",
    furtherText: "\n    <p>The Three2Six Children\u2019s Refugee Education Project, a Sacred Heart College initiated Marist project, operates at Sacred Heart College, Observatory Girls Primary and, since 2016, at Holy Family Convent in Parktown. Learners and teachers from the refugee communities (mainly in Hillbrow, Berea, Yeoville and the surrounding areas) use the classrooms and facilities in these premises after regular school hours. But, as explained, the communities of learners are intertwined in many more ways than just by using the same spaces. Three2Six is the sixth Marist school in South Africa today. The logo on the learner\u2019s shirt above (red for the Holy Family location, blue for Sacred Heart, but with the same logo, underscored with Holy Family College and Sacred Heart College respectively) incorporates the Marist monogram in the African continent and uses the blue and gold colours of the Marist schools. The gold bands, coming from all over Africa on this logo, represent the paths of the migrating children and families joining in Johannesburg, finding refuge in the Marist community.</p>\n\n    ",
    url: "assets/images/points-of-interest/33.57.jpg",
    reference: "Image: Benjamin Bugeja"
});
var thirtythree = poi;
//# sourceMappingURL=033.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtyfour; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("034", "Alumni", "A selection of Alumni's stories", -26.173062, 28.075674);
poi.themes = ["Koch Street", "College Characters", "Alumni", "Socio-Political Context", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "The Alumni and Meliores logo (Meliores is the Alumni magazine published by Sacred Heart College).",
    furtherText: "\n    <p>The logo was designed by Kgomotso Mautloa, Matric 2003, Creative Director at design agency Green Robot. The representation of the College gates indicates how these are always open to the College\u2019s alumni (hence the use of both the old and new school names above the gate). The alumni association began in 1902 at Koch Street, continued at \u2018Obs\u2019, and has been the community networking hub ever since. Alumni are encouraged to keep in touch with their Alma Mater and with each other, attend reunions or contribute in a variety of ways (e.g. careers talks or mentoring of current learners). The \u2018M\u2019 in the centre of the gates links to the words Marist and Meliores (a Latin noun meaning \u2018strive for better\u2019 or \u2018always better\u2019 and to which Meliora, an adjective and part of the school motto meaning \u2018better\u2019 or \u2018best\u2019, is related). </p>\n<p>Approximately 70,000 alumni have walked through the gates at Observatory. In the following slides and elsewhere in the app a number of alumni are featured, but they are a mere fraction of the tens of thousands of other alumni, all with their own stories, contributions and memories.</p>\n\n    ",
    url: "assets/images/points-of-interest/34.76.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "Brother Frederick (centre, seated), first Principal of Sacred Heart College (Koch Street) with the school’s first pupil, Peter Busschau (seated, left) and his four sons, Leo (seated, right), Vincent, Lionel and Bernard (standing, left to right) all of whom were Koch Street and/or Observatory learners. This picture dates from 1934.",
    furtherText: "\n    <p>Leo Busschau is remembered for his remarkable marksmanship, a skill he learnt with the Cadets in Koch Street and honed in the military. For many years he coached the Cadets at Observatory. In 1937 he was sent a telegram from the King congratulating his winning the King\u2019s Prize at Bisley (a shooting competition); he was afforded a civic reception by the City of Johannesburg and carried through the streets on a chair for all to congratulate his success. Peter Busschau\u2019s nephew, Jack Busschau, was a learner at Koch Street and Observatory. Jack\u2019s son, Christopher Busschau, first attended Marist College in Port Elizabeth and then St David\u2019s Inanda. Christopher Busschau\u2019s three sons attended St. David\u2019s and his grandson currently does. Christopher Busschau is Treasurer of the Alumni Association at St David\u2019s. The Busschaus may have the first family alumni connection to the Marist schools in Johannesburg but they are by no means unique in this regard. </p>\n\n    ",
    url: "assets/images/points-of-interest/34.75.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Brian Leong, Matric of 1982, pictured in 2017 with his three children (Grades 5, 8 and 12 at Sacred Heart College). ",
    furtherText: "\n    <p>In the November 2013 issue of Meliores, Brian Leong reflected on his family\u2019s association with Sacred Heart College. He recalled watching the long jumpers with his youngest daughter at a recent inter-house athletics event and observed Mr Hollingworth taking measurements. It sparked a vivid memory of the same Mr Hollingworth demonstrating discus throwing thirty years before. </p>\n<p>Having started at the College in 1974, Brian recalled that \u2018whilst many white government schools were going through emergency evacuation drills\u2026 Sacred Heart College began admitting pupils of all races\u2026Sacred Heart College provided a haven which allowed me to experience a normal way of growing up in an abnormal society.\u2019 Brian continues to appreciate the diversity of the student (and staff) body that allows his children to learn in an environment that reflects the hope that exists, but isn\u2019t always apparent, in South African society. Brian\u2019s wife, Penny, volunteers her time to assist with bi-annual retreats for grades 4-6 and chairs the Mindworks Committee, planning the biennial parent-led Primary School learning programme.</p>\n\n    ",
    url: "assets/images/points-of-interest/34.80.jpg",
    reference: "Image: Penny Leong"
});
poi.addElement({
    type: 1,
    text: "1999, Rebecca Owen (on left playing the triangle) was the Learners Leadership Council President in 2012.",
    furtherText: "\n    <p>Rebecca, who was in O\u2019Leary House, was diagnosed with Acute Lymphoblastic Leukemia in Grade 8. She had chemotherapy for three years and, whilst in remission, excelled in her Matric. Her peers elected her LLC President for 2012. During 2013, while at UCT reading law, the leukemia returned. Rebecca had a stem cell and bone marrow transplant, funding for which was part raised by the wider Sacred Heart Community. The transplant appeared successful but in 2015 leukemia was rediscovered in Rebecca\u2019s blood. That year Rebecca passed away; her funeral was held at the College.</p>\n<figure><img src=\"assets/images/points-of-interest/34.32c.jpg\" alt=\"\">\n  <figcaption>Rebecca\u2019s bench in the Main Quad, donated by her parents. A Courage Award which honours Rebecca\u2019s memory, recognises stoicism and courage in deserving learners. (Image: C Kamana) </figcaption>\n</figure>\n\n\n    ",
    url: "assets/images/points-of-interest/34.74b.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "Joel Joffe (second from right), now Baron Joffe CBE, matriculated from Marist ‘Obs’ in 1948.",
    furtherText: "\n    <p>In South Africa, Joel Joffe is perhaps best known for having been the Defence Attorney for the Rivonia Trialists, including Mandela, in the mid 1960s. In so doing, Joffe angered the apartheid government, who confiscated his passport to restrict his movement. Joffe emigrated to England aided by British politician, Dick Taverne, Chairman of the World Campaign Committee of South African Political Prisoners (WCCSAPP). There, Joffe joined Harold Wolpe, whom he represented at the Rivonia Trial, exiled in the UK since his escape from prison in 1963. In January 2016, Joffe (2nd from right) along with Ahmed Kathrada and Denis Goldberg (1st and 2nd left, both imprisoned after the Rivonia Trial), and co-attorney George Bizos (far right), received the Freedom of the City of London in recognition of their fight for freedom and racial equality. </p>\n<figure><img src=\"assets/images/points-of-interest/34.71.jpg\" alt=\"\">\n  <figcaption> Joel Joffe (back row, 4th from left) as a Matric, 1948. He was in Benedict House. (Image: Marist Archive) </figcaption>\n</figure>\n\n\n    ",
    url: "assets/images/points-of-interest/34.72b.jpg",
    reference: "Image: Getty Images/AFP/Ben Stansall"
});
poi.addElement({
    type: 1,
    text: "Israel (Isie) Maisels, who led the defence in the 1956 Treason Trial, is held aloft in victory whilst exiting the Court (from the non-whites entrance) by some of his Treason Trial clients on their acquittal in 1961. Maisels, QC (a member of the Queen’s Counsel) matriculated from Sacred Heart College (Koch Street) in 1922. Unsurprisingly, after the Treason Trial the National Party didn’t raise Maisels to Chief Justice though he was considered the most deserving candidate by his peers.",
    furtherText: "\n    <blockquote>\n<p>&quot;Pre-eminent amongst his generation of advocates, he was one of the country\u2019s most formidable legal minds, as well as a man whose life and interests reflected a deep concern for human rights and civil liberty. He was involved in some of the great court cases of the times, leading the defence of Nelson Mandela and others in the notorious treason trial of 1956.&quot;                            </p>\n<footer>Excerpt from Maisels&#39; obituary in The Sunday Times, 11.12.1994</footer>\n\n\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/34.58.jpg",
    reference: "Image: The Star in Wits University Historical Papers "
});
poi.addElement({
    type: 1,
    text: "Isie Maisels’ QC gown, his status denoted by its scarlet silk and long sleeves, donated to Sacred Heart by former College parent Ruth Edmonds (Labour Lawyer).",
    furtherText: "\n    <figure><img src=\"assets/images/points-of-interest/34.78.jpg\" alt=\"\">\n  <figcaption>\u2018Mr Justice Maisels, Q.C.\u2019 is just visible on the hand sewn nametape in the picture. (Image: C Kamana) </figcaption>\n</figure>\n\n    ",
    url: "assets/images/points-of-interest/34.81.jpg",
    reference: "Image: Rob Mills"
});
poi.addElement({
    type: 1,
    text: "(Right) Letter of reference written in 1924 by Brother Vital, then Marist Provincial Superior (and former Koch Street Principal) describing Maisels as ‘a brilliant, self-reliant and gentlemanly student’. (Left) Isie Maisels’s College testimonial from 1913; 23 of these are kept in the Wits Historical Papers Archive.",
    furtherText: "\n    <p>Whilst at Koch Street, Maisels lived at 17 Smuts Avenue, Parktown (now part of the Premier Soccer League\u2019s offices, marked with a Blue Plaque denoting its heritage) and played 1st XI cricket and 2nd XI soccer. In his semi-autobiography \u2018A Life at Law\u2019, Isie Maisels reflects on his time at College where he started, aged 7. Awarded the Valerian Prize for the top academic achiever in his Junior Matric year, he recounts this happening some twenty-five years later:</p>\n<figure><img src=\"assets/images/points-of-interest/34.38.jpg\" alt=\"\">\n\n<figcaption>Image: Maisels (1998:2) / Marist Archive </figcaption>\n\n</figure>\n\n\n\n\n    ",
    url: "assets/images/points-of-interest/34.101.jpg",
    reference: "Images: Wits University Historical Papers"
});
poi.addElement({
    type: 1,
    text: "Simpiwe Tshabalala (2nd left) with Eric Lai (2nd from right), Head Boys in 1985.",
    furtherText: "\n    <p>Simpiwe Tshabalala, who was in Benedict House, started Sacred Heart College in Standard 3 (grade 5) in 1978. He was one of the first black children admitted by the school. His matric profile in the 1985 College Yearbook listed Spooks\u2019s (his nickname at school) activities as cricket, rugby, soccer, public speaking, debating, waterpolo and swimming. His ambition, he stated, was the law. Tshabalala went on to study law at Rhodes University.  His yearbook entry ended with a quote; \u2018Let me follow them, I am their leader\u2019 (attributed both to Gandhi and French philosopher Ledru-Rollin, a contemporary of Champagnat).  </p>\n<p>In the 1990s Sim Tshabalala joined the College\u2019s Board of Governors and in this capacity, in 2000, gave a speech at the College around its identity and direction, alongside Nelson Mandela and Brother Neil. In 2011, again speaking at College whilst encouraging Sacred Heart College learners to become \u2018transformers\u2019 of wider society, Tshabalala stated:</p>\n<blockquote>\n<p>\u201CI will never forget how warmly this school welcomed a young boy from Soweto, how caringly I was nurtured while I was here, and how much Sacred Heart has shaped the man I have become\u2026 Sacred Heart has always been well known for producing people who are adept at functioning in multicultural and diverse environments. Long may this continue.\u201D  </p>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/34.41a.jpg",
    reference: "Image: Sowetan Sunday Mirror in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Sim Tshabalala is currently joint CEO of Standard Bank for Southern Africa. Pictured here in 2016. ",
    furtherText: "\n    <blockquote>\n<p>&quot;Two of the first group of students admitted into the primary school subsequently became well-known business personalities in South Africa. Simpiwe Tshabalala is currently the CEO of Standard Bank, Southern Africa. Molefe Kgomo, the son of Dr Jubilee Kgomo, who with Dr Motlana was in charge of Letsedi Clinic in Soweto at the time, is now a director of a large steel construction business. Dr Kgomo subsequently became a long-serving member of the Governing Body of the College.   With the opening of the 1978 academic year the presence of an increasing number of black students in our schools was noted. This encouraged more applications and admissions. It soon became an issue for the media. The provincial and national authorities also had to respond. There were immediate threats of closure from the Administrator of the Transvaal, at the time, Sybrand van Niekerk.\u201D         Br Neil McGurk, 2015 &quot;                            </p>\n<footer>Br Neil McGurk, 2015</footer>\n</blockquote>\n\n    ",
    url: "assets/images/points-of-interest/34.77.jpg",
    reference: "Image: Simphiwe Mbokazi / IOL."
});
var thirtyfour = poi;
//# sourceMappingURL=034.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtyfive; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("035", "The Main Quadrangle", "A Fountain of school life", -26.173225, 28.075564);
poi.themes = ["Brothers today at Sacred Heart", "College Characters", "Alumni", "Grounds and Buildings", "Traditions and Innovations", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "School assembly in the Main Quad in the 1940s.",
    furtherText: "\n    <p>The Main Quad with its Fountain was completed when the school in Observatory opened its doors to pupils in 1926. This space, with its central water feature, is one of the oldest spaces in the College. It has always been a place for morning assemblies, though originally the whole school met here to pray and listen to notices (note the younger boys visible at the front of this image). However, there would have been about 500 learners at the College in the mid 1940s, now there more than twice as many, so morning assemblies are split between the three quads for the different learning phases (Foundation and Intermediate Phases and High School). </p>\n<p>The Fountain is just about visible in the midst of the assembled boys. A notable difference is the small balcony that can be seen to the right of the picture; today this balcony has been enlarged and the upstairs room it is accessed off turned into bathrooms for College visitors and staff. Also note how there is no verandah style walkway on the western edge of the Quad at this stage \u2013 this was only added in 1997. </p>\n\n    ",
    url: "assets/images/points-of-interest/35.22.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Assembly in the Main Quad in 1968.",
    furtherText: "\n    <p>The direction that learners face for assembly is the same today as it has been for years. Daily assemblies take place in the Quads and these gatherings last around ten minutes. This is also the point at which attendance and latecomers are noted. However, since 1992 a decision was taken to return to the more formal assemblies which were found pictured in the archive dating from the 1920s and 1930s, which gathered sections of the school in the hall for a more instructive and reflective session. Today the High School has assembly in the Hall on Wednesday mornings, while the Foundation and Intermediate Phases use the Chapel for hymn practice once a week.</p>\n\n    ",
    url: "assets/images/points-of-interest/35.23.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Fountain as it was before redevelopment in the late 1990s.",
    furtherText: "\n    <p>When the Main Quad was constructed it was built perfectly flat but, because of this, the space often became flooded during heavy rains. Hence it was joked that the Quad was modelled on Piazza San Marco in Venice (which sits just above sea level and for centuries has flooded when the tides are high). Of course this wasn\u2019t practical for a College meeting place and thoroughfare and so in 1997 the Quad was renovated. This was mainly financed by the College tuck shop and facilitated by the College Development Fund. The renovations to the Quad also included covering the western walkways, and necessitated a revamp of the College\u2019s Foyer with adaptations to the sweeping staircase area, including Italianate recessed lighting and cornices on the inside and an extension to the balcony overhanging the Quad. That the style was Italian in theme was perhaps a nod to the Venetian in-joke. The two trees that graced the original Quad were replaced with Fever trees in the planters, donated by Moreland Developments with their special irrigation system donated by the 1996 matrics. </p>\n\n    ",
    url: "assets/images/points-of-interest/35.20.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "View towards the Fountain from the Chapel side of the tunnel into the Main Quad.",
    furtherText: "\n    <p>Leavers from the High School and Primary School senior years traditionally club together and leave a lasting addition to the College facilities. Some of these have included trees and planters in the Foundation Quad, benches and tables in the Intermediate Quad and other furnishings around the grounds. The mosaics inset to the circular brick platforms in the Quad and adorning the archway tunnel that leads towards the sports fields were created by High School learners during the 2010 Sacred Arts Festival. </p>\n<p>It was inside this archway, in 1998, that President Mandela contributed his signature to a mural created by the SRC. Unfortunately, a miscommunication led to this being painted over!</p>\n\n    ",
    url: "assets/images/points-of-interest/35.18.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "A sketch from the Maristonian, indicating how many alumni might remember the College fountain.",
    furtherText: "\n    <p>Before the High School Quad was remodelled in the 1990s the Fountain was more accessible, set at a lower level than it is now. There are still fish in the Fountain pond today, lovingly looked after by Janet Balchin, the \u2018tuck shop lady\u2019. At rare moments of quiet, birds still visit to drink. The 1942 Maristonian tells of pigeons and Indian Mynahs that used to bathe in the fountain and were fed by the pupils.</p>\n<p>Though dogs are not allowed on the school grounds, there have always been \u2018College dogs\u2019. Notably, the late Br Paul\u2019s Alsatian Guide Dogs Sheena and her successor Suzy were a feature of College life for the thirty years that he was a resident Brother. Br Martin\u2019s Fox Terrier Snoopy was regularly found waiting in line for a sausage from the tuck shop at first break. During the 1980s an Alsatian called Freddy used to follow a learner, Martin, each morning as he walked from Yeoville to College. According to teacher Frank Hollingworth, Freddy was welcomed into several of Martin\u2019s classes and was considered an honorary Sacred Heart College member. Today Bella (School Counsellor Marie Grobler\u2019s Cocker Spaniel) and Teddy (Frank Hollingworth\u2019s Jack Russell) are a familiar presence at school. </p>\n\n    ",
    url: "assets/images/points-of-interest/35.27.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Three2Six learners congregate around the Fountain during a break in the August holiday programme, 2015.",
    furtherText: "\n    <p>The Fountain continues to be a place of fascination and focus for Sacred Heart College community members, from the Pre-School, who come to see the fish and who draw the Fountain in their art sessions (likely not for the last time during their school careers), to past pupils and staff members who find the feature evokes memories of their times at the school. A search of the alumni Facebook page reveals several posts that recall this spot as meaningful and central to their recollections of time spent at the College. When it is extremely cold in the winter, icicles hang over the edges of the stone circles and sometimes even form on the nearby plants set into the concrete circular planters at the four corners of the raised Fountain surround.  </p>\n\n    ",
    url: "assets/images/points-of-interest/35.05.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Learner Leadership Council Presidents of 2016 pour water blessed during the Jubilee celebrations at St David’s College, Inanda, into the Fountain, symbolising the contribution of Sacred Heart College to the establishment of their school 75 years prior. ",
    furtherText: "\n    <figure><img src=\"assets/images/points-of-interest/35.03.jpg\" alt=\"\">\n  <figcaption> (Image: Sacred Heart College)</figcaption>\n</figure>\n\n<p>Brother Emili Turu, Marist Superior General, pours water that he blessed into the Fountain during a special Mass held in The Memorial Chapel in September 2016 during his visit from Rome to the Marist Province of Southern Africa. </p>\n\n    ",
    url: "assets/images/points-of-interest/35.02.jpg",
    reference: "Image: Sacred Heart College"
});
var thirtyfive = poi;
//# sourceMappingURL=035.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtysix; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("036", "Houses", "Four school houses and their namesakes", -26.173358, 28.075663);
poi.themes = ["Marist Brothers' History", "Koch Street", "Marcellin Champagnat", "Alumni"];
poi.addElement({
    type: 1,
    text: "1939, presentation of School and House flags at Koch Street.",
    furtherText: "\n    <p>There are six flags; one each for the four School Houses at Koch Street, a flag for the Marist Brothers\u2019 College (third from right) and one with an obscured symbol, possibly the Sacred Heart (far right).  Though the image is in black and white, one can just about make out the hues of the colours of the four School Houses; the colours still used today. Each flag has a single letter denoting the house; <strong>F</strong>rederick (in green, far left), <strong>G</strong>eddes (in blue, second left), <strong>V</strong>alerian (in red, third left) and <strong>O</strong>\u2019Leary (in yellow, second from right). At Observatory, Frederick House was replaced by Benedict House.</p>\n<p>The Marist Brothers flag shows the letters A and M intertwined, a monogram representing their motto Ad Jesum per Mariam (To Jesus through the way of Mary). AM as a Catholic monogram (standing for Ave Maria \u2013 praise/hail Mary) is not unique to the Marist Brothers but, in the distinctive gold and blue script is internationally associated with the Marist Congregation. Under the monogram is a scroll with the letters M.B.C. (Marist Brothers College), with the letters JHB for Johannesburg underneath. The sixth flag is not clearly identifiable. It might feature the Sacred Heart emblem, first flown above the Koch Street school within the French flag, hoisted by Br Frederick to demonstrate the neutrality of the hospital-cum-school during the second South African War in 1900. Another possibility is that it showed the logo of the Old Boys Association as these flags were presented by the Old Boys\u2019 Association. Second from right is W. Singleton, Koch Street alumnus, and later teacher and librarian. All learners at the school are divided amongst the four houses. Siblings are allocated the same houses.</p>\n\n    ",
    url: "assets/images/points-of-interest/36.14b.jpg",
    reference: "Image: Rand Daily Mail in Marist Archive"
});
poi.addElement({
    type: 1,
    text: "House badges used to be worn on learners’ lapels.",
    furtherText: "\n    <p>These enamel and metal badges (c. 1.5 x 2 cm) were worn on the blazer\u2019s left hand lapel. Pictures in the Maristonian show learners wearing these between the years of c.1928-1942. Post WW2, when finances were tight, the badges were phased out, though they were reintroduced for a period of time between the 1950s and \u201870s. This collection was donated to Museum Africa in 1951. </p>\n<p>The Marist AM monogram is centred in the badge, with the house name written in the scroll below the monogram. The coloured background is specific to each house. Above the monogram is a single star; alluding to Mary, the Marist\u2019s guiding star like the star of Bethlehem for the Magi (in Biblical texts). The \u201CJ\u201D below the monogram signifies either Johannesburg or Junior Marist (categorised as pupils in standards 1 to 5, equivalent of grades 2-6 today). It is most likely Johannesburg as, prior to 1933 (when the Brothers\u2019 Council first allowed the different Marist schools in South Africa to wear different blazers), Marist uniforms between schools were distinguished only by a metal badge, similar to the above, with a letter denoting the school, for example: MBR for Marist Brothers Rondebosch and MBD for Marist Brothers Durban. </p>\n\n    ",
    url: "assets/images/points-of-interest/36.34_35_36_37_combined.jpg",
    reference: "Images: Museum Africa"
});
poi.addElement({
    type: 1,
    text: "1955, Boys from Marist schools at the Beatification Mass of Marcellin Champagnat in Johannesburg City Hall.",
    furtherText: "\n    <p>Benedict House is named for the Founder of the Marist Brothers, Marcellin Joseph Benedict Champagnat. Marcellin Champagnat was born in France in 1789 during a time of economic, spiritual and cultural unrest (the time of the French Revolution and its aftermath) and on becoming a priest, dedicated his life\u2019s mission to the foundation of a teaching brotherhood. Marist Brothers first arrived in South Africa in 1967 and established several schools, inspired by the example of their founder, Champagnat. 2017 marks the 150th anniversary of the Brothers\u2019 arrival on the African continent and 200 years since the Marist Brothers started their mission. Champagnat was venerated by the Pope in 1955 and boys from both Sacred Heart Colleges (in Koch Street and at Observatory) and from St.David\u2019s College, Inanda attended a special Mass held at City Hall to honour this. </p>\n<p>Shortly before the College opened in Observatory, the Chapel was dedicated to St. Benedict by Bishop O&#39;Leary. The College was most likely first named St. Benedict&#39;s, to differentiate it from Sacred Heart College at Koch Street. The name Sacred Heart College was only officialised by the 1930s, though Marist Brothers Observatory (or \u2018Obs\u2019) was used colloquially until the 1980s. This might explain why the green house is called Benedict, and not Marcellin or Champagnat. Benedict House is the only house that didn\u2019t exist at Koch Street; it replaced Frederick House (Br Frederick was the first Principal). </p>\n\n    ",
    url: "assets/images/points-of-interest/16.28.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Mr Joe Geddes (far right) with learners at Koch Street in 1896.",
    furtherText: "\n    <p>Mr Joe Geddes, after whom the blue house is named, was one of the first pupils to start at Koch Street in 1889, having arrived in Johannesburg with his father, a miner. Geddes became a student teacher in the early 1890s, after just a few years at school, and stayed as a permanent teacher on completion of his training. According to material in the Marist Archive, Geddes lost his right hand in his youth but was reputed to have the best handwriting in the school. He was, according to the 75th Anniversary Maristonian (1964), a \u2018landmark at the school\u2019. His brother, Robert Geddes, also a Koch Street pupil, wrote in the 1926 Maristonian about Joe Geddes\u2019 fervour for soccer, bowls and cricket and remembered how, at a young age, Joe narrowly escaped being attacked by a snake whilst on a trek. Robert Geddes wrote that his brother \u2013 a great character builder \u2013 should be remembered for embodying his life motto: \u2018everything worth doing, is worth doing well\u2019. Joe Geddes died in 1923. </p>\n<p>Though Joe Geddes was the first Sacred Heart alumni to become part of the teaching staff, he certainly wasn\u2019t the last. Current alumni, now staff, include Mrs King (n\u00E9e Krause) and Mrs McCreesh (n\u00E9e Niken). </p>\n\n    ",
    url: "assets/images/points-of-interest/36.32b.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Bishop David O’Leary O.M.I at his consecration in 1925.",
    furtherText: "\n    <p>O\u2019Leary House, the yellow house, is named after the Rt. Rev David O\u2019Leary, Bishop (or Vicar Apostolic of the Transvaal) of the then Transvaal at the time that the school was opened in Observatory; he blessed the College Chapel and officiated at the opening ceremony for the new school. O.M.I denotes his membership of the The Missionary Oblates of Mary Immaculate, another Catholic congregation founded in 1816 by Eugene de Mazenod, a contemporary of Marcellin Champagnat. O\u2019Leary, born in Kimberley in 1880, attended the Marist Brothers\u2019 College in Uitenhage. During WW1, O\u2019Leary served as military Chaplain to the Allied Forces in East Africa. O\u2019Leary enjoyed soccer and played cricket for the Marist Old Boys\u2019 team. He was the first South African to join the Episcopacy (the Church government) and was honoured by the Vatican with the positions of Papal Count and Assistant to the Pontifical Throne.</p>\n<p>O\u2019Leary died in 1958. The Maristonian noted, \u201CSt. David\u2019s College, Inanda, which has been named after him and O\u2019Leary House at Observatory will help to keep ever green the memory of a great friend and counsellor.\u201D </p>\n\n    ",
    url: "assets/images/points-of-interest/36.42a.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Bust of Brother Valerian kept in the Marist Archive.",
    furtherText: "\n    <p>The 75th Anniversary issue of the Maristonian said that \u201Cthe energy of Brother Valerian underlies every phase of the early history of the school\u201D. Br Valerian, for whom the red house is named, arrived at Koch Street in 1890. The Valerian Prize, also named for him, is awarded for academic excellence to a Junior Matric (grade 11 today). Br Valerian, who was not being able to \u201Cdisassociate purely scholastic work from physical training\u201D, taught the senior classes as well as gym, athletics and the Cadets. He once took his class to hear the first phonograph in Johannesburg, at the time a huge novelty, and produced the first Maristonian in 1908. </p>\n<p>In 1894, only three pupils in the then Transvaal Republic, all Marist learners, were sitting Matric. Br Valerian supervised the boys\u2019 examinations in Bloemfontein. An illuminated manuscript of thanks to Br Valerian from their parents is kept in the Marist archive. Morris Alexander, one of the first pupils in 1889, writing in the 1941 Maristonian, credits Br Valerian for his valuable assistance in getting him through his matric in 1900. In that year the exam papers were brought by military escort from Cape Town. This bust was presented by Old Boys in 1916 as a token of gratitude, dedicated to the memory of Br Valerian, who died in 1914.</p>\n\n    ",
    url: "assets/images/points-of-interest/36.16.jpg",
    reference: "Image: Caroline Kamana"
});
var thirtysix = poi;
//# sourceMappingURL=036.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtyseven; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("037", "Library / Media Centre", "Formerly the boarders’ dining room", -26.173316, 28.075436);
poi.themes = ["Alumni", "Grounds and Buildings", "Learning", "Traditions and Innovations", "Socio-Political Context", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "1928, The Boarders’ Refectory. ",
    furtherText: "\n    <p>The room known to learners and staff as the Pulse Media Centre, situated in the Marcia Hyam Library, started off as the Boarders\u2019 Refectory (dining room) when the College opened in 1926. One of the first Chefs at the college was Ephraim Letebele, who started at the school in 1934 and stayed until his retirement in 1974, coinciding with the end of the boarding at the College. His kitchen was situated behind the high school tuck-shop. Ephraim Letebele\u2019s legacy at the school carries on today \u2013 his grandchildren and great-grandchildren have passed through the school as learners and his son, Joseph Letebele, who started as College Handyman in 1961 is an indispensable part of the Maintenance Staff. The Letebele Music Centre which was opened in 2002 was named for this family\u2019s association with and contribution to Sacred Heart College.</p>\n\n    ",
    url: "assets/images/points-of-interest/37.17.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Boarders’ Refectory in the 1930s. ",
    furtherText: "\n    <p>The food served in the Refectory was adjusted seasonally; a menu for summer and one for winter. Year round, as in most Christian (especially Catholic) institutions, fish was served on Fridays. During the war years (1930s-1940s), when provisions were in shorter supply and budget was restricted, the main staple was corned beef. The Chef served it curried, fried, minced with rice, cold with salad at lunch or hashed with potatoes. Eggs and porridge were served at breakfast.</p>\n<p>The boarders were fond of condiments like piccalilli, tomato sauce, vinegar and Worcestershire sauce, and a separate table was laden with the boys&#39; personal supplies. Though some Brothers (named Crows by the boys) were on duty in the Refectory at meal times, the rest ate in a separate dining room (now Habits, the Coffee Shop). The interconnecting door between the two dining rooms is still functional. The Brothers shared a menu with the boys, albeit with a few extras here and there.</p>\n<p>The archive has menus from celebratory dinners, for example, the 1951 Golden Jubilee Dinner of the Marist Old Boys\u2019 Association. \u2018Spaghetti mince souffl\u00E9\u2019 was followed by \u2018Fruit in jelly with custard\u2019 and likely similar to the meals they were served whilst still at school.</p>\n\n    ",
    url: "assets/images/points-of-interest/37.18.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The Boarders’ Refectory in the 1950s. ",
    furtherText: "\n    <p>The dining room would have seated 80-100 boys. Each table seated eight and was arranged with a Table Captain and Vice-Captain, who were senior boys appointed to be in charge of behaviour and the serving of food. Some recalled this system to have been less than democratic and the portions received reflective of this. Not unimaginable was the hierarchical system that it created and the likely disproportionate rationing of food between boys of different ages. E. Joffe\u2019s memoir, \u201CBefore Mandela\u2019s Rainbow\u201D, reflected on the boarders\u2019 delight at supplementing their meals from the dining room with offerings from the day boys\u2019 packed lunches and with trips to the shops in Yeoville. Of course this latter possibility was only a privilege available to the older boys, who were able to leave the school grounds for such excursions.</p>\n\n    ",
    url: "assets/images/points-of-interest/37.11.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The interior of the first purpose-built College Library in 1969. Seating for 60 readers was provided and in this year Library was introduced as a timetabled lesson. ",
    furtherText: "\n    <p>When the College first opened there was no stand-alone library. There was a small bookshelf available for the Boarders only in the New Wing (added in 1931). In 1937 the City Council presented the school with an oak bookcase (which is still in the Media Centre today) to celebrate the Coronation of King George VI and Queen Elizabeth. During the 1940s and 50s appeals were made by the P.T.A. (now P.A. and prior to 1960s The Ladies\u2019 Association) for donations to grow the library, which was managed by the Brothers and was still for boarders only. </p>\n<p>By the 1960s all boys were allowed to use the lending library. In 1969 the increased number of books necessitated an upgrade to the space and the school library was built between the chapel and the Junior Primary Quad. When the Senior Primary (or Intermediate Quad) was added at the end of the 1980s and the library was converted into classrooms for the junior pupils, the Refectory (now defunct because there were no more boarders at the school) was turned into the Senior Library. The Primary School used, as still today, the purpose-built library in the Intermediate Quad basement. </p>\n\n    ",
    url: "assets/images/points-of-interest/22.17a.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "c.1990, Dr Marcia Hyam, (seated) in the Old Chapel Theatre.",
    furtherText: "\n    <p>Dr Marcia Hyam, ne\u00E9 Warmback, after whom the Library is named, and her two brothers had a long connection with the school. Andr\u00E9 and Patrick attended Yeoville Convent until Standard 3 when they moved to Marist \u2018Obs\u2019. Andr\u00E9, a school Cadet member, joined the South African Air Force. In 1945 whilst flying a Lancaster Bomber, he went missing after a raid on Italy, presumed killed.</p>\n<p>In 1938, in Standard 9 at Yeoville Convent, Marcia and two other girls had parts in the Sacred Heart College production, &#39;Abraham Lincoln&#39; by John Drinkwater. Her Headmistress insisted that the girls were chaperoned to and from rehearsals at the College; records show that 66 boys volunteered their services!</p>\n<p>Dr Marcia Hyam taught at Yeoville Convent 27 years. From 1980 she taught maths at Sacred Heart College, heading the Department for ten years until her retirement and emigration to Australia in 1992. Dr Hyam played the piano and organ at school events and composed the music and lyrics for the school song. The 1992 Sacred Heart College yearbook recalls her incredible drive, her wrangles with College management and dedication to her students as well as her often used catchphrases, including: </p>\n<p>&quot;Just because you are in maths, doesn&#39;t mean you only have to learn mathematics.&quot; \n&quot;Don&#39;t sit and wait for better days. They won&#39;t come. You must make them NOW!&quot; \n&quot;Mommy and Nanny didn&#39;t pack your calculator today.&quot;  </p>\n\n    ",
    url: "assets/images/points-of-interest/37.22.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "The Pulse Media Centre, situated in the Marcia Hyam Library.",
    furtherText: "\n    <p>In 2012 the Marcia Hyam Library was redesigned for 21st century learners. The design, including an AV room, a think tank that can be secluded with curtains, access to digital reference books and a reading zone were put together by Andr\u00E9 Croucamp of MindBurst; College parent Bea Roberts, and architect Nabeel Essa. The centre was named Pulse after a workshop with learners at the school and reflects its essence, heart, connectedness and sensitivity to world rhythms and dynamics. </p>\n<p>The funding for the new centre was provided by Zwelakhe Sisulu (who died three weeks before the centre opened) and the Friends of Eric Molobi, reflecting the mutual association of these struggle activists and the College; connected in their personal narratives but also through their dedication to freedom of information, access to education and the fight for social justice. The Sisulu and Molobi families both have long and involved relations with the school from the 1960s, which continue to this day. </p>\n\n    ",
    url: "assets/images/points-of-interest/37.13.jpg",
    reference: "Image: Caroline Kamana"
});
var thirtyseven = poi;
//# sourceMappingURL=037.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtyeight; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("038", "Main Reception Foyer", "A passage through time…", -26.173202, 28.075423);
poi.themes = ["Marist Brothers' History", "Marcellin Champagnat", "Grounds and Buildings", "Learning", "Traditions and Innovations", "Stories in the story"];
poi.addElement({
    type: 1,
    text: "Relic of Champagnat presented to the College by the Institute of Marist Brothers to mark his canonisation in 1999.",
    furtherText: "\n    <p>Amongst items relating to the foundation of the Marist Brothers, such as silver and bronze representations of Champagnat and of his role model, Mary, the mother of Jesus, is a Holy relic of Saint Marcellin. All Marist schools received a similar cabinet in 1999, each with their own relic. The one at Sacred Heart is believed to be from Champagnat\u2019s finger, authenticated by a Latin certificate translated as follows:</p>\n<blockquote>\n<p>We entrust our faith in all those individuals about to inspect these papers and bear witness that we, by virtue of our office, have extracted a particle from the bones of St Marcellin Champagnat from authentic sources and have placed this particle in a round-shaped metal case, protected by unique crystal, bound with a red silk string and signed by our seal in red Spanish wax. We grant into their care these papers signed by our hand and protected by our dry seal.</p>\n<footer>Brother Gabriel Andreucci,</footer>\n<footer>Postulator General of the Marist Brothers of the Schools</footer>        </blockquote>\n\n    ",
    url: "assets/images/points-of-interest/38.04b.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The Marist Bell, brought to the College in the 1950s.",
    furtherText: "\n    <p>This bell, which came from the third General House (headquarters) of the Marist Brothers, called the Brothers to prayer and meals for over fifty years. The first General House (or Generalate) was at the Brother\u2019s French residence, L\u2019Hermitage de Notre Dame, from 1825. Later it moved to Lyon. When all religious institutes were expelled from France in 1903, the Brothers moved their General House to Grugliasco, northern Italy. In 1958, they moved to Rome. Br Jordan, the Principal of the College during the building of the Memorial Chapel, requested that the bell at Grugliasco be given to the College for its new Chapel. The iron fixtures high up on the wall in the nook between the Chapel and the Macartin Centre mark where it first hung. In recent years, the bell was taken down and hung in the Foyer. </p>\n<p>The bell was made of cast iron by the Mazzola Foundry in Valduggia, near Grugliasco. This foundry was run by the Mazzola family since 1475 but closed in 2004. One side of the bell is embossed with \u2018Ave Maria\u2019 and an image of Mary. The other side features the Mazzola logo.                                </p>\n\n    ",
    url: "assets/images/points-of-interest/38.10.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Grade 1s Bell Ringing Ceremony in 2016. ",
    furtherText: "\n    <p>Sacred Heart College started a new tradition in 2015. At the beginning of each school year, the bell is moved to the front of the Chapel where the Grade 1s of that year ring the bell to mark the start of their school career. The Matrics of that year ring the bell at their Valedictory Mass to mark the end of their time at Sacred Heart College.</p>\n<p>The rope and metal rod used to ring the bell was crafted by Joseph Letebele, as well as the brackets used to fix the bell in the foyer. These are kept in the workshop and brought out when needed.  One of the reasons it was taken down, apart from it being stuck at the back of the chapel out of view, was because it was just too tempting for those walking past not to ring it!</p>\n\n    ",
    url: "assets/images/points-of-interest/38.15b.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "Ethiopian Hunger Cloth (Alemayehu Bizuneleh, 1978). ",
    furtherText: "\n    <p>This printed fabric wall hanging was given to the College by the Chaplain, Father Dryden. </p>\n<p>Hunger cloths, which are produced all over the Christian world, were used first in the Middle Ages as a visual representation of Biblical stories and in so doing to enable an understanding of God before reading was a skill available to all social classes and generations. In many developing countries with a Christian influence, hunger cloths are still created and used for the same purposes, as well as to serve as a reminder of how God relieves the struggles of those in need. </p>\n<p>In the Middle Ages these cloths were used to cover altars during Lent (a period of fasting before the feast of Easter) and so referred to as Hunger Cloths. The one that hangs in the Foyer at Sacred Heart is a copy of one that was created by Ethiopian artist Alemayehu Bizuneleh in 1978, and depicts a series of stories from both the Old and New Testaments. The text is in Amharic, the official language of Ethiopia. </p>\n\n    ",
    url: "assets/images/points-of-interest/38.23.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The Foyer set up for All & Every, an exhibition of art work by Three2Six learners created in 2015 during their August holiday workshop that facilitated learning around children's rights. ",
    furtherText: "\n    <p>The Foyer is a space for temporary exhibitions, often of art work by Sacred Heart College or Three2Six learners, and informative displays, including alumni news or materials relating to the critical thinking learning programme. Hanging from the ceiling is a banner that reads \u2018good nutrition\u2019, one of many information points set up by High School students as part of a Life Orientation project. </p>\n<p>\u2018Marist Bros. College\u2019 is set into the door\u2019s glass panel in Marist blue and gold. Though the religious name of the school was always Sacred Heart College (which was started as the senior school to the Koch Street Sacred Heart College), it was known colloquially as Marist Brothers\u2019 College, Marist \u2018Obs\u2019 (short for Observatory), or simply \u2018Obs\u2019 until 1980. When the Main College quadrangle was renovated in the late 1990s, the Foyer entrance to the College was also revamped, funded mainly by the College Tuck shop. The wooden doors were restored to their natural grain and dropped ceilings with cornices and recessed lighting were installed. A light fitting, donated by Alfio Torrisi Architects, added volume to the staircase space. The Fountain was raised during the quad renovations and, at its new height, was now framed in view through the arched doorway of the Foyer.</p>\n\n    ",
    url: "assets/images/points-of-interest/38.29.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The school office display cabinet and view to Foyer.",
    furtherText: "\n    <p>The display cabinet contains a selection of photographs and items that relate to the heritage of Sacred Heart College and the Marist Brothers. </p>\n<p>Through the door and into the Foyer area another art display can be seen, this time from the Grade 6 \u2018World Religions through Art\u2019, an exhibition of cross-curricular work between Art and Religious Education classes, produced in 2016. Also visible through the door is part of the staircase, recalled by some, as &#39;The Brothers&#39; Stairs&#39;. Until 1985, the Marist Brothers lived in rooms on the top floor of this building (now converted into offices and the staff room). Unlike other staircase bannisters around school, which have small raised wooden knobs, set a foot apart all the way down their length, these are smooth. The wooden knobs discouraged the bannisters from being used as slides. Absence of the knobs reminds us of how junior boys were not permitted to use these stairs (and perhaps that the Brothers may have enjoyed sliding). </p>\n\n    ",
    url: "assets/images/points-of-interest/38.16b.jpg",
    reference: "Image: Caroline Kamana"
});
var thirtyeight = poi;
//# sourceMappingURL=038.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thirtynine; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("039", "Old Chapel Theatre", "Original Chapel (first floor, NW corner, of main building)", -26.17295, 28.075356);
poi.themes = ["Marcellin Champagnat", "Grounds and Buildings", "Traditions and Innovations"];
poi.addElement({
    type: 1,
    text: "The original school Chapel in 1930. ",
    furtherText: "\n    <p>The Chapel was dedicated to St Benedict with a ceremony that began in the College Chapel and continued elsewhere around the College buildings. This blessing was carried out on 28th January 1926 by the Right Rev. Bishop David O\u2019Leary, just days before the boys arrived to begin the first ever academic year at the new Marist school in Observatory. Special rites were performed and prayers said at various points around the school, particularly at the main entrance. The ceremony also marked the naming of the school \u2013 originally to be called St Benedict\u2019s - for senior Marist pupils, to differentiate from Sacred Heart College at Koch Street where the junior pupils remained.</p>\n<p>The Chapel was fitted with wooden pews, an altar rail, several statues and 14 Stations of the Cross (five are visible here).</p>\n\n    ",
    url: "assets/images/points-of-interest/39.11c.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "The original barrel vaulted ceiling can still be seen today.",
    furtherText: "\n    <p>The Johannesburg Heritage Foundation\u2019s data record of Sacred Heart College motivates inclusion of the College buildings in their listings of recorded local heritage sites because \u201Cthe original Chapel on the 1st floor is an outstanding in design having a barrel vaulted roof finished internally in pressed metal ceiling\u201D (JHF 1988).</p>\n\n    ",
    url: "assets/images/points-of-interest/39.03.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "St. Benedict’s Chapel in 1951 during Br Leonida’s visit to South Africa (then Marist Superior General).",
    furtherText: "\n    <p>This picture shows the Chapel dressed for its special visitor, Br Leonida, with fresh floral displays and a carpet running down the aisle. The reredos (the screen behind the Altar) is clearly visible with a statue of Jesus with Sacred Heart fixed atop in the chancel (the area set apart for Altar from main Chapel). Statues of Mary (on the left before the chancel) and Joseph (on the right before the chancel) as well as three of the fourteen Stations of the Cross are also visible.</p>\n\n    ",
    url: "assets/images/points-of-interest/39.12.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "Statue of Mary from original college Chapel now in the Memorial Chapel.",
    furtherText: "\n    <p>This statue of Mary is positioned to the left just before the chancel in the Memorial Chapel, just as it was in the original Chapel. Likewise, the statue of Joseph can be found to the right, just before the chancel in the Memorial Chapel.</p>\n<p>The statue of Jesus with the Sacred Heart is not in the Memorial Chapel, its position has been replaced with a statue of Champagnat. However, the statue of Jesus moved from the original Chapel has been mounted in a similar lofty position in the Pre-Primary reception area.</p>\n<p>The Stations of the Cross were all moved from the old Chapel and repositioned on the Memorial Chapel interior walls.</p>\n\n    ",
    url: "assets/images/points-of-interest/23.54.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "‘Migrating Imaginations’ an exhibition of art works produced by the Three2Six learners in the Old Chapel Theatre, 2016. ",
    furtherText: "\n    <p>The original Chapel was converted for other uses after the Memorial Chapel was dedicated in 1956, primarily becoming the place for catechism lessons. The space, known as the Old Chapel Theatre, continues to be repurposed and is now mainly used for arts-related teaching and performances, exhibitions, PR events and hospitality. A stage was built into the chancel area and the lighting changed to suit its new uses. The original fixtures, apart from the ceiling, were removed and redistributed around the school, mainly to the Memorial Chapel.</p>\n\n    ",
    url: "assets/images/points-of-interest/39.07b.jpg",
    reference: "Image: Steffen Fischer"
});
var thirtynine = poi;
//# sourceMappingURL=039.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return forty; });

var poi = new __WEBPACK_IMPORTED_MODULE_0__models_point_of_interest__["a" /* PointOfInterest */]("040", "Habits", "More than a Coffee Shop", -26.173426, 28.0753);
poi.themes = ["Marist Brothers' History", "Koch Street", "Brothers today at Sacred Heart", "College Characters", "Alumni", "Grounds and Buildings", "Traditions and Innovations"];
poi.addElement({
    type: 1,
    text: "Tea at The Old Wanderers Grounds (undated). The Koch Street boys played their sports at these grounds as there were no school playing fields – the dirt and tarmac playground did not provide adequate space for matches. This picture shows what would have been either an after-match tea for either athletics, soccer, or cricket (the school sports) or following a display by the Cadets or the Gymnasts.",
    furtherText: "\n    <p>Lunch hour games and sports were held at the Union Grounds (situated south of the railway track, a few blocks away from the school) with matches and displays held at the Wanderers Grounds (north of the railway and also a few blocks away from the school). The Old Wanderers Grounds is not to be confused with the new Wanderers grounds in Illovo, purchased in the 1930s but only occupied in the late 1940s when the Doornfontein location near Koch Street was sold to the South African Railways Corporation for the extension of Park Station. </p>\n\n    ",
    url: "assets/images/points-of-interest/30.13.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "1394, The cloistered walkway that leads to the room (visible at the end of the walkway framed by the arch) that was originally the Brothers’ Dining Room and today is Habits Coffee Shop.",
    furtherText: "\n    <p>Until the Brothers\u2019 Residence was constructed in the mid-1980s, the Brothers resided in rooms upstairs in the main building. Today these are the offices and staff room between the top of the foyer staircase and the Old Chapel Theatre. The Brothers had their own Dining Room so that they could eat separately from the Boarders (until the mid 1970s, when boarding was phased out) and retire together from daily school life. After sports matches on a Saturday the Brothers invited staff (and visiting staff) to have tea in their dining room.</p>\n\n    ",
    url: "assets/images/points-of-interest/40.06.jpg",
    reference: "Image: Marist Archive"
});
poi.addElement({
    type: 1,
    text: "2017, the interior of Habits Coffee Shop. Habits, was so named to reference the former use of the room as the Brothers' Dining Room (a nod to the distinctive clothing worn by the Marist Brothers) and to connect with the current Coffee Shop ‘feeding one’s caffeine habit’.",
    furtherText: "\n    <p>Religious Orders\u2019 distinctive tunic style clothing, habits or soutanes, are worn as an outward sign of spiritual pledges and of their modest lifestyles. The soutanes worn by the Marist Brothers in South Africa are made of a lightweight white fabric, rather than the traditional heavier black version, following dispensation from the General House that it be worn in countries with a hot climate. The soutane was worn with a white rabat (a long rectangular collar) but today the Brothers rather wear a clerical shirt and white banded collar. For the Marists, the rabat signifies their teaching mission. The black cord worn around their waists symbolises being \u2018bound\u2019 to God, demonstrating that the Brother has made his first profession (promise) with the Marists. A Brother who wears a crucifix pinned to the front of his soutane demonstrates that he has made his final profession to the Order. Today the soutane is largely kept for formal and religious occasions and the Brothers generally just wear a crucifix or simple Marist cross over a shirt or jersey.</p>\n<p>The table and chairs are those used by the Brothers in their Dining Room, restored and repainted for use in the Coffee Shop by Joseph Letebele of the Workshop. He also made the Trophy Cabinet visible at the back of this image. </p>\n\n    ",
    url: "assets/images/points-of-interest/40.11.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "Ms Memory Mpharu, who runs Habits Coffee Shop, pictured in 2017. ",
    furtherText: "\n    <p>Memory Mpharu is a mother figure to many a learner, staff member and parent as she welcomes them to the Coffee Shop which is open from 7 until 4 daily. Sweet baked treats (made by the parent of a former learner) are on offer to go with Memory\u2019s selection of hot drinks served with personalised words of wisdom such as \u2018be yourself my darling\u2019. Each sale in Habits contributes towards the College\u2019s Field of Flowers Bursary Scheme. Memory co-ordinates a number of other projects, such as the sale of second hand text books and assists the PA with organising their events. </p>\n\n    ",
    url: "assets/images/points-of-interest/40.53.jpg",
    reference: "Image: Caroline Kamana"
});
poi.addElement({
    type: 1,
    text: "The Coffee Shop is a space for alumni and parents to congregate, reflect and connect in. This image shows a group who had gathered to celebrate the Class of 1963 and went on to have dinner in Habits. Habits is the venue for the monthly PA meetings for both the High and Primary Schools and throughout the day is frequented by parents, visitors and learners who can connect to the school wifi whilst enjoying some respite and/or refreshment.",
    furtherText: "\n    <p>A dinner in 2013 at Habits Coffee shop with some of the Class of 1963.</p>\n<p>Top Row: Peter Dormehl; Phillip Oberem; Michael Milani; Brother Jude Pieterse (former Provincial and Marist Provincial Councillor); Costas Caredes; Howard Thomas</p>\n<p>Bottom Row: Phillip Abraham; Brother Joseph Walton (former Marist Provincial and former Head of Primary School); Colin Northmore (Head of Sacred Heart College)</p>\n\n    ",
    url: "assets/images/points-of-interest/40.52.jpg",
    reference: "Image: Sacred Heart College"
});
poi.addElement({
    type: 1,
    text: "The Marist Brothers Cadets' Inter-Platoon Trophy, which is kept, along with hundreds of other awards and trophies, in the specially designed cabinet in Habits (under Memory Mpharu’s watchful eye). Though the Cadets have long been disbanded and this trophy therefore no longer awarded, many of the other trophies are still used today to mark significant achievements by members of the College, particularly in sports and academics.",
    furtherText: "\n    \n    ",
    url: "assets/images/points-of-interest/19.94.jpg",
    reference: "Image: Caroline Kamana"
});
var forty = poi;
//# sourceMappingURL=040.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_index__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { PointOfInterestPage } from '../point-of-interest/point-of-interest';
// import { HelpPage } from '../help/help';
var HomeComponent = (function () {
    function HomeComponent(_ngZone, router) {
        this._ngZone = _ngZone;
        this.router = router;
        this.apiKey = "AIzaSyAJymzPSBYve3q0KoFEJf69LN_1hEPRtuk";
        this.latitude = -26.173247;
        this.longitude = 28.075560;
        this.zoom = 327;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadGoogleMaps(this._ngZone);
    };
    HomeComponent.prototype.help = function (event) {
        // let popover = this.popoverCtrl.create(HelpPage);
        // popover.present({
        //   ev: event
        // });
    };
    ;
    HomeComponent.prototype.loadGoogleMaps = function (_ngZone) {
        var _this = this;
        if (typeof google == "undefined" || typeof google.maps == "undefined") {
            console.log("online, loading map");
            //Load the SDK
            window['mapInit'] = function () {
                _this.initMap();
            };
            window['mapNavigate'] = function (id) {
                _ngZone.run(function () {
                    var poi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__data_index__["a" /* getPointOfInterest */])(id);
                    console.log("Navigating to POI  " + poi.id + " - " + poi.title);
                    _this.router.navigate(['/p', poi.id]);
                    // this.nav.push(PointOfInterestPage, { id: poi.id });
                });
            };
            var script = document.createElement("script");
            script.id = "googleMaps";
            if (this.apiKey) {
                script.src = 'https://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
            }
            else {
                script.src = 'https://maps.google.com/maps/api/js?callback=mapInit';
            }
            document.body.appendChild(script);
        }
        else {
            this.initMap();
        }
    };
    HomeComponent.prototype.initMap = function () {
        var center = new google.maps.LatLng(this.latitude, this.longitude);
        var mapOptions = {
            tilt: 0,
            center: center,
            zoom: 327,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            scaleControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false
        };
        this.bounds = new google.maps.LatLngBounds();
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var selectedMarker;
        var infowindow;
        var iconBase = 'assets/images/';
        var greyIcon = iconBase + 'marker-2-grey.png';
        var colourIcon = iconBase + 'marker-yellow.png';
        var _loop_1 = function(key) {
            var poi = __WEBPACK_IMPORTED_MODULE_2__data_index__["b" /* AllPointsOfInterest */][key];
            var marker = new google.maps.Marker({
                position: poi.getLatLng(),
                title: poi.title,
                icon: colourIcon,
                map: this_1.map
            });
            var closeSelectedMarker = function () {
                //selectedMarker.setIcon(greyIcon);
                selectedMarker = null;
            };
            marker.addListener('click', function () {
                if (selectedMarker) {
                    closeSelectedMarker();
                }
                selectedMarker = marker;
                //marker.setIcon(colourIcon);
                if (infowindow) {
                    infowindow.close();
                }
                infowindow = new google.maps.InfoWindow({
                    content: poi.info
                });
                infowindow.open(this.map, marker);
                google.maps.event.addListener(infowindow, 'closeclick', function () {
                    closeSelectedMarker();
                });
            });
            this_1.bounds.extend(marker.getPosition());
        };
        var this_1 = this;
        for (var key in __WEBPACK_IMPORTED_MODULE_2__data_index__["b" /* AllPointsOfInterest */]) {
            _loop_1(key);
        }
        this.map.fitBounds(this.bounds);
        // Create a geo-mask for the school.
        new google.maps.Polygon({
            map: this.map,
            strokeColor: '#000000',
            strokeOpacity: 0.5,
            strokeWeight: 2,
            fillColor: '#CACACA',
            fillOpacity: 0.7,
            paths: [
                [
                    new google.maps.LatLng(-26.183953, 28.061637),
                    new google.maps.LatLng(-26.160843, 28.061637),
                    new google.maps.LatLng(-26.160843, 28.089639),
                    new google.maps.LatLng(-26.183953, 28.089639),
                    new google.maps.LatLng(-26.183953, 28.061637)
                ],
                [
                    new google.maps.LatLng(-26.174166, 28.072348),
                    new google.maps.LatLng(-26.174109, 28.078989),
                    new google.maps.LatLng(-26.171149, 28.078933),
                    new google.maps.LatLng(-26.171115, 28.078732),
                    new google.maps.LatLng(-26.170561, 28.078381),
                    new google.maps.LatLng(-26.172253, 28.073801),
                    new google.maps.LatLng(-26.173025, 28.073312),
                    new google.maps.LatLng(-26.173202, 28.072869),
                    new google.maps.LatLng(-26.174166, 28.072348)
                ]
            ]
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('map'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === 'function' && _a) || Object)
    ], HomeComponent.prototype, "mapElement", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(554),
            styles: [__webpack_require__(551)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({ name: 'safe' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(134)();
// imports


// module
exports.push([module.i, "app-home {\n  position: relative;\n  width: 100%;\n  display: block;\n  height: 100%; }\n\n#map {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n.pin-btn {\n  background-color: transparent;\n  line-height: 15pt;\n  font-size: 12pt;\n  color: white; }\n\n[title=\"Show 45 degree: view\"] {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(134)();
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  display: block;\n  top: 120px;\n  right: 0;\n  left: 0;\n  bottom: 50px;\n  width: 60%;\n  margin: auto;\n  background-color: #ffffff;\n  border: 0.55px solid #b2b2b2;\n  overflow: hidden; }\n\nh1 {\n  background-color: #ffffff;\n  text-align: center; }\n\nh4 {\n  text-align: center;\n  margin: 0;\n  margin-top: -15px; }\n\n.content {\n  position: relative;\n  text-align: justify; }\n\n.card {\n  margin: auto;\n  background-color: #ffffff;\n  padding: 40px;\n  font-size: 0.8em; }\n  .card h2 {\n    width: 100%;\n    font-size: 1em; }\n  .card img {\n    max-width: 100%;\n    max-height: 50%;\n    margin: auto;\n    display: block; }\n\n.chevron {\n  position: absolute;\n  top: 0; }\n  .chevron i {\n    position: relative;\n    font-style: normal;\n    display: block;\n    font-size: 100px;\n    margin-top: 200px;\n    cursor: pointer;\n    font-weight: 600;\n    color: #c0c0c0; }\n\n.left {\n  left: 30px; }\n\n.right {\n  right: 30px; }\n\n.show-more {\n  height: auto;\n  min-height: 100%; }\n\n@media only screen and (min-device-width: 768px) {\n  .card img,\n  .card .video-container embed {\n    max-height: 300px; }\n  .scroll-content {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: block;\n    height: auto; } }\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px;\n  height: 0;\n  overflow: hidden; }\n\n.video-container iframe,\n.video-container object,\n.video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\nfigcaption {\n  font-style: italic;\n  text-align: center;\n  color: #b2b2b2; }\n\nfooter {\n  font-style: italic;\n  text-align: right; }\n\n.audio-container {\n  margin: 45px 0;\n  width: 100%; }\n  .audio-container audio {\n    width: 100%; }\n\n.close {\n  height: 50px;\n  width: 50px;\n  font-style: normal;\n  display: block;\n  font-size: 1.4em;\n  float: right;\n  margin: -10px 15px 0 0;\n  color: #b2b2b2;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<div #map id=\"map\"></div>"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<h1>{{poi.title}}<i class=\"close\" (click)=\"close()\">X</i></h1>\r\n<h4>{{poi.description}}</h4>\r\n\r\n<div class=\"content\">\r\n  <div class=\"chevron left\">\r\n    <i name=\"arrow-back\" [class.active]=\"!isFirst()\" (click)=\"previous()\">&lt;</i>\r\n  </div>\r\n\r\n  <div class=\"card\" [class.show-more]=\"showMore\">\r\n    <figure>\r\n      <img [src]=\"selected.url\" imageViewer *ngIf=\"selected.type == 1\">\r\n      \r\n      <div class=\"video-container\" *ngIf=\"selected.type == 2\">\r\n        <iframe width=\"854\" height=\"480\" [src]=\"selected.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\r\n      </div>\r\n\r\n      <div class=\"audio-container\" *ngIf=\"selected.type == 3\">\r\n        <iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" [src]=\"'https://w.soundcloud.com/player/?url=https%3A//' + selected.url + '&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true' | safe\"></iframe>\r\n      </div>\r\n\r\n      <figcaption>{{selected.reference}}</figcaption>\r\n    </figure>\r\n\r\n    <h2>\r\n      {{selected.text}}\r\n    </h2>\r\n\r\n    <div [innerHTML]=\"selected.furtherText\">\r\n    </div>\r\n    \r\n  </div>\r\n\r\n  <div class=\"chevron right\">\r\n    <i name=\"arrow-forward\" [class.active]=\"!isLast()\" (click)=\"next()\">&gt;</i>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);


/***/ })

},[574]);
//# sourceMappingURL=main.bundle.js.map