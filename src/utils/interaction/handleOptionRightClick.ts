import { CellData } from '@/types/sudoku';

export const handleOptionRightClick = (
  num: number,
  menuPosition: { row: number; col: number } | null,
  board: CellData[][],
  setBoard: (board: CellData[][]) => void,
  closeMenu: () => void,
) => {
  if (!menuPosition) return;

  const { row, col } = menuPosition;
  const cell = board[row][col];

  const newDrafts = cell.drafts.includes(num)
    ? cell.drafts.filter((d) => d !== num) // toggle off
    : [...cell.drafts, num].slice(0, 4); // add, max 4

  const newBoard = [...board];
  newBoard[row] = [...newBoard[row]];
  newBoard[row][col] = {
    ...cell,
    drafts: newDrafts,
  };

  setBoard(newBoard);
  closeMenu();
};
