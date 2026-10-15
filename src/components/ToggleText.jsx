import { useState } from "react"

function ToggleText({style}){
  const [text, setText] = useState(true)

  const handleClick = () => {
    setText((prevItem) => !prevItem)
  }

  return(
    <div style={style}>
      <p>{text && 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae itaque fugiat deserunt autem illum sed voluptatum veniam eveniet beatae! Dolorum asperiores illum cupiditate accusamus incidunt velit quos repellendus impedit?'}</p>
      <button onClick={handleClick}>{text ? 'hide text' : 'show text'}</button>
    </div>
  )
}

export default ToggleText