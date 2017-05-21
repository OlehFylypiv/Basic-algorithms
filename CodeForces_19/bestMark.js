function doHigthMark(k, markArray) {
	
	let markSum = 0;
	let length = markArray.length;
	let counter = 0;
	
	for (let i = 0; i < length; i++) {
		markSum += markArray[i];
	}
	
	while ((markSum / length) < (k - 0.5)) {
		counter += 1;
		markSum += k;
		length += 1;
	}
	
	return counter;
}

let markArray = [4,4,4];
console.log(doHigthMark(5, markArray)); // 3