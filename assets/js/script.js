//There are only two markers, an X or an O 
var player1 = "X";
var player2 = "O";
var playerstatus= player1;
var gameEnd = false;

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

Begin = function() {
    startGame();
}

function startGame() {
    board
}

// Eventlistener for when the games restart button is clicked

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    

}

/* Actions to be performed when the mouse is clicked, either X or O is placed,
 the players turn swaps, the marker is also set to hover over the board until it is clicked into place */
 
function 



// When the game ends, either a winner is announced or a draw in the interval message 

function endGame(draw) {
    if (draw) {
      winningMessageTextElement.innerText = 'Draw';
    } else {
        winningMessageTextElement.innerText = 
    }

    winningMessageElement.classList.add('show');
}

function isDraw() {
    
}


// Mark placed in cell 

function placeMark() {
    
}


// Function for the players to take turns 

function nextTurn() {
    turn = turn ==="X" ? "O" : "X"
    
}

//Hover function

function setBoardHoverClass() 


// Checks for winning conditions 

function checkWin(currentClass) {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}