"use strict"

function accum(s) {
	let ans = s.split("");
  for (let i = 0; i < s.length; i++) {
    ans[i] = ans[i].toUpperCase() + ans[i].toLowerCase().repeat(i);
  }
  return ans.join("-");
}