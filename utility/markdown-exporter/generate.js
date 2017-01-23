"use strict";
const fs = require("fs");
const marked = require("meta-marked");
const converter = require("number-to-words");
let dir = '../../data';
fs.readdir(dir, (err, directories) => {
    for (let poi_number of directories) {
        fs.readFile(dir + `\\${poi_number}\\poi-${poi_number}.md`, 'utf8', (err, data) => {
            let poi = marked(data);
            // console.log(poi);
            let poi_number_as_words = converter.toWords(poi_number).replace(/[/s|-]/g, '');
            let content = `
import { PointOfInterest } from '../models/point-of-interest';

var poi = new PointOfInterest("${poi_number}", "${poi.meta.title}", "${poi.meta.description}", ${poi.meta.latitude}, ${poi.meta.longitude});

`;
            for (let card_filename of poi.meta.cards) {
                let card_data = fs.readFileSync(`${dir}\\${poi_number}\\${card_filename}`, 'utf8');
                // console.log(card_data);
                let card = marked(card_data);
                let card_content = `
poi.addElement({
    type: ${card.meta.type},
    text: "${card.meta.text}",
    furtherText: \`
    ${card.html}
    \`,
    url: "${card.meta.url}",
    reference: "${card.meta.reference}"
});

`;
                content += card_content;
            }
            content += `export var ${poi_number_as_words} = poi;`;
            fs.writeFile(`../../app/src/data/${poi_number}.ts`, content, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
});
//# sourceMappingURL=generate.js.map