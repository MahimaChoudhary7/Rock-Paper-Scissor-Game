document.addEventListener('DOMContentLoaded', (event)=> {
const game=()=> {
    let playerScore=0;
    let computerScore=0;
    let moves=0;
    function playGame() {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const movesLeft=document.querySelector('.movesLeft');
        const result=document.querySelector('.result');
        const playerScoreBoard=document.querySelector('.p-count');
        const computerScoreBoard=document.querySelector('.c-count');
        const reloadBtn=document.querySelector('.reload');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

        console.log({ rockBtn, paperBtn, scissorBtn, movesLeft, result, playerScoreBoard, computerScoreBoard, reloadBtn });

            if (!rockBtn) console.error('rockBtn not found');
            if (!paperBtn) console.error('paperBtn not found');
            if (!scissorBtn) console.error('scissorBtn not found');
            if (!movesLeft) console.error('movesLeft not found');
            if (!result) console.error('result not found');
            if (!playerScoreBoard) console.error('playerScoreBoard not found');
            if (!computerScoreBoard) console.error('computerScoreBoard not found');
            if (!reloadBtn) console.error('reloadBtn not found');

        if (!rockBtn || !paperBtn || !scissorBtn || !movesLeft || !result || !playerScoreBoard || !computerScoreBoard || !reloadBtn) {
            console.error('One or more elements not found in the DOM.');
            return;
        }

        playerOptions.forEach(option => {
        option.addEventListener('click',function(){
            moves++;
            movesLeft.innerText=`Moves Left: ${10-moves}`;

            const choiceNumber=Math.floor(Math.random()*3);
            const computerChoice=computerOptions[choiceNumber];
            winner(this.innerText,computerChoice)
            if(moves==10) {
                gameOver(playerOptions,movesLeft);
            }
        });
    });
}

const winner=(player,computer)=> {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player=player.toLowerCase();
    computer=computer.toLowerCase();
    if(player===computer) {
        result.textContent="Tie";
    }
    else if(player==='rock') {
        if(computer==='paper') {
            result.textContent='Computer Won';
            computerScore++;
            computerScoreBoard.textContent=computerScore;
        }
        else {
            result.textContent='Player Won';
            playerScore++;
            playerScoreBoard.textContent=playerScore;
        }
    }
    else if(player==='scissors') {
        if(computer==='rock') {
            result.textContent='Computer Won';
            computerScore++;
            computerScoreBoard.textContent=computerScore;
        }
        else {
            result.textContent='Player Won';
            playerScore++;
            playerScoreBoard.textContent=playerScore;
        }
    }
    else if(player==='paper') {
        if(computer==='scissors') {
            result.textContent='Computer Won';
            computerScore++;
            computerScoreBoard.textContent=computerScore;
        }
        else {
            result.textContent='Player Won';
            playerScore++;
            playerScoreBoard.textContent=playerScore;
        }
    }
}

const gameOver=(playerOptions,movesLeft)=> {
    const chooseMove=document.querySelector('.move');
    const result=document.querySelector('.result');
    const reloadBtn=document.querySelector('.reload');
    playerOptions.forEach(option => {
        option.style.display='none';
    });

    chooseMove.innerText='Game Over!!';
    movesLeft.style.display='none';

    if(playerScore>computerScore) {
        result.style.fontSize='2rem';
        result.innerText='You Won The Game';
        result.style.color='#308D46';
    }
    else if(playerScore<computerScore) {
        result.style.fontSize='2rem';
        result.innerText='You Lost The Game';
        result.style.color='red';
    }
    else {
        result.style.fontSize='2rem';
        result.innerText='Tie';
        result.style.color='grey';
    }

    reloadBtn.innerText='Restart';
    reloadBtn.style.display='flex';
    reloadBtn.addEventListener('click',()=> {
        window.location.reload();
    });
  }
 playGame();
}
game();
});