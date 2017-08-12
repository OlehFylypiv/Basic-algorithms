function searchDiffNumber(n, arr) {
	
	let counter1 = 0;
	let counter2 = 0;
	
	let index1 = 0;
	let index2 = 0;
	
	for (let i = 0; i < n; i++) {
		
		if (arr[i] % 2 === 0) {
			
			counter1++;
			index1 = i;
		}
		else {
			
			counter2++;
			index2 = i;
		}
	}

	if (counter1 > counter2) {
		return index2 + 1;
	}
	else {
		return index1 + 1;
	}
}


const arr = [2, 4, 7, 8, 10];
const n = arr.length;

console.log(searchDiffNumber(n, arr));