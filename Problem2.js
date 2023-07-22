import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//What are all of the words containing an X and a Y and a Z?

function everyWordWithXYZ (words){

       let result = [];

       for ( let word of words){

           if ( word.includes("X") && word.includes("Y") && word.includes("Z")){
               result.push(word)
           }
       }

       return result 
}

console.log(everyWordWithXYZ(scrabbleWords));