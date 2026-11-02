import { useCallback, useMemo, useState } from 'react'
import './App.css'
import CounterButton from './components/CounterButton'
import ItemList from './components/ItemList'
import SearchInput from './components/SearchInput'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const [list] = useState([
  { id: 1, text: 'pavel' },
  { id: 2, text: 'maria' },
  { id: 3, text: 'nikita' },
])

  const handleClick = useCallback(() => {
    setCount((prevItem) => prevItem + 1)
  }, [])

const filterList = useMemo(() => {
    return list.filter((item) =>
      item.text.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, list]);

  
  return (
    <>
      <CounterButton count={count} handleClick={handleClick} />
      <SearchInput value={value} setValue={setValue} />
      <ItemList list={filterList} />
    </>
  )
}

export default App
