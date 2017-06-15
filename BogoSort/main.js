// "Bogosort" is a perversely inefficient algorithm only used as an in-joke

function shuffle(array) {
    
    for (let j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    
    return array;
}
 
function isSorted(array) {
    
    for(let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) { 
            return false; 
        }
    }
    
    return true;
}
 
 function bogoSort(array) {
    
    let sorted = false;
    
    while(sorted === false) {
        array = shuffle(array);
        sorted = isSorted(array);
    }
    return array;
}

let array = [2, 3, 1, 5];
console.log(bogoSort(array));