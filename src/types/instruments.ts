export type Note = string;
export type Octave = string;

export interface InstrumentConfig {
  notes: Note[];
  octaves: Octave[];
}

export interface InstrumentRanges {
  [note: string]: Octave[];
}

export type InstrumentName =
  | "piano"
  | "guitar"
  | "bass"
  | "drums";
