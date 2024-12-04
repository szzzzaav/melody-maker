import { twMerge } from "tailwind-merge";
import { Instrument } from "../types/instruments";
import { playInstrumentSound } from "../utils/instrumentUtils";

interface RowItemProps {
  className?: string;
  data: Instrument;
  index: number;
  setDataItem?: (
    val: number,
    index: number
  ) => void;
  instrumentIndex: number;
}

const RowItem: React.FC<
  RowItemProps
> = ({
  className,
  data,
  index,
  instrumentIndex,
  setDataItem,
}) => {
  return (
    <div
      onClick={() => {
        setDataItem?.(
          instrumentIndex,
          index
        );
        const [instrument, note] =
          data.name.split("-");
        playInstrumentSound(
          instrument,
          note,
          instrument === "drums"
            ? "wav"
            : "mp3"
        );
      }}
      className={twMerge(
        "w-[35px] h-[35px] box-border text-xs border-[1px] border-neutral-700 flex items-center justify-center",
        className
      )}
    >
      {!data.data[index] ? (
        <div
          className="w-[85%] h-[85%] box-border text-xs rounded-sm opacity-0 hover:opacity-100 ease-in-out duration-100 cursor-pointer"
          style={{
            backgroundColor: data.color,
          }}
        ></div>
      ) : (
        <div
          className="w-[85%] h-[85%] box-border text-xs rounded-sm ease-in-out duration-100 cursor-pointer"
          style={{
            backgroundColor: data.color,
          }}
        ></div>
      )}
    </div>
  );
};

export default RowItem;
