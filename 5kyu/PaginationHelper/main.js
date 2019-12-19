"use strict"

function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  
  this.itemCount = function() {
    return this.collection.length;
  };
  this.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  };
  this.pageItemCount = function(pageIndex) {
    let ans = this.collection.slice(this.itemsPerPage * pageIndex, this.itemsPerPage * pageIndex + this.itemsPerPage).length;
    if (pageIndex < 0 || pageIndex > this.collection.length || ans == 0) {
      return -1;
    }
    return ans;
  };
  this.pageIndex = function(itemIndex) {
    if (itemIndex < 0 || itemIndex > this.collection.length - 1 || itemIndex == 0 && this.collection.length == 0) {
      return -1;
    } 
    return Math.floor(itemIndex / this.itemsPerPage);
  };
}