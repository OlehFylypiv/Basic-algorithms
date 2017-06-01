function howManyDominoUse(n, m) {
	
	let areaSize = n * m;
	countDomino = 0;
	
	 if (areaSize % 2 === 0) {
	 	countDomino = areaSize / 2;
	 }
	 else {
	 	countDomino = Math.floor(areaSize / 2);
	 }

	 return countDomino;
}

console.log(howManyDominoUse(1, 10)); // 5