import './App.css'
function App() {
  return (
    <>
      <h1>developer</h1>
      <q>учебный проект</q>
      <Header />
      <MainContent>
        <Section />
      </MainContent>
      <Footer />
    </>
  )
}
function Footer (){
  return(
    <footer>footer</footer>
  )
}
function  Header(){
  return(
    <header>
      header
    </header>
  )
}
function MainContent(){
  return (
    <main>
      main
    </main>
  )
}
function Section (){
  return(
    <section>
      section
    </section>
  )
}

export default App
