import { useState } from "react"

function ChangeColor(){
  const [color, setColor] = useState('red')

  const handleClick = () => {
    setColor(color === 'red' ? 'yellow' : 'red');
  }

  return (
    <div className="">
      <p style={{color}}>text</p>
      <button onClick={handleClick}>Change color</button>
    </div>
  )
}

export default ChangeColor