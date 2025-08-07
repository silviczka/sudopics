import { CellData } from '@/types/sudoku';

export const isBoardComplete = (board: CellData[][]): boolean => {
  return board.every((row) =>
    row.every((cell) => {
      if (cell.fixedNumber !== null) return true;
      return cell.userNumber !== null && cell.drafts.length === 0;
    }),
  );
};
