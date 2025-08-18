function getHumanChoice() {
  let humanChoice = prompt('Make your choice!').toLowerCase();
  return humanChoice;
}

function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		return 'rock';
	} else if (computerChoice === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0

function playGame() {
  function playRound() {
  const human = getHumanChoice();
  const computer = getComputerChoice();

  if (human === computer) {
    console.log('It\'s a tie!');
  } else if (
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper')
  ) {
    console.log(`You win! ${human} beats ${computer}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computer} beats ${human}.`);
    computerScore++;
  }
  roundsPlayed ++;
  }
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  
  if (roundsPlayed === 5 && humanScore > computerScore) {
    console.log('Game finished! You win!');
  } else if (roundsPlayed === 5 && humanScore < computerScore) {
    console.log('Game over! You lose!')
  }
}



  
