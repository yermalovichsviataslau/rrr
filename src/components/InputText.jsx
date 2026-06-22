import { useState } from "react"

function InputText(){
  const [text, setText] = useState('')

  const halndlChange = (event) =>{
    setText(event.target.value)
  }
  return (
    <div className="">
      <input type="text" onChange={halndlChange}/>
      <p>Text: {text}</p>
    </div>
  )
}

export default InputText