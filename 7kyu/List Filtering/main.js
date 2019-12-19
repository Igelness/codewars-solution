"use strict"

function filter_list(l) {
  let array = l;
  return array.filter(word => typeof(word) != "string");
}


function notString(word){
  return typeof(word) != "string";
}