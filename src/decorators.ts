function ClassLogger(target: Function) {
    console.log("Function: " + target);
}

@ClassLogger
class Customer {
}

var customer = new Customer();