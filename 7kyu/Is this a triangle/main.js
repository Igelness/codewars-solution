"use strict"

function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (Math.floor(a + b > c) && Math.floor(a + c > b)&& Math.floor( b + c > a)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}