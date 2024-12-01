interface InstrumentsProps {}

const data = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
];

export const Instruments: React.FC<
  InstrumentsProps
> = () => {
  return (
    <div className="flex flex-col h-auto w-full bg-neutral-900 rounded ">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full h-[36px] box-border bg-[#1e1e1e]"
        >
          <div className="w-full h-[35px] text-neutral-200 font-medium flex items-center px-2 rounded border-neutral-700">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
