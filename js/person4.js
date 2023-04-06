"use strict";
class Person4 {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    getFullName() {
        return this.first + " " + this.last;
    }
}
let person4 = new Person4("Debbie", "Marshall");
console.log(person4.getFullName());
