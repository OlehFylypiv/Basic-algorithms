/*
*	You must searc two max elements in the array,
*	using one way of cycle
*	---------------------------------------------
*	Input : 
*		[1,2,3,4,5,6,7]
*	Output :
*		6, 7
*/

function searchTwoMaxNumbers (array) {
	let a = 0;
	let b = 0;
	for (let j = 0; j < array.length; j++) {
		if (array[j] > a) {
			b = a;
			a = array[j];
		}
	}
	return ("Two max numbers is " + a + " and " + b);
}

let array = new Array ();
let length = prompt ("Enter length of array : ");
    for (let i = 0; i < length; i++) {
        let bufferdArray = [ prompt ("Enter element # " + i + ":") ];
          array[i] = +bufferdArray;
    }
    
alert ("Your array : " + array);
alert ( searchTwoMaxNumbers (array) );