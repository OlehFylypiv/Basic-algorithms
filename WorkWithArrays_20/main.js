function howfaris(day) {
	
	if (day === '' || day === undefined) {
		return 'Enter valid data';
	}

	var date = new Date();
	var currentDay = date.getDay();
	
	var daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
	
	var counter = 0;
	var nextDayIndex = daysArray.indexOf(day);
	
	if (currentDay < nextDayIndex) {
		while (true) {
			counter++;
			currentDay++;
			if (currentDay === nextDayIndex) {
				break;
			}
		}
	}
	else if (currentDay > nextDayIndex) {
		counter = 7 - currentDay + nextDayIndex;
	}

	
	if (counter === 0) {
		return 'Now is ' + day + ' :)';
	}
	else {
		return 'To ' + day + ' remains ' + counter + ' days :(';
	}
}

console.log(howfaris('sunday'));