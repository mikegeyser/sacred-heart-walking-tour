import { PointOfInterest, PointOfInterestElementType } from '../models/point-of-interest';

var poi = new PointOfInterest("9", "Orchard", "Some random descriptive text", -26.173365, 28.074303);

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/cover.jpg",
    reference: "Unknown"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/1.jpg",
    reference: "Unknown"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/2.jpg",
    reference: "Unknown"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/3.jpg",
    reference: "Unknown"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Some random descriptive text.",
    furtherText: "Some random descriptive text.",
    url: "assets/images/points-of-interest/pre-primary/4.jpg",
    reference: "Unknown"
});

export var Nine = poi;