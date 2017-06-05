function replaceNumbers(array) {
	
	let a1 = 0;
	let b2 = 0;
	let c3 = 0;
	
	for (let i = 0; i < array.length; i += 1) {
		if (array[i] === 1) {
			a1 += 1;
		}
		else if (array[i] === 2) {
			b2 += 1;
		}
		else {
			c3 += 1;
		}
	}

	let max = Math.max.call(Math, a1, b2, c3);

	switch (max) {
		case a1 :
			return b2 + c3;
		case b2 :
			return a1 + c3;
		case c3 :
			return a1 + b2;
	}
}

let array = [1, 1, 1, 1, 1, 2, 3, 3, 3];
console.log(replaceNumbers(array)); // 4