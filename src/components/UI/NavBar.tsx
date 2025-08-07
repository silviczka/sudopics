'use client';

import React from 'react';
import UIButton from './UIButton';
import ConfirmDialog from './ConfirmDialog';
import TutorialDialog from './TutorialDialog';
import Link from 'next/link';
import Image from 'next/image';
import { useConfirmAction } from '@/hooks/useConfirmationAction';

interface NavBarProps {
  onRestart: () => void;
  onNewGame: () => void;
}

const NavBar = ({ onRestart, onNewGame }: NavBarProps) => {
  const { confirmOpen, message, openConfirm, handleConfirm, handleCancel } =
    useConfirmAction(onRestart, onNewGame);

  return (
    <div className="relative z-50 flex items-center justify-between w-full max-w-[min(90vw,700px)] mx-auto px-4 py-3">
      <Link href="/">
        <UIButton variant="transparent">
          <Image src="/HomeIcon.png" alt="Home" width={20} height={20} />
        </UIButton>
      </Link>

      <div className="flex space-x-4">
        <TutorialDialog />
        <UIButton onClick={() => openConfirm('restart')} variant="transparent">
          Restart
        </UIButton>

        <UIButton onClick={() => openConfirm('new')} variant="transparent">
          New
        </UIButton>
      </div>
      <ConfirmDialog
        isOpen={confirmOpen}
        message={message}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default NavBar;
