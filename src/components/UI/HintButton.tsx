import React from 'react';
import UIButton from './UIButton';

interface HintButtonProps {
  onClick: () => void;
  disabled: boolean;
}

function HintButton({ onClick, disabled }: HintButtonProps) {
  return (
    <div className="relative group inline-block">
      <UIButton onClick={onClick} disabled={disabled} variant="primary">
        Get Hint
      </UIButton>

      {disabled && (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 text-sm p-2 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          🚫 <strong>Hint not available</strong>
          <br />
          The current board state can’t be solved.
          <br />
          You may have entered a number that leads to a dead end.
        </div>
      )}
    </div>
  );
}

export default HintButton;
