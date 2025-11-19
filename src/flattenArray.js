//1. Flatten Deep Array (Medium)

//expected output : [1, 2, 3, 4, 5]

var data = [1, [2, [3, [4]], 5]];

//versi paling cepat
function flattenArrayFlat(arr) {
  return arr.flat(Infinity);
}
console.log(
  "🚀 ~ flattenArrayFlat ~ flattenArrayFlat:",
  flattenArrayFlat(data)
);

//using reduce method
function flattenArrayReduce(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(val);
    } else {
      return acc.concat(val);
    }
  }, []);
}

console.log(
  "🚀 ~ flattenArrayReduce ~ flattenArrayReduce:",
  flattenArrayReduce(data)
);
