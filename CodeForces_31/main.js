function getFactorial(number) {
	
	if (number === 0 || number < 0) {
		return 0;
	}

	if (number === 1) {
		return 1;
	}

	return number * getFactorial(number - 1);
}

function searchGCD(a, b) {
	
	let gcd = 1;
	
	let aFact = getFactorial(a);
	let bFact = getFactorial(b);

	let min = Math.min(aFact, bFact);

	for (let i = 1; i <= min; i++) {
		if (aFact % i === 0 && bFact % i === 0) {
			gcd = i;
		}
	}

	return gcd;
}

console.log(searchGCD(6, 9));