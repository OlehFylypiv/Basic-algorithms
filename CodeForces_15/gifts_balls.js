function doBallArray() {
	let ballsArray = [];
	let n = Number(prompt("Enter n : "));
	for (let i = 0; i < n; i++) {
		ballsArray[i] = Number(prompt("Enter ball #" + i));
	}
	return ballsArray;
}

function sortBallsArray(ballsArray) {
	for (let i = 0; i < ballsArray.length; i++) {
		for (let j = 0; j < ballsArray.length; j++) {
			if (ballsArray[i] < ballsArray[j]) {
				let temp = ballsArray[i];
				ballsArray[i] = ballsArray[j];
				ballsArray[j] = temp;
			}
		}
	}
	return ballsArray;
}

function chooseThreeBalls(ballsArraySort) {
	let giftsArray = [];
	for (let i = 0; i < ballsArraySort.length; i++) {
		if (ballsArraySort[i + 2] - ballsArraySort[i + 1] === 1 && ballsArraySort[i + 2] - ballsArraySort[i] === 2) {
			giftsArray[giftsArray.length] = ballsArraySort[i];
			giftsArray[giftsArray.length] = ballsArraySort[i + 1];
			giftsArray[giftsArray.length] = ballsArraySort[i + 2];
			console.log(giftsArray);
			return "YES";
		}
	}
	return "NO";
}

let ballsArray = doBallArray();
let ballsArraySort = sortBallsArray(ballsArray);

console.log(ballsArray);
console.log(ballsArraySort);
console.log(chooseThreeBalls(ballsArraySort));