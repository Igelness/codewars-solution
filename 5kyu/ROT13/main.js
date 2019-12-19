"use strict"

function rot13(str) {
  let symbols = str.split("");
    let ans = [];
  
    for (let symbol of symbols) {
      if (symbol.toUpperCase() != symbol.toLowerCase()) {
        if (symbol.charCodeAt(0) + 13 > 90 && symbol.charCodeAt(0) + 6 < 97 || symbol.charCodeAt(0) + 13 > 122) {
          ans.push(String.fromCharCode(symbol.charCodeAt(0) - 13));
        } else {
          ans.push(String.fromCharCode(symbol.charCodeAt(0) + 13));
        }
      } else {
        ans.push(symbol);
      }
    }
    return ans.join("");
  }