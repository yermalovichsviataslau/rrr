function ClickPractice() {

  const handleClick = (event) =>{
    console.log(event.target) // event.target он показывает куда было конкретно нажата 
    console.log(event.currentTarget) // event.currentTarget показывает где конкретно весит обработчик по этому он всегда укахывает на button
    console.log(event.target.tagName)
    console.log(event.currentTarget.tagName)
  }

  return (
    <button onClick={handleClick}>
      <span>👍</span>
      <span>Поставить лайк</span>
    </button>
  )
}

export default ClickPractice
