import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const initialValue = false;
  const [flag, setFlag] = useState(initialValue);
  const [counter, setCounter] = useState(0);
  const threshold = 10;
  let newCount = 0;
  const [buttonStyle, setButtonStyle] = useState(false);

  const handleSwitch = () => {
    setFlag((flag) => !flag);
    // setFlag(!flag);
    console.log(flag);
  };

  const handleSubtraction = () => {
    newCount = counter - 1;
    setCounter(newCount);
    console.log(newCount);
    console.log(buttonStyle);
  };

  const handleAddition = () => {
    newCount = counter + 1;
    setCounter(newCount);
    console.log(newCount);
    console.log(buttonStyle);

    if (newCount === threshold) {
      resetCounter();
      setButtonStyle((buttonStyle) => !buttonStyle);
      console.log(buttonStyle);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  useEffect(() => {
    console.log("Run on reload...");
    setCounter(3);
  }, []); // thus, with an empty array... runs once, just on page load

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold underline mb-2">
        UseEffectHook Lesson Page
      </h2>
      {flag ? (
        <p className="italic">State Dependent Sentence...</p>
      ) : (
        <p className="font-mono font-bold">State Dependent Sentence...</p>
      )}
      <button
        onClick={handleSwitch}
        className="p-2 rounded-xl bg-blue-300 font-medium m-2"
      >
        Switch State
      </button>
      <div>
        <button
          onClick={handleSubtraction}
          className="p-2 rounded-xl bg-blue-200 font-medium m-2"
        >
          ➖
        </button>
        <span
          className={`px-4 py-2 border text-lg font-bold ${buttonStyle ? "bg-green-400" : "bg-red-400"}`}
        >
          {counter}
        </span>
        <button
          onClick={handleAddition}
          className="p-2 rounded-xl bg-blue-200 font-medium m-2"
        >
          ➕
        </button>
      </div>
    </div>
  );
};

export default UseEffectHook;
