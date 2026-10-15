import { useState } from "react"

function ColorText({style}){
  const [color, setCoolor] = useState('blue')

  const handleClick = () =>{
    setCoolor(color === 'blue' ? 'green' : 'blue')
  }

  const colorForP = {
    color: color
  }
  return(
    <div style={style}>
      <p style={colorForP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi sit sint inventore deserunt molestiae doloribus impedit placeat rerum numquam, nesciunt magni et, ducimus blanditiis aspernatur esse odit quam corrupti!</p>
      <button onClick={handleClick}>change color text</button>
    </div>
  )
}

export default ColorText