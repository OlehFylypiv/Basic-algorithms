function mergeSort(array){

    if (array.length < 2) {
        return array;
    }

    let mid = Math.floor(array.length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid);
   
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    
    let res = [],
        l = 0,
        r = 0;
  
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            res.push(left[l++]);
        }
        else {
            res.push(right[r++]);
        }
    }  
  
    return res.concat(left.slice(l)).concat(right.slice(r));
}

let array = [1, 5, 2, 8, 4, 2, 1, -3, 23, -19, 45, 30, -5, 0];
console.log(array);
console.log(mergeSort(array));