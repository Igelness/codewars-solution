"use strict"

function streetFighterSelection(fighters, position, moves) {
  let ans = [];
  let posY = position[0];
  let posX = position[1];

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "up":
        if (posY == 0) {
          posY = 0;
        } else {
          posY = posY - 1;
        }
        break;
      case "down":
        if (posY == 1) {
          posY = 1;
        } else {
          posY = posY + 1;
        }
        break;
      case "left":
        if (posX == 0) {
          posX = fighters[0].length - 1;
        } else {
          posX = posX - 1;
        }
        break;
      case "right":
        if (posX == fighters[0].length - 1) {
          posX = 0;
        } else {
          posX = posX + 1;
        }
        break;
    }
    ans.push(fighters[posY][posX]);
  }
  return ans;
}