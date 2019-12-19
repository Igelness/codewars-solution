"use strict"

function pigIt(str) {
  let array = str.split(" ");
  let ans = "";
  for (let word of array) {
    word = word.split("");
    word[word.length + 1] = word[0];
    word.shift();
    word.push("ay");
    word = word.join("");
    ans += word + " ";
  }
  if (ans[ans.length - 4] == "!" || ans[ans.length - 4] == "?") {
    return ans.slice(0, ans.length - 3);
  }
  return ans.slice(0, ans.length - 1);
}