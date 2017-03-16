/*
*	If a number in an array is bigger than arithmetic mean of the array,
*	you have to multiplied this number by two. 
*	--------------------------------------------------------------------
*	Input : 
*		[10, 10, 10, 30]
*	Output :
*		[10, 10, 10, 60]
*	--------------------------------------------------------------------
*	Input : 
*		[10, 12, 24, 30, 2, 5]
*	Output :
*		[10, 12, 48, 60, 2, 5]
*	--------------------------------------------------------------------
*	Note :
*		The arithmetic mean is (10 + 10 + 10 + 30) / 4 
*/

function sumElementsOfArray (array, i) {
	if (i < array.length) {
		return array[i] + sumElementsOfArray (array, ++i);
	}
	else {
		return 0;
	}
}

function multiplyElementOfArray (array, arithmeticMean, j) {
	if (j < array.length) {
		if (array[j] > arithmeticMean) {
			array[j] *= 2;
			console.log (array[j]);
			multiplyElementOfArray (array, arithmeticMean, ++j);
		}
		else {
			console.log (array[j]);
			multiplyElementOfArray (array, arithmeticMean, ++j);
		}
	}
}

let array = [10, 10, 10, 30]; /* Input */
let arithmeticMean = sumElementsOfArray (array, 0) / array.length;
multiplyElementOfArray (array, arithmeticMean, 0);