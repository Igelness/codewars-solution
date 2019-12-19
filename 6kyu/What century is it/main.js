"use strict"

function whatCentury(year) {
  let nice = Math.ceil(year / 100);
  if(nice == 11) {
    return "11th"
  } else if(nice == 13) {
    return "13th";
  }
  if (nice.toString().charAt(nice.toString().length - 1) == 1) {
    return nice + "st";
  } else if (nice.toString().charAt(nice.toString().length - 1) == 2) {
    return nice + "nd";
  } else if (nice.toString().charAt(nice.toString().length - 1) == 3) {
    return nice + "rd";
  }
  return nice + "th";
}