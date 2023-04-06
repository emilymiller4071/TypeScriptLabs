"use strict";
let person5 = {
    first: "Thomas",
    last: "Edison",
    age: 5,
    twitter: "@tom"
};
let copyOfPerson = Object.assign(Object.assign({}, person5), { gender: "Male" });
console.log(copyOfPerson);
