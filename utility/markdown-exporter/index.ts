import { AllPointsOfInterest } from '../../app/src/data';
import * as fs from 'fs';
import * as toMarkdown from 'to-markdown';

const poiPrefix = "out/POI-000";

for (let key in AllPointsOfInterest) {
    let poi = AllPointsOfInterest[key];
    let paddedId = "000".substring(0, 3 - poi.id.length) + poi.id;

    let dir = "out/" + paddedId;
    fs.rmdir(dir, (err) => {
        fs.mkdir(dir, (err) => {
            let poiPrefix = "poi-000";
            let poiFileName = poiPrefix.substring(0, poiPrefix.length - poi.id.length) + poi.id;
            let cardFiles = [];

            for (let i = 0; i < poi.elements.length; i++) {
                let element = poi.elements[i];
                let index = i + 1;

                let furtherTextAsMarkdown = (element.furtherText) ? toMarkdown(element.furtherText) : null;
                let cardPrefix = poiFileName + '-card-000';
                let cardFileName = cardPrefix.substring(0, cardPrefix.length - 1) + index;
                
                cardFiles.push(cardFileName);

                let body = `---
  id: ${index}
  type: ${element.type}
  text: "${element.text}"
  url: ${element.url}
  reference: "${element.reference}"
---
${furtherTextAsMarkdown}
        `

                fs.writeFile(dir + "/" + cardFileName + '.md', body, (err) => {
                    if (err) console.log(err)
                });
            }

            let body = `---
  title: ${poi.title}
  description: ${poi.description}
  latitude: ${poi.latitude}
  longitude: ${poi.longitude}
  cards:
`;

            for(let card of cardFiles){
                body += `    - ${card}.md
`;
            }
            body += '---';
            
            fs.writeFile(dir + "/" + poiFileName + '.md', body, (err) => {
                if (err) console.log(err)
            });
        });
    });

}