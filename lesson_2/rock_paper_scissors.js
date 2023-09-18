const readline = require('readline-sync');
const VALID_CHOICES = {
    'r':'rock',
    'p':'paper',
    's':'scissors',
    'l':'lizard',
    'sp':'spock'
 };
const WINNING_COMBOS = {
   rock: ['scissors', 'lizard'],
   paper: ['spock', 'rock'],
   scissors: ['paper', 'lizard'],
   lizard: ['spock', 'paper'],
   spock: ['scissors', 'rock']
};

function prompt(message) {
  console.log(`=> ${message}`);
}
function displayWinner(choice, computerChoice) {
  prompt( `You chose ${choice}, the computer chose ${computerChoice}`);
    if(WINNING_COMBOS[choice].includes(computerChoice)){
    prompt('You win!');
  } else if (computerChoice === choice){
    prompt("It's a tie!");
  } else {
    prompt("Computer Wins!");
  }
}
let answer = "y";

while (answer === "y") {
    prompt(`Choose one: ${Object.values(VALID_CHOICES).join(", ")}`);
    let choice = readline.question();


    while (!Object.values(VALID_CHOICES).includes(choice) &&
        !Object.keys(VALID_CHOICES).includes(choice)){
        prompt("That's not a valid choice");
        choice = readline.question();
    }
    choice = choice.substring(0,2);
    if (choice !== "sp") {
        choice = choice[0];
    }

    choice = VALID_CHOICES[choice];


    let randomIndex = Math.floor(Math.random() *
        Object.values(VALID_CHOICES).length);
    let computerChoice = Object.values(VALID_CHOICES)[randomIndex];

    displayWinner(choice, computerChoice);

    prompt("Do you want to play again [y/n]?");
    answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt("Please enter 'y' or 'n',");
        answer = readline.question().toLowerCase();
    }
}


