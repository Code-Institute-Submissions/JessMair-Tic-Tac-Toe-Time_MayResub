let cell = document.querySelectorAll('.cell')
//console.log(cell);
cell = Array.from(cell)

let turn = "O"

cell.forEach(function(cell){
    cell.addEventListener('click', function(){
        cell.innerText = turn
// Function for the players to take turns 
        turn = turn ==="X" ? "O" : "X"
    })
})

// Function for the players to take turns 




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

//Begin = function() {
    //startGame();
//}

//function startGame() {
   // board = true 
//}

// Eventlistener for when the games restart button is clicked

//startGame();

//restartButton.addEventListener('click', startGame);

//function startGame() {
    

//}

/* Actions to be performed when the mouse is clicked, either X or O is placed,
 the players turn swaps, the marker is also set to hover over the board until it is clicked into place */
 
//function 



// When the game ends, either a winner is announced or a draw in the interval message 

//function endGame(draw) {
//    if (draw) {
//      winningMessageTextElement.innerText = 'Draw';
//    } else {
 //       winningMessageTextElement.innerText = 
 //   }

 //   winningMessageElement.classList.add('show');
// }

//function isDraw() {
    
// }





