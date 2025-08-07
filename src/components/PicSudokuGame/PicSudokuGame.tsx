'use client';

import React from 'react';
import SudokuGameBase from '@/components/SudokuGameBase/SudokuGameBase';
import { useImageSet } from '@/hooks/useImageSet';
import { LOCAL_STORAGE_KEY_PIC } from '@/constants/constants';
import { CellData } from '@/types/sudoku';

const PicSudokuGame = () => {
  const { selectedSetKey, setSelectedSetKey, imageMap, availableSets, size } =
    useImageSet();

  const imageSetDropdown = (
    <div>
      <label htmlFor="image-set" className="mr-2 text-white">
        Select Theme:
      </label>
      <select
        id="image-set"
        value={selectedSetKey}
        onChange={(e) => setSelectedSetKey(e.target.value)}
        className="bg-gray-800 text-white px-2 py-1 rounded"
      >
        {availableSets.map((setKey) => (
          <option key={setKey} value={setKey}>
            {setKey.charAt(0).toUpperCase() + setKey.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <SudokuGameBase
      storageKey={LOCAL_STORAGE_KEY_PIC}
      toolbar={imageSetDropdown}
      imageSet={imageMap}
      imageSize={size}
      renderCell={(cell: CellData, _row: number, _col: number) => {
        const value = cell.fixedNumber ?? cell.userNumber;
        const imageSrc = value && imageMap[value];

        if (imageSrc) {
          return (
            <img
              src={imageSrc}
              alt={`img-${value}`}
              style={{ width: size.width, height: size.height }}
              className="object-contain"
            />
          );
        }

        return (
          <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5">
            {cell.drafts.map((draft) => {
              const draftSrc = imageMap[draft];
              return (
                <img
                  key={draft}
                  src={draftSrc}
                  alt={`draft-${draft}`}
                  style={{
                    width: size.width / 2.5,
                    height: size.height / 2.5,
                  }}
                  className="object-contain"
                />
              );
            })}
          </div>
        );
      }}
    />
  );
};

export default PicSudokuGame;
