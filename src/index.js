(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.partition = function (inArray, inCallback) {
    var part1 = [];
    var part2 = [];
    for (var index = 0; index < inArray.length; index++) {
      var value = inArray[index];
      var target = inCallback(index, value, inArray) ? part1 : part2;
      target.push(value);
    }
    return [part1, part2];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.partition;
  }
})();
