"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(name) {
    console.log("Hi " + name);
}
greeter("Emily");
var my_module_1 = require("./my-module");
console.log(my_module_1.myFunction());
console.log(my_module_1.myObject.name);
console.log(my_module_1.myObject.myMethod());
console.log(my_module_1.myPrimitive);
var myClass = new my_module_1.MyClass();
console.log(myClass.myClassMethod());
// 'myPrivateFunction' is declared but its value is never read.ts(6133)
