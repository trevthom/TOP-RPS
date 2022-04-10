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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'rock' ||
        playerSelection == 'paper' && computerSelection == 'paper' ||
        playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Tie! Try again.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats paper';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors';
    } else {
        return 'You win! Scissors beats Paper';
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let winner = false;

    while(!winner) {
        let playerGuess = prompt("Rock, Paper, or Scissors?");
        let round = playRound(playerGuess, computerPlay());
        console.log(round);

        if (round.includes('win')) {
            playerWins++;
        }

        if(round.includes('lose')) {
            computerWins++;
        }

        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);

        if (playerWins == 5) {
            winner = true;
            return 'You won the game!';
        }

        if (computerWins == 5) {
            winner = true;
            return 'You lost!';
        }
    }
}

console.log(game());