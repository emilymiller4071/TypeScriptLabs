function greeter(name: string){
    console.log("Hi " + name);
}

greeter("Emily");

import { myFunction, myObject, myPrimitive, MyClass } from "./my-module";

console.log(myFunction());

console.log(myObject.name);
console.log(myObject.myMethod());

console.log(myPrimitive);

let myClass = new MyClass();
console.log(myClass.myClassMethod());

// import{myPrivateFunction} from "./my-module";
// 'myPrivateFunction' is declared but its value is never read.ts(6133)