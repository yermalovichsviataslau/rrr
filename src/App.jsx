import "./App.css";
import Profile from "./components/Profile";
import ShopBasket from "./components/ShopBasket";
import Todolist from "./components/Todolist";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { useContext, useEffect } from "react";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
  return (
    <>
        <ThemeToggle />
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
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
