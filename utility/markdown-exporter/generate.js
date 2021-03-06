"use strict";
const fs = require("fs");
const fse = require("fs-extra");
const marked = require("meta-marked");
const converter = require("number-to-words");
const path = require("path");
let dir = path.join(__dirname, '../../data');
fs.readdir(dir, (err, directories) => {
    for (let poi_number of directories) {
        fs.readFile(dir + `\\${poi_number}\\poi-${poi_number}.md`, 'utf8', (err, data) => {
            console.log(`Processing POI ${poi_number}.`);
            let poi = marked(data);
            // consolBe.log(poi);
            let poi_number_as_words = converter.toWords(poi_number).replace(/[\s|-]/g, '');
            let themes = JSON.stringify(poi.meta.themes);
            let content = `
import { PointOfInterest } from '../models/point-of-interest';

var poi = new PointOfInterest("${poi_number}", "${poi.meta.title}", "${poi.meta.description}", ${poi.meta.latitude}, ${poi.meta.longitude});

poi.themes = ${themes};
`;
            for (let card_filename of poi.meta.cards) {
                console.log(`   ${card_filename}.`);
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
            fs.writeFile(path.join(__dirname, `../../app/src/data/${poi_number}.ts`), content, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
});
let source_image_directory = path.join(__dirname, '../../images/points-of-interest');
let target_image_directory = path.join(__dirname, '../../app/src/assets/images/points-of-interest');
fse.copy(source_image_directory, target_image_directory, (err) => {
    if (err)
        console.log(err);
});
//# sourceMappingURL=generate.js.map