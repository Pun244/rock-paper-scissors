let humanScore = 0
let computerScore = 0
let playedRound = 0

function getComputerChoice() {
    let rps = ["rock","paper","scissors"];
    let randomInput = Math.floor(Math.random()* rps.length);
    return rps[randomInput];
}

function getUserInput() {
    let userInput = prompt(`Input : "Rock","Paper" or "Scissors".`);
    let inputItem = userInput.toLowerCase()
    return inputItem
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let playedRound = 0

    for (let i = 0; i < 5; i++) {
        const humanSelection = getUserInput();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function playRound(humanChoice, computerChoice) {
        playedRound++
        if (humanChoice === computerChoice) {
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("Tie, Try again!");
            console.log(`Round: '${playedRound}/5' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You win!");
            console.log(`Round: '${playedRound}/5' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            ++humanScore;
        } else if (humanChoice === "paper" && computerChoice === "rock")  {
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You win!");
            console.log(`Round: '${playedRound}/5' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            ++humanScore;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You win!");
            console.log(`Round: '${playedRound}/5' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            ++humanScore;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You lose!");
            console.log(`Round: '${playedRound}/5' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            ++computerScore;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You lose!");
            console.log(`Round: '${playedRound}/5' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            ++computerScore;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`User: '${humanChoice}' CPU: '${computerChoice}'`);
            console.log("You lose!");
            console.log(`Round: '${playedRound}/5' Your Score: '${humanScore}' CPU Score: '${computerScore}'`);
            ++computerScore;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You win!`)
    } else if (computerScore > humanScore) {
        console.log(`You lose!`)
    } else {
        console.log(`You Tied!`)
    }

}

playGame()
