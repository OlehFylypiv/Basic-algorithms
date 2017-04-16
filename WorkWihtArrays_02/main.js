/*	Write a program for calculating the average of the arithmetic negative elements in a one-dimensional array. 
*	Replace the minimum element in a one-dimensional array by the resulting arithmetic mean.
*/

function createArray () {
	let valuesStr = prompt("Enter an Array : ");
	let arrayStr = valuesStr.split(" ");
	let array = [];
	for (let i = 0; i < arrayStr.length; i++) {
		array.push(parseInt(arrayStr[i]));
	}
	return array;
}

let array = createArray();

function searchMinValue(array) {
	return Math.min.apply(Math, array);
}

let min = searchMinValue(array);

function searchAverageValue(array) {
	return array.reduce(function(x, y) { return x + y; }, 0);
}

let average = searchAverageValue(array);

function substitute(min, average, array) {
	array[ array.indexOf(min) ] = average;
	console.log(array);
}

substitute(min, average, array);