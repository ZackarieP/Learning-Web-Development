var color = randomRGB();
var winnerNum = randomNumBox();

var rgbHead = document.querySelector(".rgbHeader");
var rgbDisplay = document.querySelector(".top-header");

let divs = document.querySelectorAll(".box-choice");
let winningBox = divs[winnerNum];
let winnerOfGame = document.querySelector("#winner");

let newColor = document.querySelector(".newColors");


// random rgb color 
function randomRGB() {
    return "rgb(" + randomNumRGB() + ", " + randomNumRGB() + ", " + randomNumRGB() + ")";
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
console.log(randomNumBox());


// on page load, header receives randomized color for the game to start
window.addEventListener("load", function () {
    newColors();
});


/* on page load, boxes in game area receive random color and one 
    index is chosen to be the winner
    function for user choosing the correct color tile
*/
function winner() {
    winningBox.style.backgroundColor = color;
    winningBox.addEventListener("click", () => {
        winnerOfGame.innerHTML = "You've won!";
    });
}


// function for new colors
function newColors() {
    color = randomRGB();
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = randomRGB();
    }
    rgbHead.innerHTML = color;
    newColor.innerHTML = "New Colors";
    winnerOfGame.innerHTML = "";
    for (let j = 0; j < divs.length; j++) {
        divs[j].style.pointerEvents = "auto";
    }
    winner();
}
// reset winning rgb and change colors and header background back to normal color


/*
    REFACTOR REFACTOR REFACTOR
*/
// remove incorrectly chosen tile from game board
function removeTile() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function () {
            if (this != divs[winnerNum]) {
                this.classList.add("hidden");
            } else {
                for (let j = 0; j < divs.length; j++) {
                    divs[j].classList.remove("hidden");
                    divs[j].style.backgroundColor = color;
                    divs[j].style.pointerEvents = "none";
                }
                rgbDisplay.style.backgroundColor = color;
                newColor.innerHTML = "Play Again?";
            }
        });
    }
}
removeTile();
/*
    REFACTOR REFACTOR REFACTOR
*/

// event for resetting game
newColor.addEventListener("click", () => {
    newColors();
});