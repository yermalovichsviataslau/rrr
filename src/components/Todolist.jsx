import { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const addTask = () => {
    setTasks((prevTasks) => [...prevTasks, "new task"]);
  };

  const deleteTask = () =>{
    setTasks((prevTasks)=> prevTasks.slice(0, -1))
  }
  return (
    <div className="">
      <h3>todolist</h3>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={addTask}>Кнопка "Добавить задачу"</button>
      <br />
      <button onClick={deleteTask}>Кнопка "Удалить последнюю задачу"</button>
    </div>
  );
}

export default Todolist;
