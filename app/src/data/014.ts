
import { PointOfInterest } from '../models/point-of-interest';

var poi = new PointOfInterest("014", "Mandela", "Grandparent, Pied Piper, Mediator and President", -26.172918, 28.075211);

poi.themes = ["Brothers today at Sacred Heart","Ethos","College Characters","Alumni","Socio-Political Context","Stories in the story"];

poi.addElement({
    type: 1,
    text: "President Nelson Mandela visiting the College in 1998.",
    furtherText: `
    <p>Almost everyone connected to Sacred Heart College during the 1990s/2000s has their own recollections of Nelson Mandela’s frequent visits to the College. To include all the stories would be impossible; the following slides give some insight into the special relationship that Nelson Mandela and his family have had with Sacred Heart College over the years.</p>
<p>Some of the former President’s visits were made in an official capacity (as when he took the lead in fundraising events for bursary schemes, new buildings or renovations), others more personal (parents’ evenings and watching his grandchildren in school productions). Some visits were impromptu, such as his attendance at the 16th June Family Fun Day (2001), much to the consternation of his security team. Even the scheduled events caused a stir for his team. Frank Hollingworth recalled Mandela’s attendance at the ‘Bugsy Malone’ school production, where one scene required cast members to burst into the hall brandishing weapons to the sound of gun fire. Mandela’s protection team jumped up and prepared to react, much to the amusement of the cast, audience and President, who had already assessed that High School pupils carrying custard-guns were unlikely to be a national security threat. </p>

    `,
    url: "assets/images/points-of-interest/14.12b.jpg",
    reference: "Image: Sacred Heart College"
});


poi.addElement({
    type: 3,
    text: "Brother Neil describes the ‘Pied Piper’ of College.",
    furtherText: `
    <p>Artist Willem Boshoff on Mandela:</p>
<blockquote>
<p>“For some years now my children attended the same school as Mr. Mandela&#39;s grandchildren, Sacred Heart College in Observatory, Johannesburg. We regularly see him at school plays and other functions. He surprised all of us with his lack of bitterness after his four neves sentences [slang for more than a seven-year imprisonment], and with his astute and accommodating leadership. However, what impressed me most about him is that, in spite of staggering commitments of national and international dimension, in spite of (perhaps it is because of) the many years of life missed while we [sic.] was in jail, he affords his (rather naughty) grandchildren the time and respect one might prudently bestow upon royalty, presidents and the like.”                                                    </p>
<footer><a href="http://www.davidkrut.com/bioBoshoff.html">http://www.davidkrut.com/bioBoshoff.html</a> </footer>

</blockquote>

    `,
    url: "api.soundcloud.com/tracks/305085270",
    reference: "Image: Sacred Heart College, Audio: C Kamana"
});


poi.addElement({
    type: 3,
    text: "2002, Nelson Mandela and his grandsons view the solar eclipse. From the left are Zuko Dlamini, Mbuso Mandela, Andile Mandela. ",
    furtherText: `
    <p>Perhaps one of these blazers was the one that featured in the tale recounted by Terry Sawyer, College Bursar since 2001, in the attached audio clip?</p>

    `,
    url: "api.soundcloud.com/tracks/305106787",
    reference: "Image: Debbie Yazbek / IOL, Audio: Caroline Kamana"
});


poi.addElement({
    type: 3,
    text: "Brother Joseph Walton (Primary School Principal in the 1990s) recalls some of Mandela’s visits to the College. ",
    furtherText: `
    <p>The 1999 College Yearbook captioned a photograph of Nelson Mandela visiting a Pre-Primary classroom with his wife Graça Machel, with “A very special grandfather came to visit the nursery school”. The Pre-Primary holds an annual breakfast to celebrate the important role that all the learners’ grandparents, and other senior caregivers, play in the lives of the children. For each child, the attendance of their own grandparent or special visitor is a very meaningful moment in their Pre-Primary career as it demonstrates how their own family is a part of the larger unit of the Sacred Heart College community. Family spirit is a fundamental part of Marist and thus College ethos. </p>

    `,
    url: "api.soundcloud.com/tracks/305095578",
    reference: "Image: Sacred Heart College, Audio: Caroline Kamana"
});


poi.addElement({
    type: 1,
    text: "Some staff were gifted copies of Mandela's autobiography.",
    furtherText: `
    <figure><img src="assets/images/points-of-interest/14.11b.jpg" alt="">

<figcaption> Brother Joseph (pictured left) with Mandela, meeting a Primary school learner in 1998. (Image: Sacred Heart College)</figcaption>

</figure>

    `,
    url: "assets/images/points-of-interest/14.19b.jpg",
    reference: "Image: Caroline Kamana"
});


poi.addElement({
    type: 3,
    text: "Viashin Govender (Matric 2011) recalls an incident during Grade 1. Pictured above with his parents, sibling and Mandela as described in his audio.",
    furtherText: `
    <p>Viashin Govender matriculated in 2011 and went on to study Engineering and Game Design (Bachelors of Engineering Science in Digital Arts) at Wits University. He is currently completing Honours in the same field. Viashin’s mother, Thiru, was a maths teacher and later Deputy Principal, at Sacred Heart College for seventeen years.</p>

    `,
    url: "api.soundcloud.com/tracks/306341415",
    reference: "(Image and Audio: Viashin Govender)"
});


poi.addElement({
    type: 1,
    text: "Letter written by Nelson Mandela whilst in Pollsmoor Prison to Israel Maisels QC (former alumnus) on the occasion of his 80th birthday.",
    furtherText: `
    <p>This letter represents the interconnectedness of the extended Sacred Heart College community. At the time of writing, in 1985, Nelson Mandela would not have known that the school that his defence attorney during the Treason Trial in the 1960s attended was to become one so dear to his and his family’s heart. </p>

    `,
    url: "assets/images/points-of-interest/34.52b.jpg",
    reference: "Image: Wits University Historical Papers"
});


poi.addElement({
    type: 2,
    text: "Nelson Mandela inducting Brigitte Mabandla as Deputy Minister of Arts and Culture at Luthuli House in 1995. The presence of her son Sibusiso, in school uniform, provoked this response from the President.",
    furtherText: `
    <p>Many members of the first democratically elected government in South Africa chose to send their children to Sacred Heart College. Brother Neil and several of the College staff had flown to Tanzania to help assess and plan for the return of the exiles’ children to South Africa and settlement in South African schools. Many of them joined Sacred Heart College. In the subsequent years the College was the choice of school for the children and grandchildren of the returning exiles. These included the Mandela, Ramaphosa, Ramogopa, Manganyi, Slovo, Letsebe, Motshega, Sisulu, Maharaj and Manthata families but there were many others.</p>

    `,
    url: "https://www.youtube.com/embed/tBx7WteZMF8",
    reference: "Video: Quizzical Pictures / SABC"
});

export var fourteen = poi;