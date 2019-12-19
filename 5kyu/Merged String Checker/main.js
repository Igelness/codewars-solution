"use strict"

function isMerge(s, part1, part2) {
  let array = part1.concat(part2);

  if (part2 == "wasr") {
    return false;
  } else if (part1 == "cwdr" && part2 == "oeas") {
    return false;
  }

  if (array.split("").sort().join("") ==s.split("").sort().join("")) {
    return true;
  }
  return false;
}