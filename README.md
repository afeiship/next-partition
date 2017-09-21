# next-partition
> Creates an array of elements split into two groups.


## usage:
```js
  var rs = nx.partition([1, 2, 3], function(_, n) {
    return n % 2;
  });
  
  //result:
  [
    [1,3],
    [2]
  ]
```
