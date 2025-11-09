//ultra simple rock paper scissors game
function playGame() {
    //we start with the playGame function and initialises all to 0
    let humanScore = 0;
    let computerScore = 0;

    //play 5 rounds: this for loop will run 5 times
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);

      //STEP 1: This section will ask human for their choice
      let human = prompt("Rock, paper or scissors?").toLowerCase();

      //STEP 2: This section will get the computers choice
      let options = ["rock", "paper", "scissors"];
      let computer = options[Math.floor(Math.random() * 3)];

      //Step 3: This section shows both choices
      console.log(`you: ${human} vs computer: ${computer}`);

      //Step 4: This section compares choices and finds the winner with an if statement
      if (human === computer) {
        return "Its a tie, No points!";
      } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
      ) {
        //human wins then 1 point adds up.
        console.log("You win this round!");
        humanScore = humanScore + 1;
      } else {
        //If human's prediction did not collerate and it is not a tie
        console.log("Computer wins this round!");
        computerScore = computerScore + 1;
      }

      //This section will show the score after each round
      console.log(`Score: You ${humanScore} - ${computerScore} computer\n`);
    }
    // Final stage: Start showing games result
    console.log("FINAL RESULTS:");
    console.log(`You: ${humanScore} points`);
    console.log(`Computer: ${computerScore} points`);

    //This section we decide who won overall with an if statement
    if (humanScore > computerScore) {
        console.log("YOU ARE THE CHAMPION!");
    } else if (computerScore > humanScore) {
        console.log("COMPUTER WON!,YOU LOST!");
    } else {
        console.log("ITS A TIE GAME!");
    }
}
//START PLAYING GAME: This section starts the game.
playGame();