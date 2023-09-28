let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function checkForSpot(obj) {

if (Object.keys(obj).includes("Spot")) {
    return true;
  }
return false;
}

console.log(checkForSpot(ages));
console.log(ages.hasOwnProperty('Lily'));
