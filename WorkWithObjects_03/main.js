// test object
var obj = {
  
  factory: 'LG',
  value: 12,
  
  box: {
    
    width: 10,
    height: 10,

    material: {
      
      steal: '#%123skp',
      color: 'black',
      
      take: {
        
        ball: true 
      }
    }
  }
};


function shuffleCloning(object) {
  
  var copyObj = {};
  
  for (var key in object) {
    copyObj[key] = object[key];
  }
  
  return copyObj; 
}


function deepCloning(object, copyObj) {
  for (var key in object) {
    
    if (typeof object[key] === 'object') {
      
      copyObj[key] = object[key];
      deepCloning(copyObj[key], copyObj);
    }
      
    copyObj[key] = object[key];
  }

  return copyObj;
}


function clone(object, bool) {
  
  if (!bool) {
    return shuffleCloning(object);
  }
  else {
    return deepCloning(object, {});
  }
}


console.table(clone(obj, true));


// var obj2 = clone(obj, true);
// console.log(obj2.value);