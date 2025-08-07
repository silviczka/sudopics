import { useState, useEffect } from 'react';
import { CellData } from '@/types/sudoku';
import { handleCellLeftClick } from '@/utils/interaction/handleCellLeftClick';
import { handleCellRightClick } from '@/utils/interaction/handleCellRightClick';
import { handleOptionLeftClick } from '@/utils/interaction/handleOptionLeftClick';
import { handleOptionRightClick } from '@/utils/interaction//handleOptionRightClick';

export const useSudokuInteractions = (initialBoard: CellData[][]) => {
  const [board, setBoard] = useState<CellData[][]>(initialBoard);
  const [lastEdited, setLastEdited] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const [menuPosition, setMenuPosition] = useState<{
    row: number;
    col: number;
    top: number;
    left: number;
  } | null>(null);

  useEffect(() => {
    setBoard(initialBoard);
  }, [initialBoard]);

  const adjustMenuTop = (row: number, top: number): number => {
    if (row >= 6) return top - 240;
    return top - 60;
  };
  const adjustMenuLeft = (col: number, left: number): number => {
    if (col >= 6) return left - 60;
    return left;
  };

  const onCellClick = (row: number, col: number, top: number, left: number) => {
    handleCellLeftClick(row, col, board, (pos) => {
      if (pos) {
        const adjustedTop = adjustMenuTop(row, top);
        const adjustedLeft = adjustMenuLeft(col, left);
        setMenuPosition({ ...pos, top: adjustedTop, left: adjustedLeft });
      }
    });
  };

  const onCellRightClick = (
    row: number,
    col: number,
    top: number,
    left: number,
  ) => {
    const cell = board[row][col];
    if (cell.fixedNumber !== null) {
      return; // prevent menu open for givens
    }
    if (cell.userNumber !== null || cell.drafts.length > 0) {
      handleCellRightClick(row, col, board, setBoard);
      return;
    }
    const adjustedTop = adjustMenuTop(row, top);
    const adjustedLeft = adjustMenuLeft(col, left);
    setMenuPosition({ row, col, top: adjustedTop, left: adjustedLeft });
  };

  const onOptionClick = (num: number, rightClick: boolean) => {
    if (!menuPosition) return;

    if (rightClick) {
      handleOptionRightClick(num, menuPosition, board, setBoard, () =>
        setMenuPosition(null),
      );
    } else {
      handleOptionLeftClick(
        num,
        menuPosition,
        board,
        setBoard,
        () => {
          setMenuPosition(null);
        },
        setLastEdited,
      );
    }
  };

  return {
    board,
    setBoard,
    menuPosition,
    setMenuPosition,
    onCellClick,
    onCellRightClick,
    onOptionClick,
    lastEdited,
  };
};
