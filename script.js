let numMin = prompt("Please enter minimum number", "0");
let numMax = prompt("Please enter maximum number", "100");

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(generateRandomNumber(parseInt(numMin), parseInt(numMax)));

// function enterName(){
//     return prompt("Please enter your name", "Harry Potter");
// }

// console.log(enterName());

// function enterMin(){
//     return prompt("Please enter minimum number", "0");
// }

// console.log(enterMin());

// function enterMax(){
//     return prompt("Please enter maximum number", "100");
// }

// console.log(enterMax());

// function generateRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(generateRandomNumber (enterMin(), enterMax()));