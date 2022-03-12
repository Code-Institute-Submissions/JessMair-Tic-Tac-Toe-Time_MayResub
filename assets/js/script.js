//There are only two markers, an X or an O 

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

/*
Index of the grid
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]
*/

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] ;

// The clickable cells, board game, restart button, winning message, winning message to be displayed

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let circleTurn;


// Eventlistener for when the games restart button is clicked

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, {once: true});
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');

}

/* Actions to be performed when the mouse is clicked, either X or O is placed,
 the players turn swaps, the marker is also set to hover over the board until it is clicked into place */
 
function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    }  else if (isDraw()) {
        endGame(true);
    }  else {
        swapTurns();
        setBoardHoverClass();
    } 
} 

// When the game ends, either a winner is announced or a draw in the interval message 

function endGame(draw) {
    if (draw) {
      winningMessageTextElement.innerText = 'Draw';
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }

    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(CIRCLE_CLASS);
    });
}

// Mark placed in cell 

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

// Function for the players to take turns 

function swapTurns() {
    circleTurn = !circleTurn;
}

//Hover function

function setBoardHoverClass() {
board.classList.remove(X_CLASS);
board.classList.remove(CIRCLE_CLASS);
if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else{
    board.classList.add(X_CLASS);
  }
}

// Checks for winning conditions 

function checkWin(currentClass) {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}