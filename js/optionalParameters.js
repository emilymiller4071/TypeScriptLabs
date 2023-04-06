"use strict";
function greeter(name) {
    if (!name)
        return "Hi....You";
    return `Hi ${name}`;
}
console.log(greeter());
console.log(greeter("Josh"));
