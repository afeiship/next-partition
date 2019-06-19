(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.partition = function(inArray, inCallback) {
    var part1 = [];
    var part2 = [];
    for (var index = 0; index < inArray.length; index++) {
      var value = inArray[index];
      if (inCallback(index, value, inArray)) {
        part1.push(value);
      } else {
        part2.push(value);
      }
    }
    return [part1, part2];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.partition;
  }
})();
