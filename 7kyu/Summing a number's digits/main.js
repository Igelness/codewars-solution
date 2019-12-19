"use strict"

function sumDigits(number) {
  let string = number.toString().replace(/-/g, "");
  let array = string.split("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + parseInt(array[i]);
  }
  return sum;
}