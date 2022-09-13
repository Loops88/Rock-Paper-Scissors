const compChoice = document.querySelector("#computer-display");
const userChoice = document.querySelector("#user-display");
const result = document.querySelector("#result");
const choiceButtons = document.querySelectorAll(".choiceButtons");
let userChose;
let compChose;
let computerChose = generateRandomNum();
let gameResult;
const winner = "You Win!";
const loser = "You Lose!";

function generateRandomNum() {
    const randNum = Math.floor(Math.random() * choiceButtons.length) + 1; 
    return randNum;
}

function getWinner(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        gameResult = "Draw";
    } else if (computerChoice === "Rock" && userChoice === "Paper") {
        gameResult = winner;
    } else if (computerChoice === "Rock" && userChoice === "Scissors") {
        gameResult = loser;
    } else if (computerChoice === "Paper" && userChoice === "Scissors") {
        gameResult = winner;
    } else if (computerChoice === "Paper" && userChoice === "Rock") {
        gameResult = loser;
    } else if (computerChoice === "Scissors" && userChoice === "Paper") {
        gameResult = loser;
    } else if (computerChoice === "Scissors" && userChoice === "Rock") {
        gameResult = winner;
    } else {
        console.log("dunno");
    }
    result.innerText = gameResult;
}

function genComputerChoice() {
    console.log(computerChose);
    if (computerChose === 1) {
        compChose = "Rock";
    } else if (computerChose === 2) {
        compChose = "Paper";
    } else {
        compChose = "Scissors";
    } return compChose;
}

choiceButtons.forEach(function(choice) {
    choice.addEventListener("click", (event) => {
        userChose = event.target.textContent;
        // console.log(event.target);
        compChose = genComputerChoice();
        getWinner(compChose, userChose);
        compChoice.innerText = compChose;
        userChoice.innerText = userChose;
        computerChose = generateRandomNum();
    })
})

