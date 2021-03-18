# next-partition
> Creates an array of elements split into two groups.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-partition
```

## usage
```js
import '@jswork/next-partition';

const rs = nx.partition([1, 2, 3], function(_, n) {
  return n % 2;
});

//result:
[
  [1,3],
  [2]
]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-partition/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-partition
[version-url]: https://npmjs.org/package/@jswork/next-partition

[license-image]: https://img.shields.io/npm/l/@jswork/next-partition
[license-url]: https://github.com/afeiship/next-partition/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-partition
[size-url]: https://github.com/afeiship/next-partition/blob/master/dist/next-partition.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-partition
[download-url]: https://www.npmjs.com/package/@jswork/next-partition
