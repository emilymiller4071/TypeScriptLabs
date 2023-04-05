"use strict";
var Person2 = /** @class */ (function () {
    function Person2(first, last) {
        this.first = first;
        this.last = last;
    }
    return Person2;
}());
var person2 = new Person2("Emily", "Miller");
console.log(person2.first + " " + person2.last);
