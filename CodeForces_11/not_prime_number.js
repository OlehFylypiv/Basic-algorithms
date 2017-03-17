/*
*	You must search m. 
*	n * m + 1 = not a prime number
*	---------------------------------
*	Input : 
*		n
*	Output :
*		m
*	---------------------------------
*	Input :
*		6
*	Output :
*		4
*	---------------------------------
*	Input : 
*		3
*	Output :
*		1
*	---------------------------------
*	Note :
*		The prime mumber is a number,
*		which has only two divisor :
*		1 and itself
*/

function isPrimeNumber (n) {
	for (let i = 2; i < n; i++) {
		if (n % i == 0) {
			return false;
		}
		else {
			continue;
		}
	}
	return true;
}

function searchM (resultOfIsPrimeNumber,n, m) {
	let buff = n;
	if (resultOfIsPrimeNumber) {
		m = 1;
		return m;
	}
	else {
		for (let j = 2; j < buff; j++) {
			m = j;
			buff = buff * m + 1;
			for (let k = 2; k < buff; k++) {
				if (buff % k == 0) {
					return m;
				}
				else {
					continue ;
				}
			}
			buff = n;
		}
	}
}

let n = prompt ("Enter n : ");
alert ("n = " + n);
let result = searchM ( isPrimeNumber (n), n, 0 );
alert ("m = " + result);