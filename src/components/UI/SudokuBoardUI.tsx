import React from 'react';
import { CellData } from '@/types/sudoku';

interface SudokuBoardProps {
  board: CellData[][];
  renderCell?: (cell: CellData, row: number, col: number) => React.ReactNode;
  lastEdited?: { row: number; col: number } | null;
}

const SudokuBoardUI = ({ board, renderCell, lastEdited }: SudokuBoardProps) => {
  return (
    <div
      className="
        mx-auto
        grid grid-cols-9 grid-rows-9
        bg-transaprent
        border border-gray-700
        w-full max-w-[min(90vw,700px)]  
        aspect-square
        gap-[2px]
                       
      "
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const thickRight =
            colIndex === 2 || colIndex === 5
              ? 'border-r-2 border-r-white/80'
              : '';
          const thickLeft =
            colIndex === 3 || colIndex === 6
              ? 'border-l-2 border-l-white/80'
              : '';
          const thickBottom =
            rowIndex === 2 || rowIndex === 5
              ? 'border-b-2 border-b-white/80'
              : '';
          const thickTop =
            rowIndex === 3 || rowIndex === 6
              ? 'border-t-2 border-t-white/80'
              : '';

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`relative
                flex items-center justify-center
                text-white bg-white/10 text-lg font-semibold
                border border-gray-300
               ${
                 cell.fixedNumber == null
                   ? 'hover:bg-white/20 cursor-pointer'
                   : ''
               }
                ${thickRight} ${thickLeft} ${thickBottom} ${thickTop}
              `}
              style={{
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                fontSize: 'clamp(0.8rem, vw, 2.5rem)',
                userSelect: 'none',
              }}
            >
              {cell.isValid === false && (
                <>
                  {/* Regular red border for all invalid cells */}
                  <div className="absolute inset-0 border-2 border-red-600 z-10 pointer-events-none rounded-[20px]" />

                  {/*  red glow for the last edited invalid cell */}
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
  );
};

export default SudokuBoardUI;
