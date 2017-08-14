function invalidCapsLock(str) {
	
	let result = '';
	
	if (str.length === 1 && str > 'Z') {
		result = str.toUpperCase();
	}
	else {
		
		var buff = str.toLowerCase();
		var firstLetter = buff[0].toUpperCase();
		
		result = firstLetter + buff.slice(1);
	}

	return result;
}


console.log(invalidCapsLock('dgAfgg'));