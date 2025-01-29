import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [theme, setTheme] = useState("lightMode");

  const toggleTheme = () => {
    if (theme === "lightMode") {
      setTheme("darkMode");
      console.log(theme);
    } else {
      setTheme("lightMode");
      console.log(theme);
    }
  };

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
