function wordCap(str) {
    
    let first = str[0].toUpperCase();
    
    return first + str.slice(1);    
}


const str = 'apple';

console.log(wordCap(str));