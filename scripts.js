// Get a reference to the button element
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

let humanScore = 0;
let computerScore = 0;

// Add an event listener for the 'click' event
btnRock.addEventListener('click', () => {
    // Code to be executed when the button is clicked
    displayMessage(playRound("rock", getComputerChoice()));

    displayScore();
});

btnPaper.addEventListener('click', () => {
    // Code to be executed when the button is clicked
    displayMessage(playRound("paper", getComputerChoice()));

    displayScore();
});

btnScissors.addEventListener('click', () => {
    // Code to be executed when the button is clicked
    displayMessage(playRound("scissors", getComputerChoice()));

    displayScore();
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function displayMessage(message) {
    document.getElementById("messageDiv").innerHTML = message;
}

function displayScore() {
    document.getElementById("currentScore").innerHTML = "Your score: " + humanScore + " - " + computerScore;
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
    displayScore();
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        console.log(result);
        
        if (result.includes("win")) {
            humanScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (humanScore < computerScore) {
        console.log("You lost!");
    } else {
        console.log("Tie!");
    }

    console.log("Final score: " + humanScore + " - " + computerScore);
}

