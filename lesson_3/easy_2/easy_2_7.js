let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let newArray = Object.entries(flintstones).filter(name => name[0]  === 'Barney').shift();

console.log(newArray);
