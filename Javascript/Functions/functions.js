// function userName(name) {
//     name = prompt("What is your name?");
//     console.log("Hello there " + name + "!");
// }

//Takes single number and returns true/false depending if the number is even
function isEven(num) {
    // if (num % 2 === 0) {
    //     return true;
    // }
    // return false;
    return num % 2 === 0;
}


//Takes single number and returns the factorial 
function factorial(num) {
    // return num ? num * factorial(num - 1) : 1;

    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
    //factorial(5); -> 5 * 4 * 3 * 2 * 1 -> 120
    //factorial(2); //2
}


//KebabToSnake
function kebabToSnake(str) {
    //replace all '-' with "_"
    var String = str.replace(/-/g, '_');
    // return str
    return String;
}


//Fizz Buzz
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