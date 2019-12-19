"use strict"

function encode(string) {
  let array = string.split("");
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "a":
        array[i] = "1";
        break;
      case "e":
        array[i] = "2";
        break;
      case "i":
        array[i] = "3";
        break;
      case "o":
        array[i] = "4";
        break;
      case "u":
        array[i] = "5";
        break;
    }
  }
  return array.join("");
}

function decode(string) {
  let array = string.split("");
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "1":
        array[i] = "a";
        break;
      case "2":
        array[i] = "e";
        break;
      case "3":
        array[i] = "i";
        break;
      case "4":
        array[i] = "o";
        break;
      case "5":
        array[i] = "u";
        break;
    }
  }
  return array.join("");
}