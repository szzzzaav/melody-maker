import { twMerge } from "tailwind-merge";

interface HeaderRowProps {
  count: number;
  timeline: boolean;
}

const HeaderRow: React.FC<
  HeaderRowProps
> = ({ count, timeline }) => {
  let timeIdx = 0.9;
  return (
    <div
      className={twMerge(
        "w-auto h-[36px] flex flex-row rounded justify-start items-start box-border",
        timeline
          ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-600 "
          : "bg-[#1e1e1e]"
      )}
    >
      {Array(count)
        .fill(null)
        .map(() => {
          if (timeline) {
            timeIdx += 0.1;
            timeIdx = Number(
              timeIdx.toFixed(1)
            );
            if (
              Math.abs(
                (timeIdx % 1) - 0.4
              ) < 0.0001
            ) {
              timeIdx =
                Math.floor(timeIdx) + 1;
            }
            return (
              <div
                key={timeIdx}
                className={twMerge(
                  "flex flex-row box-border border-r-[1px] border-neutral-700",
                  "w-[140px]"
                )}
              >
                <div className="w-[140px] h-[35px] box-border text-xs text-neutral-200 font-semibold flex items-center pl-2">
                  {timeIdx.toFixed(1)}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default HeaderRow;
