function isColorValid(color) {
    return color === "blue" || color === "green";
}
const colorValidator = color => color === "blue" ||  color === "green";

console.log(isColorValid("blue"));
console.log(colorValidator("blue"));
console.log(isColorValid("black"));
console.log(colorValidator("purple"));

