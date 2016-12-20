import { PointOfInterest, PointOfInterestElementType } from '../models/point-of-interest';

var poi = new PointOfInterest("9", "Orchard", "Some random descriptive text", -26.173365, 28.074303);

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/cover.jpg"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/1.jpg"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/2.jpg"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/3.jpg"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/4.jpg"
});

export var Nine = poi;