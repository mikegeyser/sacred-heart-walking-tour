import * as fs from 'fs';
import * as fse from 'fs-extra';
import * as marked from 'meta-marked';
import * as converter from 'number-to-words';
import * as path from 'path';


let dir = path.join(__dirname, '../../data');

fs.readdir(dir, (err, directories) => {
    for (let poi_number of directories) {

        fs.readFile(dir + `\\${poi_number}\\poi-${poi_number}.md`, 'utf8', (err, data) => {

            let poi = marked(data);
            // consolBe.log(poi);
            let poi_number_as_words = converter.toWords(poi_number).replace(/[\s|-]/g, '');

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
    if (err) console.log(err);
});