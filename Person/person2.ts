class Person2 {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

}
let person2 = new Person2("Emily", "Miller");
console.log(person2.first + " " + person2.last);
