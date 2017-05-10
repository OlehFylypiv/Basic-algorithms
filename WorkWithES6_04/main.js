let iterate = new Map([['a', 10], ['b', 20], ['c', 30]]);

for (let i of iterate) {
  console.log(i);
}
// ['a', 10]
// ['b', 20]
// ['c', 30]
// -------------------

for (let [key, value] of iterate) {
  console.log(value);
}

// 1
// 2
// 3
// -------------------

let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}

// 1
// 2
// 3
// -------------------

(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(10, 25, 56);

// 10
// 25
// 56
// -------------------