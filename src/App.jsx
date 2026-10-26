import { useEffect, useState } from 'react'
import './App.css'
const API_URL = import.meta.env.VITE_API_URL
function App() {

  const [val, setVal] = useState('3')
  const [count, setCount] = useState(0)

  const changeCount = (e) => {
    const newVal = e.target.value
    if (isNaN(newVal) && newVal !== '') {
      alert('нельзя ввести символы и буквы')
      return
    }
    setVal(e.target.value)
  }

  const showImg = () => {}

  useEffect(()=>{
    async function getImg (){
      const response = await fetch(`${API_URL}/breads/image/random`)
    }
    const img =  
  },[])

  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {} раз(а)</p>
      <p>Показать</p>
      <input type="text" value={val} onChange={changeCount} />
      <button onClick={showImg}></button>
      <ul></ul>
    </>
  )
}

export default App
