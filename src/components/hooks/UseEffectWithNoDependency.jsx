import { useEffect, useState } from "react";

const UseEffectWithNoDependency = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(text);
  });

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold underline mb-2">
        UseEffectWithNoDependency
      </h2>
      <div className="space-y-2">
        <h3>Some Data...</h3>
        <input
          type="text"
          value={text}
          onChange={handleText}
          placeholder="Enter something..."
          className="p-2 rounded-lg outline-none border border-green-800 bg-green-950"
        />
      </div>
    </div>
  );
};

export default UseEffectWithNoDependency;
