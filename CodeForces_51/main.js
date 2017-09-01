function whoIsWinner(arr) {
	
	const sortArr = bobbleSort(arr);
	const righttArr = sortArr.slice(arr.length / 2);
	const leftArr = sortArr.slice(0, arr.length / 2);

	for (let i = 0; i < sortArr / 2; i++) {
		
		if (righttArr > leftArr) {
			continue;
		}
		else {
			return 'No';
		}
	}

	return 'Yes';

}

const arr = [1, 2, 2, 5, 6, 7, 1, 2];

console.log(whoIsWinner(arr));

function bobbleSort (arr){
	
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			
			if(arr[j + 1] < arr[j] ) {
				let temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
}