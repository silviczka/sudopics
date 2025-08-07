import { useEffect, useState } from 'react';
import { solveSudoku } from '@/utils/game-logic/sudokuSolver';

export function useSolvability(board: number[][]) {
  const [isSolvable, setIsSolvable] = useState(true);

  useEffect(() => {
    // Check if board shape is valid (9x9)
    if (
      !board ||
      board.length !== 9 ||
      board.some((row) => !Array.isArray(row) || row.length !== 9)
    ) {
      setIsSolvable(false);
      return;
    }

    const solved = solveSudoku(board);
    setIsSolvable(!!solved);
  }, [board]);

  return isSolvable;
}
