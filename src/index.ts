import { getBoard } from "./board/factory/getBoard.js";
import { addMines } from "./mines/factory/addMines.js";

const board = getBoard(5);

addMines(board);
