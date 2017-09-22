function DefinedObj() {
    
    var _id,
        _name,
        _type

    Object.defineProperties(this, {
        id: {
            get: function() {
                return _id;
            },
            set: function(value) {
                if (typeof(value) === 'string' || value instanceof String) {
                    _id = parseFloat(value);
                }
                else {
                    _id = value;
                }
            },
            configurable: true
        },
        name: {
            get: function() {
                return _name;
            },
            set: function(value) {
                if (typeof(value) === 'number' || value instanceof Number) {
                    _name = 'Default';
                }
                else {
                    _name = value;
                }
            },
            configurable: true
        },
        type: {
            get: function() {
                return _type;
            },
            set: function(value) {
                if (value === 'string') {
                    _type = value;
                }
                else if (value === 'number') {
                    _type = value;
                }
                else if (value === 'boolean') {
                    _type = value;
                }
            },
            configurable: true
        }
    });
}; 

var obj = new DefinedObj();

console.log(obj);
