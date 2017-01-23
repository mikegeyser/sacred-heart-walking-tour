
import { PointOfInterest } from '../models/point-of-interest';

var poi = new PointOfInterest("039", "Old Chapel Theatre", "Original chapel - first floor (NW corner) of main building", -26.1729, 28.075287);


poi.addElement({
    type: 1,
    text: "The original school chapel in 1930. ",
    furtherText: `
    <p>The chapel was dedicated to St Benedict with a ceremony that began in the college chapel and continued elsewhere around the college building. This blessing was carried out on 28th January 1926 by the Right Rev. Bishop David O’Leary just days before the boys arrived to begin the first ever academic year at the new Marist school in Observatory. Special rites were performed and prayers said at various points around the school, particularly at the main entrance. The ceremony also marked the naming of the school – originally to be called St Benedict’s, for senior Marist pupils, to differentiate from Sacred Heart College at Koch Street where the junior pupils remained.</p>
<p>The chapel was fitted with wooden pews, an altar rail, several statues and 14 stations of the cross (5 visible here).</p>

    `,
    url: "assets/images/points-of-interest/39.11c.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "The original barrel vaulted ceiling can still be seen today.",
    furtherText: `
    <p>The Johannesburg Heritage Foundation’s data record of Sacred Heart College motivates inclusion of the college buildings in their listings of recorded local heritage sites because “the original chapel on the 1st floor is an outstanding in design having a barrel vaulted roof finished internally in pressed metal ceiling” (JHF 1988).</p>

    `,
    url: "assets/images/points-of-interest/39.03.jpg",
    reference: "Image: C Kamana"
});


poi.addElement({
    type: 1,
    text: "St. Benedict’s chapel in 1951 during Br Leonida’s visit to South Africa (then Marist Superior General).",
    furtherText: `
    <p>This picture shows the chapel dressed for its special visitor, Br Leonida, with fresh floral displays and a carpet running down the aisle. The reredos (the screen behind the altar) is clearly visible with a statue of Jesus with Sacred Heart fixed atop in the chancel (the area set apart for altar from main chapel). Statues of Mary (left before chancel) and Joseph (right before chancel) as well as three of the fourteen stations of the cross are also visible.</p>

    `,
    url: "assets/images/points-of-interest/39.12.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "Statue of Mary from original college chapel now in Memorial Chapel.",
    furtherText: `
    <p>This statue of Mary is positioned to the left, just before the chancel in the Memorial Chapel, just as it was in the original chapel. Likewise, the statue of Joseph can be found to the right, just before the chancel in the Memorial Chapel.</p>
<p>The statue of Jesus with the Sacred Heart is not in the Memorial Chapel, its position has been replaced with a statue of Champagnat. However, the statue of Jesus moved from the original chapel has been mounted in a similar lofty position in the Pre-Primary reception area.</p>
<p>The stations of the cross were all moved from the old chapel and repositioned on the Memorial Chapel interior walls.</p>

    `,
    url: "assets/images/points-of-interest/23.54.jpg",
    reference: "Image: C Kamana"
});


poi.addElement({
    type: 1,
    text: "‘Migrating Imaginations’ an exhibition of art works produced by the Three2Six learners in the Old Chapel Theatre, 2016. ",
    furtherText: `
    <p>The original chapel was converted for other uses once the Memorial Chapel was dedicated in 1956, primarily becoming the place for catechism lessons. The space, known as the Old Chapel Theatre, continues to be repurposed and is now mainly used for arts related teaching and performances, exhibitions, PR events and hospitality. A stage was built into the chancel area and the lighting changed to suit its new uses. The original fixtures, apart from the ceiling, were removed and redistributed (mainly to the Memorial Chapel) around the school.</p>

    `,
    url: "assets/images/points-of-interest/39.07b.jpg",
    reference: "Image: Steffen Fischer"
});

export var thirtynine = poi;