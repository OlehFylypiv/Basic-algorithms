Array.prototype.find = function (element) {
	
	if (typeof element === 'function') {
		return element(this);
	}

	var len = this.length;
	
	for (var i = 0; i < len; i++) {
		if(this[i] === element) {
			return element;
		}
	}

	return -1;
}


// test function 
var doPow = function (array) {
	
	var len = array.length;
	
	for(var i = 0; i < len; i++) {
		array[i] *= array[i]; 
	}

	return array;
}


// test array
var b = [1, 2, 3, 4, 5, 6];

console.log(b.find(doPow));