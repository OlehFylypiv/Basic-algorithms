// test function
function square(x) { return x * x; }


// test function
function sum(x) { return x + x; }


function invoke(array, func, context) {
	
	var len = array.length;
	var resultArray = [];

	for (var i = 0; i < len; i++) {
		if (i >= context) {
			resultArray.push(func(array[i]));
		}
	}

	return resultArray;
}


console.log(invoke([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sum, 4)); // [10, 12, 14, 16, 18, 20]