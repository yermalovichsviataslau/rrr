import { useState } from "react";
import UserInfo from "./UserInfo";

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

  const increaseAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };
  const chacgeActive = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isActive: !prevUser.isActive,
    }));
  };

  return (
    <div className="">
      <h3>Profile</h3>
      <UserInfo user={user} />

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={changeName}>Кнопка "Сменить имя"</button>
        <button onClick={increaseAge}>Кнопка "Увеличить возраст"</button>
        <button onClick={chacgeActive}>Кнопка "Переключить активность"</button>
      </div>
    </div>
  );
}

export default Profile;
