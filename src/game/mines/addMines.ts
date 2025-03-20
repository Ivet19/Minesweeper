import { Board } from "../types.js";
import { getBoard } from "../board/getBoard.js";

export const addMines = (board: Board, probability: number = 0.15): Board => {
  const gameBoard = board;

  debugger;

  gameBoard.forEach((row) => {
    row.forEach((cell) => {
      if (Math.random() < probability) {
        cell.hasMine = true;
      }
    });
  });
  return gameBoard;
};

addMines(getBoard(5));
