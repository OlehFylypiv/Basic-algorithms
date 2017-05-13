function createColorMatrix(n, m) {
	
	let colorMatrix = new Array(n);
	
	for (let i = 0; i < colorMatrix.length; i++) {
		colorMatrix[i] = new Array(m);
	}

	for (let row = 0; row < colorMatrix.length; row++) {
		for (let col = 0; col < colorMatrix[row].length; col++) {
			colorMatrix[row][col] = prompt("Enter color : " + "(" + row + "," + col + ")");
		}
	}
	
	return colorMatrix;
}

function checkFotoColor(colorMatrix) {
	
	for (let row = 0; row < colorMatrix.length; row++) {
		for (let col = 0; col < colorMatrix[row].length; col++) {
			
			switch (colorMatrix[row][col]) {
				case "C" :
					return "#Color";
				case "M" :
					return "#Color";
				case "Y" :
					return "#Color";
				default :
					continue;		
			}
		}
	}
	
	return "#Black&White";
}

let MYAPP = {};

MYAPP.n = Number(prompt("Enter n :"));
MYAPP.m = Number(prompt("Enter m :"));

MYAPP.colorMatrix = createColorMatrix(MYAPP.n, MYAPP.m);

console.log(checkFotoColor(MYAPP.colorMatrix));