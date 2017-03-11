let iceCreamAtFirstStr = prompt ('Enter how much ice cream you have at first');
let arr = [];
let queueLength = prompt ('Enter queue length ');
	for (let i = 0; i < queueLength; i++) {
        let bufferArr = [ prompt ('Enter kid or courier ' + i) ];
          arr[i] = +bufferArr;
    }
function icecream (arr, queueLength, iceCreamAtFirstStr) {
	let iceCreamAtFirstNumber = parseInt (iceCreamAtFirstStr);
	let sadChildren = 0;
	for (let i = 0; i < arr.length; i++) {
		if (parseInt (arr[i]) > 0 ) {
			iceCreamAtFirstNumber += parseInt (arr[i]);
		}
		if (parseInt (arr[i]) < 0) {
			iceCreamAtFirstNumber = iceCreamAtFirstNumber - ( -parseInt (arr[i]) );
			
		}
		if (iceCreamAtFirstNumber < 0) {
			sadChildren++;
			iceCreamAtFirstNumber = iceCreamAtFirstNumber - parseInt (arr[i]);
		}
	}
	alert ("You have " + iceCreamAtFirstNumber + " icecream");
	alert ("Sad Children " + sadChildren);	
}
icecream (arr, queueLength, iceCreamAtFirstStr);
