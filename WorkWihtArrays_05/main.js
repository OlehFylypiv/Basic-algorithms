/* Determine the number of elements in a given array that differ from the minimum by 5. */

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

function searchDiffer(array) {
	let minValue = array[0];
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (minValue > array[i]) {
			minValue = array[i];
		}
	}
	for (let j = 0; j < array.length; j++) {
		if (array[j] === (minValue - 5) || array[j] === (minValue + 5)) {
			count++;
		}
	}
	return count;
}

console.log(searchDiffer(array));