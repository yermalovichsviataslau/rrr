import { createContext, useEffect, useState } from "react";


const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
  const [theme, setTheme] = useState('light')


  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme =()=>{
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const value ={
    theme,
    toggleTheme,
  }

  return(
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext}