let items = {};
const itemStore = function() {
  return {
    items: items,
    clear: function() {
      items = {};
    }
  };  
};
module.exports = itemStore;
