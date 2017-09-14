function calculateNumbers(str) {
    
    const arr = str.split('+');

    return arr.sort().join('+');
}


const str = '2+1+3+2';

console.log(calculateNumbers(str)); 
