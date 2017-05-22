function happyYear(year) {
	
	let counter = 0;
	let counterYears = 0;
	let buffYear = year;
	let div = 10;

	if (year < 10) {
		return 1;
	}

	while (year > 0) {
		year = parseInt(year / 10);
		counter += 1;
	}
	
	while (counter > 2) {
		div *= 10;
		counter -= 1;
	}

	if (buffYear % div === 0) {
		return div;
	}

	while (buffYear % div !== 0) {
		buffYear += 1;
		counterYears += 1
	}

	return counterYears;
}

let year = Number(prompt("Enter year : "));
console.log(happyYear(year));