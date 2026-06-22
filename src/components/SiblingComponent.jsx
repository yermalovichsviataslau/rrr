import { useState } from "react";

function SiblingComponent({text}) {
  const [color, setColor] = useState("blue");
  return (
    <div className="">
      <p style={{color}}>Текущий текст: {text}</p>
      <button
        onClick={() => {
          setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
        }}
      >
        Кнопка Изменить текст
      </button>
    </div>
  );
}

export default SiblingComponent;
