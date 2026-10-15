import { useState } from "react"
import ChildComponent from "./ChildComponent"
import SiblingComponent from "./SiblingComponent"

function ParentComponent ({style, styleBtn, name}){
  const [counter, setCounter] = useState(0)

  const increase =()=>{
    setCounter(prevCount => prevCount + 1)
  }

  const reset = ()=>{
    setCounter(0)
  }

  const randomCount = () =>{
    setCounter(Math.floor(Math.random() * 11))
  }

  const decrease = () =>{
    if(counter === 0){
      alert('not -count')
      return
    }
    setCounter(prevCount => prevCount - 1)
  }

  return(
    <div style={style}>
      <p>Current counter: {counter}</p>
      <button onClick={increase} style={styleBtn}>increase +1</button>
      <button onClick={reset} style={styleBtn}>Reset</button>
      <button onClick={randomCount} style={styleBtn}>Random value from 1 to 10</button>
      <button onClick={decrease}>Decrease -1</button>

      <ChildComponent name={name} counter={counter}/>
      <SiblingComponent />
    </div>
  )
}

export default ParentComponent