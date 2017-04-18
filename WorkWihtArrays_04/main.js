/* Get the arithmetic mean of all even elements of the array that are at odd places. */

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

function arithmeticMean(array) {
	let buffArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0 && i % 2 !== 0) {
			buffArray.push(array[i]);
		}
	}
	let sumOfAllElements = buffArray.reduce(function(x, y) { return x + y; });
	return ( sumOfAllElements / buffArray.length );
}

console.log(arithmeticMean(array));