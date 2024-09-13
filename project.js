console.log("Let's play a game")

let computerChoice;
let playerChoice;
let playerScore=0;
let computerScore=0;
function getPlayerChoice (){
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
   
    
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

function round(){
    getPlayerChoice()
    if (playerChoice = "rock" || "paper" || "scissors") {
        console.log ("You chose " + playerChoice)
    }
        getComputerChoice()
        if (playerChoice == computerChoice) {
        console.log ("Tie game, try again.")
        }
        else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log ("You lose! Paper covers rock!");
        computerScore ++;
        console.log ("Computer Score: " + computerScore + "Player Score: " + playerScore)
        }
        else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log ("You win! Rock smashes scissors!");
        playerScore ++;
        console.log ("Computer Score: " + computerScore + "Player Score: " + playerScore)
        }
        else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log ("You win! Paper covers rock!");
        playerScore ++;
        console.log ("Computer Score: " + computerScore + "Player Score: " + playerScore)
        }
        else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log ("You lose! Scissors cuts paper!");
        computerScore ++;
        console.log ("Computer Score: " + computerScore + "Player Score: " + playerScore)
        }
        else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log ("You win! Scissors cuts paper!");
        playerScore ++;
        console.log ("Computer Score: " + computerScore + "Player Score: " + playerScore)
        }
        else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log ("You lose! Rock smashes scissors!");
        computerScore ++;
        console.log ("Computer Score: " + computerScore + "Player Score: " + playerScore)
        }
        
    else {
            console.log ("Response invalid. Try again.")
        }
}


