function decodedNumber(binNumStr) {
	
	const binNumArr = binNumStr.split('0');
	
	let resultNumber = '';

	for (let i = 0; i < binNumArr.length; i++) {
		resultNumber += binNumArr[i].length;
	}

	return +resultNumber;
}

console.log(decodedNumber('111100011111'));