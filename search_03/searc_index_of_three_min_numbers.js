/*
*	You must search 3 minimal elements of the array
*	and their indices of that array
*	Using only one way of the cycle
*	-----------------------------------------------
*	Input : 
*		[1, 3, 10, 15, 27, 0, 2]
*	Output :
*		array[5] = 0
*		array[0] = 1
*		array[6] = 2
*	-----------------------------------------------
*	Input :
*		[0, 0, 1, 5, 2]
*	Output :
*		array[0] = 0
*		array[1] = 0
*		array[2] = 1	
*/

function searcIndexOfThreeMinNumbers (array) { 
	let min1 = array[0];
	let min2 = array[1];
	let min3 = array[2];
	let indexOfMin1 = 0;
	let indexOfMin2 = 1;
	let indexOfMin3 = 2;
	for (let i = 3; i < array.length; i++) { 
		if(array[i] < min1 || array[i] < min2 || array[i] < min3) { 
			if(min1 > min2 && min1 > min3) {
				min1 = array[i];
				indexOfMin1 = i;
				continue;	
			} 
			if (min2 > min1 && min2 > min3) {
				min2 = array[i];
				indexOfMin2 = i;
				continue;
			} 
			if (min3 > min1 && min3 > min2) {
				min3 = array[i];
				indexOfMin3 = i;
				continue; 
			} 
		} 
	} 
	console.log ("Your array is : " + array);
	console.log ("array[" + indexOfMin1 + "] = " + min1 );
	console.log ("array[" + indexOfMin2 + "] = " + min2 );
	console.log ("array[" + indexOfMin3 + "] = " + min3 );
}

let array = new Array ();
let length = prompt ("Enter length of array : ");
    for (let j = 0; j < length; j++) {
        let bufferdArray = [ prompt ("Enter element # " + j + ":") ];
          array[j] = +bufferdArray;
    }
searcIndexOfThreeMinNumbers (array);