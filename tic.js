// Game variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to handle a cell click
function makeMove(cellIndex) {
  if (board[cellIndex] === '' && gameActive) {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
    if (checkWin()) {
      alert(`Player ${currentPlayer} won!`);
      gameActive = false;
    } else if (checkDraw()) {
      alert("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Function to check for a win
function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

// Function to check for a draw
function checkDraw() {
  return !board.includes('');
}

// Function to reset the board
// Function to reset the board
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
  
    // Clear the board display
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
    }
  }
  
  // Reset the board when the page loads
  window.onload = resetBoard;
  
