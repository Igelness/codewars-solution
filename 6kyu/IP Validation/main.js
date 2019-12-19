"use strict"

function isValidIP(str) {
  let array = str.split(".");
  let counter = 0;
  for (let word of array) {
    if(word.toString() != Number.parseInt(word).toString()) {
      return false;
    }
    if (word < 0 || word > 255) {
      return false;
    }
    counter++;
  }
  if (counter != 4) {
    return false;
  } 
  return true;
}