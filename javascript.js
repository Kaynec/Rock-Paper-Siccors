var playerScore=0
var computerScore=0

function computerPlay(){
    var optiones=['rock','paper','scissors']
    
    return optiones[Math.floor(Math.random() * optiones.length)];
}

function playRound(playerSelection,computerSelection){
	if (playerSelection=='rock'&&computerSelection=='paper'){
        para.textContent=('You Lose Paper beats rock')
        computerScore++
        if (computerScore==5){
            para3.textContent='cpu won!'
        } else if (playerScore==5){
            para3.textContent='you won'
        }
    }else if (playerSelection=='paper'&&computerSelection=='rock'){
        para.textContent=(`You Win paper beats rock`)
        playerScore++
        if (computerScore==5){
            para3.textContent='cpu won!'
        } else if (playerScore==5){
            para3.textContent='you won'
        }
    } else if (playerSelection=='rock'&&computerSelection=='scissors'){
        para.textContent=(`You  win rock beats scissors `)
        playerScore++
        if (computerScore==5){
           para3.textContent='cpu won!'
        } else if (playerScore==5){
           para3.textContent='you won'
        }
    }else if (computerSelection=='rock'&&playerSelection=='scissors'){
        para.textContent=(`You lose rock Beats Scissors `)
        computerScore++
        if (computerScore==5){
            para3.textContent='cpu won!'
        } else if (playerScore==5){
            para3.textContent='you won'
        }
    }else if (playerSelection=='paper'&&computerSelection=='scissors'){
        para.textContent=(`You Lose Scissors Wins`)
        computerScore++
        if (computerScore==5){
            para3.textContent='cpu won!'
        } else if (playerScore==5){
            para3.textContent='you won'
        }
    }else if (playerSelection=='scissors'&&computerSelection=='rock'){
        para.textContent=(`You Lose Rock Wins`)
    }else if(playerSelection=='scissors'&&computerSelection=='paper'){
        para.textContent=(`You Win scissors beats paper `)
        playerScore++
        if (computerScore==5){
            para3.textContent='cpu won!'
        } else if (playerScore==5){
            para3.textContent='you won'
        }
    }else if (computerSelection=='scissors'&&playerSelection=='paper'){
        para.textContent=(`You Lose scissors beats paper `)
        computerScore++
        if (computerScore==5){
            para3.textContent='cpu won!'
        } else if (playerScore==5){
            para3.textContent='you won'
        }
    }else {
        para.textContent=('it\'s a tie')
    }
    
    return ;
}



const container = document.querySelector('#container')
const rock = document.querySelector('#rock')
const paper=document.querySelector('#paper')
const scissors=document.querySelector('#scissors')
const para    =document.querySelector('#para')
const para2   =document.querySelector('#para2')
const btn     = document.querySelector('#btn')
const para3 = document.querySelector('#para3')



function resetScore(){
    playerScore=0;
    computerScore=0;
    para2.textContent='playerscore 0 computerscore 0'
    para3.textContent=''
}

function game(){
    
        rock.addEventListener('click',function(e){
            playRound("rock",computerPlay())
            para2.textContent=`YourScore ${playerScore} ComputerScore ${computerScore}`
        })
        
        paper.addEventListener('click',function(e){
            playRound("paper",computerPlay())
            para2.textContent=`YourScore ${playerScore} ComputerScore ${computerScore}`
        })
        
        scissors.addEventListener('click',function(e){
           playRound("scissors",computerPlay())
           para2.textContent=`YourScore ${playerScore} ComputerScore ${computerScore}`
           
        })
        btn.addEventListener('click',resetScore)


}



game()