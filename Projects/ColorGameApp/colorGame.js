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
console.log(randomNumBox());


// on page load, header receives randomized color for the game to start
window.addEventListener("load", () => {
    newColors();
});


/* on page load, boxes in game area receive random color and one 
    index is chosen to be the winner
    function for user choosing the correct color tile
*/
function winner() {
    winningBox.style.backgroundColor = color;
    winningBox.addEventListener("click", () => {
        winnerOfGame.textContent = "You've won!";
    });
}


// function for new colors
function newColors() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = randomRGB();
    }
    rgbHead.innerHTML = color;
    winner();
}

// remove incorrectly chosen tile from game board
function removeTile() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", () => {
            if (divs[i] != divs[winnerNum]) {
                divs[i].classList.add("hidden");
            } else {
                for (let j = 0; j < divs.length; j++) {
                    divs[j].classList.remove("hidden");
                    divs[j].style.backgroundColor = color;
                }
                rgbDisplay.style.backgroundColor = color;
                newColor.textContent = "Play Again?";
            }
            return;

        });
    }
}


removeTile();


newColor.addEventListener("click", () => {
    location.reload();
});