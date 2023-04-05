"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.myPrimitive = exports.myObject = exports.myFunction = void 0;
function myFunction() {
    return "myFunction was run.";
}
exports.myFunction = myFunction;
function myPrivateFunction() {
    return "myPrivateFunction was run.";
}
var myObject = {
    name: "I can access myObject's name",
    myMethod: function () {
        return "myMethod on myObject is running.";
    }
};
exports.myObject = myObject;
exports.myPrimitive = 55;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myClassMethod = function () {
        return "myClassMethod on myClass is running.";
    };
    return MyClass;
}());
exports.MyClass = MyClass;
