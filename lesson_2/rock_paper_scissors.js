const READLINE = require('readline-sync');
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  l: 'lizard',
  sp: 'spock'
};
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['spock', 'rock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

const TIE = 'tie';
const WINNING_NUMBER = 3;
const PLAYER = 'player';
const COMPUTER = 'computer';
const SCORE = {
  player: 0,
  computer: 0,
  tie: 0
};

let playAgain = 'y';

function prompt(message) {
  console.log(`=> ${message}`);
}

function promptForPlayerChoice() {
  prompt(`Choose one: ${Object.values(VALID_CHOICES).join(", ")} (use 'sp' for Spock)`);
}

function promptInvalidChoice() {
  prompt("Choice is invalid.");
}

function getAndValidateChoice() {
  let choice = READLINE.question().toLowerCase;
  while (!Object.values(VALID_CHOICES).includes(choice) &&
    !Object.keys(VALID_CHOICES).includes(choice)) {
    promptInvalidChoice();
    promptForPlayerChoice();
    choice = READLINE.question().toLowerCase;
  }
  return choice;
}

function convertPlayerChoice(playerChoice) {
  playerChoice = playerChoice.substring(0, 2).toLowerCase();
  if (playerChoice !== 'sp') {
    return VALID_CHOICES[playerChoice[0]];
  }
  return VALID_CHOICES[playerChoice];
}

function getComputerChoice() {
  let randomIndex =
  Math.floor(Math.random() * Object.values(VALID_CHOICES).length);
  return Object.values(VALID_CHOICES)[randomIndex];
}

function whoWins(player1, player2) {
  if (WINNING_COMBOS[player1].includes(player2)) {
    return PLAYER;
  } else if (player1 === player2) {
    return TIE;
  } else {
    return COMPUTER;
  }
}
function getWinner(player1Choice, player2Choice) {
  const WINNER = whoWins(player1Choice, player2Choice);
  return WINNER;
}

function updateScore(winningPlayer) {
  SCORE[winningPlayer] += 1;
}

function displayScore() {
  prompt(`The current score is ${JSON.stringify(SCORE)}`);
}

function displayWinner(player1Choice, player2Choice) {
  prompt(`You chose ${player1Choice} and the computer chose ${player2Choice}`);
  switch (getWinner(player1Choice, player2Choice)) {
    case PLAYER:
      prompt("You win!");
      break;
    case COMPUTER:
      prompt("Sorry, the computer wins.");
      break;
    case TIE:
      prompt("It's a tie, try again.");
      break;
  }
}

function promptGrandWinner(winner) {
  prompt(`${winner} is the grand winner!`);
}

function checkGrandWinner() {
  if (SCORE['player'] === WINNING_NUMBER) {
    promptGrandWinner(PLAYER);
    return false;
  } else if (SCORE['computer'] === WINNING_NUMBER) {
    promptGrandWinner(COMPUTER);
    return false;
  } else {
    return true;
  }
}

function clearScore() {
  SCORE['player'] = 0;
  SCORE['computer'] = 0;
  SCORE['tie'] = 0;
}

function clearScreen() {
  console.clear();
}

function promptPlayAgain() {
  prompt('Do you want to play again? \'y\' or \'n\'');
}

function invalidPrompt() {
  prompt('Invalid answer please input \'y\' or \'n\'');
}

function playAgainChoice() {
  playAgain = READLINE.question().toLowerCase();
  while (playAgain[0] !== 'y' && playAgain !== 'n') {
    invalidPrompt();
    playAgain = READLINE.question().toLowerCase();
  }
}

while (playAgain === 'y') {
  while (checkGrandWinner()) {
    promptForPlayerChoice();
    let choice = convertPlayerChoice(getAndValidateChoice());
    let computerChoice = getComputerChoice();
    let winner = getWinner(choice, computerChoice);
    displayWinner(choice, computerChoice);
    updateScore(winner);
    displayScore();
  }
  promptPlayAgain();
  playAgainChoice();
  clearScore();
  checkGrandWinner();
  clearScreen();
}

