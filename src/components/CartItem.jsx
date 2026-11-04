import { memo } from 'react'

function CartItem({item, index, addItem, deleteItem}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} key={index}>
      <li
        style={{ listStyle: 'none' }}
      >{`${item.title} (кол-во: ${item.count})`}</li>
      <button onClick={() => addItem(item.id)}>+1</button>
      <button onClick={() => deleteItem(item.id)}>delete</button>
    </div>
  )
}

export default memo(CartItem)
