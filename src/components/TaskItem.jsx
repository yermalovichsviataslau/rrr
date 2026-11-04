import { memo } from "react"

function TaskItem ({item, key}){
  return (
      <li key={key}>{item}</li>
  )
}

export default memo(TaskItem) 