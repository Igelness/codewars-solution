"use strict"

function f(n) {
  if (typeof n != "number" || n <= 0 || Number.isInteger(n) == false) {
    return false;
  }

  let ans = 0;
  for (let i = 1; i < n + 1; i++) {
    ans = ans + i;
  }
  return ans;
}