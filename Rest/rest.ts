function print(...theArguments: any[]) {
    for (let argument of theArguments) {
        console.log(argument);
    }
}

print("a", "b", "c", "d");