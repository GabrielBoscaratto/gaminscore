// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    name: 'light',
    primary: '#1da1f2',
    secondary: '#f5f8fa',
    background: '#ffffff',
    text: '#14171a',
    border: '#e1e8ed'
  },
  dark: {
    name: 'dark',
    primary: '#7939ff',
    secondary: '#192734',
    background: '#15202b',
    text: '#ffffff',
    border: '#38444d'
  },
  rgb: {
    name: 'rgb',
    primary: 'linear-gradient(90deg, #ff0000, #00ff00, #0000ff)',
    secondary: '#000000',
    background: '#000000',
    text: '#ffffff',
    border: 'rgba(255,255,255,0.1)'
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? themes[savedTheme] : themes.light;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.name);
    if(theme.name === 'rgb') {
      document.body.classList.add('rgb-animation');
    } else {
      document.body.classList.remove('rgb-animation');
    }
  }, [theme]);

  const toggleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(theme.name);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themes[themeKeys[nextIndex]]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);