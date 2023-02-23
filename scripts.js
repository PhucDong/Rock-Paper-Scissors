function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);
    
    return choices[randomIndex];
}

// console.log(getComputerChoice());
let playerCount = 0;
let computerCount = 0;
let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

function playerCounter() {
    playerCount++;

    return playerCount;
}

function computerCounter() {
    computerCount++;

    return computerCount;
}

function displayPlayerResult() {
    let div3 = document.createElement("div");
    playerCounter();
    div3.textContent = `Player wins!`;
    body.appendChild(div3);
}

function displayComputerResult() {
    let div3 = document.createElement("div");
    computerCounter();
    div3.textContent = `Computer wins!`;
    body.appendChild(div3);
}

function displayFinalResult(playerCount, computerCount) {
    let div4 = document.createElement("div");

    if (playerCount === 5) {
        console.log(playerCounter());
        div4.textContent = `Player reachs 5 points first. Player wins!`;
        body.appendChild(div4);
    } else if (computerCount === 5) {
        console.log(computerCounter());
        div4.textContent = `Computer reachs 5 points first. Computer wins!`;
        body.appendChild(div4);
    }
}

function playRound(playerSelection, computerSelection) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.textContent = `Player: ${playerSelection}. Computer: ${computerSelection}`;
    body.appendChild(div1);

    if (playerSelection === computerSelection) {
        div2.textContent = `It's a draw!`;
        body.appendChild(div2);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        displayPlayerResult();
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        displayPlayerResult();
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        displayPlayerResult();
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        displayComputerResult();
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        displayComputerResult();
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        displayComputerResult();
    }

    displayFinalResult(playerCount, computerCount);
}

// Playing games
function game() {
    let playerInput, computerInput;
    // let div3 = document.createElement("div");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            computerInput = getComputerChoice();
            playerInput = button.textContent;
            playRound(playerInput, computerInput);
        });
    });
}

game();
