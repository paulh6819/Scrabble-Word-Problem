import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");


//What are all of the words that contain the word CAT and are exactly 5 letters long?


function wordsWithCATand5LettersLong(words){

       let result = [];

       for ( let word of words){

              if ( word.length === 5 && word.includes("CAT")){

                   result.push(word)
              }
       }

    return result
}

console.log(wordsWithCATand5LettersLong(scrabbleWords))