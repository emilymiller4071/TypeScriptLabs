"use strict";
let person6 = {
    first: "Thomas",
    last: "Edison",
    age: 5,
    twitter: "@tom"
};
// let {first, last} = person6;
// console.log(first);
// console.log(last);
// Assignment is left to right with an object literal
let { first: firstname, last: lastName } = person6;
console.log(firstname);
console.log(lastName);
