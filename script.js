let playerScore = 0
let computerScore = 0


function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
     
}



function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection){
        return "it's a draw! Try again!"
    } else if(playerSelection === 'paper' && computerSelection === 'rock' || 
              playerSelection === 'rock' && computerSelection === 'scissors' ||
              playerSelection === 'scissors' && computerSelection === 'paper'){
                    playerScore += 1
                    return `You win! ${playerSelection} beats ${computerSelection}.`
                }
                computerScore += 1 
                return `You lose! ${computerSelection} beats ${playerSelection}.`
                
}




function game(){
   for(let i = 0; i < 5; i++){

    const player = prompt('Pick either, rock, paper or scissors').toLowerCase()
    const computer = getComputerChoice()

    console.log(playRound(player, computer))
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)
   }
}

game()

