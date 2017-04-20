/*
*	Given the text. 
*	Determine the percentage of lowercase and uppercase letters to the total number of characters in it
*/

let myStr = prompt("Enter String : ");

function determinePercentage(myStr) {
	let countLowerCase = 0;
	let countUpperCase = 0;
	for (let i = 0; i < myStr.length; i++) {
		if (myStr[i] >= "a") {
			countLowerCase++;
		}
		else if (myStr[i] < "a") {
			countUpperCase++;
		}
	}
	if (countUpperCase === 0) {
		console.log("LowerCase : 100%");
	}
	else if (countLowerCase === 0) {
		console.log("UpperCase : 100%");
	}
	else {
		console.log("LowerCase : " + countLowerCase / myStr.length * 100 + "%");
		console.log("UpperCase : " + countUpperCase / myStr.length * 100 + "%");
	}
}

determinePercentage(myStr);