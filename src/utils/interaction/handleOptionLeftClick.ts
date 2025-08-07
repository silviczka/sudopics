import { CellData } from '@/types/sudoku';
import { isValidNumber } from '../game-logic/checks/validation';

export const handleOptionLeftClick = (
  num: number,
  menuPosition: { row: number; col: number } | null,
  board: CellData[][],
  setBoard: (board: CellData[][]) => void,
  closeMenu: () => void,
  setLastEdited: React.Dispatch<
    React.SetStateAction<{ row: number; col: number } | null>
  >,
) => {
  if (!menuPosition) return;
  const { row, col } = menuPosition;

  const newBoard: CellData[][] = board.map((r) => r.map((c) => ({ ...c })));
  newBoard[row][col].userNumber = num;
  newBoard[row][col].drafts = [];
  // Generate numeric board
  const numericBoard = newBoard.map((r) =>
    r.map((c) => c.fixedNumber ?? c.userNumber ?? 0),
  );
  // Revalidate all cells
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const current = numericBoard[r][c];
      if (current !== 0) {
        numericBoard[r][c] = 0;
        const valid = isValidNumber(numericBoard, current, r, c);
        numericBoard[r][c] = current;
        newBoard[r][c].isValid = valid;
      } else {
        newBoard[r][c].isValid = true;
      }
    }
  }

  setBoard(newBoard);
  setLastEdited({ row, col });
  closeMenu();
};
