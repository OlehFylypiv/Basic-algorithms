function whenLimakWillBeBiggerBob (weightLimak, weightBob, counterYears) {
	if (weightLimak <= weightBob) {
		weightLimak *= 3;
		weightBob *= 2;
		return whenLimakWillBeBiggerBob(weightLimak, weightBob, ++counterYears);
	}
	else return counterYears;
}

let weightLimak = prompt ("Enter weight : Limak ");
let weightBob  = prompt ("Enter weight : Bob ");
let years = whenLimakWillBeBiggerBob (weightLimak, weightBob, 0);
alert ("Limak will be bigger than Bob after " + years + " years"); 