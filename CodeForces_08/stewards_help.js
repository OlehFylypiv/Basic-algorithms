let numberOfStewards = prompt ('Enter the number of stewards :');
let stewardsValueSts = prompt ('Enter the values which assigned to the stewards :');
let stewardsValueArr = stewardsValueSts.split(" ");
function stewardsHelp (numberOfStewards, stewardsValueArr) {
	for (let i = 0; i < numberOfStewards; i++) {
		for (let j = 0; j < numberOfStewards; j++) {
			if ( stewardsValueArr[ j + 1 ] < stewardsValueArr[j] ) {
				let temp = stewardsValueArr[j + 1];
				stewardsValueArr[ j + 1 ] = stewardsValueArr[j];
				stewardsValueArr[j] = temp;
			}
		}
	}
	if (numberOfStewards <= 2) {
		alert ("The number of stewards which Jon will feed : 0");
	}
	if (numberOfStewards > 2) {
		let stewardsWhichGetHelp = new Array ();
		for (let k = 1; k < numberOfStewards - 1; k++) {
			stewardsWhichGetHelp.push ( stewardsValueArr[k] );
		}
		alert ("Values which Jon will help : " + stewardsWhichGetHelp);
		alert ("The number of stewards which Jon will help : " + stewardsWhichGetHelp.length);
	}
} 
stewardsHelp (numberOfStewards, stewardsValueArr);