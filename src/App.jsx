import { useState } from 'react'
import './App.css'
import ListWithoutKey from './components/ListWithoutKey'
import ListWithKey from './components/ListWithKey'

const initialList = Array.from({length: 10}, (_, index) => ({id: Date.now(), text: index }))
function App() {
  const [list, setList] = useState(initialList)
  const [key, setKey] = useState(true)

  const handleClick = () => {
    setKey((prevKey) => !prevKey)
  }

  return (
    <>
      <div style={{ gap: '15px', display: 'flex', flexDirection: 'column' }}>
        <button onClick={handleClick}>Change key</button>
        <button onClick={() => setList((prevItem) => [{id: Date.now(), text:'начало'}, ...prevItem])}>
          Добавить элемент в начало
        </button>
        <button onClick={() => setList((prevList) => [...prevList, {id: Date.now(), text:'конец'}])}>
          Добавить элемент в конец
        </button>
        <button onClick={() => setList((prevList) => prevList.slice(1))}>
          Удалить первый
        </button>
        <button
          onClick={() =>
            setList((prevList) => [...prevList].sort(() => Math.random() - 0.5))
          }
        >
          Перемешать список
        </button>
        <button onClick={() => setList((prevList)=> {
          const copy = [...prevList]
          const reandomIndex= Math.floor(Math.random() * copy.length)
          copy[reandomIndex] ={...copy[reandomIndex], text: Math.floor(Math.random() * 100) }
          return copy
        })}>
          Обновить случайный элемент
        </button>
      </div>

      {key === true ? (
        <ListWithKey list={list} />
      ) : (
        <ListWithoutKey list={list} />
      )}
    </>
  )
}

export default App
