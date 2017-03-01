function numberOfTiles (a, width, height) {
	let countWidth = 0, countHeight = 0; 
	while (width > 0) { 
		width -= a; 
		countWidth++; 
	} 
	while (height > 0) { 
		height -= a; 
		countHeight++; 
	} 
	alert(countHeight * countWidth);
}

let a = prompt ("Enter size of tile.");
let width = prompt ("Width");
let height = prompt ("Height");

numberOfTiles (a, width, height);