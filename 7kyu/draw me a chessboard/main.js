"use strict"

function chessBoard(rows, columns) {
  let ans = [];
  let letterO = "O";
  let letterX = "X";
  let temp = "";

  for (let i = 0; i < rows; i++) {
    ans.push([]);
    for (let j = 0; j < columns; j++) {
      ans[i][j] = j % 2 == 0 ? letterO : letterX;
    }
    temp = letterO;
    letterO = letterX;
    letterX = temp;
  }
  return ans;
}