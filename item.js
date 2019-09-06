let itemList = require('./itemStore');

let item = function() {
  let a = Math.random();
  let self = {
    rand: a,
    b: 'hello world'
  };
  itemList[a] = self;
  return self;
}

module.exports = item;
