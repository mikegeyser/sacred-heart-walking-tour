
import { PointOfInterest } from '../models/point-of-interest';

var poi = new PointOfInterest("008", "Ntate Sammy", "Selling Ice-Cream at Sacred Heart College since 1963", -26.173422, 28.074565);


poi.addElement({
    type: 1,
    text: "Excerpt from letter to Alumni Community from Wayne Frank, class of 1993, to let the community know about Ntate Sammy’s upcoming retirement.",
    furtherText: `
    <p>However, in December 2016, Ntate Sammy said he wasn’t sure if he could retire… ‘as long as these gates are open and I can cycle through them I will want to’ … Indeed, Uncle Sammy can still be found (in 2017 at least) after school with his pushbike and freezer selling his ice creams to learners, parents and staff alike. In the same conversation Uncle Sammy said “My name isn’t really Uncle Sammy but one of the boys called me that a long time ago and it just stayed so now I am Uncle Sammy.”</p>

    `,
    url: "assets/images/points-of-interest/08.15b.jpg",
    reference: "Image: Sacred Heart College"
});


poi.addElement({
    type: 1,
    text: "Ntate (or Uncle) Sammy cycling his ice-cream cart to school in 1963, pictured at the junction of Eckstein and Innes Streets.",
    furtherText: `
    <figure>

<div class="video-container">
  <iframe width="854" height="480" [src]="'https://www.youtube.com/embed/ughdThYOKok' | safe" frameborder="0" allowfullscreen></iframe>
</div>

<figcaption>Uncle Sammy talking in 2016 (Video: C Kamana)</figcaption>

</figure>

    `,
    url: "assets/images/points-of-interest/08.01.jpg",
    reference: "Image: Marist Archive"
});


poi.addElement({
    type: 1,
    text: "Text: Uncle Sammy and Pupils (including Wayne Frank writer of letter to Alumni Community) pictured in the 1989 Sacred Heart College yearbook.",
    furtherText: `
    <figure><img src="assets/images/points-of-interest/08.12b.jpg" alt="">

<figcaption>Image: Sacred Heart College (2003 Yearbook))</figcaption>

</figure>

    `,
    url: "assets/images/points-of-interest/08.07b.jpg",
    reference: "Image: Frank Hollingworth / Marist Archive"
});


poi.addElement({
    type: 3,
    text: "Brother Neil McGurk talking about Uncle Sammy, who is pictured here talking with Brother Joseph in 2015.",
    furtherText: `
    <p>Uncle Sammy has been selling his ice creams at Sacred Heart College for nearly 55 years, an integral part and reliable constant in the everyday life of a place that has seen many a transformation. Not only does Uncle Sammy form part of tradition at the College for individuals and families but for the whole school community. During this conversation in which Brother Neil McGurk speaks about Uncle Sammy, he later said of him, </p>
<blockquote>
<p>“characters like that make for a place.”</p>
</blockquote>

    `,
    url: "api.soundcloud.com/tracks/303356674",
    reference: "Image: Frank Hollingworth / Sacred Heart College, Audio: C Kamana"
});


poi.addElement({
    type: 1,
    text: "Ntate Sammy selling ice-creams on Plane Tree Avenue at Inter-House Athletics (September 2015).",
    furtherText: `
    <p>Usually to be found in The Orchard where the After Care operates, if the weather is bad Uncle Sammy can be found with his ice-cream cart (from which he also sells popcorn, chips and suckers for those not after ice-cream) in one of the quads. </p>
<p>As well as coming daily during the school week, Uncle Sammy is a fixture at other school sporting or other events such as the Heritage Day Music Festival. </p>

    `,
    url: "assets/images/points-of-interest/08.09b.jpg",
    reference: "Image: C Kamana"
});


poi.addElement({
    type: 3,
    text: "In this clip a Sacred Heart College family discuss the particular way in which Uncle Sammy plays a part in their lives. ",
    furtherText: `
    <p>Before Uncle Sammy arrives at Sacred Heart, usually at around 2.30 (until after 5pm on a hot day … good for sales!), he stops at the gates of King Edward VII school where he also sells to the boys who attend there.  Therefore, Uncle Sammy is part of the fabric of the wider local community as well as being a familiar figure at Sacred Heart College and in some cases, to whole families. A quick scan of the school and alumni Facebook pages confirms this through the many posts and comments that fondly recall his presence (and presents!).</p>

    `,
    url: "api.soundcloud.com/tracks/303360968",
    reference: "Image: Frank Hollingworth / Sacred Heart College, Audio: F Correira"
});


poi.addElement({
    type: 3,
    text: "A Sacred Heart College learner talks about Uncle Sammy. This image shows Primary and High School learners joining Uncle Sammy in the Orchard.",
    furtherText: `
    
    `,
    url: "api.soundcloud.com/tracks/303362034",
    reference: "Image: F Hollingworth/ Sacred Heart College, Audio: F Correira"
});

export var eight = poi;