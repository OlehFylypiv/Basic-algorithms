function searchMinAndMaxNum(m, s) {
    
    if (s <= 0 || m < 10) {
        return -1;
    }

    let a = 0;
    let b = 0;
    
    if (m % s === 0) {
        a = m / 2;
        b = a;
    }
    else {
        a = parseInt(m / s);
        b = a + 1;
    }

    console.log('first: '+ a + b + ' | second: ' + b + a);
   
}

const s = -1;
const m = 17;

console.log(searchMinAndMaxNum(m, s));
