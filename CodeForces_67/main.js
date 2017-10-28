 function calcLevels(levels, first, second) {
	for (let i = 1; i <= levels; i++) {
	    if (first.includes(i) || second.includes(i)) {
	        if (i === levels){
	            console.log('Ok');
	        }
	    } 
	    else {
	        console.log('No');
	        break;
	    }
	}
}


const levels = 4;
const first = [3, 1, 2, 3];
const second = [2, 2, 4];

calcLevels(levels, first, second);
