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
}

export const SideBar: React.FC<
  SideBarProps
> = ({
  children,
  setCount,
  count,
  instruments,
  setInstruments,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-neutral-900">
      <Timeline
        initialDuration={1}
        setCount={setCount}
        count={count}
        setInstruments={setInstruments}
        instruments={instruments}
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
