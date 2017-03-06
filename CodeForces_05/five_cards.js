function fiveCards (arr) {
	let counter = 0;
	let newArr = [];
 	for (let i = 0; i < arr.length - 1; i++) {
    	for (let j = i+1; j < arr.length; j++) {
        	if(arr[i] == arr[j]) {
                /* counter++; */
               	newArr.push ( arr[j] );
        	}   
    	}
	}
	let sumArray = arr.reduce (function (x, y) { return x + y; });
	alert (sumArray);
	let maxEl = Math.max.apply (Math, newArr); /* Max element in newArray */
	let minEl = Math.min.apply (Math, newArr); /* Min element in newArray */
	/* 
	*	if (maxEl == minEl && newArr.length % 2 === 0) {
	*		sumArray -= (maxEl * 2); 
	*		alert (sumArray);
	*	}
	*	else {
	*		if (newArr.length % 3 === 0) {
	*			sumArray -= (maxEl * 3);
	*			alert (sumArray);
	*		}
	*		else {
	*			if (maxEl > minEl && newArr.length % 2 === 0) {
	*				sumArray -= (maxEl * 2);
	*				alert (sumArray);
	*			}
	*		}
	*		sumArray -= (maxEl*3);
	*	}
	*/
	alert (newArr);
		switch (newArr.length) {
			case 2 : sumArray -= (maxEl * 2);
					 alert (sumArray);
					 break;
			case 3 : sumArray -= (maxEl * 3);
					 alert (sumArray);
					 break;
			case 4 : sumArray -= (maxEl * 2);
					 alert (sumArray);
					 break;
			case 5 : 
						let counter1 = 0;
						let counter2 = 0;
					 for (let i = 0; i < 5; i++) {
					 	if (newArr[i] == minEl) {
					 		counter1++;
					 	}
					 	else {
					 		counter2++;
					 	}
					 }
					 alert (counter1);
					 alert (counter2);
					 if (counter1 > counter2) {
					 	if (minEl * 3 > maxEl * 2) {
					 		sumArray -= (minEl * 3);
					 		alert (sumArray);
					 		break;
					 	}
					 	else {
					 		sumArray -= (maxEl * 2);
					 		alert (sumArray);
					 		break;
					 	}
					 }
					 else {
					 	sumArray -= (maxEl * 3);
					 	alert (sumArray);
					 	break;
					 }
			default : sumArray -= (maxEl * 3);
						  alert (sumArray);
		}
}
let arr = [2, 2, 3, 1, 4]; 
fiveCards (arr);