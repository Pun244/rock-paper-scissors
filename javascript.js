let humanScore = 0
let computerScore = 0
let playedRound = 0

function getComputerChoice() {
    let rps = ["Rock","Paper","Scissors"]
    let randomInput = Math.floor(Math.random()* rps.length)
    return rps[randomInput]
}

let input = prompt(`Input : "Rock","Paper","Scissors".`)

function getUserInput() {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}
console.log(getUserInput())
