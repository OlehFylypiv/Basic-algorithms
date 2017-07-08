function isDenger(str) {
	
	let counter = 1;
	
	for (let i = 0; i < str.length; i++) {
		if(str[i] === str[i + 1]) {
			
			counter++;
			
			if (counter === 7) {
				return 'Yes';
			}
		}
		else {
			counter = 1;
		}
	}

	return 'NO';
}


let str = prompt('Enter players: ');
console.log(isDenger(str));