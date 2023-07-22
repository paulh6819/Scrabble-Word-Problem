import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");


//What are all of the words that have all 5 vowels, in any order?

function all5vowels(words){

       let result = [];

       for( let word of words){
          
            if ( word.includes("A") && word.includes("E") && word.includes("I") && word.includes("O") && word.includes("U")){

                 result.push(word)
            }

       }

         return result
    }

    console.log(all5vowels(scrabbleWords));
