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

function find3MaxElement(array) {
    let a = array[0];
    let b = array[1];
    let c = array[2];
    let indexA = 0;
    let indexB = 1;
    let indexC = 2;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > a) {
            c = b;
            b = a;
            a = array[i];
            indexA = i;
        }
        else if (array[i] > b) {
            c = b;
            b = array[i];
            indexB = i;
        }
        else if (array[i] > c) {
            c = array[i];
            indexC = i;
        }
    }
    console.log("# " + indexA + " : " + a);
    console.log("# " + indexB + " : " + b);
    console.log("# " + indexC + " : " + c);
}

find3MaxElement(array);