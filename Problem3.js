import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//What are all of the words containing a Q but not a U?

function wordsWithQnoU (words){

   let result = [];

       for ( let word of words){

             if ( word.includes("Q") && !word.includes("U")){

                       result.push(word)
             }
       }

       return result
}

console.log(wordsWithQnoU(scrabbleWords))