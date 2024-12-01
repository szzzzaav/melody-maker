import { Instruments } from "./Instruments";
import Timeline from "./Timeline";

interface SideBarProps {
  children?: React.ReactNode;
  count: number;
  setCount: (val: number) => void;
}

export const SideBar: React.FC<
  SideBarProps
> = ({ children, setCount, count }) => {
  return (
    <div className="w-full h-full flex flex-col bg-neutral-900">
      <Timeline
        initialDuration={1}
        setCount={setCount}
        count={count}
      />
      <Instruments />
      {children}
    </div>
  );
};
