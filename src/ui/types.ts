export type Cell = {
  hasMine: boolean;
  adjacentMinesTotal: number;
  isOpen: boolean;
};

export type Row = Cell[];

export type Board = Row[];
