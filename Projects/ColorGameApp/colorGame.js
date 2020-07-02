var color = randomRGB();
var winnerNum = randomNumBox();

// random rgb color
function randomRGB() {
    return "rgb( " + randomNumRGB() + ", " + randomNumRGB() + ", " + randomNumRGB() + ")";
}
console.log(color);


// random number between 0-255
function randomNumRGB() {
    return Math.ceil(Math.random() * 255);
}

// random number between 0-5 for the indices in the "divs" array below to equal 6 in total
function randomNumBox() {
    return Math.floor(Math.random() * 5);
}


var rgbHead = document.querySelector(".rgbHeader");
var rgbDisplay = document.querySelector(".top-header");
// on page load, header receives randomized color for the game to start
window.addEventListener("load", () => {
    rgbHead.innerHTML = color;
});


/* on page load, boxes in game area receive random color and one 
    index is chosen to be the winner
*/
let divs = document.querySelectorAll(".box-choice");
let isWinner = false;
let winningBox = divs[winnerNum];
let winnerOfGame = document.querySelector("#winner");

// function for user choosing the correct color tile
function winner() {
    if (!isWinner) {

    }
    winningBox.style.backgroundColor = color;
    winningBox.addEventListener("click", () => {
        winnerOfGame.innerHTML = "You've won!";
    });
}
window.addEventListener("load", () => {
    newColors();
});

let newColor = document.querySelector(".newColors");
// function for new colors
function newColors() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = randomRGB();
    }
    winner();
}
newColor.addEventListener("click", () => {
    location.reload();
});