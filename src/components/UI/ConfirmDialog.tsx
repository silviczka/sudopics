import React from 'react';

interface ConfirmDialogProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        className="p-6 rounded-xl text-center shadow-lg space-y-4 w-80"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white text-base">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gray-300 text-black font-semibold px-4 py-2 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
