"use strict";
function add(x, y = 2) {
    return x + y;
}
console.log(add(1, 1) === 2);
console.log(add(1) === 3);
