import { useState } from "react";
import {
  BsPlayFill,
  BsSoundwave,
} from "react-icons/bs";
import {
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

interface TimelineProps {
  initialDuration?: number;
  count: number;
  setCount: (val: number) => void;
}

const Timeline: React.FC<
  TimelineProps
> = ({
  initialDuration = 1,
  count,
  setCount,
}) => {
  const [duration, setDuration] =
    useState(initialDuration);
  const handleAddTime = () => {
    const newDuration = duration + 1;
    setDuration(newDuration);
    setCount(count + 4);
  };

  const handleReduceTime = () => {
    if (duration > 1) {
      const newDuration = duration - 1;
      setDuration(newDuration);
      setCount(count - 4);
    }
  };

  return (
    <div className="w-full flex justify-start h-[35px] box-border">
      <div className="flex flex-row items-center gap-4 px-5 w-auto justify-start py-2">
        <div className="flex items-center gap-2">
          <BsSoundwave className="text-neutral-200" />
          <span className="text-neutral-200 font-medium">
            TIMELINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReduceTime}
            className="p-1 bg-neutral-800 rounded hover:bg-neutral-700 text-neutral-200"
          >
            <AiOutlineMinus />
          </button>
          <span className="text-neutral-200 min-w-[40px] text-center">
            {duration}
          </span>
          <button
            onClick={handleAddTime}
            className="p-1 bg-neutral-800 rounded hover:bg-neutral-700 text-neutral-200"
          >
            <AiOutlinePlus />
          </button>
          <button className="p-1 bg-neutral-800 rounded hover:bg-neutral-700 text-neutral-200">
            <BsPlayFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
