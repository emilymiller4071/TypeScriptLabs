"use strict";
function add(x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
}
console.log(add(1, 1) === 2);
console.log(add(1) === 3);
