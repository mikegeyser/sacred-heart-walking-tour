"use strict";
class PointOfInterest {
    constructor(id, title, description = "", latitude, longitude) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.elements = [];
        this.info = `<button class="pin-btn" ion-button onclick="mapNavigate('${this.id}')">
                     <strong>${this.id} - ${this.title}</strong>
                     <div>${this.description}</div>
                     </button>`;
    }
    getLatLng() {
        return { lat: this.latitude, lng: this.longitude };
    }
    addElement(element) {
        this.elements.push(element);
    }
    thumbnail() {
        if (this.elements.length) {
            return this.elements[0].url;
        }
    }
}
exports.PointOfInterest = PointOfInterest;
class PointOfInterestElement {
    constructor() {
        this.type = PointOfInterestElementType.Image;
    }
}
exports.PointOfInterestElement = PointOfInterestElement;
var PointOfInterestElementType;
(function (PointOfInterestElementType) {
    PointOfInterestElementType[PointOfInterestElementType["Image"] = 1] = "Image";
    PointOfInterestElementType[PointOfInterestElementType["Video"] = 2] = "Video";
    PointOfInterestElementType[PointOfInterestElementType["Audio"] = 3] = "Audio";
})(PointOfInterestElementType = exports.PointOfInterestElementType || (exports.PointOfInterestElementType = {}));
//# sourceMappingURL=point-of-interest.js.map