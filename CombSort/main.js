function combSort(array) {
    
    let n = 0;
    let fakt = 1.2473309; 
    let step = array.length - 1;

    while (step >= 1) {
        for (let i = 0; i + step < array.length; ++i) {
            if (array[i] > array[i + step]) {
                    
                    swap1(array[i], i, step);
                    n++;
                }
            }
            
        step /= fakt;
    }
        
    for (let i = 0; i < array.length - 1; i++) {
            let swapped = false;
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    
                    swap2(array[j], j);
                    swapped = true;
                    ++n;
                }
            }

            if (!swapped)
                break;
    }
    
    console.log(array);
    return n;
}

function swap2(array, j) {
    
    let glass = array[j];
    array[j] = array[j + 1];
    array[j + 1] = glass;
}

function swap1(array, i, step) {
    
    let glass = array[i];
    array[i] = array[step + i];
    array[step + i] = glass;
}

let array = [1, 5, 2, 7, 4, 1, 9, 6, 3, 6, 5, 1, 9, 5, 9, 2];
combSort(array);