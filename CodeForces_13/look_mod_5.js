function lookMod5(n, m) {
	let arrayN = [];
	let arrayM = [];
	let counter = 0;
	while (n >= 1) {
		arrayN.unshift(n);
		n--;
	}
	while (m >= 1) {
		arrayM.unshift(m);
		m--;
	}
	for (let i = 0; i < arrayN.length; i++) {
		for (let j = 0; j < arrayM.length; j++) {
			if ( (arrayN[i] + arrayM[j]) % 5 === 0) {
				counter++;
				continue;
			}
		}
	}
	console.log(counter);
}

let str = prompt("Enter n and m : ");
let buffer = str.split(" ", 2);
lookMod5(+buffer[0], +buffer[1]);