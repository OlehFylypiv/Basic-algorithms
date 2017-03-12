function findNumber (n, divisor) {
	let x = 0;
	for (let i = n + 1; ; i++) {
		if (i % divisor == 0) {
			x = i;
			break;
		}
	}
	return x;
}
let n = prompt ("Enter n ");
let divisor = prompt ("Enter k ");
alert ("Your required number is " + findNumber ( parseInt(n), parseInt(divisor) ) );