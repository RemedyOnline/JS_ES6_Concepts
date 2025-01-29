import { useEffect, useState } from "react";

const UseEffectWithDependency = () => {
  const [marker, setMarker] = useState(0);

  const handleMarker = () => {
    setMarker((marker) => marker + 1);
  };

  useEffect(() => {
    document.title = `Marker = ${marker}`;
  }, [marker]);

  return (
    <div>
      <h2 className="text-2xl font-bold underline mb-2">
        UseEffectWithDependency
      </h2>
      <div className="flex gap-3 items-center">
        <button
          onClick={handleMarker}
          className="p-2 rounded-xl bg-blue-400 font-medium m-2"
        >
          Increase marker...
        </button>
        <p className="font-mono font-bold text-3xl">{marker}</p>
      </div>
    </div>
  );
};

export default UseEffectWithDependency;
