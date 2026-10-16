import { useState } from 'react'
import './App.css'
import ColorText from './components/ColorText'
import Counter from './components/Counter'
import LiveInput from './components/LiveInput'
import ParentComponent from './components/ParentComponent'
import ToggleText from './components/ToggleText'

function App() {
  const [name, setName] = useState('')




  const style = {
    border: '2px solid white',
    marginBottom: '10px',
    bittonRight: '10px'
    
  }
  const styleBtn ={
    marginRight: '10px'
  }

  return (
    <>
      <Counter style={style} />
      <ToggleText style={style}/>
      <LiveInput style={style} name={name} setName={setName}/>
      <ColorText style={style}/>

      <ParentComponent style={style} styleBtn={styleBtn} name={name} setName={setName}/>
    
    </>
  )
}

export default App
