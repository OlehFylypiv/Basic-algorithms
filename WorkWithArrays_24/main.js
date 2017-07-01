Array.prototype.mySort = function (key) {

	function compare(first, second) {
		
		if (first[key] < second[key]) {
    		return -1;
		}
  
  		if (first[key] > second[key]) {
    		return 1;
		}
  
  		return 0;
	}	
	
	return this.sort(compare);
}


// test array 
var testArray = [
	
	{ a: 'a', b: 17 }, 
	{ a: 'b', b: 1 }, 
	{ name: 'John', b: 10 },
	{ age: 20, b: '9' },
	{ age: 20, b: -Infinity },
	{ a: 'c', b: false },
	{ box: 10, b: true },
	{ box: 10, b: 'hello' },
	{ box: 10, b: { name: 'Kiti' } },
	{ age: 20, b: undefined }

];


console.table(testArray.mySort('b')); // -Infinity false 1 true '9' 10 17 Object 'hello' undefined

console.log(testArray.mySort('b') === testArray); // true