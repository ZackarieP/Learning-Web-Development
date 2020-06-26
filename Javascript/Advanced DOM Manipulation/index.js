var btn = document.querySelector(".btn");

function random() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

btn.addEventListener("click", function () {
    random();
});

var query = document.querySelector("#toggle");
var isGreen = false;

query.addEventListener("click", function () {
    // if (isGreen) {
    //     document.body.style.backgroundColor = "white";
    //     isGreen = false;
    // } else {
    //     document.body.style.backgroundColor = "green";
    //     isGreen = true;
    // }

    // utilize toggle from classList
    document.body.classList.toggle("green");
});