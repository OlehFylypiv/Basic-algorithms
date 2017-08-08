function replaceLetters(str) {

	const letterArr = ['A', 'O', 'Y', 'E', 'U', 'I', 'a', 'o', 'y', 'e', 'u', 'i'];
	
	let newStr = '';
	
	for (let i = 0; i < str.length; i++) {
		
		if (letterArr.indexOf(str[i]) === -1) {
			newStr += ('.' + str[i].toLowerCase());
		}
	}

	return newStr;
}


console.log(replaceLetters('aBAcAba'));