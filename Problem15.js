

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");



//Which of the letters Q, X, and Z is the least common?



function leastCommonQXZ (words){

    let dictLettersQXZ = { Q:0, X:0, Z:0};

    
        for ( let word of words){

                  for ( let char of word){

                       if ( char === "Q"){
                           
                                dictLettersQXZ["Q"] += 1
                       } else if (char === "X"){

                              dictLettersQXZ["X"] += 1
                       }else if ( char === "Z"){
                             
                            dictLettersQXZ["Z"] += 1
                       }
                  }
        }

        let accum = 9000000000000;
         let result = "";
        for ( let key in dictLettersQXZ){

                 if( dictLettersQXZ[key] < accum  ){
                      
                    accum = dictLettersQXZ[key];
                    result = key;
                        
                 }
        }
  
          return result
}


console.log(leastCommonQXZ(scrabbleWords))