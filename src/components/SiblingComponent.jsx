import { useState } from "react"

function SiblingComponent(){
  const [text, setText] = useState('')

  const handleClick =()=>{
    setText('REDEV')
  }

  return(
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Change text</button>
    </div>
  )
}

export default SiblingComponent