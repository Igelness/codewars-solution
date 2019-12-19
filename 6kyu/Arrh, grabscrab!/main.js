"use strict"

function grabscrab(anagram, dictionary) {
  let ans = [];
  for(let i = 0; i < dictionary.length; i++) {
    if(dictionary[i].split("").sort().join("") == anagram.split("").sort().join("")) {
      ans.push(dictionary[i]);
    }
  }
  return ans;
}