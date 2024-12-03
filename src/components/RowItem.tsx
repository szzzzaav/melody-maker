import { twMerge } from "tailwind-merge";

interface RowItemProps {
  className?: string;
}

const RowItem: React.FC<
  RowItemProps
> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-[35px] h-[35px] box-border text-xs border-[1px] border-neutral-700 flex items-center justify-center",
        className
      )}
    >
      <div className="w-[85%] h-[85%] box-border text-xs rounded-sm bg-indigo-500 opacity-0 hover:opacity-100 ease-in-out duration-100 cursor-pointer"></div>
    </div>
  );
};

export default RowItem;
