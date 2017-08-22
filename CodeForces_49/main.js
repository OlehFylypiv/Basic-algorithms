function calculateVar(counter) {
    
    let x = 0;
    
    for (let i = 0; i < counter; i++) {
        
        const operation = prompt('Enter operation: ');

        if (operation === '++X') {
            x++;
        }
        else if (operation === '--X') {
            x--;
        } 
    }

    return x;
}

const counter = 3

console.log(calculateVar(counter));