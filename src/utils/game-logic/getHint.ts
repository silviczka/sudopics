import { solveSudoku } from '@/utils/game-logic/sudokuSolver';
import { shuffleArray } from '@/utils/game-logic/shuffle';
import { CellData } from '@/types/sudoku';

export const getHint = (cellBoard: CellData[][]) => {
  const currentBoard: number[][] = cellBoard.map((row) =>
    row.map((cell) => cell.fixedNumber ?? cell.userNumber ?? 0),
  );

  const solved = solveSudoku(currentBoard);
  if (!solved) {
    return null;
  }
  // cells that are empty OR have drafts/candidates
  const hintableCells: { row: number; col: number }[] = [];

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = cellBoard[row][col];
      const isEmpty = cell.userNumber === null && cell.fixedNumber === null;
      const hasDrafts = cell.drafts.length > 0;

      if (isEmpty || hasDrafts) {
        hintableCells.push({ row, col });
      }
    }
  }
  if (hintableCells.length === 0) return null;
  const shuffled = shuffleArray(hintableCells);

  const { row, col } = shuffled[0];
  return { row, col, value: solved[row][col] };
};
