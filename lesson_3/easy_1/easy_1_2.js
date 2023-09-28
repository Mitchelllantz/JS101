let str1 = "Come over here!"; // true
let str2 = "What's up doc"; // false


function checkExclaimation(string) {
    for (let x = 0; x < string.length; x++){
        if (string[x] === '!') {
            return true;
        }
    }return false;
}

        console.log(checkExclaimation(str1));
        console.log(checkExclaimation(str2));
