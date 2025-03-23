export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
  isOpen: boolean;
  column: number;
  row: number;
};

export type Row = Cell[];

export type Board = Row[];
