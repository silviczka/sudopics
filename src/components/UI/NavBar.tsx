'use client';

import React from 'react';
import UIButton from './UIButton';
import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
  onRestart: () => void;
  onNewGame: () => void;
}

const NavBar = ({ onRestart, onNewGame }: NavBarProps) => {
  return (
    <div className="relative z-50 flex items-center justify-between w-full max-w-[min(90vw,700px)] mx-auto px-4 py-3">
      <Link href="/">
        <UIButton variant="transparent">
          <Image src="/HomeIcon.png" alt="Home" width={20} height={20} />
        </UIButton>
      </Link>

      <div className="flex space-x-4">
        <UIButton onClick={onRestart} variant="transparent">
          Restart
        </UIButton>

        <UIButton onClick={onNewGame} variant="transparent">
          New
        </UIButton>
      </div>
    </div>
  );
};

export default NavBar;
