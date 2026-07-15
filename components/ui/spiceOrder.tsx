import { Flame } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  spiceLevel: number;
  handleSpiceLevel: Dispatch<SetStateAction<number>>;
  hoveredLevel: number;
  setHoveredLevel: Dispatch<SetStateAction<number>>;
}

export default function SpiceOrder({
  spiceLevel,
  handleSpiceLevel,
  hoveredLevel,
  setHoveredLevel,
}: Props) {
  const displayLevel = hoveredLevel > 0 ? hoveredLevel : spiceLevel;

  return (
    <>
      <div className="">
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleSpiceLevel(index + 1)}
            onMouseEnter={() => setHoveredLevel(index + 1)}
            onMouseLeave={() => setHoveredLevel(0)}
          >
            <Flame
              size={28}
              className={`transition-colors duration-300 ${
                index < displayLevel
                  ? "fill-red-800 text-red-800"
                  : "text-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
