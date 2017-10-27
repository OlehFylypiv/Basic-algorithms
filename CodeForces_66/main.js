function checkStr(str) {
    
    let regexp = /h.*e.*l.*l.*o/;
    let test = regexp.test(str);

    if (test) {
        return 'YES';
    }
    else {
        return 'No';
    }
}

const str = 'ahhellllloou';


console.log(checkStr(str));
