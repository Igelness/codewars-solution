"use strict"

function toWeirdCase(string) {
  if (string.includes(" ")) {
    let words = string.split(" ");
    let weirdCaseWords = [];
    for (let word of words) {
      weirdCaseWords.push(wordToLetters(word));
    }
    return weirdCaseWords.join(" ");
  } else {
    return wordToLetters(string);
  }
}

function wordToLetters(str) {
  let arrayOfLetters = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      arrayOfLetters[i] = arrayOfLetters[i].toUpperCase();
    } else {
      arrayOfLetters[i] = arrayOfLetters[i].toLowerCase();
    }
  }
  return arrayOfLetters.join("");
}