
function getComputerChoice() {
    let rps = ["rock","paper","scissors"];
    let randomInput = Math.floor(Math.random()* rps.length);
    return rps[randomInput];
}

function getUserInput() {
    let userInput = prompt(`Input: "rock","paper" or "scissors".  F12 to view console.`);
    let inputItem = userInput.toLowerCase()
    if (inputItem == 'rock' || inputItem == 'paper' || inputItem == 'scissors') {
        return inputItem
    } else {
        alert(`Invalid Input`)
        return userInput
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let playedRound = 0

    while (humanScore < 5 || computerScore < 5) {
        const humanSelection = getUserInput();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        if (humanScore === 5 || computerScore === 5) break;
    } if (humanScore === 5 || computerScore === 5) {
        return announceWinner()
    }

    

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            ++playedRound;
            console.log(`Round: '${playedRound}' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("Tie, Try again!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            ++humanScore;
            ++playedRound;
            console.log(`Round: '${playedRound}' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You win! Rock beats Scissors");
        } else if (humanChoice === "paper" && computerChoice === "rock")  {
            ++humanScore;
            ++playedRound;
            console.log(`Round: '${playedRound}' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You win! Paper beats rock");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            ++humanScore;
            ++playedRound;
            console.log(`Round: '${playedRound}' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You win! Scissors beats Paper");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            ++computerScore;
            ++playedRound;
            console.log(`Round: '${playedRound}' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You lose! Paper beats Rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            ++computerScore;
            ++playedRound;
            console.log(`Round: '${playedRound}' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You lose! Scissors beats Paper");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            ++computerScore;
            ++playedRound;
            console.log(`Round: '${playedRound}' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You lose! Rock beats Scissors");
        }
    }


    function announceWinner() {
        if (humanScore > computerScore) {
            console.log(`Congratulations you win! Refresh to play again.`)
        } else if (computerScore > humanScore) {
            console.log(`Better luck next time CPU win! Refresh to play again.`)
        } 
    }

}

playGame()
