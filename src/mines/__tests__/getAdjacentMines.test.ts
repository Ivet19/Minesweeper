import { Cell } from "../../types.js";
import { getBoard } from "../../board/getBoard.js";
import { getAdjacentMinesTotal } from "../adjacentMines/getAdjacentMines";

describe("Given the getAdjacentMinesTotal function", () => {
  const cell: Cell = {
    hasMine: false,
    adjacentMinesTotal: 0,
    isOpen: false,
    column: 4,
    row: 2,
  };
  describe("When it recives an empty board", () => {
    test("Then it should return 0 as the total number of adjacent mines in every cell", () => {
      const board = getBoard(4);

      const adjacentMinesTotal = getAdjacentMinesTotal(cell, board);

      expect(adjacentMinesTotal).toBe(0);
    });
  });
  describe("When it recives a board and a cell in a specific position with a mine in the next cell", () => {
    test("Then it should return 1 as the total number of adjacent mines", () => {
      const board = getBoard(5);
      board[1][4].hasMine = true;

      const adjacentMinesTotal = getAdjacentMinesTotal(cell, board);

      expect(adjacentMinesTotal).toBe(1);
    });
  });
});
