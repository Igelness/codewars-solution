"use strict"

function partitionOn(pred, items) {
  let trueArray = [];
  let falseArray = [];
  for (let i = 0; i < items.length; i++) {
    if (pred(items[i])) {
      trueArray.push(items[i]);
    }
    if (!pred(items[i])) {
      falseArray.push(items[i]);
    }
  }
  for (let i = 0; i < items.length; i++) {
    items[i] = falseArray.concat(trueArray)[i];
  }
  return items.length - trueArray.length;
}