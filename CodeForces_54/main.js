function searchNumber(n, k) {
    
    let i = 1;
    let arrOdd = [];
    let arrEven = [];
    
    while (i <= n) {
        if (i % 2 === 0) {
            arrOdd.push(i);
        }
        else {
            arrEven.push(i);
        }

        i++;
    }

    const result = arrEven.concat(arrOdd);
    console.log(result);

    return result[k - 1];
}


const n = 10;
const k = 5;

console.log(searchNumber(n, k));
