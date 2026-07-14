import { useCallback, useMemo, useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";

function App() {

  const initialItems = useMemo(()=>
[
    { id: 1, value: "hello" },
    { id: 2, value: "name" },
    { id: 3, value: "lol" },
  ], [])

  const [items, setItems] = useState(initialItems);

  //SearchInput
  const [inputVal, setInputVal] = useState('')

  const changeVal = useCallback((e)=>{
    setInputVal(e.target.value)
  }, [])

  // CounterButton
  const [count, setCount] = useState(0);

  const heandleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);



  return (
    <>
      <CounterButton onClick={heandleClick} count={count} />
      <SearchInput  value={inputVal} onChange={changeVal}/>
      <ItemList items={items} val={inputVal}/>
    </>
  );
}

export default App;
