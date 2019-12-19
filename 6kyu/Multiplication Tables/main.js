"use strict"

function multiplicationTable(row, col) {
  let array = [];
  for (let i = 1; i < row + 1; i++) {
    array[i] = []
    for (let j = 1; j < col + 1; j++) {
      array[i].push(j * i);
    }
  }
  array.shift();
  return array;
}