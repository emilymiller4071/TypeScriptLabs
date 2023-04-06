"use strict";
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
console.log(result);
const sum1 = (a, b) => { return a + b; };
let evens = [0, 2, 4, 6, 8];
let evensDoubled = [];
for (let index = 0; index < evens.length; index++) {
    evensDoubled[index] = evens[index] * 2;
}
evens.forEach(num => {
    evensDoubled.push(num * 2);
});
