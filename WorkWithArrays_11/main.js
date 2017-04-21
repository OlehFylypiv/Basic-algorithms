/*	
*	Fibonacci numbers 
*	Input : 
*		n, x, y
*	Output : 
*		[x, y]
*	------------
*	Input : 
*		n = 10
*			[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
*		x = 3
*		y = 34
*	Output : 
*		[3, 5, 8, 13, 21, 34]
*/

let n = Number(prompt("Enter n : "));
let x = Number(prompt("Enter x : "));
let y = Number(prompt("Enter y : "));

function fibonacci(n) {
	if (n <= 0 ) {
		return 0;
	}
	if (n === 1 || n === 2) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function doFibArray(n) {
	let fibArray = [];
	for (let i = 1; i <= n; i++) {
		fibArray[fibArray.length] = fibonacci(i);
	}
	return fibArray;
}

fibArray = doFibArray(n);
console.log(fibArray);

function showFibNumbersFromXtoY(fibArray, x, y) {
	let cutArray = [];
	let start = 0;
	let end = 0;
	for (let i = 0; i < fibArray.length; i++) {
		if (fibArray[i] === x) {
			start = i;
			continue;
		}
		else if (fibArray[i] === y) {
			end = i;
		}
	}
	for (let j = start; j <= end; j++) {
		cutArray[cutArray.length] = fibArray[j];
	}
	return cutArray;
}

console.log(showFibNumbersFromXtoY(fibArray, x, y));