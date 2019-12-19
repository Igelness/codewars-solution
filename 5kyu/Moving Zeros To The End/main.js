"use strict"

var moveZeros = function(arr) {
  let amountOfZeroes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number" && arr[i] == 0) {
      amountOfZeroes++;
      arr.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < amountOfZeroes; i++) {
    arr.push(0);
  }
  return arr;
};