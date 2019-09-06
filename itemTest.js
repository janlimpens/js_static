(function() {
  'use strict';
  let item = require('./item.js');
  let itemStore = require('./itemStore.js');

  let inspect = function() {
    return Object.keys(itemStore).length;
  }
  let equals = function(a, b) {
    console.log("Expected " + b + ", was " + a);
  }

  let test = function() {
    equals(inspect(), 0);
    let subject = item();
    equals(inspect(), 1);
    let subject2 = item();
    equals(inspect(), 2);
    itemStore = {};
    equals(inspect(), 0);
  }
  test();
  console.log('-----------------');
  test();
})();
