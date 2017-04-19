/*
*	For a one-dimensional array, calculate the product of the first, third, 
*	and sixth positive elements and determine their numbers in the array.
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

function  calculateTheProduct(array) {
	let count = 0;
	let positive1 = 0;
	let positive3 = 0;
	let positive6 = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] <= 0) {
			continue;
		}
		else {
			count++
			if (count === 1) {
				positive1 = array[i];
			}
			else if (count === 3) {
				positive3 = array[i];
			}
			else if (count === 6) {
				positive6 = array[i];
			}
		}
	}
	return positive1 * positive3 * positive6;
}

let product = calculateTheProduct(array);
console.log(product);