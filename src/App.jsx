import "./App.css";
import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ControlPanel />
        <Header />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
