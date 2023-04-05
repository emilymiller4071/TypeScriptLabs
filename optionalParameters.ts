function greeter(name?: string) {
    if (!name) return "Hi....You";
    return `Hi ${name}`;
}

console.log(greeter());
console.log(greeter("Josh"));