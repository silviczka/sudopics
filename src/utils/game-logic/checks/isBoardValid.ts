import { CellData } from '@/types/sudoku';
import { isValidNumber } from './validation';

export const isBoardValid = (board: CellData[][]): boolean => {
  const rawBoard: number[][] = board.map((row) =>
    row.map((cell) => cell.fixedNumber ?? cell.userNumber ?? 0),
  );

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = rawBoard[row][col];
      if (value === 0) continue; // ignore empty cells

      // Temporarily clear the cell to avoid self-comparison
      rawBoard[row][col] = 0;
      const valid = isValidNumber(rawBoard, value, row, col);
      rawBoard[row][col] = value;

      if (!valid) return false;
    }
  }

  return true;
};
