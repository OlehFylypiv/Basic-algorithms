function calculateSocks(n, m) {
    
    let shopingDays = [];
    let buff = 0;

    for (let i = 1; i < n; i++) {
        
        buff = i * m;
        shopingDays.push(buff);

        if (buff === n) {
            break;
        }
        else if (buff > n) {
            
            shopingDays.pop();
            break;  
        }
    }

    if ((shopingDays.length + n) % m === 0) {
        return shopingDays.length + n + 1;
    }
    else {
        return shopingDays.length + n;
    }
}


const n = 9;
const m = 3;

console.log(calculateSocks(n, m));
