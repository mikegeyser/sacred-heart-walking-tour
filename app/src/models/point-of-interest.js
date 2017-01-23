var PointOfInterest = (function () {
    function PointOfInterest(id, title, description, latitude, longitude) {
        if (description === void 0) { description = ""; }
        this.id = id;
        this.title = title;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.elements = [];
        this.info = "<button class=\"pin-btn\" ion-button onclick=\"mapNavigate(" + this.id + ")\">\n                     <strong>" + this.id + " - " + this.title + "</strong>\n                     <div>" + this.description + "</div>\n                     </button>";
    }
    PointOfInterest.prototype.getLatLng = function () {
        return { lat: this.latitude, lng: this.longitude };
    };
    PointOfInterest.prototype.createMarker = function (map, bounds) {
        var marker = new google.maps.Marker({
            position: this.getLatLng(),
            title: this.title,
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content: this.info
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        bounds.extend(marker.getPosition());
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
export { PointOfInterest };
var PointOfInterestElement = (function () {
    function PointOfInterestElement() {
        this.type = PointOfInterestElementType.Image;
    }
    return PointOfInterestElement;
}());
export { PointOfInterestElement };
export var PointOfInterestElementType;
(function (PointOfInterestElementType) {
    PointOfInterestElementType[PointOfInterestElementType["Image"] = 1] = "Image";
    PointOfInterestElementType[PointOfInterestElementType["Video"] = 2] = "Video";
    PointOfInterestElementType[PointOfInterestElementType["Audio"] = 3] = "Audio";
})(PointOfInterestElementType || (PointOfInterestElementType = {}));
//# sourceMappingURL=point-of-interest.js.map