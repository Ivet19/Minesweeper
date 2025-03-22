import { Cell, Board } from "../../types";

export const getBoard = (dimension: number): Board => {
  if (dimension < 4) {
    throw new Error("The minimum dimension is 4");
  }

  const board: Board = [];

  for (let rowNumber = 0; rowNumber < dimension; rowNumber++) {
    board[rowNumber] = [];

    for (let columnNumber = 0; columnNumber < dimension; columnNumber++) {
      const cell: Cell = {
        hasMine: false,
        adjacentMinesTotal: 0,
        isOpen: false,
      };

      board[rowNumber][columnNumber] = cell;
    }
  }

  return board;
};
