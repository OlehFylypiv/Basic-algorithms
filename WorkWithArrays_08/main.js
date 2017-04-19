/*	In an array consisting of positive and negative numbers, 
*	determine how many elements exceed the maximum element in absolute value.
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

function searchMaxElement(array, i, max) {
	if (i < array.length) {
		if (array[i] < array[i + 1]) {
			max = array[i + 1];
			return searchMaxElement(array, ++i, max);
		}
	}
	return max;
}

let max = searchMaxElement(array, 0, array[0]);
console.log(max);

function searchElementsBiggerThanMax(array, i, max, count) {
	if (i < array.length) {
		if (array[i] < 0) {
			array[i] = - array[i];
			if (array[i] > max) {
				count++
				return searchElementsBiggerThanMax(array, ++i, max, count);
			}
			else {
				return searchElementsBiggerThanMax(array, ++i, max, count);
			}
		}
		else {
			return searchElementsBiggerThanMax(array, ++i, max, count);
		}
	}
	return count;
}

let counter = searchElementsBiggerThanMax(array, 0, max, 0);
console.log(counter);