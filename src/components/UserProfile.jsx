import { translations } from "../translations";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

const UserProfile =() =>{
  const {language} = useContext(LanguageContext)
  const currentText = translations[language]
  return (
    <p>{currentText.profile}</p>
  )
}

export default UserProfile