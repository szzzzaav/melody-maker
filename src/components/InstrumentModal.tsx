import { useState } from "react";
import VolumeKnob from "./VolumeKnob";
import RangeSlider from "./RangeSlider";
import {
  GiDrumKit,
  GiGuitar,
  GiTunePitch,
  GiGuitarBassHead,
} from "react-icons/gi";
import { CgPiano } from "react-icons/cg";
import { IoMdMusicalNote } from "react-icons/io";

interface InstrumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (
    instrument: string,
    pitch: string
  ) => void;
}

const notes = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];
const octaves = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];

const instruments = {
  piano: <CgPiano />,
  guitar: <GiGuitar />,
  drums: <GiDrumKit />,
  bass: <GiGuitarBassHead />,
};

export const InstrumentModal: React.FC<
  InstrumentModalProps
> = ({ isOpen, onClose, onSelect }) => {
  const [
    selectedInstrument,
    setSelectedInstrument,
  ] = useState("piano");
  const [
    selectedNote,
    setSelectedNote,
  ] = useState("");
  const [
    selectedOctave,
    setSelectedOctave,
  ] = useState("");

  const handleSelect = () => {
    if (
      selectedNote &&
      selectedOctave
    ) {
      onSelect(
        selectedInstrument,
        `${selectedNote}${selectedOctave}`
      );
      setSelectedNote("");
      setSelectedOctave("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 w-auto h-auto">
      <div className="bg-neutral-800 p-6 rounded-lg w-96">
        <h2 className="text-neutral-200 text-lg mb-4">
          <GiTunePitch />
        </h2>
        <div className="mb-2">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(
              instruments
            ).map(([name, icon]) => (
              <button
                key={name}
                onClick={() =>
                  setSelectedInstrument(
                    name
                  )
                }
                className={`flex items-center justify-center gap-2 p-4 rounded-lg transition-colors ${
                  selectedInstrument ===
                  name
                    ? "bg-indigo-600 text-white"
                    : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
                }`}
              >
                <span className="text-2xl">
                  {icon}
                </span>
                <span className="capitalize">
                  {name}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-neutral-200 w-full flex items-center justify-center">
            {`${selectedNote}-${selectedOctave}` || (
              <IoMdMusicalNote />
            )}
          </h3>
          <div className="w-full h-auto p-2">
            <VolumeKnob
              note={selectedNote}
              notes={notes}
              setNote={setSelectedNote}
            />
          </div>
        </div>

        <div className="mb-4">
          <RangeSlider
            selectedOctave={
              selectedOctave
            }
            setSelectedOctave={
              setSelectedOctave
            }
            octaves={octaves}
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-600 text-neutral-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSelect}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
            disabled={
              !selectedNote ||
              !selectedOctave
            }
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
