import { useEffect, useState } from 'react'
import './App.css'
import ImgDogGallary from './components/ImgDogGallary'
import SelectBreed from './components/SelectBreed'

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [val, setVal] = useState('3')
  const [count, setCount] = useState(0)
  const [arrImg, setArrImg] = useState([])
  const [errorImg, setErrorImg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [listDog, setListDog] = useState([])
  const [errorBreed, setErrorBreed] = useState(null)
  const [selectedBreed, setSelectedBreed] = useState('')

  const getAllDogBreed = async () => {
    try {
      const response = await fetch(`${API_URL}/breeds/list/all`)
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`)
      }
      const date = await response.json()
      setListDog(Object.keys(date.message))
    } catch (err) {
      setErrorBreed(err.message)
    }
  }

  const getAllDogImg = async (breed, count) => {
    setLoading(true)
    setErrorImg(null)

    try {
      let url = `${API_URL}/breeds/image/random/${count}`
      if (breed) {
        url = `${API_URL}/breed/${breed}/images/random/${count}`
      }
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`)
      }
      const date = await response.json()
      setArrImg(date.message)
    } catch (err) {
      setErrorImg(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllDogBreed()
    getAllDogImg('', 3)
  }, [])

  useEffect(() => {
    getAllDogImg(selectedBreed, val || 3)
  }, [selectedBreed])

  const changeCount = (e) => {
    const newVal = e.target.value
    if (newVal === '') {
      setVal('')

      return
    }
    if (isNaN(newVal)) {
      alert('нельзя ввести буквы или символы')
      return
    }
    const num = Number(newVal)
    if (num < 1 || num > 50) {
      alert('Нельзя ввести число меньше 1 или больше 50!')
      return
    }
    setVal(newVal)
  }

  const handleUpdateClick = () => {
    setCount((prevCount) => prevCount + 1)
    getAllDogImg(selectedBreed, val || 3)
  }

  const style = {
    display: 'flex',
    listStyleType: 'none',
    maxWidth: '1200px',
    flexWrap: 'wrap',
  }

  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {count} раз(а)</p>
      <p>Показать</p>
      <input type="text" value={val} onChange={changeCount} />
      <button onClick={handleUpdateClick}>Обновить</button>

      <SelectBreed
        listDog={listDog}
        errorBreed={errorBreed}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />

      <ImgDogGallary
        loading={loading}
        style={style}
        arrImg={arrImg}
        errorImg={errorImg}
      />
    </>
  )
}

export default App
