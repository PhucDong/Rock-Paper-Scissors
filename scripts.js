function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);
    
    return choices[randomIndex];
}

// console.log(getComputerChoice());
let playerCount = 0;
let computerCount = 0;

function playerCounter() {
    playerCount++;

    return playerCount;
}

function computerCounter() {
    computerCount++;

    return computerCount;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log("Player: " + playerSelection + ". Computer: " + computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerCounter();
        console.log("Player wins!");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerCounter();
        console.log("Player wins!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerCounter();
        console.log("Player wins!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerCounter();
        console.log("Computer wins!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerCounter();
        console.log("Computer wins!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerCounter();
        console.log("Computer wins!");
    } else {
        console.log("Invalid input! Choose again.");
    }
}

// console.log(playRound("paper", getComputerChoice()));

function game() {
    let playerInput, computerInput;

    for (let i = 0; i < 5; i++) {
        // ask user for input
        playerInput = prompt("Enter your choice:");
        computerInput = getComputerChoice();

        // call playRound() function
        playRound(playerInput, computerInput);
    }

    // Print the winner after 5 rounds
    let finalResult;
    if (playerCounter() > computerCounter()) {
        finalResult = "Player wins!";
    } else if (playerCounter() === computerCounter()) {
        finalResult = "It's a draw!";
    } else {
        finalResult = "Computer wins!";
    }

    console.log("After 5 rounds: " + finalResult);
}

game();
