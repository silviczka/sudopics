import { fillBoardShuffled } from '@/utils/game-logic/fillBoard';

export const generateSolvedBoard = (): number[][] => {
  const board: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
  fillBoardShuffled(board);
  return board;
};
