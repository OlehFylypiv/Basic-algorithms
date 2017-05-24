function searchDivisor(n, k) {
	
	let array = [];

	if (isPrime(n)) {
		if (k === 1) {
			return 1;
		}
		else if (k === 2) {
			return n;
		}
	}

	for (let i = 1; i <= n; i +=1) {
		if (n % i === 0) {
			array[array.length] = i;
		}
	}
	
	if (array[k - 1] === undefined) {
		return -1;
	}
	else {
		console.log(array);		// [1, 2, 5, 10]
		return array[k - 1];	// 2
	}
}


function isPrime(number) {
    if (number === 1) {
        return false;
    }
        
    for (let divider = 2; divider * divider <= number; divider += 1) {
        if (number % divider === 0) {
                return false;
        }
    }
        
    return true;
}

console.log(searchDivisor(10, 2));