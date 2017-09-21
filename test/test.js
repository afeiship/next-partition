var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-partition');

describe('next/partition', function () {

  it('nx.mix', function () {
    var rs = nx.partition([1, 2, 3], function(_, n) {
      return n % 2;
    });

    assert.deepEqual( rs[0], [ 1, 3 ] );
    assert.deepEqual( rs[1], [ 2 ] );
  });

});
