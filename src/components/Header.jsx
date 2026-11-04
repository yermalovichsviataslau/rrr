import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"
import { translations } from "../../translations"

export const Header = ()=>{
  const {lang} = useContext(LanguageContext)

    return (
    <p>
      {translations[lang].welcome}
    </p>
  )
}