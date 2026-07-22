import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { translations } from "../translations.js";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const currentText = translations[language];

  return (
      <header className={`header-${theme}`}>
        <h1>{currentText.title}</h1>
        <p>{currentText.text}</p>
        <small>Текущий язык: {language}</small>
      </header>
  );
};

export default Header;
