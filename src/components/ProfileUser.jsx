import { useState } from 'react'

function ProfileUser({ style , styleBtn }) {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  })

  const [nameList] = useState(['pavel', 'danila', 'liza', 'anna'])

  const chageName = () => {
    const randomIndex = Math.floor(Math.random() * nameList.length)
    
    setUser((prevUser) => ({
      ...prevUser,
      name: nameList[randomIndex]
    }))
  }
  const increment = () => {
    setUser((prevItem) => ({
      ...prevItem, 
      age: prevItem.age + 1
    }))
  }

  function changeIisActive(){
    setUser((prevItem) => ({
      ...prevItem,
      isActive: prevItem.isActive === true ? false : true
    }))
  }

  return (
    <div style={style}>
      <h2>Профиль пользователя</h2>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>isActive: {String(user.isActive)}</p>

      <button style={styleBtn} onClick={chageName}>Сменить имя</button>
      <button  style={styleBtn} onClick={increment}>Увеличить возраст</button>
      <button onClick={changeIisActive}>Переключить активность</button>
    </div>
  )
}

export default ProfileUser
