var color = randomRGB();

// random rgb color
function randomRGB() {
    return "rgb( " + randomNum() + ", " + randomNum() + ", " + randomNum() + ")";
}
console.log(randomRGB());

// random number between 0-255
function randomNum() {
    return Math.floor(Math.random() * 255);
}
console.log(randomNum());

var rgbHead = document.querySelector(".rgbHeader");
var rgbDisplay = document.querySelector(".top-header");

// on page load header receives randomized color for the game to start
window.addEventListener("load", function () {
    rgbHead.innerHTML = color;
});

let divs = document.querySelector(".box-choice");

for (let i = 0; i < divs.length; i++) {
    divs[i] = window.addEventListener("load", function () {

    });
}