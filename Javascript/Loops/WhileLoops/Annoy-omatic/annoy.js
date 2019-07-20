var userInput = prompt("Are we there yet?");


while (userInput !== "yes" || "yeah") {
    if (userInput === "yes" || "yeah") {
        alert("Yay, we finally made it!");
    } else
        userInput = prompt("Are we there yet?");
}