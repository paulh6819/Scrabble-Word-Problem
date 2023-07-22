import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");



//What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?


function noDoubles(words){

    let alphebet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

for ( let word of words){
   for ( let letter of alphebet){

       if ( word.includes( letter + letter)){
           alphebet.splice(alphebet.indexOf(letter), 1)
       }
   }

     

}



    return alphebet
}


console.log(noDoubles(scrabbleWords))


