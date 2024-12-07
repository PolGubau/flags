import "./bg.css";

export const Background = () => {
  return (
    <div className="max-w-[100vw] pointer-events-none overflow-hidden -z-10">
      {[...new Array(25)].map((_) => (
        <div key={_} className="rainbow overflow-hidden lgsd:rotate-12" />
      ))}
    </div>
  );
};
