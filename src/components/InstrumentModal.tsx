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
import * as Tone from "tone";

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
  "Ab",
  "B",
  "C",
  "Cb",
  "D",
  "Db",
  "E",
  "F",
  "Fb",
  "G",
  "Gb",
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

        <div className="flex justify-between gap-2 mt-4">
          <button
            onClick={() => {
              if (
                selectedNote &&
                selectedOctave
              ) {
                playInstrumentSound(
                  selectedInstrument,
                  `${selectedNote}${selectedOctave}`
                );
              }
            }}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            disabled={
              !selectedNote ||
              !selectedOctave
            }
          >
            <div className="flex items-center gap-2">
              <span>试听</span>
              <IoMdMusicalNote />
            </div>
          </button>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-orange-600 text-neutral-200 rounded hover:bg-orange-700 transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleSelect}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              disabled={
                !selectedNote ||
                !selectedOctave
              }
            >
              确认
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const playInstrumentSound = async (
  instrument: string,
  note: string
) => {
  try {
    await Tone.start();
    const sampler = new Tone.Sampler({
      urls: {
        [note]: `${note}.mp3`,
      },
      baseUrl: `/sounds/${instrument}/`,
      onload: () => {
        sampler.triggerAttackRelease(
          note,
          "1n"
        );
        // 播放完成后释放资源
        setTimeout(() => {
          sampler.dispose();
        }, 2000);
      },
    }).toDestination();
  } catch (err) {
    console.error("音频播放失败:", err);
  }
};
