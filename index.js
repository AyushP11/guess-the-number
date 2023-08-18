let computerGuess;
let userGuess = [];
let maxGuess;
let mario = new Audio('./audio/Super-Mario.mp3');
let mouseClick = new Audio('./audio/mouse-click-sound.wav');
let userGuessUpdate = document.getElementById('guessOutput');
let userNumberUpdate = document.getElementById('input-box');

const init = ()=>{
    computerGuess = Math.floor(Math.random() * 100);
    console.log(computerGuess);
    document.getElementById('game-area').style
    .display = "none";
    document.getElementById("new-game-button").style
    .display = "none";
}

const startGame = () => {
    document.getElementById('game-area').style
    .display = "block";
    document.getElementById("welcome-screen").style
    .display = "none";
} 

const newGameBegin = () => {
    mouseClick.play();
    document.getElementById('input-box').style.display = 'block';
    window.location.reload();
}

const startNewGame = () => {
    document.getElementById("new-game-button").style
    .display = "inline";
    userNumberUpdate.setAttribute('disabled', true);
}
// main logic 
const compareGuess = () => {
    const userNumber = Number(document.getElementById("input-box").value);
    userGuess = [...userGuess, userNumber];
    
    document.getElementById("previous-guesses").innerHTML = userGuess;

    // checking the value low or high
    if(userGuess.length < maxGuess) {
        if(userNumber > computerGuess) {
        userGuessUpdate.textContent = "Your guess is High😮";
        userNumberUpdate.value = "";
        }
        else if(userNumber < computerGuess) {
            userGuessUpdate.textContent = "Your guess is Low ☹️";
            userNumberUpdate.value = "";
        }
        else if(userNumber === computerGuess) {
            userGuessUpdate.textContent = "Correct Guess !!!🔥"
            userNumberUpdate.value = "";
            document.getElementById('input-box').style.display = 'none';
            document.getElementById('gif').setAttribute('src', './images/dance-dog.gif');
            startNewGame();
        }
        else {
            userGuessUpdate.innerHTML = "Please enter number only";
            userNumberUpdate.value = "";
        }
    }
    else {
        if(userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You lose !! 
            Correct number was ${computerGuess}`;
            document.getElementById('input-box').style.display = 'none';
            document.getElementById('gif').setAttribute('src', './images/cry-dog.gif');
            mario.play();
            startNewGame();
        }
        else if(userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You lose !! 
            Correct number was ${computerGuess}`;
            document.getElementById('input-box').style.display = 'none';
            document.getElementById('gif').setAttribute('src', './images/cry-dog.gif');
            mario.play();
            userNumberUpdate.value = "";
            startNewGame();
        }
        else if(userNumber === computerGuess){
            userGuessUpdate.textContent = "Correct Guess !!!🔥";
            userNumberUpdate.value = "";
            document.getElementById('input-box').style.display = 'none';
            document.getElementById('gif').setAttribute('src', './images/dance-dog.gif');
            startNewGame();
        }
        else {
            userGuessUpdate.innerHTML = "Please enter number only";
            userNumberUpdate.value = "";
        }
    }
    document.getElementById("previous-attempts").innerHTML = userGuess.length;
}

const easyMode = () => {
    mouseClick.play();
    startGame();
    maxGuess = 10;
}

const hardMode = () => {
    mouseClick.play();
    startGame();
    maxGuess = 5;
}












