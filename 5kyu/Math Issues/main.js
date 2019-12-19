"use strict"

Math.round = function(number) {
  let array = number.toString().split(".");
  if (array[1] == null) {
    return number;
  }
  if (array[1].slice(0, 1) > 4) {
    return parseInt(array[0]) + 1;
  } else {
    return parseInt(array[0]);
  }
};

Math.ceil = function(number) {
  let array = number.toString().split(".");
  if (array[1] == null) {
    return number;
  }
  return parseInt(array[0]) + 1;
};

Math.floor = function(number) {
  let array = number.toString().split(".");
  return parseInt(array[0]);
};