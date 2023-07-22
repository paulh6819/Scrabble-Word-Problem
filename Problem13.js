import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");


//What is the shortest word that contains all 5 vowels?


function allVowelsShortest (words){

    let wordsWithAllVowels = [];


         for ( let word of words){

                if ( word.includes("A") && word.includes("I") && word.includes("U") && word.includes("O") && word.includes("E")){

                    wordsWithAllVowels.push(word);

                }
         }

         let accumulator = "aaaaaaaaaaaaaaaaaaaa"

         for ( let word of wordsWithAllVowels){
            if ( word.length < accumulator.length){

                accumulator = word;
            }
              
                
         }

         return accumulator;
}

console.log(allVowelsShortest(scrabbleWords));