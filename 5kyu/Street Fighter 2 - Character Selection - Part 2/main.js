"use strict"

function superStreetFighterSelection(fighters, position, moves) {
  let ans = [];
    let posY = position[0];
    let posX = position[1];
  
    for (let i = 0; i < moves.length; i++) {
      switch (moves[i]) {
        case "left":
          for (let i = 0; i < 10; i++) {
            if (posX == 0) {
              posX = fighters[0].length - 1;
              if (fighters[posY][posX] != "") {
                break;
              }
            } else {
              posX = posX - 1;
              if (fighters[posY][posX] != "") {
                break;
              }
            }
          }
          break;
        case "right":
          for (let i = 0; i < 10; i++) {
            if (posX == fighters[0].length - 1) {
              posX = 0;
              if (fighters[posY][posX] != "") {
                break;
              }
            } else {
              posX = posX + 1;
              if (fighters[posY][posX] != "") {
                break;
              }
            }
          }
          break;
        case "up":
          if (posY == 0) {
            posY = 0;
          } else {
            posY = posY - 1;
          }
          if (fighters[posY][posX] == "") {
            posY = posY + 1;
          }
          break;
        case "down":
          if (posY == fighters.length - 1) {
            posY = fighters.length - 1;
          } else {
            posY = posY + 1;
          }
          if (fighters[posY][posX] == "") {
            posY = posY - 1;
          }
          break;
      }
  
      if (fighters[posY][posX] == "") {
        continue;
      }
      ans.push(fighters[posY][posX]);
    }
    return ans;
  }