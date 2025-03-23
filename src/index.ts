import { getBoard } from "./board/factory/getBoard.js";
import { addMines } from "./mines/factory/addMines.js";
import { renderBoard } from "./board/ui/renderBoard.js";
import { setAdjacentMinesTotal } from "./board/adjacentMines/setAdjacentMines.js";

export const emptyBoard = getBoard(10);

export const minedBoard = addMines(emptyBoard);

const finalBoard = setAdjacentMinesTotal(minedBoard);

renderBoard(finalBoard);
