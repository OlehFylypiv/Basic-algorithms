function doConcatArray(array) {
    let concatArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "object") {
            for (let j = 0; j < array[i].length; j++) {
                concatArray.push(array[i][j]);
            }
        }
        else if (typeof array[i] === "number") {
            concatArray.push(array[i]);
        }
    }
    return concatArray;
}

let array = [1, 4 ,6, -10, [0, 56, -70], 100, 45, -12, [-1, 24], [3, -9]];
let concatArray = doConcatArray(array);

function searchSumOfPositiveAndNegativeElements(concatArray) {
    let sumNeg = 0;
    let sumPos = 0;
    for (let i = 0; i < concatArray.length; i++) {
        if (concatArray[i] < 0) {
            sumNeg += concatArray[i];
        }
        else {
            sumPos += concatArray[i];
        }
    }
    return result = {
        positive : sumPos,
        negative : sumNeg
    };
}

console.log(searchSumOfPositiveAndNegativeElements(concatArray));