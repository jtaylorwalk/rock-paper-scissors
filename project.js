console.log("Let's play a game")

let computerChoice;
let playerChoice;
let playerScore;
let computerScore;
function getPlayerChoice (){
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (playerChoice = rock || paper || scissors) {
    console.log ("You chose " + playerChoice)
    }
}

function getComputerChoice(){

    let numRandom = Math.random();
        if (numRandom <= .333) {
            computerChoice = "rock";
}
        else if (numRandom <= .666) {
            computerChoice = "paper";
} 
        else { 
            computerChoice = "scissors";
        }
    console.log ("The computer chooses " + computerChoice);
}




