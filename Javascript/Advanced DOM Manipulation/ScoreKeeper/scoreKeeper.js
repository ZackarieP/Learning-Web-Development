var p1 = document.querySelector(".player1");
var p1ScoreDisplay = document.querySelector("#firstPlayer");
var p1Score = 0;

var p2 = document.querySelector(".player2");
var p2ScoreDisplay = document.querySelector("#secondPlayer");
var p2Score = 0;

var resetBtn = document.querySelector(".reset");

var winningScoreDisplay = document.querySelector("p span");
var inputBox = document.querySelector("input");
var isGameOver = false;
var winningScore = 5;


// click event to add to the score of player1 
p1.addEventListener("click", () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1ScoreDisplay.classList.add("winner");
        }
        p1ScoreDisplay.textContent = p1Score;
    }
});

// click event to add to the score of player2
p2.addEventListener("click", () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2ScoreDisplay.classList.add("winner");
        }
        p2ScoreDisplay.textContent = p2Score;
    }
});

// click event to reset the score board
resetBtn.addEventListener("click", () => {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove("winner");
    p2ScoreDisplay.classList.remove("winner");
    isGameOver = false;
}

// input event to change score limit in real time via number input tag
inputBox.addEventListener("change", () => {
    winningScoreDisplay.textContent = inputBox.value;
    winningScore = parseInt(winningScoreDisplay.textContent);
    reset();
});