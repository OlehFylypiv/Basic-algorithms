function compareStrings(str1, str2) {

	if (str1.toLowerCase() > str2.toLowerCase()) {
		return 1;
	}
	else {
		return -1;
	}

	return 0;
}


const str1 = prompt('Enter str1 : ');
const str2 = prompt('Enter str2 : ');


console.log(compareStrings(str1, str2));