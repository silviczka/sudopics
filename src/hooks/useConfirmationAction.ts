import { useState } from 'react';

type ActionType = 'restart' | 'new' | null;

interface UseConfirmActionReturn {
  confirmOpen: boolean;
  actionToConfirm: ActionType;
  openConfirm: (action: ActionType) => void;
  handleConfirm: () => void;
  handleCancel: () => void;
  message: string;
}

export function useConfirmAction(
  onRestart: () => void,
  onNewGame: () => void,
): UseConfirmActionReturn {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [actionToConfirm, setActionToConfirm] = useState<ActionType>(null);

  const openConfirm = (action: ActionType) => {
    setActionToConfirm(action);
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    if (actionToConfirm === 'restart') onRestart();
    else if (actionToConfirm === 'new') onNewGame();

    setConfirmOpen(false);
    setActionToConfirm(null);
  };

  const handleCancel = () => {
    setConfirmOpen(false);
    setActionToConfirm(null);
  };

  const message =
    actionToConfirm === 'restart'
      ? 'Are you sure you want to restart? You will lose your current progress.'
      : 'Are you sure you want to start a new game? You will lose your current progress.';

  return {
    confirmOpen,
    actionToConfirm,
    openConfirm,
    handleConfirm,
    handleCancel,
    message,
  };
}
