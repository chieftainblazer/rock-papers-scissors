let humanScore = 0;
let computerScore = 0;

// Get the elements related to the results container
const roundResult = document.querySelector("#round-result");
const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");
const winner = document.querySelector("#winner");

// Get the buttons and attach listeners to them (Take advantage of event bubbling)
const buttonsContainer = document.querySelector(".buttons-container");
buttonsContainer.addEventListener("click", function (event) {
  const target = event.target;

  switch (target.id) {
    case "rock":
      playRound(0, getComputerChoice());
      break;
    
    case "paper":
      playRound(1, getComputerChoice());
      break;
    
    case "scissors":
      playRound(2, getComputerChoice());
      break;
  }
});


// Returns the computer choice for the game.
// 0: Computer chooses rock.
// 1: Computer chooses paper.
// 2: Computer chooses scissors.
function getComputerChoice() {
  return parseInt(Math.floor(Math.random() * 3));
}
      
// Prompts the user for a choice in the game and then returns this choice.
function getHumanChoice() {
  return parseInt(prompt("Choose an option: (0 for rock), (1 for paper) and (2 for scissors)."));
}

// Plays a round between the human and the computer.
function playRound(humanChoice, computerChoice) {
  if (humanChoice == 0) {
    if (computerChoice == 0) {
      roundResult.textContent = "Tie! Both chose the same.";
    } else if (computerChoice == 1) {
      roundResult.textContent = "You lose! Scissors beats Rock";
      computerScore++;
    } else {
      roundResult.textContent = "You win! Rock beats Scissors";
      humanScore++;
    }
  } 

  if (humanChoice == 1) {
    if (computerChoice == 0) {
      roundResult.textContent = "You win! Paper beats Rock";
      humanScore++;
    } else if (computerChoice == 1) {
      roundResult.textContent = "Tie! Both chose the same.";
    } else {
      roundResult.textContent = "You lose! Scissors beats Paper";
      computerScore++;
    }
  }

  if (humanChoice == 2) {
    if (computerChoice == 0) {
      roundResult.textContent = "You lose! Rock beats Scissors";
      computerScore++;
    } else if (computerChoice == 1) {
      roundResult.textContent = "You win! Scissors beats Paper";
      humanScore++;
    } else {
      roundResult.textContent = "Tie! Both chose the same.";
    }
  }

  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;

  if (humanScore >= 5) {
    winner.textContent = "You won!";
  }

  if (computerScore >= 5) {
    winner.textContent = "Computer wins!";
  }
}