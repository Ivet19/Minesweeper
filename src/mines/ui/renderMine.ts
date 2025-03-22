export const renderMine = (cell: HTMLButtonElement): void => {
  cell.innerHTML =
    "<img src='/media/bomb-icon.svg' alt='deactivated grey bomb with crossed eyes and opened mouth as if exhausted' width='20' height='20'>";
};
