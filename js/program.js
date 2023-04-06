"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(name) {
    console.log("Hi " + name);
}
greeter("Emily");
const my_module_1 = require("./my-module");
console.log((0, my_module_1.myFunction)());
console.log(my_module_1.myObject.name);
console.log(my_module_1.myObject.myMethod());
console.log(my_module_1.myPrimitive);
let myClass = new my_module_1.MyClass();
console.log(myClass.myClassMethod());
// import{myPrivateFunction} from "./my-module";
// 'myPrivateFunction' is declared but its value is never read.ts(6133)
