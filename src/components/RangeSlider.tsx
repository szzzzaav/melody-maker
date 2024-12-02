interface RangeSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
}

const RangeSlider: React.FC<
  RangeSliderProps
> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  label,
}) => {
  const percentage =
    ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {label && (
        <div className="flex justify-between w-full mb-2">
          <div className="flex items-center justify-center px-3 w-full py-1">
            <span className="text-white">
              {value}
            </span>
          </div>
        </div>
      )}

      <div className="relative w-full h-2">
        {/* 背景轨道 */}
        <div className="absolute w-full h-full bg-neutral-700 rounded-full" />

        {/* 进度条 */}
        <div
          className="absolute h-full bg-indigo-500 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />

        {/* 滑块 */}
        <div
          className="absolute w-4 h-4 bg-white rounded-full shadow-lg -mt-1"
          style={{
            left: `calc(${percentage}% - 0.5rem)`,
          }}
        />

        {/* 实际的range input */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) =>
            onChange(
              Number(e.target.value)
            )
          }
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
          style={{
            appearance: "none",
            WebkitAppearance: "none",
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
