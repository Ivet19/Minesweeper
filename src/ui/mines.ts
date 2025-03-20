import { Board } from "./types.js";
import { getGameBoard } from "./board.js";

let gameBoard = getGameBoard();

export const addMines = (board: Board, probability: number = 0.15): void => {
  board.forEach((row) => {
    row.forEach((cell) => {
      if (Math.random() < probability) {
        cell.hasMine = true;
      }
    });
  });
};

const minesFulledBoard = addMines(gameBoard);
