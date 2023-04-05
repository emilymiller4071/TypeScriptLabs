"use strict";
function print() {
    var theArguments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        theArguments[_i] = arguments[_i];
    }
    for (var _a = 0, theArguments_1 = theArguments; _a < theArguments_1.length; _a++) {
        var argument = theArguments_1[_a];
        console.log(argument);
    }
}
print("a", "b", "c", "d");
