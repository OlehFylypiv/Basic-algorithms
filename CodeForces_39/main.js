function sortPile(str1, str2, pile) {
	
	const strLength1 = str1.length;
	const strLength2 = str2.length;

	let counterStr1 = 0;
	let counterStr2 = 0;

	for (let i = 0; i < strLength1; i++) {
		
		let index = pile.indexOf(str1[i]);
		
		if (index !== -1) {
			
			counterStr1++;
			pile = pile.replace(str1[i], '');
		}
	}

	for (let i = 0; i < strLength2; i++) {
		
		let index = pile.indexOf(str2[i]);
		
		if (index !== -1) {
			
			counterStr2++;
			pile = pile.replace(str2[i], '');
		}
	}
	
	if (counterStr1 === strLength1 && counterStr2 === strLength2 && pile.length === 0) {
		return 'YES';
	}
	else {
		return 'NO';
	}
}

console.log(sortPile('JOHN', 'KRIS', 'JHSKOLIMSAWKERN'));