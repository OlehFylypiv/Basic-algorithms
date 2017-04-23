/*
*   Find duplicate array elements.
*   Input : 
*       [1, 2, 3, 4, 4, 3, 2, 1]
*   Output :
*       4
*       [1, 2, 3, 4]
*   ----------------------------
*   Input : 
*       [1, 1, 1, 1, 1]
*   Output : 
*       4
*       [1]
*/

function createArray() {
    let valuesStr = prompt("Enter an Array : ");
    let arrayStr = valuesStr.split(" ");
    let array = [];
    for (let i = 0; i < arrayStr.length; i++) {
        array[array.length] = parseInt(arrayStr[i]);
    }
    return array;
}
 
let array = createArray();
console.log(array);

Array.prototype.lookDuplicate = function () {
    let arrayWithoutIdentica = new Array();
    let counter = 0;
    markForContinue : for (let i = 0; i < this.length; i++) {
                            for (let j = 0; j < arrayWithoutIdentica.length; j++) {
                                if(arrayWithoutIdentica[j] === this[i]) {
                                    counter++;
                                    continue markForContinue;
                                }
                            }
                            arrayWithoutIdentica[arrayWithoutIdentica.length] = this[i];
                        }
    console.log(counter);
    return arrayWithoutIdentica;
}

console.log(array.lookDuplicate());