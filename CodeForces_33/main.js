function isTriangularNumber(n) {
	
	let formula = n * (n + 1) / 2;

	return formula;
}


function doTriangularNumbeSeq(j) {
	for (let i = 1; i < j; i++) {
		
		let number = isTriangularNumber(i); 
		
		if (number !== 0) {
			console.log(number);
		}
	}
}


doTriangularNumbeSeq(10); 