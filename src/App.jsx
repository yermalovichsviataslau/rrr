import "./App.css";
import Profile from "./components/Profile";
import ShopBasket from "./components/ShopBasket";
import Todolist from "./components/Todolist";

function App() {
  return (
    <>
      <p>1. Стейт — объект</p>
      <Profile />
      <br />

      <p>2. Стейт — массив</p>
      <Todolist />
      <br />

      <p>3. Стейт — массив объектов</p>
      <ShopBasket />
    </>
  );
}

export default App;
