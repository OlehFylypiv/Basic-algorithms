function searchTime(n, k, array) {
	
	let counter = 0;

	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < n; j += 1) {
			if (array[i] < array[j]) {
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}

	console.log(array);

	for (let y = 1; y < n; y += 1) {
		
		while (array[y] !== array[0]) {
			counter += 1;
			array[y] -= k;
			
			if (array[y] <= 0) {
				return -1;
			}
		}
	}

	return counter;
}


let array = [10, 9, 15, 18];
let n = array.length;
let k = 3;

console.log(searchTime(n, k, array));

// [10, 9, 15, 18] 
// -1 

// [12, 9, 15, 18]
// 6

// [9, 12] 
// 1