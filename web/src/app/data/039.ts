
import { PointOfInterest } from '../models/point-of-interest';

var poi = new PointOfInterest("039", "Old Chapel Theatre", "Original Chapel (first floor, NW corner, of main building)", -26.17295, 28.075356);

poi.themes = ["Marcellin Champagnat","Grounds and Buildings","Traditions and Innovations"];

poi.addElement({
    type: 1,
    text: "The original school Chapel in 1930. ",
    furtherText: `
    <p>The Chapel was dedicated to St Benedict with a ceremony that began in the College Chapel and continued elsewhere around the College buildings. This blessing was carried out on 28th January 1926 by the Right Rev. Bishop David O’Leary, just days before the boys arrived to begin the first ever academic year at the new Marist school in Observatory. Special rites were performed and prayers said at various points around the school, particularly at the main entrance. The ceremony also marked the naming of the school – originally to be called St Benedict’s - for senior Marist pupils, to differentiate from Sacred Heart College at Koch Street where the junior pupils remained.</p>
<p>The Chapel was fitted with wooden pews, an altar rail, several statues and 14 Stations of the Cross (five are visible here).</p>

    `,
    url: "assets/images/points-of-interest/39.11c.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "The original barrel vaulted ceiling can still be seen today.",
    furtherText: `
    <p>The Johannesburg Heritage Foundation’s data record of Sacred Heart College motivates inclusion of the College buildings in their listings of recorded local heritage sites because “the original Chapel on the 1st floor is an outstanding in design having a barrel vaulted roof finished internally in pressed metal ceiling” (JHF 1988).</p>

    `,
    url: "assets/images/points-of-interest/39.03.jpg",
    reference: "Image: Caroline Kamana"
});


poi.addElement({
    type: 1,
    text: "St. Benedict’s Chapel in 1951 during Br Leonida’s visit to South Africa (then Marist Superior General).",
    furtherText: `
    <p>This picture shows the Chapel dressed for its special visitor, Br Leonida, with fresh floral displays and a carpet running down the aisle. The reredos (the screen behind the Altar) is clearly visible with a statue of Jesus with Sacred Heart fixed atop in the chancel (the area set apart for Altar from main Chapel). Statues of Mary (on the left before the chancel) and Joseph (on the right before the chancel) as well as three of the fourteen Stations of the Cross are also visible.</p>

    `,
    url: "assets/images/points-of-interest/39.12.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "Statue of Mary from original college Chapel now in the Memorial Chapel.",
    furtherText: `
    <p>This statue of Mary is positioned to the left just before the chancel in the Memorial Chapel, just as it was in the original Chapel. Likewise, the statue of Joseph can be found to the right, just before the chancel in the Memorial Chapel.</p>
<p>The statue of Jesus with the Sacred Heart is not in the Memorial Chapel, its position has been replaced with a statue of Champagnat. However, the statue of Jesus moved from the original Chapel has been mounted in a similar lofty position in the Pre-Primary reception area.</p>
<p>The Stations of the Cross were all moved from the old Chapel and repositioned on the Memorial Chapel interior walls.</p>

    `,
    url: "assets/images/points-of-interest/23.54.jpg",
    reference: "Image: Caroline Kamana"
});


poi.addElement({
    type: 1,
    text: "‘Migrating Imaginations’ an exhibition of art works produced by the Three2Six learners in the Old Chapel Theatre, 2016. ",
    furtherText: `
    <p>The original Chapel was converted for other uses after the Memorial Chapel was dedicated in 1956, primarily becoming the place for catechism lessons. The space, known as the Old Chapel Theatre, continues to be repurposed and is now mainly used for arts-related teaching and performances, exhibitions, PR events and hospitality. A stage was built into the chancel area and the lighting changed to suit its new uses. The original fixtures, apart from the ceiling, were removed and redistributed around the school, mainly to the Memorial Chapel.</p>

    `,
    url: "assets/images/points-of-interest/39.07b.jpg",
    reference: "Image: Steffen Fischer"
});

export var thirtynine = poi;