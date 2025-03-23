import { Board } from "../types";

export const addMines = (board: Board, probability: number = 0.15): Board => {
  const gameBoard = board;

  gameBoard.forEach((row) => {
    row.forEach((cell) => {
      if (Math.random() < probability) {
        cell.hasMine = true;
      }
    });
  });
  return gameBoard;
};
