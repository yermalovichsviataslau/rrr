import "./App.css";
import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ControlPanel />
        <Header />
        <UserProfile />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
