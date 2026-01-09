import { WINNING_COMBINATIONS } from './winning-combinations.js';
import { INITIAL_GAME_BOARD } from './data.js';

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

export function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;

    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

export function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    let squareFirstSymbol =
      gameBoard[combination[0].row][combination[0].column];

    let squareSecondSymbol =
      gameBoard[combination[1].row][combination[1].column];
    let squareThirdSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      squareFirstSymbol &&
      squareFirstSymbol === squareSecondSymbol &&
      squareFirstSymbol === squareThirdSymbol
    ) {
      winner = players[squareFirstSymbol];
    }
  }
  return winner;
}
