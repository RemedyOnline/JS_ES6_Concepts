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
            ? "bg-white text-black p-2 rounded-lg font-medium shadow-md"
            : "bg-black text-white p-2 rounded-lg font-medium shadow-md"
        }
      >
        {theme === "lightMode"
          ? "Switch to DarkMode🌙"
          : "Switch to LightMode☀️"}
      </button>
    </div>
  );
};

export default ContextButton;
