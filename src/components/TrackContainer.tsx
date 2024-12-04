import { Instrument } from "../types/instruments";
import HeaderRow from "./HeaderRow";
import Row from "./Row";

interface TrackContainerProps {
  children?: React.ReactNode;
  col: number;
  instruments: Instrument[];
  setDataItem: (
    instrumentIndex: number,
    dataIndex: number
  ) => void;
  currentBeat: number;
}

export const TrackContainer: React.FC<
  TrackContainerProps
> = ({
  children,
  col,
  instruments,
  setDataItem,
  currentBeat,
}) => {
  return (
    <div className="w-full flex flex-col h-full relative z-10">
      <div className="min-w-fit">
        <div className="sticky top-0 z-10">
          <HeaderRow
            count={col}
            timeline={true}
          />
        </div>
        {instruments.map(
          (item, index) => (
            <Row
              key={index}
              count={col}
              data={item}
              instrumentIndex={index}
              setDataItem={setDataItem}
              currentBeat={currentBeat}
            />
          )
        )}
        {children}
      </div>
    </div>
  );
};
