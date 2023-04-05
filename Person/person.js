"use strict";
var Person = /** @class */ (function () {
    function Person() {
        this.first = "";
        this.last = "";
    }
    return Person;
}());
var person = new Person();
person.first = "Emily";
person.last = "Miller";
console.log(person.first + " " + person.last);
