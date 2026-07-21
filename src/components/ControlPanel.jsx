import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const ControlPanel = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleLanguage}>change: {language}</button>
      <button onClick={toggleTheme}>change: {theme}</button>
    </>
  );
};
export default ControlPanel;
