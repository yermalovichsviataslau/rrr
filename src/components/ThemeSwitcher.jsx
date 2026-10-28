import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function ThemeSwitcher ({ children }) {

  const {
    theme,
    setTheme
  } = useContext(ThemeContext)
  const handleClick =()=>{
    setTheme(prevVal => prevVal === 'dark' ? 'ligth' : 'dark')
  }

  const darkStyle = {
    color: 'grey',
    backgroundColor: '#16171d'
  }

  const ligthStyle ={
    color: '#ff04a8',
    backgroundColor: '#717bb5'
  }

  return (
    <div style={theme === 'dark' ? darkStyle : ligthStyle}>
      <button onClick={handleClick}>{theme}</button>
      {children}
    </div>
  )
}

export default ThemeSwitcher