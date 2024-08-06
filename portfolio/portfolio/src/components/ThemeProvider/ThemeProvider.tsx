// src/context/ThemeContext.js
import React, { createContext, useState, FC, ReactNode } from 'react';

const ThemeContext = React.createContext<any | undefined>(undefined)
interface ThemeProvider {
    children: ReactNode;
  }

const ThemeProvider:FC<ThemeProvider> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };