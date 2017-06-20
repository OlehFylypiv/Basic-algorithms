function howManyDays(month) { 
	return 28 + (month + Math.floor(month / 8)) % 2 + 2 % month + 2 * Math.floor(1 / month); 
}

let month = Number(prompt("Enter a month :"));

console.log(howManyDays(month));