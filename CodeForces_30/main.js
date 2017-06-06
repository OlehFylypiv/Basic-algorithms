function sinkingShip(array) {
	
	let womanChild = [];
	let man = [];
	let rat = [];
	let capitan = [];

	for (let i = 0; i < array.length; i += 1) {
		
		if (array[i][array[i].length - 1] === "t") {
			array[i].length = array[i].length - 4;
			rat[rat.length] = array[i];
		}
		
		else if (array[i][array[i].length - 1] === "n" || array[i][array[i].length - 1] === "d") {
			array[i].length = array[i].length - 6;
			womanChild[womanChild.length] = array[i];
		}
		
		else if (array[i][array[i].length - 2] === "a") {
			array[i].length = array[i].length - 4;
			man[man.length] = array[i];
		}
		
		else if (array[i][array[i].length - 4] === "i") {
			array[i].length = array[i].length - 8;
			capitan[capitan.length] = array[i];
		}
	}

	console.log(rat);
	console.log(womanChild);
	console.log(man);
	console.log(capitan);
}

(function setData() {

	let n = Number(prompt("Enter n : "));
	let array = [];

	for (let i = 0 ; i < n; i += 1) {
		array[i] = prompt("Enter name : ");
	}
	
	sinkingShip(array);
})();