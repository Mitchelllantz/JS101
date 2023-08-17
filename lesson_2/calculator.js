// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perfrom the operation on two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

let quit = 'a';

const MESSAGES = require('./prompt.json');

function prompt(message) {
  console.log(`=> ${message}`);
}


function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES.startup);

while (quit[0].toLowerCase() !== 'q') {

  prompt(MESSAGES.first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalid);
    number1 = readline.question();
  }

  prompt(MESSAGES.second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalid);
    number2 = readline.question();
  }

  prompt(MESSAGES.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.must);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(MESSAGES.answer + output);

  prompt(MESSAGES.pressAny);
  quit = readline.question();
  // eslint-disable-next-line no-unused-expressions
  quit[0].toLowerCase() === 'q' ? prompt(MESSAGES.goodbye) : prompt(MESSAGES.startUp);
}