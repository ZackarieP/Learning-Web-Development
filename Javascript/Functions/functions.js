// function userName(name) {
//     name = prompt("What is your name?");
//     console.log("Hello there " + name + "!");
// }

//Takes single number and returns true/false depending if the number is even
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

//Takes single number and returns the factorial 
function factorial(num) {

}

//KebabToSnake
function kebabToSnake(str) {

}


function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("Fizz Buzz");

        } else if (i % 3 === 0) {
            console.log("Fizz");

        } else if (i % 5 === 0) {
            console.log("Buzz");

        }
        console.log(i);
    }
}