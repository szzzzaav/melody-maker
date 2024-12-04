import { Instruments } from "./Instruments";
import Timeline from "./Timeline";

type Instrument = {
  name: string;
  color: string;
  data: number[];
};

interface SideBarProps {
  children?: React.ReactNode;
  count: number;
  setCount: (count: number) => void;
  instruments: Instrument[];
  setInstruments: (
    instruments: Instrument[]
  ) => void;
  currentBeat: number;
  setCurrentBeat: (
    beat: number
  ) => void;
  isPlaying: boolean;
  setIsPlaying: (
    playing: boolean
  ) => void;
  handleSetStart: (
    beat: number
  ) => void;
}

export const SideBar: React.FC<
  SideBarProps
> = ({
  children,
  setCount,
  count,
  instruments,
  setInstruments,
  currentBeat,
  setCurrentBeat,
  isPlaying,
  setIsPlaying,
  handleSetStart,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-neutral-900 rounded-lg p-1">
      <Timeline
        initialDuration={1}
        setCount={setCount}
        count={count}
        setInstruments={setInstruments}
        instruments={instruments}
        currentBeat={currentBeat}
        setCurrentBeat={setCurrentBeat}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handleSetStart={handleSetStart}
      />
      <Instruments
        count={count}
        instruments={instruments}
        setInstruments={setInstruments}
      />
      {children}
    </div>
  );
};
