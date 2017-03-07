function fiveCards (arr) { 
	let sum1, sum2 = 0; 
	let count; 
	for (let i = 0; i < arr.length; i++) { 
		sum1 = 0; 
		count = 0; 
		for (let j = i; j < arr.length; j++) { 
			if(arr[i] == arr[j]) { 
				count++; 
				sum1 += arr[j]; 
				if (count == 2 || count == 3) { 
					if(sum2 < sum1) { 
						sum2 = sum1; 
					} 
				} 
			} 
		} 
	} 
	return sum2; 
}
let arr = [];
for (let k = 0; k < 5; k++) {
    let element = [ prompt ("Enter card # " + k)];
    arr[k] = +element;
}
alert ("You have this cards " + arr);
let sumArray = arr.reduce (function (x, y) { return x + y; });
let a = fiveCards(arr);
alert (sumArray - a);
