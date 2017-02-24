/*
A big company decided to launch a new series of rectangular displays,
 and decided that the display must have exactly n pixels.

Your task is to determine the size of the rectangular display
 — the number of lines (rows) of pixels a and the number of columns of pixels b

Detail in Task.txt
*/

function displaySize (n) {
	let checkInt = Math.sqrt (n);
	let makeInt = parseInt (checkInt);

	while (true) {
		
		if (n % makeInt == 0) {
			document.getElementById ('columns').innerHTML = 'Columns are ' + (n / makeInt);
			document.getElementById ('rows').innerHTML = 'Rows are ' + makeInt;
			break;
		}
		
		else {
			makeInt--;
		}
	}
}

		/*Loking simple numbers*/
function isSimple (n) {
    
    if (n < 2) {
    	return false;
    }
    
    for (let i = 2; i * i <= n; i++) {
        
        if (n % i == 0) {
        	return false;
        }
    }
    return true;
}

let n  = prompt('How many pixels do you have?');

if (n <= 0) {
	document.getElementById ('error').innerHTML = 'Error'
}

else {	
	
	if (isSimple (n)) {
	document.getElementById ('columns').innerHTML = 'Columns are ' + n;
	document.getElementById ('rows').innerHTML = 'Rows are 1';
	}

	else {
	displaySize (n);
	}
}