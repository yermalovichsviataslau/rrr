import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeToggle = () =>{
  const {theme, toggleTheme} = useContext(ThemeContext)
return(
  <>
  <button onClick={toggleTheme}>{theme==='light'? 'dark' : 'light'}</button>
  </>
)
}


export default ThemeToggle