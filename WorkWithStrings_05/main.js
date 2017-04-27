/*
*   Reverse all word in string, without changing the sequence of the words
*   Input : 
*       "123 456 789 000"
*   Output :
*       "321 654 987 000"
*/

 function reverseWords(str) {
    let buffer = "";
    let output = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " "){
            buffer += str[i];
        }
        if (str[i] === " "){
            output = loopFunc(buffer, output);
            output += " ";
            buffer = ""; 
        }
       	if (i === str.length - 1){
            output = loopFunc(buffer, output);
        }
    }
    return output;
}

function loopFunc(buffer, output) {
	for (let j = buffer.length - 1; j >= 0; j--) {
        output += buffer[j];
    }
    return output;
}

let str = "123 456 789 000";
console.log(reverseWords(str));