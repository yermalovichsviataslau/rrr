import { memo } from "react"

const CounterButton = ({onClick, count}) =>{
  return(
    <div>
      <p>{count}</p>
      <button onClick={onClick}>Click +1</button>
    </div>
  )
}

export default memo(CounterButton) 