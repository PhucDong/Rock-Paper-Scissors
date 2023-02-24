// Generate computer choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);
    
    return choices[randomIndex];
}

let playerCount = 0;
let computerCount = 0;
let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

// Count score for player and computer
function playerCounter() {
    playerCount++;
    return playerCount;
}

function computerCounter() {
    computerCount++;
    return computerCount;
}

// Display final result on screen after 5 rounds
function displayFinalResult(playerCount, computerCount) {
    let div = document.createElement("div");

    if (playerCount === 5) {
        console.log(playerCounter());
        div.textContent = `Player reachs 5 points first. Player wins!`;
    } else if (computerCount === 5) {
        console.log(computerCounter());
        div.textContent = `Computer reachs 5 points first. Computer wins!`;
    }

    body.appendChild(div);
}

// Playing each round
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");

function playRound(playerSelection, computerSelection) {
    div1.textContent = `Player: ${playerSelection}. Computer: ${computerSelection}`;
    body.appendChild(div1);

    if (playerSelection === computerSelection) {
        div2.textContent = `It's a draw!`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerCounter();
        div2.textContent = `Player wins!`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerCounter();
        div2.textContent = `Player wins!`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerCounter();
        div2.textContent = `Player wins!`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerCounter();
        div2.textContent = `Computer wins!`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerCounter();
        div2.textContent = `Computer wins!`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerCounter();
        div2.textContent = `Computer wins!`;
    }

    body.appendChild(div2);
    div3.textContent = `Player: ${playerCount}. Computer: ${computerCount}`;
    body.appendChild(div3);
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