function selectionSort(arr){
	let len = arr.length;
	for (let i = 0; i<len; i++) {
		let posMin = i;
		for (let j = i; j<len; j++) {
			if(arr[j] < arr[posMin]) {
				posMin = j;
			}
		}
	
	 	let temp = arr[posMin];
	 	arr[posMin] = arr[i];
	 	arr[i] = temp;
	}
}

let arr = [];
var lenght = prompt('Enter lenght of array');
    for (let k = 0; k<lenght; k++){
        let unsortedArr = [prompt('Enter element #'+k)];
          arr[k] = +unsortedArr;
    }

alert(arr + ' Click Enter and a program will sort array');
	selectionSort(arr);
alert(arr);

/*By Oleh Fylypiv */