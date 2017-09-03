function calculateStones(str) {
	
	let counter = 0;

	for (let i = 0; i < str.length; i++) {
		
		if (str[i] === str[i + 1]) {
			counter++;
		}
	}

	return counter;
}


const str = 'BRBG';

console.log(calculateStones(str));