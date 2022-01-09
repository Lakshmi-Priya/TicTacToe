let gameStates = Array.from(document.getElementsByClassName('column'));
let gameOver = false;

document.getElementById('playAgain').addEventListener('click', (e) => {
    gameStates.map((gameState) => {
        document.getElementById(gameState.id).innerText = "";
    })
    document.getElementById('results').innerText = "";
    count = 0;
    document.getElementById('playAgain').disabled = true;
    gameOver=false;
})
document.getElementById('playAgain').disabled = true;
let winningCases = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
]
console.log(gameStates);
let count = 0;

gameStates.map((gameState) => {
    gameState.addEventListener('click', (e) => {
        if (gameOver == false) {
            if (count % 2 == 0) {
                document.getElementById(e.target.id).innerText = 'X';
                incrementCount();
                checkWinningCases();

            }
            else {
                document.getElementById(e.target.id).innerText = 'O';
                incrementCount();
                checkWinningCases();
            }
        }
        else {
            document.getElementById(e.target.id).innerText = '';
        }

        if (count == 9) {
            document.getElementById('results').innerText = "Game is a tie. Click Play again to retry";
            document.getElementById('playAgain').disabled = false;
        }
    })
})

function incrementCount() {
    count++;
}

function checkWinningCases() {
    winningCases.forEach((winningCase) => {
        let i = 0;
        console.log(winningCase[i], winningCase[i + 1], winningCase[i + 2]);
        if ((document.getElementById(winningCase[i]).innerText == 'X' && document.getElementById(winningCase[i + 1]).innerText == 'X' && document.getElementById(winningCase[i + 2]).innerText == 'X') ||
            (document.getElementById(winningCase[i]).innerText == 'O' && document.getElementById(winningCase[i + 1]).innerText == 'O' && document.getElementById(winningCase[i + 2]).innerText == 'O')) {
            if (count % 2 == 0) {
                document.getElementById('results').innerText = "Game Over!! Player O won. Click Play again to retry";
                document.getElementById('playAgain').disabled = false;
                gameOver = true;

            }
            else {
                document.getElementById('results').innerText = "Game Over!! Player X won. Click Play again to retry";
                document.getElementById('playAgain').disabled = false;
                gameOver = true;

            }

        }
    })
}

