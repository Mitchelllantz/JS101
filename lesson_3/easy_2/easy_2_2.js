let numbers = [1, 2, 3, 4, 5];
let newNumbers =  [];
numbers.forEach((num)  => { newNumbers.push(numbers[numbers.length - num]); });
console.log(newNumbers);
let otherNewNumbers = numbers.slice().reverse();
console.log(otherNewNumbers);
let lastNewNumbers = [...numbers].sort((num1, num2) => num2 - num1);
console.log(lastNewNumbers);
console.log(numbers);

