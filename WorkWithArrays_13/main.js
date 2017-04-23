let end = Number(prompt("Enter the end of the prime numbers sequence : "));

function isPrime(number) {
        if (number === 1) {
            return false;
        }
        for (let divider = 2; divider * divider <= number; divider++) {
            if (number % divider === 0) {
                return false;
            }
        }
        return true;
    }

function showPrimeNumbersSequence(end) {
	for (let i = 2; i < end; i++) {
		if (isPrime(i)) {
			console.log(i);
		}
	}
}

showPrimeNumbersSequence(end);