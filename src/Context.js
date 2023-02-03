import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const value = {
    theme,
    setTheme: setTheme,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
