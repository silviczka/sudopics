import { useEffect } from 'react';
import { generateSudoku } from '@/utils/game-logic/gameSetup';
import { CellData } from '@/types/sudoku';

interface UseSudokuStorageParams {
  storageKey: string;
  board: CellData[][];
  setInitialBoard: React.Dispatch<React.SetStateAction<CellData[][] | null>>;
}

export const useSudokuStorage = ({
  storageKey,
  board,
  setInitialBoard,
}: UseSudokuStorageParams) => {
  // Load from localStorage or generate
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed: CellData[][] = JSON.parse(saved);
      setInitialBoard(parsed);
    } else {
      const { puzzle } = generateSudoku();
      const structured = puzzle.map((row) =>
        row.map((num) => ({
          fixedNumber: num || null,
          userNumber: null,
          drafts: [],
        })),
      );
      setInitialBoard(structured);
    }
  }, [storageKey, setInitialBoard]);

  // Save to localStorage
  useEffect(() => {
    if (board.length) {
      localStorage.setItem(storageKey, JSON.stringify(board));
    }
  }, [board, storageKey]);
};
