"use strict";
function print(...theArguments) {
    for (let argument of theArguments) {
        console.log(argument);
    }
}
print("a", "b", "c", "d");
