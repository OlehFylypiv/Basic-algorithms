function searchLetters(str) {
    
    let counter = 0;
    let arr = []
    
    for (let i = 1; i < str.length; i++) {
       if (str[i] !== '}' && str[i] !== ',' && str[i] !== ' ') {
            arr.push(str[i]);
       }
    }

    for (let y = 0; y < arr.length; y++) {
        let buff = arr[0];
        arr.shift();

        if(arr.indexOf(buff) === -1) {
            counter++;
        } 
    }

    return counter;
}


const str = '{a, d, c, a}';

console.log(searchLetters(str));
