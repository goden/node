module.exports = function() {
    this.version = "1.0.5";
    var _name;
    
    this.setName = function(name) {
        _name = name;
    };
    
    this.getName = function() {
        return _name;  
    };
};