"use strict"

function to_nato(words) {
  let alphabet = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor","Whiskey", "Xray", "Yankee", "Zulu"
  ];

  let array = words.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] == " ") {
      array.splice(i, 1);
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if(array[i].toUpperCase() == alphabet[j].substr(0,1)) {
        array[i] = alphabet[j];
      }
    }
  }
  return array.join(" ");
}