function playGame() {

let numMin = prompt("Please enter minimum number", "0");
let numMax = prompt("Please enter maximum number", "100");

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = generateRandomNumber(parseInt(numMin), parseInt(numMax));

let userGuess = prompt("Guess the number between " + numMin + " and " + numMax);

// Partie conditions
 while (parseInt(userGuess) !== randomNumber) {
    if(parseInt(userGuess) > randomNumber){
      userGuess = prompt("Réessayez, c'est moins");  
    }

    if(parseInt(userGuess) < randomNumber ){
    userGuess = prompt("Réessayez, c'est plus");
    }
 }

 if (parseInt(userGuess) === randomNumber) {
// alert("Tu as gagné le Tigre !");
let regame = prompt("Tu as gagné le tigre ! Veux-tu rejouer ?", "");
if (regame === "oui"){
    playGame();
}

}
}

playGame();
