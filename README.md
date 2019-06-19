# next-partition

## installation
```bash
npm install -S afeiship/next-partition --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-partition';

const rs = nx.partition([1, 2, 3], function(_, n) {
  return n % 2;
});

//result:
[
  [1,3],
  [2]
]
```
