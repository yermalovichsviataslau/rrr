import { useState } from 'react'

function ShoppingCart({ style }) {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])
  
  const addItem = () =>{
    setCart()
  }

  return (
    <div style={style}>
      <p>Корзина товаров</p>
      <ul>
        {cart.map((item) => (
          <div  style={{display: 'flex', alignItems: 'center'}}>
            <li style={{ listStyle: 'none' }}>{`${item.title} (кол-во: ${item.count})`}</li>
            <button onClick={addItem}>+1</button>
            <button>delete</button>
          </div>
        ))}
      </ul>
      {/* <Item /> */}
      <button>delete shoppingCart</button>
    </div>
  )
}

export default ShoppingCart
