import { Cell } from "../types.js";
import { renderMine } from "../mines/ui/renderMine.js";

export const renderCell = (cell: Cell, cellElement: HTMLButtonElement) => {
  cellElement.classList.add("hidden");
  cell.isOpen = false;

  cellElement.addEventListener("click", () => {
    cell.isOpen = true;
    cellElement.classList.remove("hidden");
  });

  if (cell.isOpen) {
    return cellElement;
  }

  if (cell.hasMine) {
    renderMine(cellElement);

    return cellElement;
  }

  return cellElement;
};
