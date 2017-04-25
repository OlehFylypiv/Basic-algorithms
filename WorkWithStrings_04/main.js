/*	
*	A string of characters is given. 
*	Groups of characters separated by one 
*	or more spaces and not containing spaces inside themselves will be called words. 
*	In the longest word, replace all the letters "a" with "b".
*/

let str = prompt("Enter String : ");

function doArrayFromStr(str) {
	let strArray = [];
	let count = -1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== " ") {
			count++;
			strArray[count] = new String;
			for (let j = i; j < str.length; j++) {
				if (str[j] !== " ") {
					strArray[count] = strArray[count] + str[j];
				}
				else {
					i = j;
					break;
				}
			}
		}
		else {
			continue;
		}
	}
	return strArray;
}

let strArray = doArrayFromStr(str);

function findLongestStr(strArray) {
	let maxStr = new String;
	for (let i = 0, j = 1; i < strArray.length, j < strArray.length; i++, j++) {
		if (strArray[i].length < strArray[j].length) {
			
			maxStr = strArray[i + 1];
		}
		else {
			maxStr = strArray[0];
		}
	}
	return maxStr;
}

let maxStr = findLongestStr(strArray);

function replaceLetters(maxStr) {
	let swapStr = new String;
	for (let i = 0; i < maxStr.length; i++) {
		if (maxStr[i] === "a") {
			swapStr = swapStr + "\'b\'";
		}
		else {
			swapStr = swapStr + maxStr[i];
		}
	}
	return swapStr;
}

console.log(replaceLetters(maxStr));