let score=JSON.parse(localStorage.getItem('score'))||{
wins: 0,
losses: 0,
ties: 0
};

updateScore();


function updateScore(){
    document.body.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function resetScore() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    localStorage.removeItem('score');
    updateScore();
}

function pickComputerMove() {
    const randomNumber=Math.random();

    let computerMove='';

    if (randomNumber>=0 && randomNumber<1/3) {
        computerMove='rock';
    } 
    else if (randomNumber>= 1/3 && randomNumber<2/3) {
        computerMove='paper';
    } 
    else if (randomNumber>=2/3 && randomNumber<1) {
        computerMove='scissors';
    }
    return computerMove;
}

function playGame(playerMove) {
    const computerMove=pickComputerMove();

    let result='';

    if (playerMove==='scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } 
        else if (computerMove === 'paper') {
            result = 'You win.';
        } 
        else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    } 
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } 
        else if (computerMove === 'paper') {
            result = 'Tie.';
        } 
        else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    } 

    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } 
        else if (computerMove === 'paper') {
            result = 'You lose.';
        } 
        else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } 
    else if (result === 'You lose.') {
        score.losses += 1;
    } 
    else if (result === 'Tie.') {
        score.ties += 1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));
    document.body.querySelector('.result').innerHTML=result;
    document.body.querySelector('.moves').innerHTML=`you 
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    updateScore();
}

document.body.addEventListener('keydown',(event)=>{

    if(event.key==="r"){
        playGame("rock");
    }
    else if(event.key==="p"){
        playGame("paper");
    }
    else if(event.key==="s"){
        playGame("scissors");
    }
    
})

let isAutoPlay=false;
let intervalID;

function autoPlay(){
    if(!isAutoPlay){
        intervalID=setInterval(()=>{
            let playerMove=pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlay=true;
    }
    else{
        clearInterval(intervalID);
        isAutoPlay=false;
    }
    

}