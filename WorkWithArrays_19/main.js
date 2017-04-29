/*
*   Find all number's divisors
*   Input :
*       10 
*   Output :
*       [1, 2, 5, 10]
*   -------------------------
*   Input :
*       13 
*   Output : 
*       "Number is prime"
*/

function isPrime(number) {
    if (number === 1) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function searchDivisors(number) {
    let divisorsArray = [];
    if (isPrime(number)) {
        return "Number is prime";
    }
    else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                divisorsArray[divisorsArray.length] = i;
            }
        }
        return divisorsArray;
    }
}

let number = Number(prompt("Enter a number : "));
console.log(searchDivisors(number));