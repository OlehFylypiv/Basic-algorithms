/* 
*  Show all numbers between a and b, using recursion.
*  input : 10, 15
*  output : 11, 12, 13, 14
*  -----------------------
*  input : 13, 9
*  output : 12, 11, 10	  
*  -----------------------
*  input : 5, 5
*  output : 0
*/
function easyRec (a, b) {
	if (a == b) {
		console.log ( "0" );
	}
	if (a > b + 1) {
		console.log ( --a );
		easyRec (a, b);
	}
	if (a < b - 1) {
		console.log ( ++a );
		easyRec (a, b);
	}
}
let a = prompt ("Enter a : ");
let b = prompt ("Enter b : ");
easyRec (+ a, + b);