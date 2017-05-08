/**
*	Using spread operator (...)
*	
*	let staticLanguages = ["C", "C++", "Java"],
*		dynamicLanguages = ["JS", "PHP", "Ruby"],
*
*		languages = [...staticLanguages, "C#", ...dynamicLanguages, "Python"];
*
*	console.log(languages);
*	// ["C", "C++", "Java", "C#", "JS", "PHP", "Ruby", "Python"]
*/


findMaxValue = () => {
	let array = [[1, 2, 4], "3", "5", [0, 0, 0]],
		oneDimensionalArray = [];
	
	for (let i = 0, lengthArray = array.length; i < lengthArray; i += 1) {
		oneDimensionalArray.push(...array[i]); 
	}
	
	return Math.max(...oneDimensionalArray);
}

console.log(findMaxValue()); // 5