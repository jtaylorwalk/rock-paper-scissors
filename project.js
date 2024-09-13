console.log("Let's play a game")
let playerScore=0;
let computerScore=0;
function getPlayerChoice (){
    let playerInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (playerInput == "rock") {
        console.log ("You chose " + playerInput)
        return 1;
    }
    else if (playerInput ==  "paper") {
        console.log ("You chose " + playerInput)
        return 2;
    }
    else if (playerInput ==  "scissors") {
        console.log ("You chose " + playerInput)
        return 3;
    }
    else {
        console.log ("Input is invalid.");
        return 4;
    }
}

function getComputerChoice(){
    let numRandom = Math.random();
        if (numRandom <= .333) {
            return 1;
}
        else if (numRandom <= .666) {

            return 2;
} 
        else { 
         return 3;
        }
   
        
}

function play(){
let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
        if (playerChoice == 4) {
            console.log ("Try again");
        }
        else if (playerChoice == computerChoice) {
            console.log ("The computer did too!")
            console.log ("Tie game, try again.")
        }
        else if (playerChoice == 1 && computerChoice == 2) {
            console.log ("The computer chose paper.")
            console.log ("You lose! Paper covers rock!");
            computerScore ++;
            console.log ("Computer Score: " + computerScore + " Player Score: " + playerScore)
        }
        else if (playerChoice == 1 && computerChoice == 3) {
            console.log ("The computer chose scissors.")
            console.log ("You win! Rock smashes scissors!");
            playerScore ++;
            console.log ("Computer Score: " + computerScore + " Player Score: " + playerScore)
        }
        else if (playerChoice == 2 && computerChoice == 1) {
            console.log ("The computer chose rock.")
            console.log ("You win! Paper covers rock!");
            playerScore ++;
            console.log ("Computer Score: " + computerScore + " Player Score: " + playerScore)
        }
        else if (playerChoice == 2 && computerChoice == 3) {
            console.log ("The computer chose scissors.")
            console.log ("You lose! Scissors cuts paper!");
            computerScore ++;
            console.log ("Computer Score: " + computerScore + " Player Score: " + playerScore)
        }
        else if (playerChoice == 3 && computerChoice == 2) {
            console.log ("The computer chose paper.")
            console.log ("You win! Scissors cuts paper!");
            playerScore ++;
            console.log ("Computer Score: " + computerScore + " Player Score: " + playerScore)
        }
        else if (playerChoice == 3 && computerChoice == 1) {
            console.log ("The computer chose rock.")
            console.log ("You lose! Rock smashes scissors!");
            computerScore ++;
            console.log ("Computer Score: " + computerScore + " Player Score: " + playerScore)
        }
        else {
            console.log ("Please try again.")
        }
    round();
}
function round () {
    if (playerScore + computerScore < 5) {
        play ();
    }
    else if (playerScore > computerScore) {
        console.log ("You win! Refresh the page to play again.");
    }
    else if (playerScore < computerScore) {
        console.log ("You lose! Refresh the page to play again.");
    }
}
round ()

