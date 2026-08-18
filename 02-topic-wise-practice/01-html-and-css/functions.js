//function without parameters
function greet() {
    console.log("Welcome to JavaScript!");
}
greet();
//with parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
//with return value
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);
console.log(result);
//declaration
function hello() {
    console.log("Hello");
}

hello();
//function expression
 function hello() {
    console.log("Hello");
}

hello();

const helloExpression = function () {
    console.log("Hello from Function Expression");
};

helloExpression();
//arrow function
 const addNumbers = (a, b) => a + b;

console.log(addNumbers(5, 10));
//anonymous function
let message = function () {
    console.log("Anonymous Function");
};

message();