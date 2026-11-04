import { useState } from 'react'
import './App.css'
import ControlsPanel from './components/ControlsPanel'
import { Header } from './components/Header'
import ThemeContext from './context/ThemeContext'
import UserProfile from './components/UserProfile'
import LanguageContext from './context/LanguageContext'

function App() {
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState('light')

  const allLang = ['en', 'ru', 'de']

  const toggleLanguage = () =>{
    setLang((prevLang) => {
      const currentIndex = allLang.indexOf(prevLang)
      const nextIndex = (currentIndex + 1) % allLang.length
      return allLang[nextIndex]
    })
  }

  const toggleTheme =()=>{
    setTheme((prevState) => prevState === 'light' ? 'dark' : 'light')
  }

  const styleLight ={
    background: 'white'
  }
  const styleDark ={
    background: '#2b2c36'
  }
  
  return (
    <div style={theme === 'light' ? styleLight : styleDark}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <LanguageContext.Provider value={{lang, toggleLanguage}}>
          <ControlsPanel />
          <Header />
          <UserProfile />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
