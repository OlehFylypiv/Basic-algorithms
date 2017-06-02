function soldierHeight(heightArray) {
	
	let differenceArray = [];
	let buff = 0;

	for (let i = 0; i < heightArray.length - 1; i += 1) {
		buff = heightArray[i] - heightArray[i + 1];
		
		if (buff === 0) {
			console.log(i + " and " + (i + 1));
			return 0;
		}
		
		else if (buff < 0) {
			differenceArray[differenceArray.length] = - buff;
		}
		
		else {
			differenceArray[differenceArray.length] = buff;
		}
	}
	
	if ((heightArray[0] - heightArray[heightArray.length - 1]) < 0) {
		differenceArray[differenceArray.length] = - (heightArray[0] - heightArray[heightArray.length - 1]);
	}

	else {
		differenceArray[differenceArray.length] = (heightArray[0] - heightArray[heightArray.length - 1]);
	}

	let min = Math.min.apply(Math, differenceArray);
	let index = differenceArray.indexOf(min);
	
	console.log(index + " and " + (index + 1));
}

let heightArray = [10, 12, 31, 19];
soldierHeight(heightArray)