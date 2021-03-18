(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.partition should be split list', function () {
      const res = nx.partition([1, 2, 3], function (_, n) {
        return n % 2;
      });

      expect(res).toEqual([[1, 3], [2]]);
    });
  });
})();
