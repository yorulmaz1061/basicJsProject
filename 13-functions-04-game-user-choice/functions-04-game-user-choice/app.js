const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_PLAYER_WIN = ' PLAYER!!';
const RESULT_COMPUTER_WIN = 'COMPUTER';
const RESULT_TIE = 'TIE';

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};
const getComputerChoice = function (){
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return ROCK;
  } else if (randomNumber < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
const getWinner = function(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return RESULT_TIE;
  } else if (
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
}

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection=  getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  const winner= getWinner(playerSelection, computerSelection);
  console.log(winner);
  alert(`The winner is ${winner}`);
});
