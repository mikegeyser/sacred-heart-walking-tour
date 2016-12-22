import { PointOfInterest, PointOfInterestElementType } from '../models/point-of-interest';

var poi = new PointOfInterest("21", "The Swimming Pool", "An unusual shaped pool.", -26.172350, 28.075850);

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "1906, Marist boys on a picnic and swimming outing. There was no swimming pool at Koch Street. ",
    furtherText: `
    <p>
    In the 1929 Maristonian, Gustavus Hartog (Matric of 1894 – the first year of Matriculants from Koch Street – who later became a politician and retired as a South African Senator) wrote about swimming with his peers from Koch Street in places like Sans Souci (now Parkview) and Orange Grove, then places of streams with waterfalls, in the late 1880s/early1890s. Perhaps this photograph was taken at one of those sites.  
    </p>
    `,
    url: "assets/images/points-of-interest/21.45.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Despite not having a school swimming pool, Koch Street boys still took part in swimming galas. ",
    furtherText: `
    <p>
   The boys from Sacred Heart College, Koch Street, used public swimming baths in Yeoville (built in 1890) at Raleigh street in the summer and may have used the private Summit Club in Hillbrow during the winter. 
    </p>
    <p>
    In 1905 an appeal by the then Headmaster, Brother Callixte, was made to parents to consider donating funds to build a swimming pool at Koch Street. This project was never realized. 
    </p>
    `,
    url: "assets/images/points-of-interest/21.09b.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "The school swimming pool was built to imperial measures – 25 yards in length and 15 yards wide - and opened in 1930.",
    furtherText: `
    <p>
    On 4th October 1930, Sir William Dalrymple, opened the swimming pool. Brother Jordan (Principal in the 1950s) wrote, in a history of the Marists in South Africa up until 1955, of Dalrymple ‘addressing the throng’ at the opening of the school pool. Indeed, quite a crowd is shown in this photograph taken at the opening ceremony. Dalrymple, a Randlord, was likely asked to open the pool whilst acting as Chairman of the Council of the University of the Witwatersrand at the time the pool opened. Dalrymple and his wife, Lady Isobel, were also famed for their hospitality and for having one first privately owned swimming pools at their home in Westcliff. It isn’t recorded in Brother Jordan’s history if there was a further connection around a passion for swimming. 
    </p>
    <p>
    The view, towards the structure at the back of the pool, is towards the eastern perimeter of the school grounds. The small trees are today lofty pines demarcating the edge of Steyn Street. 
    </p>
    `,
    url: "assets/images/points-of-interest/21.02.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Pool games in the 1940s.",
    furtherText: `
    <p>
    A series of nine postcards – early marketing materials – were produced for Sacred Heart College in the 1940s. This one shows some pool games, likely taking place during a swimming gala. Not all pool activities involve swimming lengths. Joffe, a school boy here in the 1940s, wrote in his memoires about slipping unnoticed over the school walls and climbing into the locked pool area with school friends for illicit midnight swims (Joffe 2013:68). In the 1962 Maristonian a boy recounted the tale of a tail in the pool. Another boy, as a prank, had let loose his pet snake in the pool. Thankfully it was retrieved the same day. In the 1980s synchronized swimming was offered as a school sport and today the swimming team still participate in the Midmar Mile, as they have done since the late 1980s.  
    </p>
    `,
    url: "assets/images/points-of-interest/21.21.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "In 1961 the pool was extended to include metric lengths and its surrounds were upgraded. This photograph was taken from the Old Chapel. ",
    furtherText: `
    <p>
    Tiered seating was added to accommodate over 1,200 spectators. The gate entrance (obscured by the tree in this image) was kept from the original 1930 structure. An L-shaped design was selected for the ‘new’ pool to incorporate the old imperial measure of 25 yards along one ‘arm’ of the L and a measure of 25 meters along the other ‘arm’. Both arms were 15 yards wide. The metric side runs north-to-south and was included to conform to the requirements of Olympic distances. Just a few years before the refurbishment, in 1956, Tony Briscoe (matric 1955) swam for South Africa at the Olympics in Melbourne.  
    </p>
    `,
    url: "assets/images/points-of-interest/21.03.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "In 2010, Sacred Heart College received an award from the National Lottery Distribution Trust Fund (NLDTF) to refurbish the pool area. ",
    furtherText: `
    <p>
    The baby pool was added, shades were erected over the spectator stands and the starting blocks were remodeled. A mosaic was added to the bottom of the pool depicting the logo of the Sacred Heart Dolphins, the school swimming team.   
    </p>
    <p>
    The Inter House Galas (both for High School and Junior) remain one of the most looked forward to annual events for learners – house chants are sung, teams are cheered and costumes are worn. Over time have swimming costumes changed from non-uniform, to red for everyone (not only Valerian House) during the 1980s/1990s and today they are Marist blue and gold topped with house-colour swimming caps. Since the Koch street days, swimming galas were always (as were athletics) accompanied by a fancy dress parade or at the very least outfits themed by house or grade and this dressing up continues, some years more participated in than others, as a tradition today. The same silver plated trophies are awarded today to the winning houses that were used in the 1930s, year by year the winning house names are added to the engraving around the cup. These trophies, are kept with other school awards, in a specially designed cabinet under the watchful eye of Memory who runs the Coffee Shop. 
    </p>
    `,
    url: "assets/images/points-of-interest/21.37a.jpg",
    reference: "Image: Sacred Heart College Archive"
});

export var TwentyOne = poi;
