function searchSum(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            
            if (arr[j + 1] > arr[j]) {
                
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    let sum = arr.reduce((x, y) =>  x + y);
    let myCoinsSum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        myCoinsSum += arr[i];
        
        if (myCoinsSum > (sum - myCoinsSum)) {
            return i + 1;
        }
    }
}


const arr = [1, 2, 3, 2, 1, 1];

console.log(searchSum(arr));