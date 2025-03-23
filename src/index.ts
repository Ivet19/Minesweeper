import { getBoard } from "./board/getBoard.js";
import { addMines } from "./mines/addMines.js";
import { renderBoard } from "./board/ui/renderBoard.js";
import { setAdjacentMinesTotal } from "./mines/adjacentMines/setAdjacentMines.js";

export const emptyBoard = getBoard(10);

export const minedBoard = addMines(emptyBoard);

const finalBoard = setAdjacentMinesTotal(minedBoard);

renderBoard(finalBoard);
