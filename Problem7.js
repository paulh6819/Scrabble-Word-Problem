import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");


//What are all of the words that both start and end with a Y?


function beginsWithYendsWIthY (words){

     let result = [];

      for ( let word of words){

           if ( word[0] === "Y" && word[word.length - 1] === "Y"){
              
                   result.push(word)
           }
      }
    return result
}
 
 console.log(beginsWithYendsWIthY(scrabbleWords))