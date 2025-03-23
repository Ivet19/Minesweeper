import { Cell, Board } from "../../types.js";

export const getAdjacentMinesTotal = (cell: Cell, board: Board): number => {
  const rowNumber = cell.row;
  const columnNumber = cell.column;

  let adjacentMinesTotal = 0;

  const adjacentPositions = [
    { row: -1, column: -1 },
    { row: -1, column: 0 },
    { row: -1, column: +1 },
    { row: 0, column: -1 },
    { row: 0, column: +1 },
    { row: +1, column: -1 },
    { row: +1, column: 0 },
    { row: +1, column: +1 },
  ];

  adjacentPositions.forEach((position) => {
    const nextRow = rowNumber + position.row;
    const nextColumn = columnNumber + position.column;

    const hasNextPositions =
      nextRow >= 0 &&
      nextRow < board.length &&
      nextColumn >= 0 &&
      nextColumn < board[0].length;

    if (hasNextPositions) {
      const isMinedCell = board[nextRow][nextColumn].hasMine;

      if (isMinedCell) {
        adjacentMinesTotal++;
      }
    }
  });

  return adjacentMinesTotal;
};
