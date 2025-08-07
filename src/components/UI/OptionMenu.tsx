interface OptionMenuProps {
  imageSet?: Record<number, string>;
  imageSize?: { width: number; height: number };
  position: { top: number; left: number };
  onOptionClick: (num: number, isDraft: boolean) => void;
  boardRef: React.RefObject<HTMLDivElement | null>;
}

const OptionMenu = ({
  imageSet,
  imageSize,
  position,
  onOptionClick,
  boardRef,
}: OptionMenuProps) => {
  return (
    <div
      ref={boardRef}
      className="absolute z-50"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <div className="grid grid-cols-3 gap-1 bg-white p-2 rounded shadow">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => onOptionClick(num, false)}
            onContextMenu={(e) => {
              e.preventDefault();
              onOptionClick(num, true);
            }}
            className="w-8 h-8 bg-gray-200 hover:bg-blue-300 text-black rounded"
          >
            {imageSet ? (
              <img
                src={imageSet[num]}
                alt={`Option ${num}`}
                width={imageSize?.width}
                height={imageSize?.height}
                className="object-contain"
              />
            ) : (
              num
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionMenu;
