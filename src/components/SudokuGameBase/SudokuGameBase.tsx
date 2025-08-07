'use client';

import React, { useState, useRef } from 'react';
import { applyHint } from '@/utils/game-logic/applyHint';
import SudokuBoardUI from '@/components/UI/SudokuBoardUI';
import { CellData } from '@/types/sudoku';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useSudokuInteractions } from '@/hooks/useSudokuInteractions';
import VideoBackground from '../UI/VideoBackground';
import HintButton from '../UI/HintButton';
import WinDialog from '../UI/WinDialog';
import OptionMenu from '../UI/OptionMenu';
import NavBar from '../UI/NavBar';
import InteractiveCell from '../UI/InteractiveCell';
import { useSudokuStorage } from '@/hooks/useSudokuStorage';
import { useWinCondition } from '@/hooks/useWinCondition';
import { useSolvability } from '@/hooks/useSolvability';
import { restartSameGame, startNewGame } from '@/utils/game-logic/restartGame';

interface SudokuGameBaseProps {
  storageKey: string;
  renderCell: (cell: CellData, row: number, col: number) => React.ReactNode;
  toolbar?: React.ReactNode;
  imageSet?: Record<number, string>;
  imageSize?: { width: number; height: number };
}

const SudokuGameBase = ({
  storageKey,
  renderCell,
  toolbar,
  imageSet,
  imageSize,
}: SudokuGameBaseProps) => {
  const [initialBoard, setInitialBoard] = useState<CellData[][] | null>(null);
  const [winDialogOpen, setWinDialogOpen] = useState(false);
  const handleRestartSame = () =>
    restartSameGame(board, setBoard, setWinDialogOpen);

  const handleNewGame = () =>
    startNewGame(setInitialBoard, setBoard, setWinDialogOpen);
  const {
    board,
    setBoard,
    menuPosition,
    setMenuPosition,
    onCellClick,
    onCellRightClick,
    onOptionClick,
    lastEdited,
  } = useSudokuInteractions(initialBoard || []);
  const boardRef = useRef<HTMLDivElement>(null);

  useClickOutside(boardRef, () => setMenuPosition(null));

  useSudokuStorage({
    storageKey,
    board,
    setBoard,
    setInitialBoard,
  });

  useWinCondition({
    board,
    initialBoard,
    setWinDialogOpen,
  });
  const isBoardShapeValid =
    board.length === 9 &&
    board.every((row) => Array.isArray(row) && row.length === 9);

  const numericBoard = isBoardShapeValid
    ? board.map((row) =>
        row.map((cell) => cell.fixedNumber ?? cell.userNumber ?? 0),
      )
    : Array(9).fill(Array(9).fill(0));

  const isSolvable = useSolvability(numericBoard);

  if (!initialBoard) {
    return <p>Loading...</p>;
  }

  return (
    <div className="fixed inset-0 overflow-hidden flex flex-col">
      <VideoBackground />
      {toolbar && (
        <div className="relative z-30 flex justify-center">{toolbar}</div>
      )}

      <NavBar onRestart={handleRestartSame} onNewGame={handleNewGame} />

      <main className="relative z-30 flex flex-col items-center justify-center flex-grow text-center">
        <SudokuBoardUI
          board={board}
          lastEdited={lastEdited}
          renderCell={(cell, row, col) => (
            <InteractiveCell
              cell={cell}
              row={row}
              col={col}
              onClick={onCellClick}
              onRightClick={onCellRightClick}
            >
              {renderCell(cell, row, col)}
            </InteractiveCell>
          )}
        />
        {menuPosition && (
          <OptionMenu
            position={menuPosition}
            boardRef={boardRef}
            imageSet={imageSet}
            imageSize={imageSize}
            onOptionClick={onOptionClick}
          />
        )}
        {winDialogOpen && (
          <WinDialog
            onRestartSame={handleRestartSame}
            onNewGame={handleNewGame}
          />
        )}
        <HintButton
          onClick={() => applyHint(board, setBoard)}
          disabled={!isSolvable}
        />

        {/* <UIButton onClick={() => applyHint(board, setBoard)} variant="primary">
          Get Hint
        </UIButton> */}
      </main>
    </div>
  );
};

export default SudokuGameBase;
