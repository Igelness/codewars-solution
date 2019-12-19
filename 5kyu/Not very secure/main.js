"use strict"

function alphanumeric(string) {
  if (string.length < 1) {
    return false;
  } else {
    for (let i = 0; i < string.length; i++) {
      if (string[i] == " " || string[i] == "_" || !Number.isInteger(parseInt(string[i])) && string[i].toUpperCase() == string[i].toLowerCase()) {
        return false;
      } 
    }
  }
  return true;
}