import { useState } from "react";
import VolumeKnob from "./VolumeKnob";
import RangeSlider from "./RangeSlider";

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

export const InstrumentModal: React.FC<
  InstrumentModalProps
> = ({ isOpen, onClose, onSelect }) => {
  const [
    selectedNote,
    setSelectedNote,
  ] = useState("");
  const [
    selectedOctave,
    setSelectedOctave,
  ] = useState("");

  const [value, setValue] = useState(0);

  const handleSelect = () => {
    if (
      selectedNote &&
      selectedOctave
    ) {
      onSelect(
        "piano",
        `${selectedNote}${selectedOctave}`
      );
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-800 p-4 rounded-lg w-96">
        <h2 className="text-neutral-200 text-lg mb-4">
          选择乐器和音高
        </h2>

        <div className="mb-2">
          <h3 className="text-neutral-200 mb-2">
            音符
          </h3>
          <div className="w-full h-auto p-2">
            <VolumeKnob />
          </div>
        </div>

        <div className="mb-4">
          <RangeSlider
            value={value}
            onChange={(value) =>
              setValue(value)
            }
            label="1"
          ></RangeSlider>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-700 text-neutral-200 rounded"
          >
            取消
          </button>
          <button
            onClick={handleSelect}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={
              !selectedNote ||
              !selectedOctave
            }
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
};
