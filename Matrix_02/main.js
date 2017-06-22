function mainFunctionDrawSnakeMatrix(size) {
    
    var counter = 1;
    var arr = new Array(size);
    var len = arr.length;
    
    for (var i = 0; i < len; i++) {
            arr[i] = new Array(size);
    }
    
    function fillContours(offset) {
       
        var maxIndex = size - 1;

        for (var i = offset; i < maxIndex - offset; i++) {
            arr[i][offset] = counter++;
        }

        for (var i = offset; i < maxIndex - offset; i++) {
            arr[maxIndex - offset][i] = counter++;
        }

        for (var i = maxIndex - offset; i > offset; i--) {
            arr[i][maxIndex - offset] = counter++;
        }

        for (var i = maxIndex - offset; i > offset; i--) {
            arr[offset][i] = counter++;
        }
    }

    function fillArray() {
        
        var differ = Math.floor(size / 2);
        
        for (var i = 0; i < differ; i++) {
            fillContours(i);
        }

        if (size % 2 !== 0) {
            arr[differ][differ] = counter;
        }
    }

    function printArray() {
        
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                
                var str = "  ";
                
                if (arr[j][i] / 10 >= 1) {
                    str = " ";
                }
                
                arr[j][i] = str + arr[j][i];
            }
        }
        
        for (var i = size - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
    }

   
    fillArray();
        
    printArray();   
}

mainFunctionDrawSnakeMatrix(7);