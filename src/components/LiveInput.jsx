function LiveInput({style, name, setName}){

  const handleChange = (event) =>{
    setName(event.target.value)
  }

  return (

    <div style={style}>
      <p>value: {name}</p>
      <input type="text" value={name} onChange={handleChange}/>
    </div>
  )
}

export default LiveInput