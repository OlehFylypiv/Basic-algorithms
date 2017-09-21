function showMatrix(n) {
    
    let 
        s,
        i,
        j,
        board = '',
        out = '';
    
    for (s = 0; s < n - 1; s++) {
        out += '*';
    }

    for (i = 0; i < n; i++) {
            
        board += 'D ';
            
        console.log(out, board, out);
            
        out = out.substring(0, out.length - 1);
    }
    
    for (j = n; j > 0; j--) {
            
        out += '*';
            
        board = board.substring(0, board.length - 2);
            
        console.log(out, board, out);
    }
}


const n = 5;

showMatrix(n);
