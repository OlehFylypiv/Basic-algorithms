function calculateSticks(n, k) {
	
	let counterStepsSasha = 0;
	let counterStepsLena = 0;

	for (let i = 2; ; i++) {
		
		if (i % 2 === 0) {
			
			if (n < k) {
				break;
			}
			
			n -= k;
			counterStepsSasha++;
		}
		else {
			
			if (n < k) {
				break;
			}

			n -= k;
			counterStepsLena++;
		}
	}

	if (counterStepsSasha <= counterStepsLena) {
		return 'NO';
	}
	else {
		return 'YES'
	}
}

console.log(calculateSticks(10, 4));