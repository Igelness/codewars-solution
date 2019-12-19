"use strict"

function findOdd(A) {
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        ans++;
      }
    }
    if (ans % 2 != 0) {
      return A[i];
    }
    ans = 0;
  }
}