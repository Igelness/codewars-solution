"use strict"

String.prototype.camelCase = function() {
  let array = this.split(" ");
  array = array.map(function(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return array.join("");
};