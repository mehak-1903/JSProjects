const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');


let userScore = 0;
let computerScore = 0 ;
let totalChances = 15;
let chancesUsed = 0;


function playScore(userChoice){
    if(chancesUsed >= totalChances){
        return document.getElementById('result').textContent = `Game Over!!! All ${totalChances} chances are used!!!!1`
    }
    const choices = ['rock', 'paper', 'scissor'];

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(computerChoice);
    console.log(rock)

    let result = [];

    if((userChoice === 'rock' && computerChoice === 'scissor') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissor' && computerChoice === 'paper')){
        userScore++;
        result =   `You Win!!! Your score will be ${userScore}`;
    }
    else if(userChoice === computerChoice){
        result = `It's draw!!! You both choose the same one.`
    }
    else{
        computerScore++;
        result = `Computer Wins!!! Computer's score will be ${computerScore}`;
    }

    chancesUsed++;
    const remaining = totalChances - chancesUsed;

       document.getElementById('result').textContent = `${result} (${remaining} chances left)`;
    document.getElementById('userScore').textContent = `Your choice is: ${userChoice} = ${userScore}`;
    document.getElementById('userScore').style.textTransform = 'Capitalize';
    document.getElementById('computerScore').textContent = `Computer choice is: ${computerChoice}: ${computerScore}`;
    document.getElementById('computerScore').style.textTransform = 'Capitalize';

    if(chancesUsed === totalChances){
        let finalMessage = '';
        if(userScore > computerScore){
            finalMessage = '\n🎉 Game Over! You won!';
        }else if(computerScore > userScore){
            finalMessage = '\n😔 Game Over! Computer won!';
        }else{
            finalMessage = '\n🤝 Game Over! It\'s a draw!';
        }
        document.getElementById('result').textContent += `\n${finalMessage}`;
    }
}

rock.addEventListener('click',() => playScore('rock'));
paper.addEventListener('click',() => playScore('paper'));
scissor.addEventListener('click',() => playScore('scissor'));