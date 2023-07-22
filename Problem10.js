import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");


//What are all of the words that have all 5 vowels, in alphabetical order?

function all5VowelsInOrder (words){

         let result = [];


         for ( let word of words){

                let vowels = ["A","E","I","O","U"]
                let vowelsInWord = []
                for (let letter of word){
                   
                     if (vowels.includes(letter)){

                           vowelsInWord.push(letter);
                     }
                }
                
                if (vowels.join("") === vowelsInWord.join("")){
                    result.push(word);
                }
         }
         return result
}

console.log(all5VowelsInOrder(scrabbleWords))