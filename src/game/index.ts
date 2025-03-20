import { getBoard } from "./board/getBoard.js";
import { addMines } from "./mines/addMines.js";

const board = getBoard(5);

addMines(board);
