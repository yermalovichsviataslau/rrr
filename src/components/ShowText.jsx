import { useState } from "react"

function ShowText(){
  const [text, setText] = useState(true)
  return(
    <div className="">
      {text ? <p>text</p> : <p></p>} 
      <button onClick={()=>setText(!text)}>display / hide text</button>
    </div>
  )
}

export default ShowText