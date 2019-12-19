"use strict"

function getCount(str) {
  var vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let array = str.split("");
  
  for (let letter of array) {
    if (vowels.indexOf(letter) != -1) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}