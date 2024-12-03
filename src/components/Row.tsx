import RowItem from "./RowItem";
import { Instrument } from "../types/instruments";

interface RowProps {
  count: number;
  data: Instrument;
  instrumentIndex: number;
  setDataItem?: (
    val: number,
    index: number
  ) => void;
}

const generateCells = (
  count: number,
  data: Instrument,
  instrumentIndex: number,
  setDataItem?: (
    val: number,
    index: number
  ) => void
) => {
  return Array(count)
    .fill(null)
    .map((_, index) => {
      return (
        <div
          key={index}
          className="flex flex-row box-border "
        >
          <RowItem
            key={index + 0.1}
            className="border-l-slate-300"
            index={index * 4 + 0}
            data={data}
            instrumentIndex={
              instrumentIndex
            }
            setDataItem={setDataItem}
          ></RowItem>
          <RowItem
            key={index + 0.2}
            index={index * 4 + 1}
            data={data}
            instrumentIndex={
              instrumentIndex
            }
            setDataItem={setDataItem}
          ></RowItem>
          <RowItem
            key={index + 0.3}
            index={index * 4 + 2}
            data={data}
            instrumentIndex={
              instrumentIndex
            }
            setDataItem={setDataItem}
          ></RowItem>
          <RowItem
            key={index + 0.4}
            index={index * 4 + 3}
            data={data}
            instrumentIndex={
              instrumentIndex
            }
            setDataItem={setDataItem}
            className=" border-r-slate-300"
          ></RowItem>
        </div>
      );
    });
};

const Row: React.FC<RowProps> = ({
  count,
  data,
  instrumentIndex,
  setDataItem,
}) => {
  return (
    <div className="w-auto h-[36px] flex flex-row rounded justify-start items-start box-border bg-[#1e1e1e]">
      {generateCells(
        count,
        data,
        instrumentIndex,
        setDataItem
      )}
    </div>
  );
};

export default Row;
