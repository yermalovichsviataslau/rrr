import { useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import SiblingComponent from "./components/SiblingComponent";

function ParentComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Счетчик: {counter}</p>
      <button onClick={() => setCounter((count) => count + 1)}>Кнопка "Увеличить"</button>
      <br />
      <button onClick={() => setCounter(0)}>Кнопка "Сбросить"</button>
      <br />
      <button onClick={() => setCounter(Math.floor(Math.random() * 10))}>
        Кнопка "Случайное значение"
      </button>

      <br />
      <button onClick={() => setCounter((count) => count - 1)}> Кнопка "Уменьшить"</button>
      <br /> 
      <ChildComponent text={"name"} count={counter}/>
      <SiblingComponent text={'name'}/>
    </>
  );
}

export default ParentComponent;
