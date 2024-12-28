import { useContext } from "react";
import GlobalContext from "../../contexts/UseContextHook";

const ContextText = () => {
  const { theme } = useContext(GlobalContext);
  console.log(theme);

  return (
    <div>
      <h2
        className={
          theme === "lightMode"
            ? "bg-slate-900 text-slate-200 p-3"
            : "bg-slate-200 text-slate-900  p-3"
        }
      >
        I&apos;m glad I understand Context API now.. TYLJ!!!
      </h2>
    </div>
  );
};

export default ContextText;
