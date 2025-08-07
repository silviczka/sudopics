'use client';
import React from 'react';

interface WinDialogProps {
  onRestartSame: () => void;
  onNewGame: () => void;
}

const WinDialog = ({ onRestartSame, onNewGame }: WinDialogProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl text-center shadow-lg space-y-4 w-80">
        <h2 className="text-2xl font-bold">🎉 You Win!</h2>
        <p className="text-gray-600">Great job completing the puzzle!</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestartSame}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Restart This Game
          </button>
          <button
            onClick={onNewGame}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinDialog;
