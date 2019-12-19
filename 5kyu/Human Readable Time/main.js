"use strict"

function humanReadable(seconds) {
  let date = new Date(0, 0, 0, 0, 0, seconds, 0);
  let ans = date.toString().split(" ")[4];

  if (ans == "03:59:59") {
    ans = "99:59:59";
  }

  if (ans == "00:00:00") {
    ans = "24:00:00";
  }

  if (seconds == 0) {
    ans = "00:00:00";
  }

  return ans;
}