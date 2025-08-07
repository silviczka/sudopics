'use client';

import VideoBackground from '@/components/UI/VideoBackground';
import UIButton from '@/components/UI/UIButton';
import { poppins } from '@/styles/fonts';
import Link from 'next/link';
import './globals.css';

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <VideoBackground />
      <div className={poppins.variable}>
        <main className="relative z-30 flex min-h-screen flex-col items-center justify-center bg-black-100 p-6 text-center">
          <h1 className="text-4xl font-bold mb-5">
            <span className="text-4xl">🧩</span> Let's play sudoku!{' '}
          </h1>
          <p className="text-xl font-bold text-gray-500 mb-8">
            Choose your preferred game style:
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/numsudoku">
              <UIButton variant="landing">
                <span className="text-5xl mr-2">🔢</span> Play with Numbers
              </UIButton>
            </Link>

            <Link href="/picsudoku">
              <UIButton variant="landing">
                <span className="text-5xl mr-2">😶‍🌫️</span> Play with Pictures
              </UIButton>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};
export default HomePage;
