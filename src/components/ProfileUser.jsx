import { useState } from 'react'
import UserInfo from './UserInfo'

function ProfileUser({ style , styleBtn }) {
  console.log('ProfileUser')
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
    <div style={style}>dasd
      <h2>Профиль пользователя</h2>
      <UserInfo user={user}/>

      <button style={styleBtn} onClick={chageName}>Сменить имя</button>
      <button  style={styleBtn} onClick={increment}>Увеличить возраст</button>
      <button onClick={changeIisActive}>Переключить активность</button>
    </div>
  )
}

export default ProfileUser
