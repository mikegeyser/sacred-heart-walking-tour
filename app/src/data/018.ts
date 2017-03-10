
import { PointOfInterest } from '../models/point-of-interest';

var poi = new PointOfInterest("018", "Foundation Quad", "This block of classrooms was added in 1935s.", -26.17278, 28.075545);

poi.themes = ["Grounds and Buildings","Learning"];

poi.addElement({
    type: 1,
    text: "1935, the “new block”. Now part of the Foundation Quad. ",
    furtherText: `
    <p>For sometime, the steady increase in the number of students seeking admission into the College had emphasised the need for additional class-rooms and further staff accommodation, so to meet this need, Mr. E. L. Keenor, the architect who had planned the wing added in 1931, designed a two-storey block of twelve classrooms with an exterior that matched the already established College buildings. He was careful to provide in his plans for the latest improvements in acoustics and comfort.</p>
<p>In addition to the twelve classroom block built under Mr. A Bennett in 1935, a gamesroom, extra lodgings for the support staff, and a bicycle shed with racks for some 170 bicycles, were constructed by Mr. J. E. Morren.</p>
<p>Two days before the re-opening of the College, which took place that year on the 28th of January, the new buildings were blessed by His Excellency the Rt. Rev. Bishop O&#39;Leary, O.M.I, and dedicated to the Christian education of youth. He was assisted in the ceremony by Rev. Fathers E. Roux, O.M.I., and Abramo, O.M.I, of Yeoville and Kerk Street parishes.</p>
<p>(text adapted from the 1935 Maristonian p55)</p>

    `,
    url: "assets/images/points-of-interest/18.01c.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "The interior of one of the new classrooms added in 1935. ",
    furtherText: `
    <p>Today these classrooms are used for some of the Junior Primary classes (grades 1 to 3).</p>

    `,
    url: "assets/images/points-of-interest/18.10.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "The Knights of the Altar in 1963 pictured on the staircase of the ‘new block’ as it was still known thirty years after it opened. ",
    furtherText: `
    <p>The Knights of the Altar was a society established by Brother Otto whilst posted on mission to a Marist school in China in 1938. Their function was, as a group of boys who were responsible for duties assisting Ministers during Mass, “to form a worthy guard of honour of our Divine Eucharistic King”. The Knights of the Altar was first established in South Africa at Obs in 1960 and thereafter in other Marist schools in the Republic. Brother Otto is pictured centre in this image, with D. Ball (Supreme Grand Knight) to his left and P. Abraham (Vice-Supreme Grand Knight) to his right.</p>

    `,
    url: "assets/images/points-of-interest/18.11.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "Until the addition of a roof over the staircase in 1969 after renovations to the quad, this spot in the College was used for official group photographs. ",
    furtherText: `
    
    `,
    url: "assets/images/points-of-interest/18.13.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "Today the Primary School children sometimes play with marbles in the Foundation Quad – supposedly only at break times. In earlier days at the College, certainly between the 1940s and 1960s, this area between the Memorial Chapel and where the Science Block now stands was known by the boys as the best place to play. ",
    furtherText: `
    <p>This photograph, captioned “venue for the annual ‘Marble Season’” was posted on the Sacred Heart/Marist Obs Alumni Facebook page by Howard Thomas, matric in 1963. He took a series of photographs in his final year at the College on a Brownie Box camera, including this one. Howard Thomas is not the only alumnus to recall marbles being a part of school life. Edward Joffe, a pupil in the 1940s, described the following in his memoirs:</p>
<blockquote>
<p>“The marbles site was the driveway between the buildings and the main rugby field. Proximity to the classrooms enabled us to extract every last moment of playing time before the bell summoned us back to lessons. The area was sheltered by pine trees and riddled with small shallow craters used to play holey-holey at which the Portuguese guys were particularly skilled. This game was vaguely reminiscent of billiards without the cue and demanded remarkable dexterity.”   </p>
<footer>Joffe 2013:89</footer>

</blockquote>

    `,
    url: "assets/images/points-of-interest/18.25.jpg",
    reference: "Image: Howard Thomas"
});

export var eighteen = poi;