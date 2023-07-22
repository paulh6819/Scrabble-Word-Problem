import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");




//Find all words with "UU"

function wordsWithUU (words){

   let result = []

       for ( let word of words){

               if( word.includes("UU")){
                result.push(word)
               }
       }

         return result
}

console.log(wordsWithUU(scrabbleWords))