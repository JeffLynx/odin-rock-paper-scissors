//Get input from the user and do a simple formatting to avoid typo errors, then return the result
function getHumanChoice() {
  let humanChoice = prompt('Make your choice!').toLowerCase();
  return humanChoice;
}

//Generate the computers choice and return it
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



//Game "loop"
function playGame() {

  //Initialize counters for score and rounds 
  let computerScore = 0;
  let humanScore = 0;
  let roundsPlayed = 0

  //Round "loop"
  function playRound() {
  const human = getHumanChoice();
  const computer = getComputerChoice();

  //Determine round winner and log the result
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
  //Play five rounds
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  
  //Detemine overall winner
  if (roundsPlayed === 5) {
      if (humanScore > computerScore) {
      console.log('Game finished! You win!');
    } else if (humanScore < computerScore) {
      console.log('Game over! You lose!');
    } else {
      console.log('Game finished! It\'s a tie!');
    }
  }
} 
