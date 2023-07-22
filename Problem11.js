import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");


//How many words contain the substring "TYPE”?

function numberOfWordsWIthTYPE (words){

    let result = 0;


       for ( let word of words){

            if (word.includes("TYPE")){

                   result += 1
            }
       }

       return result
}

console.log(numberOfWordsWIthTYPE(scrabbleWords))