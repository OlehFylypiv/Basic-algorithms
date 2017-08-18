function nextRound(arr, k) {
    
    let counter = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] >= arr[k - 1] && arr[i] > 0) {
            counter++;
        }
    }

    return counter;
}

const k = 5;
const arr = [10, 9, 8, 7, 7, 7, 5, 5];


console.log(nextRound(arr, k));