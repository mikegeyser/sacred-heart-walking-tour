
import { PointOfInterest, PointOfInterestElementType } from '../models/point-of-interest';

var poi = new PointOfInterest("005", "Transport", "School transport and its evolution.", -26.1736, 28.0751);


poi.addElement({
    type: 1,
    text: "Early school transport was by horse and cart. In this image from c.1896 ‘Boarders and Brothers’ from Koch street are pictured on a school outing.",
    furtherText: `
    <p>null</p>

    `,
    url: "assets/images/points-of-interest/05.22.jpg",
    reference: "Image: The Star, Catholic History Bureau"
});


poi.addElement({
    type: 1,
    text: "1903 Pupils were provided with stabling for their horses (and a donkey!) at Koch Street.",
    furtherText: `
    <p>In a 1965 article in the Rand Daily Mail, the journalist H. Carruthers (an alumni of Koch Street), captioned this picture “a bunch of students about to ride home at the end of the day” and noted that stabling for horses was one of the perks students could enjoy advertised by the school as late as 1903. The 1999 Sacred Heart Yearbook (p66) reprinted this picture with the caption: <em>Transport to school has changed somewhat. But is it as much fun?</em></p>

    `,
    url: "assets/images/points-of-interest/05.08c.jpg",
    reference: "Image: Rand Daily Mail, Marist Archive"
});


poi.addElement({
    type: 1,
    text: "c.1945 -  cyclists on the driveway in front of the main school building.",
    furtherText: `
    <p>The 1935 Maristonian (p55) records that along with the building of the new quad (now the Primary School Foundation Quad) a new bike shed was built with spaces for 170 bicycles. This would have been to the back of the changing room facilities, where the music rooms now stand. During the late 1930s – 1950s the bicycle would have been the choice of transport for many of the boys. There was an active cycle club</p>
<p>There was an active cycling club for boarders which combined with the clubs at Koch Street and St David’s, used to go for outings most weekends as far as Little Falls in Roodeport. The first recorded Marist cyclists in Johannesburg took part in a procession for the Coronation of King Edward VII in 1902. More recently student and community cyclists have taken part in the ‘Hearts into the Future’ cycle ride around the city organised by Sacred Heart on Heritage Day (in 2015 and 2016) to raise awareness against xenophobia whilst connecting participants with each other and their local heritage.</p>

    `,
    url: "assets/images/points-of-interest/05.10.jpeg",
    reference: "Image: Sacred Heart College Archive"
});


poi.addElement({
    type: 1,
    text: "Number 22 bus (c 1965) stopped right outside the college gates.",
    furtherText: `
    <p>Between the 1960s and 1980s the 22 bus followed a route from Cyrildene, through Observatory and into town via Yeoville. This provided for a connection between the Sacred Heart nursery school campus, then in Yeoville (at the Holy Family Convent), and the main school at Observatory. Currently the 421 Metro Bus route runs along a similar route. The 22 bus was the choice of transport for many whereas other pupils took trams as far as Yeoville and then walked to Eckstein Street. According to maps and other documents in Museum Africa’s archive, the 1903 a tram route was proposed to run up to and stop in Eckstein street but the line was only constructed as far as Yeoville.</p>

    `,
    url: "assets/images/points-of-interest/05.19.jpg",
    reference: "Image: Sacred Heart College Archive"
});


poi.addElement({
    type: 1,
    text: "In 1984 some pupils came to school with their own cars or on motorbikes.",
    furtherText: `
    <p>It is no longer permissible for learners to bring their own cars or other vehicles (other than bicycles) to college. Reasons of health and safety, as well as the logistics of parking and insurances play a part.</p>

    `,
    url: "assets/images/points-of-interest/05.14.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "One of the school buses in 2016.",
    furtherText: `
    <p>There are two private school bus routes that collect learners – one coming from the west of town (Parkview) and one coming from the south (Robertsham). Other students come by taxi, a few on foot, but the vast majority are driven into school by parents, carers and guardians. The same buses also collect and return the Three2Six learners to their homes in areas such as Berea and Hillbrow in the afternoons.</p>

    `,
    url: "assets/images/points-of-interest/05.11.jpg",
    reference: "Image: C Kamana"
});

export var five = poi;