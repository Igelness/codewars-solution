"use strict"

function anagrams(word, words) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").sort().join("") === word.split("").sort().join("")) {
      ans.push(words[i]);
    }
  }
  return ans;
}