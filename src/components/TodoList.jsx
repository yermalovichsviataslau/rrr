import { useState } from "react";
import TaskItem from "./TaskItem";

function TodoList({style}){
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"])
  const [inputVal, setInputVal] = useState('')

  const addTask = ()=>{
    if (inputVal.trim() === "") return
    setTasks((prevTask)=> ([...prevTask, inputVal]))
    setInputVal('')
  }

  const deleteTask = () =>{
    setTasks(prevTask => prevTask.slice(0, -1))
  }

  return(
    <div style={style}>
      <input type="text" value={inputVal} onChange={(e)=> setInputVal(e.target.value)}/>
      <button onClick={addTask}>add task</button>
      <button onClick={deleteTask}>delete last task</button>

        <ul>{
          tasks.map((item, index)=> <TaskItem item={item} key={index}/>)
        }</ul>

    </div>
  )
}

export default TodoList