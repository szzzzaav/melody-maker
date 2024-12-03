import { useState } from "react";
import { InstrumentModal } from "./InstrumentModal";
import { instrumentIcons } from "../constants/instrumentIcons";
import { IoIosSettings } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";
import { getRandomHexColor } from "../utils/getRandomColor";

type Instrument = {
  name: string;
  color: string;
  data: number[];
};

interface InstrumentsProps {
  instruments: Instrument[];
  setInstruments: (
    instruments: Instrument[]
  ) => void;
  count: number;
}

export const Instruments: React.FC<
  InstrumentsProps
> = ({
  instruments,
  setInstruments,
  count,
}) => {
  const [isModalOpen, setIsModalOpen] =
    useState(false);
  const [
    editingIndex,
    setEditingIndex,
  ] = useState<number | null>(null);

  const handleAddInstrument = () => {
    setIsModalOpen(true);
  };

  const handleInstrumentSelect = (
    instrument: string,
    pitch: string
  ) => {
    if (editingIndex !== null) {
      const newInstruments = [
        ...instruments,
      ];
      newInstruments[editingIndex] = {
        ...instruments[editingIndex],
        name: `${instrument}-${pitch}`,
      };
      setInstruments(newInstruments);
      setEditingIndex(null);
    } else {
      const color = getRandomHexColor();
      setInstruments([
        ...instruments,
        {
          name: `${instrument}-${pitch}`,
          color: color,
          data: Array.from(
            { length: count * 4 },
            () => 0
          ),
        },
      ]);
    }
    setIsModalOpen(false);
  };

  const handleEditInstrument = (
    index: number
  ) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteInstrument = (
    index: number
  ) => {
    const newInstruments =
      instruments.filter(
        (_, i) => i !== index
      );
    setInstruments(newInstruments);
  };

  return (
    <div className="flex flex-col h-auto w-full bg-neutral-900 rounded">
      {instruments.map(
        (item, index) => {
          const instrumentName =
            item.name.split("-")[0];
          return (
            <div
              key={index}
              className="w-full h-[36px] box-border bg-[#1e1e1e] flex items-center justify-center"
            >
              <div className="w-full h-[95%] text-neutral-200 font-medium flex items-center justify-between px-2 rounded border-neutral-700 border-[1px] box-border bg-neutral-700">
                <div className="flex items-center">
                  <span
                    className="w-4 h-4 rounded-full mr-1"
                    style={{
                      backgroundColor:
                        item.color,
                    }}
                  ></span>
                  <span className="mr-2">
                    {
                      instrumentIcons[
                        instrumentName as keyof typeof instrumentIcons
                      ]
                    }
                  </span>
                  <span>
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleEditInstrument(
                        index
                      )
                    }
                    className="text-neutral-400 hover:text-neutral-200"
                  >
                    <IoIosSettings
                      size={16}
                    />
                  </button>
                  <button
                    onClick={() =>
                      handleDeleteInstrument(
                        index
                      )
                    }
                    className="text-neutral-400 hover:text-red-400"
                  >
                    <FaDeleteLeft
                      size={16}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      )}
      <button
        onClick={handleAddInstrument}
        className="w-full h-[36px] bg-[#2e2e2e] text-neutral-200 hover:bg-[#3e3e3e] rounded mt-1"
      >
        + Add Instrument
      </button>
      <InstrumentModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        onSelect={
          handleInstrumentSelect
        }
      />
    </div>
  );
};
