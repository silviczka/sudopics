import { CellData } from '@/types/sudoku';

export const handleCellLeftClick = (
  row: number,
  col: number,
  board: CellData[][],
  setMenuPosition: (pos: { row: number; col: number } | null) => void,
) => {
  const cell = board[row][col];

  // Do nothing if the cell is fixed or already filled
  if (cell.fixedNumber !== null || cell.userNumber !== null) return;

  // Open the number selection menu
  setMenuPosition({ row, col });
};
