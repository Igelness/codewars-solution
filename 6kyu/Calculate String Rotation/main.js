"use strict"

function shiftedDiff(first,second){
  let array = first.split("");
  let count = 0;
  if(first == second) {
    return 0;
  }
  for(let i = 0; i < first.length; i++) {
    array.unshift(array[array.length-1]);
    array.pop();
    count++;
    if(array.join("") == second) {
      return count;
    } 
  }
  return -1;
}