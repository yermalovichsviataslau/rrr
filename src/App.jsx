import './App.css'
import Card from './components/Card'
import UserCard from './components/UserCard'
function App() {
  const style = { border: '2px solid white' }
  return (
    <>
      <Card>
         <UserCard
        name="Павел"
        role="Frontend-разработчик"
        experience={3}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
        style={style}
      />

      <br />
      <UserCard
        name="Дима"
        role="Backend-разработчик"
        experience={2}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
        style={style}
      />
      <br />
      <UserCard
        name="Петр"
        role="Fullstack-разработчик"
        experience={7}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={false}
        style={style}
      />
      </Card>
    </>
  )
}

export default App
