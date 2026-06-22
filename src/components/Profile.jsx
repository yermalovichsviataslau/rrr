import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: "pavel",
    }));
  };

  const increaseAge = ()=>{
    setUser((prevUser)=>({
      ...prevUser,
      age: prevUser.age + 1
    }))
  }
  const chacgeActive = () => {
    setUser((prevUser)=>({
      ...prevUser, 
      isActive: !prevUser.isActive
    }))
  }

  return (
    <div className="">
      <h3>Profile</h3>

      <p>Name: {user.name}</p>
      <button onClick={changeName}>Кнопка "Сменить имя"</button>
      <br />
      <br />

      <p>Age: {user.age}</p>
      <button onClick={increaseAge}>Кнопка "Увеличить возраст"</button>
      <br />
      <br />

      <p>isActive: {user.isActive ? 'true' : 'false'}</p>
      <button onClick={chacgeActive}>Кнопка "Переключить активность"</button>
    </div>
  );
}

export default Profile;
