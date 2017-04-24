/*
*   Convert the array in such a way that all the elements that do not exceed one (1) 
*   are located first, and then all the others.
*   
*   Input : 
*       [1, 2, 3, 4, 5, 0.9, 0, -0.8, -1, -4, 10, 0, -1.5]
*   Output :
*       [0, -0.8, 0, 0.9, 1, 2, 3, 4, 5, -1, -4, 10, -1.5]
*   ----------------------------------------------------------------
*   Input :
*       [1, 1, 1, 1, 1, 1, 1, 0.9, 0.8, -0.7, 0, -0.467, 1, 1, 1, 1]
*   Output : 
*       [-0.467, 0, -0.7, 0.8, 0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
*/

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
console.log(array);

Array.prototype.smallerThanOne = function () {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] < 1 && this[i] > -1) {
            
            newArray.unshift(this[i]);
        }
        else {
            newArray[newArray.length] = this[i];
        }
        
    }
    return newArray;
}

console.log(array.smallerThanOne());