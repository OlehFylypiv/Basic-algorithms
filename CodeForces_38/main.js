function happyNumbers(str) {
	
	let counter = 0;
	
	for (let i = 0; i < str.length; i++) {
		
		if (str[i] === '4' || str[i] === '7') {
			counter++;
		}
	}

	if (counter === 4 || counter ===7) {
		return 'YES';
	}
	else {
		return 'NO';
	}
}

console.log(happyNumbers('40047'));