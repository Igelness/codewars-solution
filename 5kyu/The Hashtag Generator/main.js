"use strict"

function generateHashtag(str) {
  if (str == "" || str == null || str.trim(" ") == "" ) {
    return false;
  }
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] == " ") {
      array[i] = array[i].toUpperCase();
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == " ") {
      array.splice(i, 1);
      i--;
    }
  }
  if (array.length > 139) {
    return false;
  }
  array[0] = array[0].toUpperCase();
  return "#" + array.join("");
}