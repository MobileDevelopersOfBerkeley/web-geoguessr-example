angular.module('app.services.items', []).factory("Items", function() {
    function getRandomItem(callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          console.log(xmlHttp.responseText);
          var item = JSON.parse(xmlHttp.responseText);
          callback(item);
        }
      };
      var url = "http://localhost:5000/item";
      xmlHttp.open("GET", url, true); // true for asynchronous
      xmlHttp.send(null);
    }
    return {
      "getRandomItem": getRandomItem,
    };
});
