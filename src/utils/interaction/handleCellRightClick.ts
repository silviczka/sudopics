import { CellData } from '@/types/sudoku';
import { isValidNumber } from '../game-logic/checks/validation';

export const handleCellRightClick = (
  row: number,
  col: number,
  board: CellData[][],
  setBoard: (board: CellData[][]) => void,
) => {
  const cell = board[row][col];

  // Don't allow changes to fixed cells
  if (cell.fixedNumber !== null) return;

  // Deep clone the board to avoid mutation
  const newBoard: CellData[][] = board.map((r) => r.map((c) => ({ ...c })));

  // Clear the user number and drafts at clicked cell
  newBoard[row][col].userNumber = null;
  newBoard[row][col].drafts = [];
  newBoard[row][col].isValid = true; // clearing means valid by default

  // Create numeric board representation for validation
  const numericBoard = newBoard.map((r) =>
    r.map((c) => c.fixedNumber ?? c.userNumber ?? 0),
  );

  // Validate each cell that has a userNumber and update isValid accordingly
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = numericBoard[r][c];
      if (num !== 0) {
        // Temporarily remove current cell's number to avoid self-conflict
        numericBoard[r][c] = 0;

        const valid = isValidNumber(numericBoard, num, r, c);

        // Restore number back
        numericBoard[r][c] = num;

        newBoard[r][c].isValid = valid;
      } else {
        newBoard[r][c].isValid = true; // empty cells are valid
      }
    }
  }

  setBoard(newBoard);
};
