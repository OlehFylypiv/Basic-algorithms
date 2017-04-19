/*	An ordered integer array is specified.
*	Form a second array of integers that do not occur in the first array, 
*	but have a value greater than the minimum and less than the maximum of the numbers of the first array.
*	-----------------
*	Input :
*		[1, 2, 6]
*	Output :
*		[3, 4, 5]
*	-----------------
*	Input :
*		[0, 5]
*	Output :
*		[1, 2, 3, 4]
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

function addValues(array) {
	let addArray = [];
	for (let i = 0; i < array.length; i++) {
		if ((array[i + 1] - array[i]) > 1) {
			for (let k = array[i] + 1; k < array[i + 1]; k++) {
				addArray.push(k);					
			}
		}
	}
	return addArray;
}

console.log(array);
console.log(addValues(array));