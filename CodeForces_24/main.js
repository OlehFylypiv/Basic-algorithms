function findLongWords(wordsArray) {
	
	let longWordsArray = [];
	let shortWordsArray = [];
	let newLongWordsArray = [];

	for (let i = 0; i < wordsArray.length; i += 1) {
		if (wordsArray[i].length > 10) {
			longWordsArray[longWordsArray.length] = wordsArray[i];
		}
		else {
			shortWordsArray[shortWordsArray.length] = wordsArray[i];
		}
	}
	
	for (let j = 0; j < longWordsArray.length; j += 1) {
		newLongWordsArray[j] = longWordsArray[j][0] + longWordsArray[j].length + longWordsArray[j][longWordsArray[j].length - 1];
	}

	console.log(newLongWordsArray);
	console.log(shortWordsArray);
}


function doWordsArray() {
	
	let n = prompt("Enter a number of the words : ");
	let wordsArray = [];

	for (let i = 0; i < n; i += 1) {
		wordsArray[i] = prompt("Enter a word : ");
	}

	return wordsArray;
}


let wordsArray = doWordsArray();
findLongWords(wordsArray);