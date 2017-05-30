function findWhoCanNotGiveCandy(VladCandy, ValeraCandy) {
	let giveVladCandy = 0;
	let giveValeraCandy = 0;

	while (true) {
		// Valadik step
		giveVladCandy = giveValeraCandy;
		giveVladCandy += 1;
		
		if (VladCandy < giveVladCandy) {
			return "Vladik";
		}

		VladCandy -= giveVladCandy;

		// Valera step
		giveValeraCandy = giveVladCandy;
		giveValeraCandy += 1;
		
 		if (ValeraCandy < giveValeraCandy) {
			return "Valera";
		}

		ValeraCandy -= giveValeraCandy;
	}
}

let VladCandy = Number(prompt("Enter VladCandy: "));
let ValeraCandy = Number(prompt("Enter ValeraCandy: "));
console.log(findWhoCanNotGiveCandy(VladCandy, ValeraCandy));