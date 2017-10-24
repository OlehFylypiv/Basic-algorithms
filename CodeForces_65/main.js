function findMaximumIncrease(arr) {
    
    let maxIncrease = 1;
    let currentIncrease = 1;
    let number = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > number) {
            currentIncrease++;
            number = arr[i];
        }
        else if (arr[i] < number) {
            currentIncrease = 1;
            number = arr[i];
        }

        if (currentIncrease > maxIncrease) {
            maxIncrease = currentIncrease;
        }
    }
   
    return maxIncrease;
}


const arr = [1, 7, 2, 11, 15];


console.log(findMaximumIncrease(arr));
