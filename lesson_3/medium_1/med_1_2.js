let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.split("").map(char => {
    if (char === char.toUpperCase()) {
        return char.toLowerCase();
    } else {
        return char.toUpperCase();
    }    
  }).join(""));





