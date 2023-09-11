const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}
function displayWinner(choice, computerChoice) {
  prompt( `You chose ${choice}, the computer chose ${computerChoice}`);
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'rock')) {
    prompt('You win!');
  } else if ((computerChoice === 'rock' && choice === 'scissors') ||
          (computerChoice  === 'scissors' && choice === 'paper') ||
          (computerChoice === 'paper' && choice === 'rock' )) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie");
  }
}
let answer = "y";

while (answer === "y") {
  prompt(`Choose one: ${VALID_CHOICES.join( ", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again [y/n]?");
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y' or 'n',");
    answer = readline.question().toLowerCase();
  }
}


