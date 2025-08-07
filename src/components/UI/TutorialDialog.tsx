import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import UIButton from './UIButton';

const TutorialDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dialogRef, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div className="relative inline-block">
      <UIButton onClick={() => setIsOpen(true)} variant="transparent">
        📘 Tutorial
      </UIButton>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div
            ref={dialogRef}
            className="relative rounded-lg shadow-xl w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto p-6 bg-black/90 backdrop-blur-sm no-scrollbar"
          >
            <h2 className="text-2xl font-bold mb-4">🧩 Sudoku Game Tutorial</h2>

            <p className="mb-4">
              Welcome to Sudoku! Whether you&rsquo;re playing{' '}
              <strong>Number Sudoku</strong> or <strong>Pic Sudoku</strong>,
              this guide will help you understand how to use the game interface.
            </p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">🔲 How to Play</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Each <strong>row</strong>, <strong>column</strong>, and{' '}
                  <strong>3×3 box</strong> must contain one of each number
                  (1–9), or one of each picture (in Pic Sudoku).
                </li>
                <li>No duplicates allowed in any row, column, or box.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">🖱️ Basic Controls</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Left-click / Tap</strong> on a cell to open the
                  Options Menu.
                </li>
                <li>
                  <strong>In the Options Menu:</strong>
                </li>
                <ul className="list-disc pl-8 space-y-1">
                  <li>
                    Left-click a number or picture → enters it into the cell.
                  </li>
                  <li>
                    Right-click / Long press → adds it as a <em>candidate</em>{' '}
                    (small helper hint).
                  </li>
                </ul>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                📝 Candidate Numbers (aka Notes)
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Used to keep track of possible values for a cell.</li>
                <li>Up to 4 candidates per cell.</li>
                <li>Displayed smaller inside the cell.</li>
                <li>
                  They don&rsquo;t affect validation—just there to help you
                  think.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                🧼 Erasing Cell Content
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Right-click / Long-press</strong> a filled cell to
                  erase content or candidates.
                </li>
                <li>Only user-entered or hint values can be erased.</li>
                <li>Pre-filled cells (starting values) cannot be changed.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">💡 Using Hints</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Click the <strong>Hint</strong> button to fill in a correct
                  value in an empty cell.
                </li>
                <li>Hinted values can be erased like user inputs.</li>
                <li>
                  <strong>Note:</strong> The Hint button may stop working if:
                </li>
                <ul className="list-disc pl-8 space-y-1">
                  <li>The board is invalid (e.g., due to a duplicate).</li>
                  <li>
                    You&rsquo;re in a dead-end with no valid solution path.
                  </li>
                </ul>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                🚨 Duplicate Detection
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Duplicate cells are outlined with a{' '}
                  <strong>red border</strong>.
                </li>
                <li>
                  The cell that caused the conflict is highlighted with a{' '}
                  <strong>glow effect</strong>.
                </li>
                <li>Remove the duplicate to fix the board.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                🔘 Accessing This Tutorial
              </h3>
              <p>
                You can view this tutorial anytime by clicking the{' '}
                <strong>“Tutorial”</strong> button on the play screen.
              </p>
            </section>

            <p className="mt-6 text-center text-lg font-medium">
              Enjoy solving! 🔢🖼️
              <br />
              Have fun with both numbers and pictures, and challenge yourself to
              complete the board without hints!
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl z-70"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorialDialog;
