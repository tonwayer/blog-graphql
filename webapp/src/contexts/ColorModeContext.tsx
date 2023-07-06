import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  darkMode: false,
  toggleColorMode: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  return useContext(ThemeContext);
};
