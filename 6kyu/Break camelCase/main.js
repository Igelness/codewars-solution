"use strict"

function solution(string) {
  let arr = string.split("");
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i]);
    if (arr[i].toUpperCase() == arr[i]) {
      ans.pop();
      ans.push(" ");
      ans.push(arr[i]);
    }
  }
  return ans.join("");
}