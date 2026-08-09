const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    const generate = Math.floor(Math.random() * choices.length);
    return choices[generate];
};

function getHumanChoice() {
    let randomWord =  prompt("input your randowm word: ");
    return randomWord;
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It was a tie.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "Human win!";
    
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "Human wins!";
        
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "Human wins!";
        
    } else {
        computerScore++;
        return "Computer wins!"
    }
};

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log("Human score:", humanScore);
console.log("computerScore:", computerScore);
    }
    if (humanScore > computerScore) {
        return "you are the winner!";
    } else if (computerScore > humanScore) {
        return "Computer wins!";
    } else {
        return "Draw!";
    };
};

console.log(playGame());

