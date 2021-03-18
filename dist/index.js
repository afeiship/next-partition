/*!
 * name: @jswork/next-partition
 * description: Creates an array of elements split into two groups.
 * homepage: https://github.com/afeiship/next-partition
 * version: 1.0.0
 * date: 2021-03-18 13:35:33
 * license: MIT
 */

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
