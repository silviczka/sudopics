import { useEffect } from 'react';

export const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  onOutsideClick: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const el = ref.current;
      if (el && !el.contains(e.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, onOutsideClick]);
};
