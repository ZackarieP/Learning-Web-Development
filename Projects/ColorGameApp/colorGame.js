// random rgb color
function randomRGB() {
    // document.body.style.backgroundColor = "rgb(" + randomNum() + ", " + randomNum() + ", " + randomNum();
    return "rgb( " + randomNum() + ", " + randomNum() + ", " + randomNum() + ")";
}
console.log(randomRGB());

// random number between 0-255
function randomNum() {
    return Math.floor(Math.random() * 255);
}
console.log(randomNum());

var rgbHead = document.querySelector(".rgbHeader");
var rgbDisplay = document.querySelector(".top-header")


window.addEventListener("load", function () {
    let color = randomRGB();
    rgbHead.innerHTML = color;
    // rgbDisplay.style.backgroundColor = color;
});