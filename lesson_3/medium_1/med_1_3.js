function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
console.log(factors(86));

function newFactors(number) {
    let factors = [];
    for(let divisor = 0; divisor <= number; divisor++) {
        if(number % divisor === 0) {
            factors.push(number / divisor);
        }
    }
        return factors;
}

console.log(newFactors(0));
console.log(newFactors(-10));
