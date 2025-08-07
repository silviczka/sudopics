import { useEffect } from 'react';
import { isBoardComplete } from '@/utils/game-logic/checks/isBoardComplete';
import { isBoardValid } from '@/utils/game-logic/checks/isBoardValid';
import { CellData } from '@/types/sudoku';

interface UseWinConditionParams {
  board: CellData[][];
  initialBoard: CellData[][] | null;
  setWinDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useWinCondition = ({
  board,
  initialBoard,
  setWinDialogOpen,
}: UseWinConditionParams) => {
  useEffect(() => {
    if (
      initialBoard &&
      board.length === 9 &&
      board.every((row) => row.length === 9) &&
      isBoardComplete(board) &&
      isBoardValid(board)
    ) {
      setWinDialogOpen(true);
    }
  }, [board, initialBoard, setWinDialogOpen]);
};
