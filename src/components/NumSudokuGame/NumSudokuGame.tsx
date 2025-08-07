'use client';

import SudokuGameBase from '@/components/SudokuGameBase/SudokuGameBase';
import { LOCAL_STORAGE_KEY_NUM } from '@/constants/constants';
import { CellData } from '@/types/sudoku';

const NumSudokuGame = () => {
  const renderCell = (cell: CellData) => {
    const value = cell.fixedNumber ?? cell.userNumber;

    if (value !== null) {
      return <span className="text-xl font-bold">{value}</span>;
    }

    if (cell.drafts.length > 0) {
      return (
        <div className="grid grid-cols-2 gap-0.5 w-full h-full p-1 text-xs text-gray-500">
          {cell.drafts.map((num, index) => (
            <div key={index} className="flex items-center justify-center">
              {num}
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <SudokuGameBase
      storageKey={LOCAL_STORAGE_KEY_NUM}
      renderCell={renderCell}
    />
  );
};

export default NumSudokuGame;
