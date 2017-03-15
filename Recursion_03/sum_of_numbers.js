/*
*	Input : N
*	Output : sum the numbers of N
*	-----------------------------
*	Input : 123
*	Output : 6
*	-----------------------------
*	Input : 4570
*	Output : 16
*	-----------------------------
*	Input : 1111
*	Output : 4
*	-----------------------------
*	Input : 0
*	Output : 0
*	-----------------------------
*	Input : 1
*	Output : 1
*/

function sumNumbersOfN (n, sum) {
	let buff = sum;  
	if (n == 0) {
		console.log (buff); 
		return 0;
	}
	if (n != 0) {
		sum += n % 10;
		n = parseInt (n / 10);
		sumNumbersOfN (n, sum);  
	}
}
let n = prompt ("Enter N : "); 
sumNumbersOfN (+ n, 0);