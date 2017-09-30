angular.module('app.services.items', []).factory("Items", function() {
  // TODO (optional): pull items from a server
    function getRandomItem(callback) {
      var index = Math.floor(3 * Math.random());
      var item = items[index];
      callback(item);
    }
    return {
      "getRandomItem": getRandomItem,
    };
});
