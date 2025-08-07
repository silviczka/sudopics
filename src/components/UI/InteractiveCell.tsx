'use client';

import React from 'react';
import { CellData } from '@/types/sudoku';

interface InteractiveCellProps {
  cell: CellData;
  row: number;
  col: number;
  onClick: (row: number, col: number, top: number, left: number) => void;
  onRightClick: (row: number, col: number, top: number, left: number) => void;
  children: React.ReactNode;
}

const InteractiveCell = ({
  cell: _cell,
  row,
  col,
  onClick,
  onRightClick,
  children,
}: InteractiveCellProps) => {
  return (
    <div
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        onClick(
          row,
          col,
          rect.top + window.scrollY,
          rect.left + window.scrollX,
        );
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        const rect = e.currentTarget.getBoundingClientRect();
        onRightClick(
          row,
          col,
          rect.top + window.scrollY,
          rect.left + window.scrollX,
        );
      }}
      className="w-16 h-16 flex items-center justify-center cursor-pointer"
    >
      {children}
    </div>
  );
};

export default InteractiveCell;
