import { useRef, useState } from 'react'
import './App.css'
import List from './components/List'

function App() {
  const [list, setList] = useState([
    { id: 1, name: 'pavel'},
    { id: 2, name: 'ivan'},
    { id: 3, name: 'danila'},
  ])

  const[val, setVal] = useState('')
  const inputRef = useRef()

  const focusInput = ()=>{
    inputRef.current.focus()
  }

  const addItem = (e) =>{
    if(e.key=== 'Enter' && val.trim() !== ''){
      setList(prevItem => [...prevItem, {id: prevItem.length + 1, name: e.target.value}])
      setVal('')
    }
    
  }

  return (
    <>
      <input ref={inputRef} type="text" onKeyDown={addItem} value={val} onChange={e=> setVal(e.target.value)}/>
      <button onClick={focusInput}>Фокус</button>
      <List arr={list} setList={setList} />
    </>
  )
}

export default App
