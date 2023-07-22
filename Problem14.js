



import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");





function longestNOvowelsPractice(words){

    let wordsWIthNoVowels = [];
    
    let accumlator = ""
    
          for ( let word of words){
              
                  if ( !word.includes("I") && !word.includes("E") && !word.includes("O") && !word.includes("U") && !word.includes("A")){
                    wordsWIthNoVowels.push(word)
                  }
          }
        
    
      
    
      for (let word of wordsWIthNoVowels ){
    
           if( word.length > accumlator.length){
                accumlator = word
           }
      }
    
    
    
    
          return accumlator
    }
    
    console.log(longestNOvowelsPractice(scrabbleWords));