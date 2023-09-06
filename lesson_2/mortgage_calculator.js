let rlsync = require('readline-sync');
const MESSAGE = require('./messagesForMortgageCalculator.json');

let prompt = (message) => {
  console.log(`${message}`)
};

let message = (messages) => {
  return MESSAGE[messages];
};

let invalidNumber = (num) => {
  return num === '' || Number.isNaN(Number(num));
};

let clear = () => {
  console.clear();
};
clear();
prompt(message('greeting'));

prompt(message('name'));
let name = rlsync.question();

while (true) {
  clear();

  prompt(message('loanAmount'));
  let loanAmount = Number(rlsync.question());

  while (invalidNumber(loanAmount)) {
    prompt(message('invalid'));
    loanAmount = Number(rlsync.question());
  }
  clear();

  prompt(message('loanLength'));
  let loanDuration = Number(rlsync.question());

  while (invalidNumber(loanDuration)) {
    prompt(message('invalid'));
    loanDuration = Number(rlsync.question());
  }
  clear();

  prompt(message('interestRate'));
  let annualInterestRate = Number(rlsync.question());

  while (invalidNumber(annualInterestRate)) {
    prompt(message('invalid'));
    annualInterestRate = Number(rlsync.question());
  }
  clear();

  annualInterestRate /= 100;
  let monthlyInterestRate = annualInterestRate / 12;

  let monthlyPayment = loanAmount * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

  prompt(name + message('calculation') + parseFloat(monthlyPayment.toFixed(2)) );

  prompt(message('quit'));
  let quit = rlsync.question();
  if (quit === 'q') {
    clear();
    prompt(message('goodbye'));
    break;
  }
}