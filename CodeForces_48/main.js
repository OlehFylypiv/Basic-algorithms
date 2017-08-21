function findCity(arr) {
    
    const min = Math.min(...arr);
    let counter = 0;
    
    for (let i = 0; i <  arr.length; i++) {
        
        if (arr[i] === min) {
            counter++;
        }
    }

    if (counter < 2) {
        return arr.indexOf(min) + 1;
    }
    
    return 'Still Rozdil';  
}


const arr = [7, 4, 47, 100, 4, 9, 12];

console.log(findCity(arr));