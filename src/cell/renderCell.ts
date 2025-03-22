import { Cell } from "../types.js";
import { renderMine } from "../mines/ui/renderMine.js";

export const renderCell = (cell: Cell, cellElement: HTMLButtonElement) => {
  if (cell.isOpen) {
    return cellElement;
  }

  if (cell.hasMine) {
    renderMine(cellElement);

    return cellElement;
  }

  cellElement.textContent = cell.adjacentMinesTotal.toString();

  return cellElement;
};
