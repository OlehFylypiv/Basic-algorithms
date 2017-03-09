let heigthPotatoes = [];
let number = prompt('Enter number of potatoes ');
    for (let k = 0; k < number; k++) {
        let bufferArr = [prompt('Enter potatoes # '+ k)];
          heigthPotatoes[k] = +bufferdArr;
    }
let heigth = prompt('Enter heigth of Food Processor');
let time = prompt('Enter time of griding'); 
alert (number);
alert (heigth);
alert (time);
function grindingPotatoes (number, heigth, time, heigthPotatoes) {
	let buff = 0;
	let counterTime = 0;
	for (let i = 0; i < number; i++) {
		if (heigth >= heigthPotatoes[i]) {
			if ( time >= heigthPotatoes[i]) {
				buff = time - heigthPotatoes[i];
				alert ('buff' + buff);
				if (buff > 0 ) {
					time = buff;
					continue;
				}
				if ( buff <= 0) {
					counterTime++;
					time = buff;
					continue;
				}
			}
			if (time < heigthPotatoes[i]) {
				buff = time - heigthPotatoes[i];
				counterTime++;
				continue;
			}
		}
		if (heigth < heigthPotatoes[i]) {

		}
	}
	if (buff < 0)  {
		/* counterTime + 2; */
	}
	alert ("Counter time " + counterTime);
}
grindingPotatoes(number, heigth, time, heigthPotatoes);