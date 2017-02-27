function rounding (n, k) {
	let count = 0; 
	while (k > 0) { 
		if(n % 10 == 0) { 
			k--; 
		}
		else { 
			count++; 
		}	
		n = parseInt ((n /= 10), 10);
	} 
	alert (count); 
}
let n = prompt ("Enter a number, please.");
let k = prompt ("Enter power of ten (k)");
rounding(n, k);

