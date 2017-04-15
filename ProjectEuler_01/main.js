/*	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
*	The sum of these multiples is 23.
*
*	Find the sum of all the multiples of 3 or 5 below 1000.
*/

function searchMultiplesOf3(number) {
	let sum = 0;
	for (let i = number - 1 ; i >= 3; i--) {
		if (i % 3 === 0) {
			sum += i;
		}
	}
	return sum;
}

function searchMultiplesOf5(number) {
	let sum = 0;
	for (let i = number - 1; i >= 5; i--) {
		if (i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

function searchMultiplesOf3And5(number) {
	let sum = 0;
	for (let i = number - 1; i > 0; i--) {
		if (i % 3 === 0 && i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

let result = searchMultiplesOf3(1000) + searchMultiplesOf5(1000) - searchMultiplesOf3And5(1000);
console.log(result);