function shakerSort(array) {
    
    let left = 0,
    right = array.length - 1,
    count = 0;

    while (left <= right) {
        for (let i = left; i < right; i += 1) {
            count += 1;
            if (array[i] > array[i + 1]) {
                Swap(array, i, i + 1);
            }
        }
        
        right -= 1;

        for (let i = right; i > left; i -= 1) {
            count += 1;
            if (array[i - 1] > array[i]) {
                Swap(array, i - 1, i);
            }
        }
        
        left += 1;
    }
    
    console.log(array);
}

function Swap(array, i, j) {
    
    let glass = array[i];
    array[i] = array[j];
    array[j] = glass;
}

let array = [1, 4, 3, 5, 6, 2, 98, 5, 31, 3, 9, 0];
shakerSort(array);