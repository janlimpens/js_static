let itemStore = require('./itemStore');

let item = function() {
  let a = Math.random();
  let self = {
    rand: a,
    b: 'hello world'
  };
  itemStore().items[a] = self;
  return self;
}

module.exports = item;
