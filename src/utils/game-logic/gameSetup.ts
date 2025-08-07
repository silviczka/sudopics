import { generateSolvedBoard } from '@/utils/game-logic/sudokuGenerator';
import { DEFAULT_NUMBER_OF_GIVENS } from '@/constants/constants';

// Remove numbers from a filled board to create a puzzle with given numbers
export const removeNumbers = (
  board: number[][],
  givenCount: number,
): number[][] => {
  const puzzle = board.map((row) => [...row]); // deep copy
  let emptyCells = 81 - givenCount;

  while (emptyCells > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (puzzle[row][col] !== 0) {
      puzzle[row][col] = 0;
      emptyCells--;
    }
  }

  return puzzle;
};

// Set the game
export const generateSudoku = (
  givenCount: number = DEFAULT_NUMBER_OF_GIVENS,
) => {
  const solution = generateSolvedBoard();
  const puzzle = removeNumbers(solution, givenCount);
  return { puzzle, solution };
};
