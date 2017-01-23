import { PointOfInterest, PointOfInterestElementType } from '../models/point-of-interest';

var poi = new PointOfInterest("10", "Grotto", "The statue of Madonna and Child .", -26.173600, 28.075287);

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "A mosaicked pathway leads up to the statue of Madonna and Child.",
    furtherText: `
    <p>
    The Madonna and Child statue was enshrined in a specially prepared corner of the Orchard in 2008 by the Primary School. Known as The Grotto, provides a restful and contemplative area in which to escape the busy play area that the Orchard becomes during aftercare hours.     
    </p>
    `,
    url: "assets/images/points-of-interest/10.01.jpg",
    reference: "Image: C Kamana"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "The statue was created by sculptress Geraldine McGurk, sister of Brother Neil McGurk, former Principal of Sacred Heart College. The facial features are based on that of a nurse that Ms McGurk knew personally and reproduced using a plaster cast technique. ",
    furtherText: `
    <p>
    Mary is traditionally represented wearing blue. Blue dye (ultramarine, made from crushed semi-precious stone lapis lazuli) was a very rare commodity in ancient times and as such was associated with royalty and the wealthy and as such in religious pictures, a heavenly grace bestowed on the worthy. Some sources suggest that in the middle east, where Mary came from, blue clothing was associated with virginity. Blue is the colour of the sky and heavens in Catholic tradition and from where Jesus’s heavenly arrival was proclaimed. Mary’s cloak is edged with gold. Again, this colour refers to royalty and Mary is held to be the “Queen of Heaven”.  Of course, blue and gold are the two colours chosen for the uniform of Sacred Heart College (and the other Marist schools in South Africa). 
    </p>    
    `,
    url: "assets/images/points-of-interest/10.05.jpg",
    reference: "Image: C Kamana"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "The Black Virgin of the Chapel of Our Lady, Fourvière, before whom the Society of Mary was formed in July 1816.",
    furtherText: `
    <p>
    As a black Madonna with child, the statue offers a representation of Mary fitting for Sacred Heart College’s inclusive and diverse community, that speaks to one of the pivotal moments in the calling of Marcellin Champagnat to his life’s work. It was before the black virgin, in the Chapel of Our Lady of Fouvière, that Champagnat and other newly ordained priests pledged to establish the Society of Mary in 1816. For Champagnat, Mary as mother – loving, faithful, giving and guiding - was the ultimate role model and it is from the relationship of Mary to Jesus that Marist principles are derived. In turn, the ethos of Sacred Heart College is based on this. 
    </p>
    `,
    url: "assets/images/points-of-interest/10.06.jpg",
    reference: "Image: Marist Archive"
});

export var ten = poi;
