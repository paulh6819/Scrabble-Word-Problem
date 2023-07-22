
import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//What is the longest palindrome?



function longestPalindrome (words){

           let palindromes = []

           for ( let word of words){

                      let splitReversed = word.split("").reverse().join("");

                      if( word === splitReversed){
                         
                           palindromes.push(word)
                      }
                 
           }

            let accum = 0;
            let result = "";

            for ( let word of palindromes){
                   if( word.length > accum){

                           accum = word.length;
                           result = word
                   }
            }

            return result
}

console.log(longestPalindrome(scrabbleWords));