const gameBtns = document.querySelectorAll('.game-btn')
let gameInfo = document.querySelector('.gameInfo')
const scores = document.querySelector('.gameScores')
const newGame = document.querySelector('.newGameBtn')

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
    } else {
        computerScore += 1
        return `You lose! ${computerSelection} beats ${playerSelection}.`      
    }
}

function startNewGame(){
    newGame.addEventListener('click', () => {
        scores.textContent = ''
        newGame.classList.toggle('hidden')
        playerScore = 0
        computerScore = 0
        gameInfo.textContent = ''

        gameBtns.forEach(btn => {
            btn.classList.toggle('hidden')
        })

        
    })
}
startNewGame()

function game(){
    gameBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const player = btn.textContent
            const computer = getComputerChoice()
            gameInfo.textContent = playRound(player, computer)

            if(playerScore === 5){
                scores.textContent = `Congratulations! You beat the computer ${playerScore} to ${computerScore}`

                gameBtns.forEach(btn => {
                    btn.classList.toggle('hidden')
                    
                })

                newGame.classList.toggle('hidden')

                return 
            } else if(computerScore === 5){
                scores.textContent = `NOOOOO!! You lost to the computer. THE MACHINES ARE TAKING OVERR D:`
                gameBtns.forEach(btn => {
                    btn.classList.toggle('hidden')
                    
                })

                newGame.classList.toggle('hidden')

                return 
            }
            scores.textContent = `Player Score: ${playerScore} VS Computer Score: ${computerScore}`
        })
    })
}

game()