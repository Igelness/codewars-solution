"use strict"

function roundToNext5(n) {
  if (n % 5 == 0) {
    return n;
  } else {
    while (n % 5 > 0 || n % 5 < 0) {
      n++; 
    }
  }
  return n;
}