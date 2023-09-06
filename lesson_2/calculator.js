// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perfrom the operation on two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

const MESSAGES = require('./prompt.json');

const LANGUAGE = 'EN';

function messages(message, lang) {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('startup');

while (true) {

  prompt('first');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalid');
    number1 = readline.question();
  }

  prompt('second');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalid');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('must');
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

  prompt('answer');
  console.log(output);
  prompt('pressAny');
  quit = readline.question();
  if (quit === 'q') {
    prompt('goodbye');
    break;
  }
}