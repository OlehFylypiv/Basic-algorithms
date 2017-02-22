function bobleSort (arr){
	let len = arr.length;
	for (let i = 0; i<len; i++) {
		for (let j = 0; j<len; j++) {
			if(arr[j+1] < arr[j] ) {
				let temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}

	}

}

let arr = [];
let lenght = prompt('Enter lenght of array');
    for (let k = 0; k<lenght; k++){
        let unsortedArr = [prompt('Enter element #'+k)];
          arr[k] = +unsortedArr;
    }

alert(arr+' Click Enter and a progran will sort array');
	
	bobleSort(arr);

alert (arr);
/*console.log(arr);*/