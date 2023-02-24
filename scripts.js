// Generate random computer choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);
    
    return choices[randomIndex];
}

let playerCount = 0;
let computerCount = 0;
let buttons = document.querySelectorAll(".player-choice");
let container = document.querySelector(".container");
let resetBtn = document.querySelector("#reset-btn");

// Display final result on screen after 5 rounds
function displayFinalResult(playerCount, computerCount) {
    let div = document.createElement("div");

    if (playerCount === 5) {
        div.textContent = `Player reachs 5 points first. Player wins!`;
    } else if (computerCount === 5) {
        div.textContent = `Computer reachs 5 points first. Computer wins!`;
    }

    container.appendChild(div);
}

// Playing each round
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");

function playRound(playerSelection, computerSelection) {
    div1.textContent = `Player: ${playerSelection}. Computer: ${computerSelection}`;
    container.appendChild(div1);

    if (playerSelection === computerSelection) {
        div2.textContent = `It's a draw!`;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Rock")) {
        playerCount++;
        div2.textContent = `Player wins!`;
    } else {
        computerCount++;
        div2.textContent = `Computer wins!`;
    }

    container.appendChild(div2);
    div3.textContent = `Player: ${playerCount}. Computer: ${computerCount}`;
    container.appendChild(div3);

    displayFinalResult(playerCount, computerCount);
}

// Playing the game
function game() {
    let playerInput, computerInput;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            computerInput = getComputerChoice();
            playerInput = button.textContent;
            playRound(playerInput, computerInput);
        });
    });
}

game();

resetBtn.addEventListener("click", () => location.reload());