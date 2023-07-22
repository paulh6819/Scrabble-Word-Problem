import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");



//What are all of the words with no vowel and not even a Y?


function noVowelsNoY (words){


      let result = [];

       for (let word of words){
           
                if (!word.includes("A") && !word.includes("E") && !word.includes("I") && !word.includes("O") && !word.includes("U") && !word.includes("Y")){
                     
                       result.push(word)
                }
       }
       return result
}

console.log(noVowelsNoY(scrabbleWords))