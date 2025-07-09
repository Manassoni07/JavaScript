let correctNumber = 7; // this set by maker 
let CorrectNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
console.log(CorrectNumber);
let userGuess;
let i = 0;
while (i < 10) {
    userGuess = prompt("Guess the number:");
    if (parseInt(userGuess) === CorrectNumber) {
        alert("Correct! 🎉");
        break;
    } else {
        alert("Try again");
    }
    i++;
}
