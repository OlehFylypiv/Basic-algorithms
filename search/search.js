function max (arr) {
    let arrLen = arr.length;
    maxEl = arr[0];
    for (let i = 0; i < arrLen; i++) {
      	if (maxEl < arr[i]) {
        	maxEl = arr[i];
      	}
    }
    return maxEl; 
}

function min (arr) {
    let minEL = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (minEL > arr[i]) {
        	minEL = arr[i];
        }
    }
    return minEL;
}

function middle (arr) {
    let sum = 0; 
 	for ( let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }

    let middleEl = (sum / arr.length);
    return middleEl;
        
}


let arr = [];
let lenght = prompt('Enter lenght of array');
    for (let k = 0; k < lenght; k++) {
        let unsortedArr = [prompt('Enter element #'+k)];
          arr[k] = +unsortedArr;
    }

document.getElementById('array').innerHTML = 'Your array is ' + arr;

function showMaxValue () {
	let maxValue = max (arr);

		alert (maxValue);

}

function showMinValue () {
	let minValue = min (arr);

		alert (minValue);

}


function showMiddleValue () {
	let middleValue = middle (arr);

		alert (middleValue);

}