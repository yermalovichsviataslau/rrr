import { useRef, useState } from "react";
import "./App.css";
import List from "./components/List";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, value: "Hello", exclamationMark: false },
    { id: 2, value: "hi", exclamationMark: false },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleClick = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, exclamationMark: !item.exclamationMark }
          : item,
      ),
    );
  };

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputVal.trim() !== "") {
      setItems((prev) => [
        ...prev,
        { id: Date.now(), exclamationMark: false, value: inputVal.trim() },
      ]);
      setInputVal('');
    }
  };

  return (
    <div>
      <input
        onChange={handleInputChange}
        value={inputVal}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        type="text"
      />

      <button onClick={focusInput}>Фокус</button>

      <ul>
        <List arr={items} onClick={handleClick} />
      </ul>
    </div>
  );
};

export default App;
