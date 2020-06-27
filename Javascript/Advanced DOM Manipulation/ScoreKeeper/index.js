var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
var resetBtn = document.querySelector(".reset");

var scoreLimit = document.querySelector("#endScore");
var score = document.querySelector("input").value;


player1.addEventListener("click", () => {
    document.querySelector("#firstPlayer").textContent++;
});

player2.addEventListener("click", () => {
    document.querySelector("#secondPlayer").textContent++;
    if (player2 == scoreLimit) {

    }
});

resetBtn.addEventListener("click", () => {
    // document.querySelector("#secondPlayer").textContent = 0;
    // document.querySelector("#firstPlayer").textContent = 0;
    location.reload();
});

scoreLimit.addEventListener("change", () => {
    scoreLimit.innerHTML = score;
});