import { Cell, Board } from "./types.js";

export const getBoardGame = (
  numberA: number = 5,
  numberB: number = 5
): Board => {
  const board: Board = [];
  const rowsTotal = numberA;
  const columnsTotal = numberB;

  if (numberA !== numberB) {
    throw new Error("There must be the same number of rows and columns");
  }

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
