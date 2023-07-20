import { PdfReader } from "pdfreader";
import { readdir, readFile, copyFile } from "fs";

new PdfReader().parseFileItems("input/sample.pdf", function(err, item){
    if (item && item.text){
        // This reads the pdf, but it puts every character on a new line.
        console.log(item.text);
    }
});

const today = new Date(Date.now()).toISOString()
const suffix = ' - ' + today.slice(0,4) + today.slice(5,7) + '.pdf'

const input = "./input/"
const output = "./output/"
const vendorRefs = {
    'Apple': 'A-1',
    'Brian King': 'J-3',
    'Yolo': 'F-12',
}

function getPrefix(filename){
    // have to figure out how to find the vendorName


    // this is a placeholder
    let vendorName = 'Apple';

    return `${vendorRefs[vendorName]} ${vendorName}`
}

readdir(input, function(err, files){
    if(err){
        console.log(err);
    } else {
        for(let originalFile of files){
            const renamedFile = output+getPrefix(originalFile)+suffix;
            copyFile(input+originalFile, renamedFile, (err)=>console.log( err ? err : originalFile + ' was copied to ' + renamedFile));
        }
    }
});