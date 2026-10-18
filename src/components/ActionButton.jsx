function ActionButton({textBtn, handleClick}){
  return(
    <>
    <button onClick={handleClick}>{textBtn}</button>
    </>
  )
}

export default ActionButton