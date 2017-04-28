function inputPolyhedrons() {
	let n = Number(prompt("Enter n : "));
	let polyhedronsArray = [];
	for (let i = 0; i < n; i++) {
		polyhedronsArray[polyhedronsArray.length] = prompt("Enter Polyhedron #" + i);
	}
	return polyhedronsArray;
}

let polyhedronsArray = inputPolyhedrons(); 

function  howManyFacesPolyhedrons(polyhedronsArray) {
	let counter = 0;
	for (let i = 0; i < polyhedronsArray.length; i++) {
		switch (polyhedronsArray[i]) {
			case "Tetrahedron" : 
				counter += 3;
				break;
			case "Cube" :
				counter += 6;
				break;
			case "Octahedron" :
				counter += 8;
				break;
			case "Dodecahedron" :
				counter += 12;
				break;
			case "Icosahedron" :
				counter += 20;
				break;
			default :
				break;
		}
	}
	return counter;
}

console.log(howManyFacesPolyhedrons(polyhedronsArray));