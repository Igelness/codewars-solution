"use strict"

function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n + 1; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      ans = ans + i;
    }
  }
  return ans;
}