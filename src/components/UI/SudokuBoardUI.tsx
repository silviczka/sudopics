import React from 'react';
import { CellData } from '@/types/sudoku';

interface SudokuBoardProps {
  board: CellData[][];
  renderCell?: (cell: CellData, row: number, col: number) => React.ReactNode;
  lastEdited?: { row: number; col: number } | null;
}

const SudokuBoardUI = ({ board, renderCell, lastEdited }: SudokuBoardProps) => {
  if (!board || board.length !== 9 || board.some((row) => row.length !== 9)) {
    return null;
  }
  return (
    <div className="mx-auto w-full max-w-[min(95vw,700px)] aspect-square flex flex-col gap-[5px]">
      {Array.from({ length: 3 }).map((_, blockRow) => (
        <div key={blockRow} className="flex flex-1 flex-row gap-[5px]">
          {Array.from({ length: 3 }).map((_, blockCol) => (
            <div
              key={blockCol}
              className="grid grid-cols-3 grid-rows-3 flex-1 gap-[2px]"
            >
              {Array.from({ length: 3 }).flatMap((_, r) =>
                Array.from({ length: 3 }).map((_, c) => {
                  const rowIndex = blockRow * 3 + r;
                  const colIndex = blockCol * 3 + c;
                  const cell = board[rowIndex][colIndex];

                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`relative flex items-center justify-center
                        text-white bg-white/10 text-lg font-semibold
                        ${
                          cell.fixedNumber == null
                            ? 'hover:bg-white/20 cursor-pointer'
                            : ''
                        }
                      `}
                      style={{
                        aspectRatio: '1 / 1',
                        width: '100%',
                        height: '100%',
                        fontSize: 'clamp(0.8rem, 2vw, 2.5rem)',
                        userSelect: 'none',
                      }}
                    >
                      {cell.isValid === false && (
                        <>
                          <div className="absolute inset-0 border-2 border-red-600 z-10 pointer-events-none rounded-[20px]" />
                          {lastEdited?.row === rowIndex &&
                            lastEdited?.col === colIndex && (
                              <div
                                className="absolute inset-0 z-20 pointer-events-none rounded-[20px]"
                                style={{
                                  boxShadow:
                                    'inset 0 0 10px 5px rgba(239, 68, 68, 0.9)',
                                }}
                              />
                            )}
                        </>
                      )}
                      {renderCell
                        ? renderCell(cell, rowIndex, colIndex)
                        : cell.fixedNumber ?? cell.userNumber ?? ''}
                    </div>
                  );
                }),
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoardUI;
