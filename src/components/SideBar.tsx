import { Instruments } from "./Instruments";
import Timeline from "./Timeline";

interface SideBarProps {
  children?: React.ReactNode;
  count: number;
  setCount: (count: number) => void;
  instruments: string[];
  setInstruments: (
    instruments: any
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
      />
      <Instruments
        instruments={instruments}
        setInstruments={setInstruments}
      />
      {children}
    </div>
  );
};
