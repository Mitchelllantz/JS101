let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

try{ console.log(statement1.match(/t/g).length); } catch(err) {console.log("Match not found")}
try{ console.log(statement2.match(/t/g).length); } catch(err) {console.log("Match not found")}

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);
