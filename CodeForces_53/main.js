function searchMagicNumbers(str) {
    
    function isEmpty(elem) {
        return elem === '';
    }
    
    let arr1 = str.split('1');
    let arr14 = str.split('14');
    let arr144 = str.split('144');
    
    if (arr1.every(isEmpty) === true) {
        return 'Yes';
    }
    else {
        let arr1_1 = arr1.join('').split('14');
        let arr1_2 = arr1_1.join('').split('144');
        if (arr1_2.every(isEmpty) === true) {
            return 'Yes';
        }
    }
    
    if (arr14.every(isEmpty) === true) {
        return 'Yes';
    }
    else {
        let arr14_1 = arr14.join('').split('1');
        let arr14_2 = arr14_1.join('').split('144');
        if (arr14_2.every(isEmpty) === true) {
            return 'Yes';
        }
    }
    
    if (arr144.every(isEmpty) === true) {
        return 'Yes';
    }
    else {
        let arr144_1 = arr144.join('').split('1');
        let arr144_2 = arr144_1.join('').split('14');
        if (arr144_2.every(isEmpty) === true) {
            return 'Yes';
        }
    }

    return 'No';
}

const str = '141144';

console.log(searchMagicNumbers(str));