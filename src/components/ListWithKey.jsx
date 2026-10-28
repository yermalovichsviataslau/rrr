function ListWithKey({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.text}
          <input></input>
        </li>
      ))}
    </ul>
  )
}

export default ListWithKey
