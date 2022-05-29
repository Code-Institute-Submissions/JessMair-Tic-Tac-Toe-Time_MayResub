// 2 players diffrenciated by their own symbols of X or O 
const playerO = "O"
const pLayerX = "X"

// To allow the game to be restarted and to determine when it has ended 
let startGame = true

// This will show under the grid to make player aware of who's turn it is and if it is a draw
const announce_win = () => 'Player $(turn) Wins';
const draw = () => `Its a Draw!`;

const game = document.querySelector('current_game');


// Targets the cells and turn the cells into an array 
let cell = document.querySelectorAll('.cell')
cell = Array.from(cell)

// The game will always start with player "O"
let turn = "O"
cell.forEach(function(cell){
    cell.addEventListener('click', function(){
        cell.innerText = turn
// Function for the players to take turns 
        turn = turn ==="X" ? "O" : "X"
    })
})

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



//function checkForWinner(){
  //  winningCombinations.forEach(function(combination){
     //   let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        //if(check){
       //     highlightCells(combination)
       // }
   // })
//}


//function checkWin()




//restartButton.addEventListener('click', startGame);
//document.getElementById("reset").addEventListener("click", function() {
    
 // });



//function startGame() {
    

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





