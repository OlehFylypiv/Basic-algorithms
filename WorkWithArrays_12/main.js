/* Enter a decimal number, print this number in the binary system. */

let number = Number(prompt("Enter number : "));

function isInteger(number) {
	return (number ^ 0) === number;
}

function binary(number) {
	if ( isInteger(number) === false ) {
		console.log("Enter Integer Number");
		return 0;
	}
	let binaryArray = [];
	while (number > 0) {
		if (number % 2 === 1) {
			binaryArray[binaryArray.length] = 1;
		}
		else  {
			binaryArray[binaryArray.length] = 0;
		}
		number = parseInt(number / 2);
	}
	return binaryArray.reverse().join("");
}

binaryNumber = binary(number);
console.log(number + " = " + binaryNumber);