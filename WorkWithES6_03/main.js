/**
*	Pattern of organization name space in ES 5
*	MYAPP - one global object
*	
*/

var MYAPP = {};

// simple counter in ES 5 
var Gadget = (function () {
    var counter = 0;

    return function () {        
    	console.log(counter += 1);    
    };

}());

MYAPP.g1 = new Gadget(); //  1 
MYAPP.g2 = new Gadget(); //  2 
MYAPP.g3 = new Gadget(); //  3 

// counter in ES 6
class GadgetES6 { 
	constructor(count) {
		this.count = count;
	}		
	
	showCount() {
		
		let a = this.count;
		
		return (function () {        
    		console.log(a += 1);    
    	})();
	}
}


let g4 = new GadgetES6(0);
g4.showCount();

let g5 = new GadgetES6(1);
g5.showCount();