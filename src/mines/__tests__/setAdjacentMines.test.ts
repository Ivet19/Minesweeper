import { getBoard } from "../../board/getBoard.js";
import { setAdjacentMinesTotal } from "../adjacentMines/setAdjacentMines.js";

describe("Given the setAdjacentMinesTotal function", () => {
  describe("When it recives a board without mines", () => {
    test("Then it should return a board of cells with 0 adjacent mines", () => {
      const board = setAdjacentMinesTotal(getBoard(4));

      const hasNoAdjacentMines = board.every((row) =>
        row.every((cell) => cell.adjacentMinesTotal === 0)
      );

      expect(hasNoAdjacentMines).toBe(true);
    });
  });

  describe("When it recives a board that contains a cell with a mine in the middle", () => {
    test("Then it should return a board where the 8 neighbor cells have 1 adjacent mine each.", () => {
      const board = getBoard(4);
      board[2][2].hasMine = true;

      const minedBoard = setAdjacentMinesTotal(board);
      const cells = minedBoard.flat();

      const AdjacentMinesTotal = cells.reduce(
        (accumulator, actualCell) =>
          accumulator + actualCell.adjacentMinesTotal,
        0
      );

      expect(AdjacentMinesTotal).toBe(8);
    });
  });
});
