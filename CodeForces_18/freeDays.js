class EnterDays {
	
	enterDaysArray () {
		return prompt("Enter days : ").split(" ");
	}
}

class FreeDays {
	
	constructor(dayArray, counterFree) {
		this.dayArray = dayArray;
		this.counterFree = counterFree;
	}

	calculateFreeDays ()  {
			for (let i = 0, length = this.dayArray.length; i < length; i += 1) {
				if (this.dayArray[i] === "0" || this.dayArray[i] === this.dayArray[i + 1] || this.dayArray[i] === "3") {
					this.counterFree += 1;
				}
			}
		
		return this.counterFree;
	}
}

let enterDays = new EnterDays();
let dayArray = enterDays.enterDaysArray(); 

let freeDays = new FreeDays(dayArray, 0);
console.log(freeDays.calculateFreeDays());