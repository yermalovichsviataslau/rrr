import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"
import { translations } from "../../translations"

function UserProfile (){
  const {lang} = useContext(LanguageContext)

  return (
    <p>{
      translations[lang].profile
      }</p>
  )
}

export default UserProfile