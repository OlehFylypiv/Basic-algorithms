function calculateYears(yearsArray, a, b) {
	
	let countYears = 0;

	for (let i = a; i < b; i += 1) {
		countYears += yearsArray[i - 1];
	}

	return countYears;
}

(function setDataFunc()  { 
	
	let n = Number(prompt("Enter n : "));
	let yearsArray = [];
	
	for (let i = 0; i < n - 1; i += 1) {
		yearsArray[yearsArray.length] = Number(prompt("Enter years : "));
	}

	let a = Number(prompt("Enter a : "));
	let b = Number(prompt("Enter b : "));
	
	console.log(calculateYears(yearsArray, a, b));
})();