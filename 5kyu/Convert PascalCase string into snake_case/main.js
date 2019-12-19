"use strict"

function toUnderscore(string) {
  if(typeof string == "number") {
    return string.toString();
  }
  let array = string.split("");
  for(let i = 1; i < array.length; i++) {
    if(array[i].toUpperCase() == array[i] && array[i].toUpperCase() != array[i].toLowerCase()) {
      array[i] = "_" + array[i].toLowerCase();
    }
  }
  return array[0].toLowerCase() + array.join("").slice(1);
}