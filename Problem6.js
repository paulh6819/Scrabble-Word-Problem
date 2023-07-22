import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//What are all of the words that have a B and an X and are less than 5 letters long?


function wordsWithBAndXLessThan5letters(words){

       let result = [];

       for ( let word of words){

             if( word.includes("B") && word.includes("X") && word.length < 5){
                result.push(word)
             }
       }
       return result
}

console.log(wordsWithBAndXLessThan5letters(scrabbleWords))