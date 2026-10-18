import { useState } from 'react'

function ShoppingCart({ style }) {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])

  const addItem = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if(item.id === id){
          return {...item, count: item.count + 1 }
        }
        return item
      })
    )
  }

  const deleteItem = (id) =>{
    setCart(prevItem=> prevItem.filter(item => item.id !== id) )
  }

  const deleteAllItem = () => { setCart([])}

  return (
    <div style={style}>
      <p>Корзина товаров</p>
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {cart.map((item) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <li
              style={{ listStyle: 'none' }}
            >{`${item.title} (кол-во: ${item.count})`}</li>
            <button onClick={()=> addItem(item.id)}>+1</button>
            <button onClick={() => deleteItem(item.id)}>delete</button>
          </div>
        ))}
      </ul>
      {/* <Item /> */}
      <button onClick={deleteAllItem}>delete shoppingCart</button>
    </div>
  )
}

export default ShoppingCart
