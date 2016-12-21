import { PointOfInterest, PointOfInterestElementType } from '../models/point-of-interest';

var poi = new PointOfInterest("9", "The Orchard", "From private garden to community space", -26.173365, 28.074303);

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Aerial view of the College grounds taken in 1931. The “Orchard” is the plume like shape in the centre of the bottom half of the picture.",
    furtherText: `
    <p>
    School grounds bordered by Norfolk pine trees planted by the Brothers at the outset of establishing the property, in consultation with the government’s forestry department.  The orchard was planted with fruit trees; peach and fig. The avenues in the orchard area were planted with cedar trees. 
    </p>
    <p>
    Brother Henry, who along with Brother Florian (the first College Principal) was a keen botanist and they were both responsible for establishing the gardens and trees. Br Florian was known for his planning and landscaping, Br Henry for his tending to plants and shrubs. There was even a nursery for seedlings reported to have existed at the college in the early days. 
    </p>
    <p>
    The rectangular space at the top left of the orchard area was a vegetable patch from which fresh produce was procured for the dining room. Today a vegetable patch still exists in the Orchard but is now situated on the far western perimeter of the college grounds.
    </p>
    `,
    url: "assets/images/points-of-interest/03.101.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Front of College viewed through some of the orchard trees in c.1932-35.",
    furtherText: `
    <p>
    In the archive there is no date associated with this picture however due to the lack of statue in the front niche (above the main steps) and the height of the trees it can be estimated at c 1932-1935.
    </p>
    <p>
    The Orchard was a private area in the college grounds for use of the Brothers and was given the name of ‘crows’ garden’ by the boys.  
    </p>
    <p>
    Edward Joffe, matric c. 1948, in his book Before Mandela’s Rainbow recalled:
    <blockquote>
    “Facing the College’s main buildings across the driveway stood an orchard the size of a soccer field, entry to which was absolutely forbidden. Few foolhardy lads had ever courted disaster by entering that sanctuary where the Brothers meditated, enjoyed a quiet drag, or simply escaped to take respite from their charges” (Joffe 2013:39)
    </blockquote>
    </p>
    <p>
    Frank Hollingworth, staff member since 1979, recalls that one pupil who had been at ‘Obs’ in the 1950s told him he was very disappointed on joining the school to find out that the boys were not allowed to enter, for it had been one of the reasons he had asked his parents to send him to Obs in the first place – in the hope of fresh fruit on demand!
    </p>
    `,
    url: "assets/images/points-of-interest/09.01a.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "“Cedar Avenue” in 1934.",
    furtherText: `
    <p>
    Cedar Avenue was the name given to the pathway around the perimeter of the orchard. Cedar Avenue exists today as the pathway that runs between the Pre Primary school and the open area in the orchard, down to the western perimeter of the College grounds. From the 1931 image (card 1) you can make out original the plume shape of the planting, however by the 1950s further planting on the south side of the orchard had extended the orchard into a heart shaped area. The ‘plume’ was thus the left hand side of the heart viewed from the west towards the east (the direction of the photograph in card 1). 
    </p>
    `,
    url: "assets/images/points-of-interest/09.10a.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Aerial view of the college taken in approx. 1961.",
    furtherText: `
    <p>
    This image shows how densely planted the Orchard was at its peak (at the top of this picture) and it remained like this until the late 1980s. It also gives a sense of the heart-shape that the Orchard became with the extra planting on the side towards Eckstein street (the road visible to the left of the photograph). From this view (east to west) the top of the earlier plume shaped orchard is to the top right in the picture.
    </p>
    <p>
    This image shows how densely planted the Orchard was at its peak (at the top of this picture) and it remained like this until the late 1980s. It also gives a sense of the heart-shape that the Orchard became with the extra planting on the side towards Eckstein street (the road visible to the left of the photograph). From this view (east to west) the top of the earlier plume shaped orchard is to the top right in the picture.
    </p>
    `,
    url: "assets/images/points-of-interest/09.15.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Painted tree stumps created during Mindworks in 2015 by the Primary school and now positioned, with a marble run, in the part of the Orchard used by the Pre-Primary as a playground.",
    furtherText: `
    <p>
    During 2014 and 2015 some of the trees needed to be felled to maintain the overall health of the Orchard area. The wood from these trees was kept to be repurposed by the pupils during Mindworks (a biannual programme for the Primary school run by the parent body engaging the learners in skills not usually timetabled in the regular curriculum). The painted stumps are used for games, outdoor furniture and in one corner, a bug hotel.  Other Mindworks and Arts-Festival programs (the High School equivalent to Mindworks) have included the creation of murals, the mosaic works seen in the High School and Intermediate quads, as well as the clay-hands Vertical Garden on the side of the High school art room. One year a Labyrinth was created in the Orchard and is maintained for use by the pupils during break times.
    </p>
    `,
    url: "assets/images/points-of-interest/09.02.jpg",
    reference: "Image: C Kamana"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Carols by Candlelight in The Orchard, December 2016.",
    furtherText: `
    <p>
    Today The Orchard is used by all sections of the school and for a wide range of reasons. Daily during term time, unless it’s raining, it is used as a grassy and shaded play area at break time. The Three2Six children congregate in the Orchard on arrival at school before they go off to class and a selection of extra-murals take place in its four corners. Primary aftercare is supervised here and after school, all ages (students, staff and parents) know it’s the place to find Sammy the ice-cream seller. 
    </p>
    <p>
    Other Marist and school community happenings take place in The Orchard throughout the year; the Stations of the Cross is led around the Orchard by the Brothers on Good Friday and Carols by Candlelight is held in December. 
    </p>
    `,
    url: "assets/images/points-of-interest/09.14.jpg",
    reference: "Image: C Kamana"
});

export var Nine = poi;