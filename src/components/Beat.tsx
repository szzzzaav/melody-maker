import { useState } from "react";
import { SideBar } from "./SideBar";
import { TrackContainer } from "./TrackContainer";
import { Instrument } from "../types/instruments";

interface BeatMakerProps {}

const Beat: React.FC<
  BeatMakerProps
> = () => {
  const [col, setCol] = useState(4);
  const [instruments, setInstruments] =
    useState<Instrument[]>([]);

  console.log(instruments);
  return (
    <div className="w-full h-full rounded-l-lg bg-neutral-900 flex flex-row p-1 overflow-auto custom-scrollbar gap-1 items-start justify-start relative">
      <div className="sticky left-2 z-20">
        <SideBar
          count={col}
          setCount={setCol}
          instruments={instruments}
          setInstruments={
            setInstruments
          }
        />
      </div>
      <div className="ml-8">
        <TrackContainer
          col={col}
          rol={instruments.length}
        />
      </div>
    </div>
  );
};

export default Beat;
