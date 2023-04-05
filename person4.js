"use strict";
var Person4 = /** @class */ (function () {
    function Person4(first, last) {
        this.first = first;
        this.last = last;
    }
    Person4.prototype.getFullName = function () {
        return this.first + " " + this.last;
    };
    return Person4;
}());
var person4 = new Person4("Debbie", "Marshall");
console.log(person4.getFullName());
