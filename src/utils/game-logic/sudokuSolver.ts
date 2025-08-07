import { fillBoard } from '@/utils/game-logic/fillBoard';

export const solveSudoku = (board: number[][]): number[][] | null => {
  const puzzleCopy = board.map((row) => [...row]);
  return fillBoard(puzzleCopy) ? puzzleCopy : null;
};
