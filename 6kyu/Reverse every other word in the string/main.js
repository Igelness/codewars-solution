"use strict"

function reverse(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " && str[i - 1] == " ") {
      return "";
    }
  }
  let array = str.split(" ");
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      ans.push(array[i]);
    } else {
      ans.push(array[i].split("").reverse().join(""));
    }
  }
  return ans.join(" ");
}