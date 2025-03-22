import { renderCell } from "../../cell/renderCell.js";
import { Board } from "../../types.js";

export const renderBoard = (board: Board): void => {
  const cells = board.flat();
  const boardElement = document.createElement("ul");
  boardElement.classList.add("cells");
  const boardContainer = document.querySelector(".board-container");

  if (!boardContainer) {
    throw new Error("Missing board element");
  }

  cells.forEach((cell) => {
    const cellContainer = document.createElement("li");
    const cellElement = document.createElement("button");
    cellElement.classList.add("cell");
    cellElement.ariaLabel = "open cell";

    cellElement.addEventListener("click", () => {});

    cellContainer.appendChild(cellElement);

    renderCell(cell, cellElement);

    boardElement.appendChild(cellContainer);
  });

  boardContainer.appendChild(boardElement);
};
