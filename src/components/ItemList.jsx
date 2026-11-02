import { memo } from 'react'

function ItemList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export default memo(ItemList)
