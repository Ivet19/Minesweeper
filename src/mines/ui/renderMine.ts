export const renderMine = (cell: HTMLButtonElement): void => {
  const mine = document.createElement("img") as HTMLImageElement;

  mine.innerHTML = `
  <img src="/media/bomb-icon.svg" alt="deactivated grey bomb with crossed eyes and opened mouth as if exhausted" width="20" height="20">`;

  cell.appendChild(mine);
};
