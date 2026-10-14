import { useState } from "react"

function Counter ({style}){

  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount((prevCount)=> prevCount + 1)
  }
  return (
    <div style={style}>
      <p>Count: {count}</p>
      <button onClick={increment}>Click +1</button>
    </div>
  )
}

export default Counter 