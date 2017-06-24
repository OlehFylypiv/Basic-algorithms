function stringed(text) {
	
	var strArray = text.split('\n');
	
	var len = strArray.length;
	
	for (var i = 0; i < len; i++) {
		strArray[i] = strArray[i].trim();
	}

	return strArray;	
}


var testText = 'test blabla   \n   good day   \n    hello     world!\n  smile ;)  \n Hi!  ';

console.log(stringed(testText)); // ["test blabla", "good day", "hello     world!", "smile ;)", "Hi!"]