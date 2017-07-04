function checkCard(suit, firstCard, secondCard) {
	
	let rankArray = ['6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

	let firstCardRank = rankArray.indexOf(firstCard[0]);
	let secondCardRank = rankArray.indexOf(secondCard[0]);

		
	if (firstCard[1] === suit && secondCard[1] !== suit) {
		return 'YES';
	}
	else if (firstCard[1] === secondCard[1] && firstCardRank > secondCardRank) {
		return 'YES';
	}

	return 'NO';	
}


console.log(checkCard('S', '6S', 'AD')); // YES