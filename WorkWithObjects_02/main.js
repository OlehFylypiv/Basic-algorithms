var buttonView = {
		
		label   : 'that label ',
 		onClick : function(){ alert('clicked: ' + this.label); },
 		onHover : function(){ console.log('hovering: ' + this.label); },
 		myMove : function(arg) { console.log(this.label + arg + ' LG, HTC, Apple, Samsung'); }
};


// wrapper-function
function myBind(f, context) {
  	
  	return function () {
    	return f.apply(context, arguments);
  	};
}


function bindAll(obj){
    for (var key in obj) { 
        
        if (typeof obj[key] === 'function') { 
            obj[key] = myBind(obj[key], obj); 
        }
    }
    
    return obj;
}


bindAll(buttonView);

var a = buttonView.myMove;

a('BMW'); // that label BMW LG, HTC, Apple, Samsung

var b = buttonView.onHover;

b(); // hovering: that label 