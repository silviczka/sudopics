import { generateSudoku } from '@/utils/game-logic/gameSetup';
import { CellData } from '@/types/sudoku';

export const restartSameGame = (
  board: CellData[][],
  setBoard: (b: CellData[][]) => void,
  setWinDialogOpen: (v: boolean) => void,
) => {
  const restarted = board.map((row) =>
    row.map((cell) => ({
      ...cell,
      userNumber: null,
      drafts: [],
      isValid: true,
    })),
  );
  setBoard(restarted);
  setWinDialogOpen(false);
};

export const startNewGame = (
  setInitialBoard: (b: CellData[][]) => void,
  setBoard: (b: CellData[][]) => void,
  setWinDialogOpen: (v: boolean) => void,
) => {
  const { puzzle } = generateSudoku();
  const newBoard = puzzle.map((row) =>
    row.map((num) => ({
      fixedNumber: num || null,
      userNumber: null,
      drafts: [],
    })),
  );
  setInitialBoard(newBoard);
  setBoard(newBoard);
  setWinDialogOpen(false);
};
