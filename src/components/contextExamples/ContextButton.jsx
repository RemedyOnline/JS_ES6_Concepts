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
            ? "bg-black text-white p-2 rounded-lg font-medium"
            : "bg-white text-black p-2 rounded-lg font-medium"
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
