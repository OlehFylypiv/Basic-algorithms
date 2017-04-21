/*	
*	A string of words separated by spaces is given. 
*	There can be several spaces between words, 
*	there may also be spaces at the beginning and end of the line. 
*	It is required to convert the string so that there are no spaces at its beginning and end, 
*	and words are separated by a single "*" (asterisk) symbol.
*/

let str = prompt("Enter String : ");

function doStarSeparate(str) {
	let starsStr = new String;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			starsStr = starsStr + "*";
		}
		else {
			starsStr = starsStr + str[i];
		}
	}
	console.log(starsStr);
}

doStarSeparate(str);