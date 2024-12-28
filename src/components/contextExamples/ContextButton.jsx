import { useContext } from "react";
import GlobalContext from "../../contexts/UseContextHook";

const ContextButton = () => {
  const { toggleTheme, theme } = useContext(GlobalContext);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={
          theme === "lightMode"
            ? "bg-red-300 text-red-950 p-2 rounded-lg font-medium"
            : "bg-green-300 text-green-950 p-2 rounded-lg font-medium"
        }
      >
        Toggle theme 🌙
      </button>
    </div>
  );
};

export default ContextButton;
