function omit() {
	
	var copyObj = {};
	var len = arguments.length;
	var counter = 0;
	
	for (var key in arguments[0]) {
		
		for (var i = 1; i < len; i++) {
			
			if (key === arguments[i]) {
				counter++;
				break;
			}
		}

		if (counter === 0) {
			copyObj[key] = arguments[0][key];
		}
		
		counter = 0;	
	}

	return copyObj;
}


console.log(omit({name: 'moe', age: 50, userid: 'moe1', cod: 8080, take: true}, 'name', 'age', 'cod')); // { userid: "moe1", take: true }