import { getBoard } from "./board/factory/getBoard.js";
import { addMines } from "./mines/factory/addMines.js";
import { renderBoard } from "./board/ui/renderBoard.js";

export const board = getBoard(5);

export const minedBoard = addMines(board);

renderBoard(minedBoard);
