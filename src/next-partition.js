(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.partition = function ( inArray, inCallback ) {
    var part1 = [];
    var part2 = [];
    for (var index = 0; index < inArray.length; index++) {
      var element = inArray[index];
      if( inCallback(index, element, inArray) ){
        part1.push(element);
      }else{
        part2.push(element);
      }
    }
    return [ part1, part2 ];
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.partition;
  }

}());
