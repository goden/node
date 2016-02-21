var Module = require("./MyModule");

var moduleA = new Module();
console.log(moduleA.version);

var moduleB = new Module();
moduleB.setName("Goden");
console.log(moduleB.getName());