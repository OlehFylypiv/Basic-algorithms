/*
*   Rotate an array 
*   Input : 
*       [1, 2, 3, 4, 5, 6, 7, 8, 9]
*       3
*   Output :
*       [7, 8, 9, 1, 2, 3, 4, 5, 6]
*   -------------------------------
*   Input : 
*       [1, 2, 3, 4]
*       1
*   Output :
*       [4, 1, 2, 3]
*   -------------------------------
*   Input : 
*       [1, 2, 3, 4]
*       0
*   Output :
*       [1, 2, 3, 4]
*/

Array.prototype.rotateArray = function (n) {
    let firstArray = [];
    let secondArray = [];
    for (let i = this.length - 1; i > this.length - n - 1; i--) {
        firstArray.unshift(this[i]);
    }
    for (let j = 0; j < this.length - n; j++) {
        secondArray[secondArray.length] = this[j];
    }
    return firstArray.concat(secondArray);
}

function createArray() {
    let valuesStr = prompt("Enter an Array : ");
    let arrayStr = valuesStr.split(" ");
    let array = [];
    for (let i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i] )
        array[array.length] = Number(arrayStr[i]);
    }
    return array;
}
 
let array = createArray();
console.log(array.rotateArray(3));