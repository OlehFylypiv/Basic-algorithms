function clear(array) {
	
	var len = array.length;
	var clearArray = [];
	
	if (len === 0) {
		return "Enter an array";
	}

	for (var i = 0; i < len; i++) {
		if (array[i] === 0 || array[i] === false) {
			clearArray.push(array[i]);
		}
		else if (!!array[i]) {
			clearArray.push(array[i]);
		}
	}

	return clearArray; // [2, 0, "Vika", Object, false, "1256Lviv", 0, -1234]
}


// test array
var array = [void 0, 2, 0, +'x', 'Vika', {x: 2}, '', NaN, false, null, '1256Lviv', +'0', -'1234'];

console.log(clear(array));