function calculateTimeKeyPress(s, v1, v2, t1, t2) {
	
	if ((s * v1 + 2 * t1) > (s * v2 + 2 * t2)) {
		return 'Second';
	} 
	else if ((s * v1 + 2 * t1) < (s * v2 + 2 * t2)) {
		return 'First';
	}
	else {
		return 'Friendship';
	}
}

console.log(calculateTimeKeyPress(4, 5, 3, 1, 5));