import { Cell, Board } from "./types.js";

const getBoardGame = (numberA: number = 5, numberB: number = 5): Board => {
  const board: Board = [];
  const rowsTotal = numberA;
  const columnsTotal = numberB;

  for (let rowNumber = 0; rowNumber < numberA; rowNumber++) {
    board[rowNumber] = [];
    for (let columnNumber = 0; columnNumber < numberB; columnNumber++) {
      const boardCell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
        isOpen: false,
      };
      board[rowNumber][columnNumber] = boardCell;
    }
  }
  return board;
};

console.log(getBoardGame());
