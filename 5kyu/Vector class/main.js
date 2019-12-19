"use strict";

var Vector = function(components) {
  this.components = components;
};

Vector.prototype.checkLength = function(vector) {
  return this.components.length == vector.components.length;
};

Vector.prototype.add = function(vector) {
  if (!this.checkLength(vector)) {
    throw Error();
  }
  let ans = [];
  for (let i = 0; i < this.components.length; i++) {
    ans.push(this.components[i] + vector.components[i]);
  }
  return new Vector(ans);
};

Vector.prototype.subtract = function(vector) {
  if (!this.checkLength(vector)) {
    throw Error();
  }
  let ans = [];
  for (let i = 0; i < this.components.length; i++) {
    ans.push(this.components[i] - vector.components[i]);
  }
  return new Vector(ans);
};

Vector.prototype.dot = function(vector) {
  if (!this.checkLength(vector)) {
    throw Error();
  }
  let ans = 0;
  for (let i = 0; i < this.components.length; i++) {
    ans = ans + this.components[i] * vector.components[i];
  }
  return ans;
};

Vector.prototype.norm = function() {
  var ans = 0;
  for (let i = 0; i < this.components.length; i++) {
    ans = ans + this.components[i] * this.components[i];
  }
  return Math.sqrt(ans);
};

Vector.prototype.equals = function(vector) {
  if (!this.checkLength(vector)) {
    return false;
  }
  for (let i = 0; i < this.components.length; i++) {
    if (this.components[i] != vector.components[i]) {
      return false;
    }
  }
  return true;
};
Vector.prototype.toString = function() {
  return "(" + this.components.toString() + ")";
};
