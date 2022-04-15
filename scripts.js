function computerPlay() {
    if (Math.floor(Math.random() * 3) == 0) {
        return 'rock';
    } else if (Math.floor(Math.random() * 3) == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    if (winner) {
        playerWins = computerWins = 0;
        document.getElementById("playerScore").innerHTML = playerWins;
        document.getElementById("computerScore").innerHTML = computerWins;
        document.getElementById('playAgain').style.visibility = 'hidden';
        result.style.color = 'black';
        result.style.fontWeight = 'normal';
        winner = false;
    }

    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock' ||
        playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper' ||
        playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        result.textContent = 'Tie! Try again.';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        result.textContent = 'You lose! Paper beats Rock';
        computerWins++;
        document.getElementById("computerScore").innerHTML = computerWins;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You win! Rock beats Scissors';
        playerWins++;
        document.getElementById("playerScore").innerHTML = playerWins;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        result.textContent = 'You lose! Scissors beats paper';
        computerWins++;
        document.getElementById("computerScore").innerHTML = computerWins;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You win! Paper beats Rock';
        playerWins++;
        document.getElementById("playerScore").innerHTML = playerWins;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You lose! Rock beats Scissors';
        computerWins++;
        document.getElementById("computerScore").innerHTML = computerWins;
    } else {
        result.textContent = 'You win! Scissors beats Paper';
        playerWins++;
        document.getElementById("playerScore").innerHTML = playerWins;
    }

    if (playerWins == 5) {
        result.style.fontWeight = 'bold';
        result.style.color = 'green';
        result.textContent = 'You won Rock, Paper, Scissors!'
        document.getElementById('playAgain').style.visibility = 'visible';
        winner = true;
    }

    if (computerWins == 5) {
        result.style.fontWeight = 'bold';
        result.style.color = 'red';
        result.textContent = 'YOU LOSE IDIOT';
        document.getElementById('playAgain').style.visibility = 'visible';
        winner = true;
    }
}


let playerWins = computerWins = 0;
let winner = false;
let result = document.getElementById('win-lose-tie');

let buttons = Array.from(document.getElementsByTagName('button'));
buttons.forEach(button => button.addEventListener('click', e => playRound(e.target.id, computerPlay())));