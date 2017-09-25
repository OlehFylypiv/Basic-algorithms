function addOne(str) {
    
    const reverse = str.split('').reverse().join('');
    let number = parseInt(reverse, 2);

    number += 1;
    
    const newStr = number.toString(2).split('').reverse().join('');
    
    let counter = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== newStr[i]) {
            counter++;
        }
    }

    return counter;
}

const str = '1100';

console.log(addOne(str));
