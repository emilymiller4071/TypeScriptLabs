let person5 = {
    first: "Thomas", 
    last: "Edison",
    age: 5,
    twitter: "@tom"
};

let copyOfPerson = {...person, gender: "Male"};

console.log(copyOfPerson);