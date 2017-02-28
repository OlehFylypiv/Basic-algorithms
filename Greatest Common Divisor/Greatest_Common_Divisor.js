function GreatestCommonDivisor (a, b, c) {
	let GreatestCommonDivisor = 1;
	for (let i = 2; i <= minOf(a, b, c); i++) {
			if (a % i == 0 && b % i == 0 && c % i == 0) {
				GreatestCommonDivisor = i;
			}
	}
	return GreatestCommonDivisor;
}
		/*Loking min mumber*/
function minOf (a, b, c) {
		if (a < b && a < c) {
			return a;
		}
		else {
			if (b < a && b < c) {
				return b;
			}
			else {
				return c;
			}
		}
}

let a = prompt ("Enter a");
let b = prompt ("Enter b");
let c = prompt ("Enter c");
alert (GreatestCommonDivisor(a, b, c));