import { solveSudoku } from '@/utils/game-logic/sudokuSolver';
import { shuffleArray } from '@/utils/game-logic/shuffle';
import { CellData } from '@/types/sudoku';

export const getHint = (cellBoard: CellData[][]) => {
  const currentBoard: number[][] = cellBoard.map((row) =>
    row.map((cell) => cell.fixedNumber ?? cell.userNumber ?? 0),
  );
  console.log('Current board being solved:', currentBoard);

  // ❗ Check for bad values
  currentBoard.forEach((row, r) => {
    row.forEach((val, c) => {
      if (typeof val !== 'number' || isNaN(val)) {
        console.warn(`Invalid value at [${r}, ${c}]:`, val);
      }
    });
  });

  const solved = solveSudoku(currentBoard);
  if (!solved) {
    alert(
      "Can't give a hint: something in your current board blocks a valid solution.",
    );
    return null;
  }

  // const solved = solveSudoku(currentBoard);
  // if (!solved) return null; // unsolvable or invalid puzzle

  const emptyCells: { row: number; col: number }[] = [];

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = cellBoard[row][col];
      if (
        cell.userNumber === null &&
        cell.fixedNumber === null &&
        cell.drafts.length === 0
      ) {
        emptyCells.push({ row, col });
      }
    }
  }

  const shuffled = shuffleArray(emptyCells);
  if (shuffled.length === 0) return null;

  const { row, col } = shuffled[0];
  return { row, col, value: solved[row][col] };
};
