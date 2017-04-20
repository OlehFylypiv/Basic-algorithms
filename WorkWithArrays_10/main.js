/*	The user enters n elements of the array. It is required to determine the quantity
*	Elements whose value is greater than the neighboring elements of the array.
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

/*
	function searchElementGreaterThanNeighboring(array) {
		let count = 0;
		for (let i = 1; i < array.length - 1; i++) {
			if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
				count++;
			}
		}
		return count;
	}

	let counter = searchElementGreaterThanNeighboring(array);
	console.log(counter);
*/

function searchElementGreaterThanNeighboring(array, i, count) {
	if (i < array.length - 1) {
		if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
			count++
			return searchElementGreaterThanNeighboring(array, ++i, count);
		}
		else {
			return searchElementGreaterThanNeighboring(array, ++i, count);
		}
	}
	return count;
}

let counter = searchElementGreaterThanNeighboring(array, 1, 0);
console.log(counter);