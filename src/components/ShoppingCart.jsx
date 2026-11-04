import { useCallback, useState } from 'react'
import CartItem from './CartItem'

function ShoppingCart({ style }) {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])

  const addItem = useCallback((id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if(item.id === id){
          return {...item, count: item.count + 1 }
        }
        return item
      })
    )
  }, [])

  const deleteItem = useCallback((id) =>{
    setCart(prevItem=> prevItem.filter(item => item.id !== id) )
  }, [])

  const deleteAllItem = useCallback(() => { setCart([])}, [])

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
          <CartItem key={item.id} item={item} addItem={addItem} deleteItem={deleteItem}/>
        ))}
      </ul>
      <button onClick={deleteAllItem}>delete shoppingCart</button>
    </div>
  )
}

export default ShoppingCart
