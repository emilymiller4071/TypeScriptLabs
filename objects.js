"use strict";
var person6 = {
    first: "Thomas",
    last: "Edison",
    age: 5,
    twitter: "@tom"
};
// let {first, last} = person6;
// console.log(first);
// console.log(last);
// Assignment is left to right with an object literal
var firstname = person6.first, lastName = person6.last;
console.log(firstname);
console.log(lastName);
