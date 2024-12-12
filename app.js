const userScoreElement = document.getElementById("user-score");
const compScoreElement = document.getElementById("comp-score");
const messageElement = document.getElementById("msg");
const choices = document.querySelectorAll(".choices button");

let userScore = 0;
let compScore = 0;

const options = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        return "user";
    } else {
        return "computer";
    }
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    if (winner === "user") {
        userScore++;
        userScoreElement.textContent = userScore;
        messageElement.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else if (winner === "computer") {
        compScore++;
        compScoreElement.textContent = compScore;
        messageElement.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    } else {
        messageElement.textContent = `It's a draw! You both chose ${userChoice}.`;
    }
}

choices.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.id.toLowerCase();
        playRound(userChoice);
    });
});