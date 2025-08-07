import { useState } from 'react';
import { imageSets } from '@/utils/imageSets';

export const useImageSet = () => {
  const [selectedSetKey, setSelectedSetKey] =
    useState<keyof typeof imageSets>('cats');

  const imageMap = imageSets[selectedSetKey].images;
  const size = imageSets[selectedSetKey].size;

  return {
    selectedSetKey,
    setSelectedSetKey,
    imageMap,
    size,
    availableSets: Object.keys(imageSets),
  };
};
