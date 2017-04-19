/*	In a one-dimensional array, 
*	find the maximum of the negative elements and swap it with the last element of the array.
*/

function createArray() {
	let valuesStr = prompt("Enter an Array : ");
	let arrayStr = valuesStr.split(" ");
	let array = [];
	for (let i = 0; i < arrayStr.length; i++) {
		array.push(parseInt(arrayStr[i]));
	}
	return array;
}

let array = createArray();
console.log(array);

function doNegativeArray(array) {
	let negativeArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			negativeArray[negativeArray.length] = array[i];
		}
	}
	return negativeArray;
}

let negativeArray = doNegativeArray(array);
console.log(negativeArray);

function searchMaxNegativeValue(negativeArray) {
	let max = negativeArray[0];
	for (let i = 0; i < negativeArray.length; i++) {
		if (negativeArray[i] < negativeArray[i + 1]) {
			max = negativeArray[i + 1];
		}
	}
	return max;
}

let max = searchMaxNegativeValue(negativeArray);

function replace(array, max) {
	let temp = array[array.length - 1];
	array[array.indexOf(max)] = temp;
	array[array.length - 1] = max;
	return array;
}

console.log(replace(array, max));