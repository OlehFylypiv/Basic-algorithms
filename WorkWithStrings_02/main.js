/*
*	Find in the string a certain sequence of characters and replace it with another one.
*		Input :
*			str : w e r t q q q r s o
*			sequence : q q q
*			substituteStr : 1 1 1
*		Output :
*			w e r t 1 1 1 r s o
*		-------------------------------
*		Input :
*			str : 1 2 3 4 5 5 5 6 7 8 9 10 11 5 5 5
*			sequence : 5 5 5
*			substituteStr : 0 0 0
*		Output :
*			1 2 3 4 0 0 0 6 7 8 9 10 11 0 0 0
*		-------------------------------
*	Note : Don't use str.indexOf("..."), slice(1, 2) etcetera
*/

let str = prompt("Enter String : ");
let sequence = prompt("Enter Sequence : ");
let substituteStr = prompt("Enter Substitute : ");

function doSubstitute(str, sequence, substituteStr) {
	let count = 0;
	let array = [];
	for (let i = 0; i < str.length; i++) {
		array[array.length] = str[i];
		for (let j = 0; j < sequence.length; j++) {
			if (str[i] === sequence[j]) {
				count++;
				if (count === sequence.length) {
					for (let k = i; k > i - substituteStr.length; k--) {
						for (let x = 0; x < substituteStr.length; x++) {
							array[k] = substituteStr[x];
							break;
						}
					}	
				}
				break;
			}
			else {
				count = 0;
				break;
			}
		}
	}
	console.log(array.join(" "));
}

console.log(str);
doSubstitute(str, sequence, substituteStr);