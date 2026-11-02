import { memo } from "react"

function CounterButton ({count, handleClick}){
  return(
    <button onClick={handleClick}>{count}</button>
  )
}

export default memo(CounterButton)