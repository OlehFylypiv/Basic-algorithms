function checkPrint(str) {
	
	const comands = ['Q', 'H', '9', '+'];
	
	for (let i = 0; i < str.length; i++) {
		
		if (str.indexOf(comands[i]) !== -1) {
			return 'Yes';
		}
	}

	return 'No';
}


console.log(checkPrint('CodeForces'));