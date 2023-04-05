function add(x: number, y: number = 2) {
    return x + y;
}

console.log(add(1, 1) === 2);
console.log(add(1) === 3);