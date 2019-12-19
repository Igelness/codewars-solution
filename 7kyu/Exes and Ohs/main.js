"use strict"

function XO(str) {
  let letterX = 0;
  let letterO = 0;
  let array = str.split("");
  for (let letter of array) {
    if (letter == "x" || letter == "X") {
      letterX++;
    } else if (letter == "o" || letter == "O") {
      letterO++;
    }
  }
  if (letterX == letterO) {
    return true;
  }
  return false;
}