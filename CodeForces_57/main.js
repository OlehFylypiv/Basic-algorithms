function sortDigits(str) {
	
	let arrFive = [];
	let arrZero = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '5') {
			arrFive.push(5);
		}
		else {
			arrZero.push(0);
		}
	}
	
	let buff = +arrFive.concat(arrZero).join('');
	let number = 5;
	
	for (let i = 0; i < arrZero.length; i++) {
		number += '0';
	}	

	while (true) {
		buff = buff - (+number) + 5;

		if (buff % 90 === 0) {
			return buff;
		}
		else if (buff <= 0) {
			return -1;
		}
	}
}


const str = '500555';

console.log(sortDigits(str));
