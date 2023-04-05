class Person4 {
    constructor(public first: string, public last: string) {

    }


getFullName() {
    return this.first + " " + this.last;
}
}

let person4 = new Person4("Debbie", "Marshall");
console.log(person4.getFullName());