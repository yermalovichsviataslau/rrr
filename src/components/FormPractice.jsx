function FormPractice(){
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log('Форма отправлена')
    console.log(event.currentTarget)
  }

    return(
      <>
        <form onSubmit={handleSubmit}>
          <input />
          <button type="submit">Отправить</button>
        </form>
      </>
    )
}

export default FormPractice 