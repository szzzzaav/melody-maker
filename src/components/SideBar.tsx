import { Instruments } from "./Instruments";
import Timeline from "./Timeline";

interface SideBarProps {
  children?: React.ReactNode;
}

export const SideBar: React.FC<
  SideBarProps
> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col bg-neutral-900">
      <Timeline
        initialDuration={1}
        onDurationChange={(
          duration
        ) => {
          console.log(
            "Duration changed:",
            duration
          );
        }}
      />
      <Instruments />
      {children}
    </div>
  );
};
