import { PointOfInterest, PointOfInterestElementType } from '../models/point-of-interest';

var poi = new PointOfInterest("17", "School Nurses", "Hospitals, Matrons and Nurses.", -26.173100, 28.075287);

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "The Red Cross flag and the Tricolour with Sacred Heart flying above Marist Brothers College, Koch Street in c.1900.",
    furtherText: `
    <p>
    Marist Brothers College, Koch Street served as a hospital during the Second Anglo-Boer war. Despite the war going on the school remained open though its pupil numbers were fairly diminished and classrooms were split between school rooms and hospital wards. The hospital, run by the French Red Cross and serviced by Marist Brothers and Sisters from Holy Family (then their Convent was at End Street) treated wounded from both sides of the conflict, both Boer and British. The hospital was given protection under the French Tricolore flag and it was at this time that the name Sacred Heart (Sacré Coeur) was appropriated by the school. The emblem of the Sacré Coeur was floated above the school as a flag to denote its neutrality in the war.       
    </p>
    `,
    url: "assets/images/points-of-interest/17.18b.jpg",
    reference: "Image: The Star, Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Brothers wearing Red Cross armbands in c1900. Brother Frederick is seated in the picture.",
    furtherText: `
    <p>
    The Red Cross is an International Organisation established in 1863 has its headquarters based in Geneva. Hence the label given to this photograph “. That the school/hospital was under the French arm of the Red Cross is demonstrated by the Tricolour Flag hung on the wall with a picture of the then French President Émile Loubet and the monogram RF (République Française) displayed beneath.
    </p>
    `,
    url: "assets/images/points-of-interest/17.07c.jpg",
    reference: "Image: The Star, Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "A classroom used as hospital ward with the wounded attended by Brothers and Sisters c1900.",
    furtherText: `
    <p>
    The wounded from this conflict between 1899-1902 were brought in daily. The French Red Cross made sure that both the school and the hospital benefited from the arrangement – the Marists were allowed access to precious military rations, a luxury in those times, and the wounded treated equally despite their ‘side’ were afforded treatment and respite in comfortable surroundings. 
    </p>
    `,
    url: "assets/images/points-of-interest/17.06b.jpg",
    reference: "Image: The Star, Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Matron Allpass attending to a pupil in the Infirmary, 1938.",
    furtherText: `
    <p>
    The Infirmary (a consulting room with dispensary) and Sanatorium were situated in the upstairs of the block added in 1932 to the school and is now part of the Marist Provincial offices. Though these rooms were on the same floor as the senior boarders there was no direct access between the two areas and access was gained by a staircase from the ground floor.  
    </p>
    <p>
    The school Matron was a nurse-cum-mother figure for the boys who boarded at Sacred Heart. Though she tended to those who were unwell at any time during the school term her busiest time of the week was on Saturdays during the rugby season. Several matches a day were played and she was on duty throughout to assist any injured boys (including those from visiting schools). 
    </p>
    `,
    url: "assets/images/points-of-interest/17.19.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Sanatorium for boarders in the 1940s.",
    furtherText: `
    <p>
    There were ten beds available for sick boarders in the Sanatorium who needed to be separated from the rest of the boys in case they spread infectious diseases or simply needed rest away from the noise of the dormitories. Matron had her own rooms nearby too; in addition to the Sanatorium and Infirmary she had her own private suite allowing her to stay over if boarders required night time nursing.  
    </p>
    `,
    url: "assets/images/points-of-interest/04.12.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "Matron Blow was the last Matron at the school, serving for 17 years until the boarders were phased out in the mid 1970s.",
    furtherText: `
    <p>
    Matron Blow’s daughter-in-law Beverly Fulton Blow, ballet teacher (until 2016) at Sacred Heart College for 36 years and prior to that for nearly a decade at Yeoville ‘s Holy Family Convent, remembers coming to fetch her mother-in-law most Saturdays after the sports fixtures had finished. The Blow family would be treated to tea and cake in the Brother’s refectory, now the College coffee shop, before Matron Blow would take some respite from her duties at school. Matron’s time off in the week was on Saturday afternoons until Sunday afternoon when she had to be back in time for the boarders to return to school from their own weekend exeats. 
    </p>
    <p>
    Matron Blow’s great-granddaughter is, in 2017, a matriculant at Sacred Heart College.
    </p>
    `,
    url: "assets/images/points-of-interest/17.21.jpg",
    reference: "Image: Marist Archive"
});

poi.addElement({
    type: PointOfInterestElementType.Image,
    text: "The Epaulette worn by School Nurse Peta-Anne Munnik in 2017.",
    furtherText: `
    <p>
    Under the 1978 Nurses Act the epaulettes and badges worn by a registered and practicing nurse are protected. By law they must be worn whilst on duty (with a few specified exceptions. Nurse Munnik’s maroon epaulette denotes that she is a Registered General Nurse and the bars underneath signify particular capacities in the following areas, community nursing (yellow), psychiatrics (black) and midwifery (green). The lamp within the blue enameled edged badge, the Badge of the South African Nursing Council, alludes to Florence Nightingale ‘the lady with the lamp’ considered as the creator of modern nursing.  
    </p>
    <p>
    As well as being fully informed of and able to attend to the special medical needs of the learners and staff (for example any existing conditions or allergies that need specific ministrations) Nurse Munnik, staff since 2010, organizes staff training for First Aid as part of the Health and Safety Committee and assists support staff to get access to health care. 
    </p>
    <p>
    Nurse Munnik’s rooms are located in the lower ground floor under the Primary School reception office. In the 1960s these rooms were workshops but with noise from machinery disturbing classes above these were moved to the new science block from 1973/4 and repurposed as nursing rooms from that time. Around this time boarding at the school finished and the previous senior dormitories and matron’s quarters were readapted to classrooms and offices. 
    </p>
    `,
    url: "assets/images/points-of-interest/17.11.jpg",
    reference: "Image: C Kamana"
});

export var seventeen = poi;
