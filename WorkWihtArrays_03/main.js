/*	In a one-dimensional array consisting of N real elements, 
*	find the maximum modulo element of the array.
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

function maxModuleElement(array) {
	positiveArray = array.map(function(x) {
		if (x < 0) {
			x = x * (-1);
		}
		return x;
	});
	let max = positiveArray[0];
	for (let i = 1; i < positiveArray.length; i++) {
		if (max < positiveArray[i]) {
			max = positiveArray[i];
		}
	}
	return max;
}

console.log(maxModuleElement(array));