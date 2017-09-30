angular.module('app.services.items', []).factory("Items", function() {
    function getRandomItem(callback) {
      var index = Math.floor(3 * Math.random());
      var item = items[index];
      callback(item);
    }
    return {
      "getRandomItem": getRandomItem,
      'qqq': 4
    };
});
