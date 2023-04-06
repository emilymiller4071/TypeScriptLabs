"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor() {
        this.first = "";
        this.last = "";
    }
}
exports.Person = Person;
let person = new Person();
person.first = "Emily";
person.last = "Miller";
console.log(person.first + " " + person.last);
