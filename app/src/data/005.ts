
import { PointOfInterest } from '../models/point-of-interest';

var poi = new PointOfInterest("005", "Transport", "School transport and its evolution.", -26.173848, 28.07519);

poi.themes = ["Koch Street","College Characters","Alumni","Grounds and Buildings","Stories"];

poi.addElement({
    type: 1,
    text: "Early school transport was by horse and cart. In this image from c.1896 ‘Boarders and Brothers’ from Koch street are pictured on a school outing.",
    furtherText: `
    
    `,
    url: "assets/images/points-of-interest/05.22.jpg",
    reference: "Image: The Star, Catholic History Bureau"
});


poi.addElement({
    type: 1,
    text: "1903. Pupils were provided with stabling for their horses (and a donkey!) at Koch Street.",
    furtherText: `
    <p>In a 1965 article in the Rand Daily Mail, the journalist H. Carruthers (an alumnus of Koch Street), captioned this picture “a bunch of students about to ride home at the end of the day” and noted that stabling for horses was one of the perks students could enjoy, advertised by the school as late as 1903. The 1999 Sacred Heart Yearbook (p66) reprinted this picture with the caption: <em>Transport to school has changed somewhat. But is it as much fun?</em></p>

    `,
    url: "assets/images/points-of-interest/05.08c.jpg",
    reference: "Image: Rand Daily Mail, Marist Archive"
});


poi.addElement({
    type: 1,
    text: "c.1945 -  Cyclists on the driveway in front of the main school building.",
    furtherText: `
    <p>The 1935 Maristonian (p55) records that along with the building of the new quad (now the Primary School Foundation Quad) a new bike shed was built, with spaces for 170 bicycles. This would have been at the back of the changing room facilities, where the music rooms now stand. During the late 1930s to 1950s the bicycle would have been the choice of transport for many of the boys. </p>
<p>There was an active cycling club for boarders, which organised outings most weekends together with the clubs at Koch Street and St David’s. Sometimes they would cycle as far as Little Falls in Roodeport. The first recorded Marist cyclists in Johannesburg took part in a procession for the Coronation of King Edward VII in 1902. More recently, in 2015 and 2016, student and community cyclists have taken part in the ‘Hearts into the Future’ cycle ride around the city organised by Sacred Heart on Heritage Day (in 2015 and 2016) to raise awareness against xenophobia, whilst connecting participants with each other and their local heritage.</p>

    `,
    url: "assets/images/points-of-interest/05.10.jpeg",
    reference: "Image: Sacred Heart College Archive"
});


poi.addElement({
    type: 1,
    text: "Number 22 bus (c. 1965) stopped right outside the College gates.",
    furtherText: `
    <p>Between the 1960s and 1980s the 22 bus followed a route from Cyrildene, through Observatory and into town via Yeoville. This route connected the Sacred Heart nursery school campus, then in Yeoville (at the Holy Family Convent), and the main school at Observatory. Currently the 421 Metrobus route runs along a similar route. The 22 bus was the choice of transport for many pupils, while others took trams as far as Yeoville and then walked to Eckstein Street. According to maps and other documents in Museum Africa’s archive, a tram route was proposed in 1903 to run up to and stop in Eckstein Street but the line was only constructed as far as Yeoville.</p>

    `,
    url: "assets/images/points-of-interest/05.19.jpg",
    reference: "Image: Sacred Heart College Archive"
});


poi.addElement({
    type: 1,
    text: "Parking at Sacred Heart College in 1963. Photograph taken by then matric, Howard Thomas.",
    furtherText: `
    <p>The image below shows some learners in 1984 who came to school with their own cars or on motorbikes. It is no longer permissible for learners to bring their own cars or other vehicles (other than bicycles) to College for reasons of health and safety, as well as the logistics of parking and insurances. </p>
<figure><img src="assets/images/points-of-interest/05.14.jpg" alt="">
  <figcaption>Image: Marist Archive</figcaption>
</figure>

    `,
    url: "assets/images/points-of-interest/05.24.jpg",
    reference: "Image: Howard Thomas"
});


poi.addElement({
    type: 1,
    text: "One of the school buses in 2016.",
    furtherText: `
    <p>There are two private school bus routes that collect learners – one coming from the west of town (Parkview) and one coming from the south (Robertsham). Other students come by taxi, a few on foot, but the vast majority are driven to school by parents, carers and guardians. The same school buses also collect and return the Three2Six learners to their homes in areas such as Berea and Hillbrow in the afternoons.</p>

    `,
    url: "assets/images/points-of-interest/05.11.jpg",
    reference: "Image: C Kamana"
});

export var five = poi;