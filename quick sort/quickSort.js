function  quickSort(arr, left, right) {
	
	let i = left;
	let j = right;
	let tmp;
	
	let div = (left + right) / 2; 
	
	let fixedResult = parseInt(arr[ div.toFixed() ]);  
	
	/* partition */

	while (i <= j) {
		while (parseInt(arr[i]) < fixedResult) {
			i++;
		}
		while (parseInt(arr[j]) > fixedResult) {
			j--;
		}
		if (i <= j) {
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}

	/* recursion */
	
	if (left < j) {
		quickSort(arr, left, j);
	}
	if (i < right) {
		quickSort(arr, i, right);
	}
	
	return arr;
}

let array = [1, 2, 100, 0, 4, 7, 12, 5, 19, -5, 10, 14, 91];
let arr = quickSort(array, 0, array.length -1);
console.log(arr); // [-5, 0, 1, 2, 4, 5, 7, 10, 12, 14, 19, 91, 100]