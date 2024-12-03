import Row from "./Row";

interface TrackContainerProps {
  children?: React.ReactNode;
  col: number;
  rol: number;
}

export const TrackContainer: React.FC<
  TrackContainerProps
> = ({ children, col, rol }) => {
  return (
    <div className="w-full flex flex-col h-full relative z-10">
      <div className="min-w-fit">
        <div className="sticky top-0 z-10">
          <Row
            count={col}
            timeline={true}
          />
        </div>
        {Array(rol)
          .fill(null)
          .map((_, index) => (
            <Row
              key={index}
              count={col}
              timeline={false}
            />
          ))}
        {children}
      </div>
    </div>
  );
};
