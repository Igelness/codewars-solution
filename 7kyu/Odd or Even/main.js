"use strict"

function oddOrEven(array) {
  let ans = 0;
  for (let i = 0; i < array.length; i++) {
    ans = ans + parseInt(array[i]);
  }
  return ans % 2 == 0 ? "even" : "odd";
}