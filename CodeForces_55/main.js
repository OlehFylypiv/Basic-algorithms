function calculateMoney(arr) {
    
    let store = 0;
    let rest = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === 25) {
            store += 25;
        } 
        else {
            
            store += 25;
            rest = arr[i] - 25;
            
            if (store >= rest) {
                store -= rest;
            }
            else {
                return 'No';
            }
        }
    }

    return 'Yes';
}

const arr = [25, 50, 50, 25];

console.log(calculateMoney(arr));
