import { useState } from "react";
import { InstrumentModal } from "./InstrumentModal";

interface InstrumentsProps {
  instruments: string[];
  setInstruments: (
    instruments: string[]
  ) => void;
}

export const Instruments: React.FC<
  InstrumentsProps
> = ({
  instruments,
  setInstruments,
}) => {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const handleAddInstrument = () => {
    setIsModalOpen(true);
  };

  const handleInstrumentSelect = (
    instrument: string,
    pitch: string
  ) => {
    setInstruments([
      ...instruments,
      `${instrument}-${pitch}`,
    ]);
  };

  return (
    <div className="flex flex-col h-auto w-full bg-neutral-900 rounded">
      {instruments.map(
        (item, index) => (
          <div
            key={index}
            className="w-full h-[36px] box-border bg-[#1e1e1e] flex items-center justify-center"
          >
            <div className="w-full h-[95%] text-neutral-200 font-medium flex items-center px-2 rounded border-neutral-700 border-[1px] box-border bg-neutral-700">
              {item}
            </div>
          </div>
        )
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
