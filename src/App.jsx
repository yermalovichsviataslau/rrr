import './App.css'
import ActionButton from './components/ActionButton'
import ClickPractice from './components/ClickPractice'
import FormPractice from './components/FormPractice'
import InputPractice from './components/InputPractice'

function App() {

const handleClick =(message)=>{
  console.log(message)
}
  return (
    <>
      <ClickPractice />
      <InputPractice />
      <FormPractice />
      <ActionButton textBtn={'Сохранить'} handleClick={() => handleClick('Сохранено')}/>
      <ActionButton textBtn={'Удалить'} handleClick={() => handleClick('Удалено')}/>
    </>
  )
}

export default App
