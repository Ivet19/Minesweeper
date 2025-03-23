import { getBoard } from "../getBoard";

describe("Given the getBoardGame function", () => {
  describe("When it recives a dimension of 4", () => {
    test("Then it should return a board with 4 rows", () => {
      const dimension = 4;
      const expectedBoardLength = 4;

      const actualBoardLength = getBoard(dimension).length;

      expect(actualBoardLength).toBe(expectedBoardLength);
    });

    test("Then it should return a board with no mines", () => {
      const dimension = 4;
      const cells = getBoard(dimension).flat();
      const expectedResult = true;

      const actualResult = cells.every((cell) => !cell.hasMine);

      expect(actualResult).toBe(expectedResult);
    });

    test("Then it should return a board with no adjacent mines", () => {
      const dimension = 4;
      const cells = getBoard(dimension).flat();
      const expectedResult = true;

      const actualResult = cells.every((cell) => cell.adjacentMinesTotal === 0);

      expect(actualResult).toBe(expectedResult);
    });
  });

  describe("When it recives a dimension of 3 or less", () => {
    test("Then it should return an error message explaining tat 4 is the minimum dimension", () => {
      const dimension = 3;
      const expectedResult = "The minimum dimension is 4";

      expect(() => getBoard(dimension)).toThrow(expectedResult);
    });
  });
});
