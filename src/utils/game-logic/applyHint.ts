import { CellData } from '@/types/sudoku';
import { getHint } from './getHint';

export const applyHint = (
  board: CellData[][],
  setBoard: (newBoard: CellData[][]) => void,
) => {
  const hint = getHint(board);
  if (!hint) return;

  const { row, col, value } = hint;
  const newBoard = [...board];
  newBoard[row] = [...newBoard[row]];
  newBoard[row][col] = {
    ...newBoard[row][col],
    userNumber: value,
    drafts: [],
  };
  setBoard(newBoard);
};
