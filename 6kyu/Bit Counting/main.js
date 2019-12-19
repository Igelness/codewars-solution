"use strict"

var countBits = function(n) {
  let array = n.toString(2).split("");
  let ans = 0;
  for (let number of array) {
    if (+number == 1) {
      ans++;
    }
  }
  return ans;
};