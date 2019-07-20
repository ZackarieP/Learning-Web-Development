var userInput = prompt("Are we there yet?");
var answer = "yes";
var answer1 = "yeah";

while (userInput !== answer && userInput !== answer1) {
    userInput = prompt("Are we there yet?");
}

alert("Yay, we made it!");