function List({ arr,  setList}) {

  const handleClick=(id)=>{
    setList(prevItem => prevItem.map((item)=>{
      if(item.id === id){
        return {...item, name:`!!!${item.name}`}
      }
      return item 
    }))
  }
  return (
    <>
      <ul style={{listStyleType: 'none'}}>
        {arr.map((item) => (
          <li key={item.id}>
            {`name: ${item.name}`}
            <button onClick={()=>handleClick(item.id)}>add !!!</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
