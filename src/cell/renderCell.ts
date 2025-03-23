import { Cell } from "../types.js";
import { renderMine } from "../mines/ui/renderMine.js";

export const renderCell = (
  cell: Cell,
  cellElement: HTMLButtonElement
): HTMLButtonElement => {
  cellElement.addEventListener("click", () => {
    if (cell.hasMine) {
      renderMine(cellElement);

      return cellElement;
    }

    cellElement.textContent = cell.adjacentMinesTotal.toString();

    cell.isOpen = true;
  });

  if (cell.isOpen) {
    return cellElement;
  }

  return cellElement;
};
