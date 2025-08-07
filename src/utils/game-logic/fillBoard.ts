import { isValidNumber } from '@/utils/game-logic/checks/validation';
import { shuffleArray } from '@/utils/game-logic/shuffle';

//recursive backtracking
export const fillBoard = (board: number[][]): boolean => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValidNumber(board, num, row, col)) {
            board[row][col] = num;
            if (fillBoard(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

// Shuffle version — used for generating random puzzles
export const fillBoardShuffled = (board: number[][]): boolean => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        shuffleArray(numbers);
        for (const num of numbers) {
          if (isValidNumber(board, num, row, col)) {
            board[row][col] = num;
            if (fillBoardShuffled(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};
