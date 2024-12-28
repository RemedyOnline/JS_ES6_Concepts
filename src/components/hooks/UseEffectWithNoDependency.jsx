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
    <div>
      <h2 className="hover:bg-red-100 text-2xl font-bold underline mb-2">
        UseEffectWithNoDependency
      </h2>
      <div>
        <h3>FETCHED Data...</h3>
        <input
          type="text"
          value={text}
          onChange={handleText}
          placeholder="Enter something..."
          className="p-2 rounded-lg outline-none border border-blue-300 bg-green-200"
        />
      </div>
    </div>
  );
};

export default UseEffectWithNoDependency;
