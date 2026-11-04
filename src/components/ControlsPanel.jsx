import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import LanguageContext from "../context/LanguageContext"

function ControlsPanel (){
  const {theme, toggleTheme} = useContext(ThemeContext)
  const {lang, toggleLanguage} = useContext(LanguageContext)

  return(
    <>
      <button onClick={toggleTheme}>{theme}</button>
      <button onClick={toggleLanguage}>{lang}</button>
    </>
  )
}

export default ControlsPanel 