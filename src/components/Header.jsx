import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <header className={`header-${theme}`}>
      <h1>{t('title')}</h1>
      <p>{t('text')}</p>
      <small>Текущий язык: {language}</small> 
    </header>
    </>
  );
};

export default Header;
