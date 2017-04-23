/* 
*   Given an array. 
*   Find two neighboring elements, the sum of which is minimal.
*/

function createArray() {
    let valuesStr = prompt("Enter an Array : ");
    let arrayStr = valuesStr.split(" ");
    let array = [];
    for (let i = 0; i < arrayStr.length; i++) {
        array.push(parseInt(arrayStr[i]));
    }
    return array;
}
 
let array = createArray();
console.log(array);

function searchMinimalSum(array) {
    let sumArray = [];
    /* Do sum array of neighboring elements */
    for (let i = 0; i < array.length - 1; i++) {
        sumArray[sumArray.length] = array[i] + array[i + 1];
    }
    
    let minSum = Math.min.apply(Math, sumArray);
    let position = sumArray.indexOf(minSum);
    let firstElement = position;
    let secondElement = position + 1;
    
    console.log(sumArray);
    console.log("Minimal sum : " + minSum);
    console.log(array[firstElement] + " + " + array[secondElement]);
}

searchMinimalSum(array);