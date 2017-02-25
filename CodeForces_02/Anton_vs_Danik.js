/*  Details in Task.txt */

function winner (str) {
	let x, anton = 0, danik = 0;
	for ( let i = 0; i < str.length; i++) {
			x = str.charAt (i);
 				if (x == 'A') {
 					anton++;
 				}
				else {
					danik++;
				}
	}
	if (danik == anton) {
		alert ('Friendship');
	}
	else {
		if (danik < anton) {
			alert ('Anton');
		}

		else {
			alert ('Danik');
		}
	}
}

let str = prompt ('Enter results of parties, please');
winner(str);