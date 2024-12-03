import * as Tone from "tone";
import {
  Note,
  Octave,
  InstrumentRanges,
} from "../types/instruments";

export const getAvailableNotes = (
  instrument: string,
  ranges: Record<
    string,
    InstrumentRanges
  >
): Note[] => {
  return Object.keys(
    ranges[instrument] || {}
  );
};

export const getAvailableOctaves = (
  instrument: string,
  note: Note,
  ranges: Record<
    string,
    InstrumentRanges
  >
): Octave[] => {
  return (
    ranges[instrument]?.[note] || []
  );
};

export const playInstrumentSound =
  async (
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
      console.error(
        "音频播放失败:",
        err
      );
    }
  };
