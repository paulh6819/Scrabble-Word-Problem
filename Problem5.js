import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");


//What are all of the words that have no E or A and are at least 15 letters long?

function noEOrAATleast15Letters (words){

    let result = [];

    for (let word of words){

           if (!word.includes("A") && !word.includes("E") && word.length >= 15){
            result.push(word);

           }
    }
    return result 
}

console.log(noEOrAATleast15Letters(scrabbleWords));