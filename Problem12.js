import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");



//Create and print an array containing all of the words that end in "GHTLY"


function allWordsEndWithGHTLY (words){

      let result = [];

      for ( let word of words){
          
             if ( word.slice(-5) === "GHTLY"){

                   result.push(word);
             }
      }

      return result 
}

console.log(allWordsEndWithGHTLY(scrabbleWords))
