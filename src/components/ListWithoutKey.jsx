function ListWithoutKey({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.text}
          <input></input>
        </li>
      ))}
    </ul>
  )
}

export default ListWithoutKey
