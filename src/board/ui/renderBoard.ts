import { renderCell } from "../../cell/renderCell.js";
import { Board } from "../../types.js";

export const renderBoard = (board: Board): void => {
  const cells = board.flat();
  const boardElement = document.createElement("ul");
  const boardContainer = document.querySelector("board-container");

  if (!boardContainer) {
    throw new Error("Missing board element");
  }

  cells.forEach((cell) => {
    const cellContainer = document.createElement("li");
    const cellElement = document.createElement("button");
    cellContainer.classList.add("cell-container");
    cellElement.classList.add("cell");
    cellElement.ariaLabel = "open cell";

    cellContainer.appendChild(cellElement);

    renderCell(cell, cellElement);

    boardElement.appendChild(cellContainer);
  });

  boardContainer.appendChild(boardElement);
};
