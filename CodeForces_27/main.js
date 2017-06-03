function checkDataType(n) {
	
	if (n > -128 && n < 127) {
		return "byte";
	}

	if (n > -32768 && n < 32767) {
		return "short";
	}

	if (n > -2147483648 && n < 2147483647) {
		return "int";
	}

	if (n > -9223372036854775808 && n < 9223372036854775807) {
		return "long";
	}

	return "BigInteger";
}

let n = Number(prompt("Enter n : "));
console.log(checkDataType(n));