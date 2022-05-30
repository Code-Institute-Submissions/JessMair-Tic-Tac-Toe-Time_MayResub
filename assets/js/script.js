
// Targets the cells and turn the cells into an array 
let cell = document.querySelectorAll('.cell')
cell = Array.from(cell)

// usedCells is an array of all cells used whether O or X
let usedCells = [];

// array for just X cells used
let xCells = [];

// array for just O cells used
let oCells = [];




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



document.querySelector('.restartButton').addEventListener('click', handleClick, startGame);






function handleCheckWinner() {

}


function isDraw() {
    
}


function handleRestart() {

}


function handlestartGame() {

}

