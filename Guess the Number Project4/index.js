let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessfield');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numberOfGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // value b/w 1 to 100 or not an empty
    if(isNaN(guess)){
        alert('Plese enter a valid number');
    }
    else if(guess < 1){
        alert('Do not enter negative number');
    }
    else if(guess > 100){
        alert('The number should not be greater than 100');
    }
    else{
        prevGuess.push(guess);
        if(numberOfGuess === 10){
            guessDisplay(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        }
        else{
            guessDisplay(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //checking negative or more thn range or equal
    if(guess === randomNumber){
        displayMessage('Huraahh!! You guess the right number \u{1F973} \u{1F389}');
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage("Number is Tooo low.");
    }
    else if(guess > randomNumber){
        displayMessage("Number is Too high.");
    }
}

function displayMessage(message){
    //Dom Mannipulation-- message passed and print
    lowOrHi.innerHTML =  `<h2>${message}</h2>`
}

function guessDisplay(guess){
    // input field empty , added values to array , increment prev, decrement remaining
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numberOfGuess++;
    remaining.innerHTML = `${11 - numberOfGuess}`;
}

function endGame(){
    //end game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game.</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
    //new game
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numberOfGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numberOfGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}