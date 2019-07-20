// var userInput = prompt("Are we there yet?");
// var answer = "yes";
// var answer1 = "yeah";

// while (userInput !== answer && userInput !== answer1) {
//     userInput = prompt("Are we there yet?");
// }

// alert("Yay, we made it!");


//version 2

var answer = prompt("Are we there yet?");

while ((answer.indexOf("yes") === -1) && (answer.indexOf("yeah") === -1)) {
    answer = prompt("Are we there yet?");
}

alert("Ay, we made it!!");