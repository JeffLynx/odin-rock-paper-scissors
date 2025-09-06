//Generate the computers choice and return it
function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		return 'Rock';
	} else if (computerChoice === 1) {
		return 'Paper';
	} else {
		return 'Scissors';
	}
};

//Display the results
const results = document.querySelector("#results");

const score = document.querySelector("#score");

const tally = document.createElement("div");
tally.classList.add("tally");
tally.textContent = `Human: 0 - Computer: 0`;
score.appendChild(tally);

let humanScore = 0;
let computerScore = 0;

function disableButtons() {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
};

function playRound(human, computer) {

  if (human === computer) {

    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = "It's a tie!";
    results.appendChild(result);

    tally.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    score.appendChild(tally);

  } else if (
    (human === 'Rock' && computer === 'Scissors') ||
    (human === 'Paper' && computer === 'Rock') ||
    (human === 'Scissors' && computer === 'Paper')
  ) {

    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = `You win! ${human} beats ${computer.toLowerCase()}!`;
    results.appendChild(result);

    humanScore += 1;

    tally.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    score.appendChild(tally);

  } else {

    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = `You lose! ${computer} beats ${human.toLowerCase()}!`;
    results.appendChild(result);

    computerScore += 1;

    tally.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    score.appendChild(tally);
    }
  
   if (humanScore === 5 && computerScore === 5) {
    endGame("Game finished! It's a tie :/");
  } else if (humanScore === 5 && computerScore < 5) {
    endGame("Game finished! You win :)");
  } else if (computerScore === 5 && humanScore < 5) {
    endGame("Game over! You lose :(");
  }
};

function endGame(message) {
  const finalMessage = document.createElement("div");
  finalMessage.classList.add("final");
  finalMessage.textContent = message;
  results.appendChild(finalMessage);
  disableButtons();
}

  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  rock.addEventListener("click", () => {
    playRound('Rock', getComputerChoice());
  });

  paper.addEventListener("click", () => {
    playRound('Paper', getComputerChoice());
  });

  scissors.addEventListener("click", () => {
    playRound('Scissors', getComputerChoice());
  });
