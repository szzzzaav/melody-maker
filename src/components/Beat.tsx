import { SideBar } from "./SideBar";
import { TrackContainer } from "./TrackContainer";

interface BeatMakerProps {}

const Beat: React.FC<
  BeatMakerProps
> = () => {
  return (
    <div className="w-full h-full rounded-l-lg bg-neutral-900 flex flex-row p-1 overflow-auto custom-scrollbar gap-1 items-start justify-start">
      <div className="sticky left-2 z-20">
        <SideBar />
      </div>
      <div className="ml-8">
        <TrackContainer
          col={20}
          rol={16}
        />
      </div>
    </div>
  );
};

export default Beat;
