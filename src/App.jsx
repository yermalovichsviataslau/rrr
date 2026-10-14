import './App.css'
import ColorText from './components/ColorText'
import Counter from './components/Counter'
import LiveInput from './components/LiveInput'
import ToggleText from './components/ToggleText'
function App() {
  const style = {
    border: '2px solid white',
    marginBottom: '10px',
  }
  return (
    <>
      <Counter style={style} />
      <ToggleText style={style}/>
      <LiveInput style={style}/>
      <ColorText style={style}/>
    </>
  )
}

export default App
