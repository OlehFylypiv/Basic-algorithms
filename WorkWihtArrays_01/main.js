/*
*	An array A of real type containing 20 positive and negative elements is given. 
*	Form array B from positive elements of array A having an even index. 
*	Find the sum of the squares of the elements of the new array.
*/

let array = [1, 2, 3, 4, 5, -7, -9, 10, 25, 23, 34, -9, 14, -34, 0, 0, 23, 10, 71, -60];

function searchPositiveElements(array) {
	let positiveArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 0 && i % 2 === 0) {
			positiveArray.push(array[i]);
		}
	}
	return positiveArray;
}

slet squaringArray = searchPositiveElements(array).map(function(x) { return x * x; });
let result = squaringArray.reduce(function(x, y) { return x + y}, 0);
console.log(result);