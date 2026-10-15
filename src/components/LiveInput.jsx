import { useState } from "react"

function LiveInput({style}){
  const [val, setVal] = useState('')

  const handleChange = (event) =>{
    setVal(event.target.value)
  }

  return (

    <div style={style}>
      <p>value: {val}</p>
      <input type="text" value={val} onChange={handleChange}/>
    </div>
  )
}

export default LiveInput